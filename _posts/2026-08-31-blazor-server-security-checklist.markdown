---
layout: post
title: Blazor Server 黑箱安全檢查清單
date: 2026-08-31 00:00:00 +0000
description: 整理一份對自己 Blazor Server 網站做黑箱測試的檢查清單，重點在授權落點、circuit 狀態隔離、與部署後才暴露的盲區。
img: Server.jpeg
fig-caption:
tags: [Blazor,C#,Security]
---

這篇是寫給自己看的筆記。平常寫的東西幾乎都是 Blazor Server，前陣子有個站要過滲透測試，我就先拿黑箱的角度把站台從頭打一遍，順手把檢查的東西整理成這份清單。適用情境先講清楚：**只對自己擁有、或已經拿到授權的站台做**，不是拿去打別人的。

Blazor Server 有個地方跟一般前端框架很不一樣：C# 邏輯全留在伺服器，瀏覽器那邊只有 `blazor.server.js`、一條 SignalR（WebSocket）連線，跟畫面的 diff。使用者點的每一下，本質上都是一個 SignalR 事件送回伺服器處理。這也帶來一個好處：傳統網站的瀏覽器會直接打一堆 REST API，端點、參數全攤在外面；Blazor Server 只跟那條 SignalR 連線講話，真正打後端 API、查資料庫的是伺服器上的 C#，外面看不到。後端 API 通常還關在 VNET（虛擬網路）裡，對外根本連不到，只有 Blazor Server 進得去。

<script type="module">
  import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
  mermaid.initialize({ startOnLoad: false });
  await mermaid.run({ querySelector: 'pre.mermaid' });
</script>

<pre class="mermaid">
flowchart LR
  subgraph 傳統前後端分離
    direction LR
    B1[瀏覽器] -->|看得到每個 API 端點| A1[REST API] --> D1[(資料庫)]
  end
  subgraph Blazor Server
    direction LR
    B2[瀏覽器] -->|只看得到一條 SignalR| C2[伺服器上的 C#]
    subgraph VN[VNET 私有網路]
      A2[後端 API] --> D2[(資料庫)]
    end
    C2 --> A2
    B2 -. 連不到 .-> A2
  end
</pre>

但這個好處也容易讓人以為就安全了。整份清單的重點其實只有一句：**畫面上看不到，不代表打不到**。按鈕藏起來只是前端不顯示它，那個操作對應的 SignalR 事件還在，攻擊者自己把事件組出來送過去，就繞過整個前端了。

---

## Stage 0 — 部署層基本盤

這一層都是上線之後才會露出來、看源碼看不到的東西，又最容易因為環境設定沒弄好就中招。

- [ ] `DetailedErrors` 在 production **關閉**：開著會把 C# 例外堆疊丟回 circuit，等於送出內部結構
- [ ] `ASPNETCORE_ENVIRONMENT` 確實是 `Production`，不是誤留 `Development`
- [ ] 反向代理（IIS / Nginx / YARP）正確轉發 **WebSocket 升級標頭**，且沒意外暴露內部埠
- [ ] 回應標頭沒洩漏框架版本（`Server`、`X-Powered-By`）
- [ ] HTTPS 強制 + HSTS 已啟用，混合內容為零
- [ ] 安全標頭到位：CSP、`X-Content-Type-Options`、`X-Frame-Options` / `frame-ancestors`
- [ ] `_Host.cshtml` / 初始頁面沒把設定值、連線字串線索、內部 URL 寫進註解或 inline script

---

## Stage 1 — 偵察

光從 URL 出發能挖到多少東西，Blazor Server 這邊本來就該很乾淨。挖得到料，通常代表有東西不小心漏出去了。

- [ ] 站點會被辨識為 Blazor Server（`blazor.server.js`、`/_blazor` negotiate 端點），這點藏不掉，接受它
- [ ] `/_blazor/negotiate` 的回應有沒有洩漏多餘資訊
- [ ] 有沒有**同時混用傳統 REST / Minimal API**（`/api/...`）。很多 Blazor Server 專案會混用，這才是黑箱工具最愛的入口，逐一列出納入後續測試
- [ ] 靜態資源（`wwwroot`）有沒有誤放敏感檔：`.map`、備份檔、`appsettings.*.json`、匯出檔
- [ ] 串接的第三方 SaaS / CDN / 分析服務清單，確認每個整合的權限範圍
- [ ] 錯誤頁、404、500 有沒有回傳過多內部資訊

---

## Stage 2 — 未登入測試

- [ ] 未登入狀態建立 circuit 後，能觸發哪些元件事件？確認匿名可達範圍符合預期
- [ ] `[Authorize]` 是不是只加在**頁面／元件層**，而沒落到伺服器端的服務／資料層（這是關鍵風險，Stage 3 細講）
- [ ] `@attribute [Authorize]` 跟路由授權有沒有一致，沒有漏掉的路由
- [ ] 匿名可觸發的事件，會不會呼叫到需授權的服務方法
- [ ] Anti-forgery：negotiate / 登入流程的 CSRF 保護是否完整
- [ ] 預先轉譯（prerendering）階段有沒有洩漏本該登入才可見的資料：prerender 在建立互動 circuit 前會先跑一次，是常見的資料外漏點

---

## Stage 3 — 登入後測試

這是我覺得最容易出事、也最該花時間打的一層。重點還是那句：授權要真的做在伺服器端，不能靠 UI 把按鈕藏起來就當作沒事。

### 授權落點

這裡的「構造／重放 SignalR 事件」是指，Blazor 每個互動都是往那條連線送一則訊息，內容大概是第幾號元件的第幾號事件被觸發、參數是什麼。開 DevTools 看得到格式，看懂就能自己送，改參數去打別人的資料 ID，或送一個畫面上被藏起來的按鈕的事件。按鈕藏起來只是前端不畫，事件還在，伺服器照收。

- [ ] **每個敏感操作在伺服器端服務／資料層都有獨立授權檢查**，而不是靠使用者看不到按鈕
- [ ] 直接構造／重放 SignalR 事件時，伺服器端仍拒絕越權操作：這是核心測試，繞過 UI 直接打事件
- [ ] 物件層級授權（IDOR）：換 ID、換 key 能不能存取他人資料。Blazor 綁定的參數一樣要在服務層驗證擁有權
- [ ] 角色／權限矩陣是否在**伺服器端**強制，確認 UI 授權跟資料層授權一致

### 狀態與 circuit

- [ ] 不同 circuit（不同使用者）之間的**元件狀態、快取、DI scoped 服務**確實隔離，不會有 A 使用者的狀態跑進 B 使用者的畫面（常見原因：該用 Scoped 的服務誤設成 Singleton）
- [ ] `AuthenticationStateProvider` 在 Server 模式下正確使用，沒把驗證狀態放進可被跨 circuit 污染的位置
- [ ] 長壽命 circuit 中，token / session 過期後正確失效：circuit 還活著時使用者權限若被撤銷，伺服器有沒有即時反映
- [ ] 敏感資料（PII、許可證內容）有沒有長期滯留在元件狀態或伺服器記憶體超過必要時間
- [ ] token 有沒有被塞進 `ProtectedLocalStorage`，先想清楚 Server 模式到底需不需要（詳見文末附錄）

### 輸入驗證

- [ ] 所有前端驗證在伺服器端都有對應驗證：前端驗證可被繞過，因為輸入是經 SignalR 到伺服器的
- [ ] 綁定模型有沒有過度綁定（over-posting）風險
- [ ] 使用者輸入渲染回頁面時的 XSS 防護，逐一檢查 `@((MarkupString)...)` 的使用點

### 檔案上傳

- [ ] 用 magic bytes 驗真實檔型，不信任副檔名和 MIME
- [ ] 圖片解碼前檢查像素數上限，ZIP 檢查解壓後大小，擋解壓縮炸彈
- [ ] 有大小、數量上限，大檔走串流

### 完整流程

- [ ] 走完整 business flow，找**邏輯層漏洞**（價格、數量被竄改，或訂單狀態被跳關／倒退，例如沒付款就跳到「已出貨」）
- [ ] 付款之類的 callback / webhook 端點，要驗簽、要冪等（同一筆通知重送不會重複扣款或加值）

---

## Stage 4 — DoS / 資源耗盡

每一條 circuit 都佔著伺服器的記憶體，這是 Blazor Server 比較特別的地方。

- [ ] 大量並發 circuit 建立時的資源上限與行為（記憶體、CPU）
- [ ] `CircuitOptions`：`DisconnectedCircuitMaxRetained`、`DisconnectedCircuitRetentionPeriod` 設定合理，避免斷線 circuit 堆積
- [ ] `MaximumReceiveMessageSize` 有限制，防止超大 SignalR 訊息灌爆
- [ ] 單一 circuit 可觸發的昂貴伺服器操作有速率限制
- [ ] 連線層（反向代理／負載平衡）有連線數與頻率限制

---

## Stage 5 — 資料層 / PII 特定加測

碰到 PII 或受規範資料的站台才需要這層。站台有碰到的話，再往下看就好。

- [ ] 加密欄位（如 Always Encrypted）在 circuit 生命週期內解密後，明文有沒有滯留在伺服器記憶體或 log
- [ ] 稽核軌跡（audit trail）涵蓋所有敏感操作，且無法被越權操作繞過而不留痕
- [ ] 錯誤／例外 log 有沒有誤記 PII 或許可證內容
- [ ] 測試環境用的是去識別化資料，而不是 production PII
- [ ] 第三方整合傳輸敏感資料時的加密與最小權限

---

## Stage 6 — PoC 驗證與留痕

- [ ] 對高風險項目做**概念驗證**，證明真的可利用，而不只是可能有漏洞
- [ ] 留下可追溯的證據：時間戳、請求／事件內容、影響範圍
- [ ] 每個 finding 標註嚴重度、影響資料類別、修復建議、對應 Stage
- [ ] 產出報告後，確認測試過程本身沒在環境裡留下未清理的後門或測試帳號

---

## 白箱 vs 黑箱：盲區對照

這些項目，很多光讀源碼是看不出來的：

| 面向 | 白箱（讀 C# 源碼） | 黑箱（打部署後的站） |
|---|---|---|
| 授權邏輯 | 看得到 `[Authorize]` 寫在哪 | 驗證授權有沒有**真的落到服務層**、UI 繞過是否有效 |
| SignalR / circuit 配置 | 看得到 `CircuitOptions` 設定值 | 驗證實際並發行為、斷線堆積、訊息大小上限 |
| DetailedErrors / 環境 | 看設定檔 | 驗證 production 是否真的關閉、例外是否外漏 |
| 反向代理 / WebSocket | 看不到（不在源碼裡） | **只有黑箱能發現**轉發設定與標頭洩漏 |
| prerender 資料外漏 | 需人工推敲 | 黑箱從外部直接觀察得到 |
| 第三方整合權限 | 看得到呼叫 | 驗證實際權限範圍是否過寬 |

**兩個都做，盲區互補。** Blazor Server 尤其如此：大量風險（SignalR 配置、circuit 生命週期、代理後的 WebSocket、DetailedErrors 誤開）都是部署後才暴露，光看源碼審不出來。

---

## 實戰：Front Door + CSP 安全標頭

範例站台實際是這樣弄的。前面掛了一層 Azure Front Door 當反向代理，那些安全標頭（CSP、COOP / CORP / COEP、Permissions-Policy）則是 app 端寫一支 middleware 統一發。下面幾個點，都是實際踩過坑才知道要這樣處理的。

**CSP nonce：擋 inline script 的主力**

每個 request 產一組隨機 nonce，只授權自己的 inline script，其他一律擋掉：

```csharp
byte[] nonceBytes = new byte[32];
RandomNumberGenerator.Fill(nonceBytes);
// 用 Hex 而不是 Base64：Base64 的 '+' 會被 Razor 在屬性裡 HTML-encode，
// 導致 header 裡的 nonce 跟頁面上 render 出來的對不起來，DAST 工具會誤報。
string nonce = Convert.ToHexString(nonceBytes);
context.Items["CSPNonce"] = nonce;   // App.razor 讀這個值塞進 <script>
```

**Blazor Server 一定要放行的來源**

Blazor Server 走 SignalR，`connect-src` 少了 `wss://` 整條 circuit 就連不起來。用 Azure SignalR Service 的話還要多放它的網域：

```csharp
var connectSources =
    $"'self' wss://{host} https://{host} " +
    "https://*.service.signalr.net wss://*.service.signalr.net";
```

**UI 元件庫的妥協**

用比較重的 UI 元件庫（Telerik、Syncfusion 這類）的話，CSP 常有兩處拿不掉，寫清單時很容易漏：

- `style-src` 多半得留 `'unsafe-inline'`：元件把 `Width` / `Height` / `Top` / `Left` 這些參數 render 成 inline style，拿掉版面全壞。
- 但 `script-src` 不一定要 `'unsafe-eval'`：很多人以為要，其實只有特定元件才需要（以 Telerik 為例是 Spreadsheet 和舊版 Chart / Map），一般用不到，別跟著範例照抄進去。

**跳轉回應要擋快取**

登入挑戰之類的 3xx 跳轉，Location 常帶著敏感的 return URL。這種回應要強制 `no-store`（`no-store, no-cache, must-revalidate, private`），但記得**排除 304**，不然靜態檔案的瀏覽器快取會壞掉。

**COEP 為了第三方分析降級**

補完滲透測試建議的 cross-origin 三兄弟（COOP / CORP / COEP）後，踩到一個雷：`Cross-Origin-Embedder-Policy: require-corp` 會把沒有 CORP 標頭的第三方腳本（例如網頁分析工具）整包擋掉。要嘛不裝，要嘛把 COEP 降成 `credentialless`，跨源資源改用不帶 cookie 的方式載入，document 隔離還在，但不再要求對方回 CORP。

**HSTS 只在 production 開**

HSTS 由 app 端這支 middleware 發，而且**只在 production 加**（`if (!env.IsDevelopment())` 才 append）。開發環境不加，是因為 localhost 萬一有 SSL 憑證問題，HSTS 會讓瀏覽器對這個網域強制走 HTTPS，很容易把自己鎖在外面。清單 Stage 0 那條「HSTS 已啟用」對應的就是這段，要驗直接看 production 回應標頭有沒有 `Strict-Transport-Security`。

---

## 附：ProtectedLocalStorage 到底能不能存 token？

這是我自己一開始也搞不清楚的問題，順便寫進來。

先講 `ProtectedLocalStorage`（跟它的姊妹 `ProtectedSessionStorage`）做了什麼：它用 ASP.NET Core 的 **Data Protection** 把值加密後，才丟進瀏覽器的 localStorage。加解密都在**伺服器端**做，瀏覽器只拿得到一團密文。所以它比裸存 localStorage 好很多：使用者無法直接讀、也無法竄改內容（改了驗證會失敗）。

但加密過不等於可以拿來存 token。幾個要想清楚的點：

- **XSS 防不了**：密文客戶端雖然解不開，但攻擊者拿到 XSS 就能把整包送回 app 重放，或直接在使用者的 circuit 裡動手。要擋 XSS 竊 token，該用 JS 讀不到的 `HttpOnly` cookie。
- **Blazor Server 常常不需要**：狀態本來就在伺服器端的 circuit 裡，token 放記憶體 / session 就好。會想存 localStorage 的多半是 WASM 的做法，別照搬。真要存也優先用 `ProtectedSessionStorage`（綁分頁、關掉就沒，存活越久風險越大）。
- **金鑰是部署雷**：Data Protection 的金鑰環沒持久化、或 web farm 沒共用，重啟或換機後舊密文就解不開，使用者會莫名被登出。不是漏洞，但很常見，測試要涵蓋。

所以我的用法是：`ProtectedLocalStorage` 拿來存不那麼敏感、掉了頂多重取的狀態就好；真正的 auth token，Blazor Server 優先留在伺服器端，需要瀏覽器持有時用 `HttpOnly` cookie，而不是塞進 storage。

---

## 一點使用心得

整輪打下來，最常中的其實就是 **Stage 3 的授權落點**。很多專案 `[Authorize]` 往頁面上一掛就當作做完了，但真正動手的那個操作，在服務層根本沒再檢查第二次。繞過 UI 直接把 SignalR 事件送過去，往往就進去了。

要用自動化工具輔助測試的話，記得先在 prompt 裡把前提講清楚，工具才不會空轉：

1. 目標是 Blazor Server（有狀態、走 SignalR `/_blazor`，不是 REST-first）
2. UI 隱藏不等於授權，重點測「繞過 UI 直接構造 SignalR 事件」
3. 有沒有混用傳統 REST / Minimal API（有的話一併列為傳統攻擊面）
4. render mode 是 Server / WASM / Auto：只有 WASM 部分才適用前端偵察那套

---

## 免責聲明

本文僅供**授權範圍內的安全測試與學習**之用。清單裡的所有測試都應該在自己擁有、或已取得書面授權的環境進行。未經授權對他人系統做這些操作屬於違法行為，作者不對讀者的任何濫用行為負責。
