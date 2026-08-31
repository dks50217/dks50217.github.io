---
layout: post
title: Blazor Server 黑箱安全檢查清單
date: 2026-08-31 00:00:00 +0000
description: 整理一份對自己 Blazor Server 網站做黑箱測試的檢查清單，重點在授權落點、circuit 狀態隔離、與部署後才暴露的盲區。
img: Server.jpeg
fig-caption:
tags: [Blazor,C#,Security]
---

寫給自己的筆記。平常做的幾乎都是 Blazor Server，前陣子有個站要過滲透測試，順手把黑箱檢查的東西整理成清單。**只對自己擁有或已授權的站台做。**

Blazor Server 跟一般前端不一樣：C# 全在伺服器，瀏覽器只有 `blazor.server.js`、一條 SignalR 連線和畫面 diff，每個互動都是一則 SignalR 事件送回伺服器。好處是傳統網站把 REST API 端點全攤在外面，Blazor Server 只露一條 SignalR，真正打 API、查 DB 的 C# 在伺服器，外面看不到；API 還關在 VNET 裡連不到。

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

但這也容易讓人以為就安全了。整份清單只有一句重點：**畫面上看不到，不代表打不到**。按鈕藏起來只是前端不畫，SignalR 事件還在，自己組出來送過去就繞過前端了。

---

## Stage 0 — 部署層基本盤

- [ ] `DetailedErrors` production 關閉（例外堆疊會回傳到 circuit）
- [ ] `ASPNETCORE_ENVIRONMENT` 是 `Production`，不是誤留 `Development`
- [ ] 反向代理正確轉發 WebSocket 升級標頭，沒暴露內部埠
- [ ] 回應標頭不洩漏框架版本（`Server`、`X-Powered-By`）
- [ ] HTTPS 強制 + HSTS，無混合內容
- [ ] 安全標頭：CSP、`X-Content-Type-Options`、`X-Frame-Options` / `frame-ancestors`
- [ ] `_Host.cshtml` 沒把設定值、連線字串、內部 URL 寫進註解或 inline script

---

## Stage 1 — 偵察

Blazor Server 這邊本來就該很乾淨，挖得到料就是有東西漏了。

- [ ] 確認是 Blazor Server（`blazor.server.js`、`/_blazor` negotiate），這藏不掉
- [ ] `/_blazor/negotiate` 回應有沒有多餘資訊
- [ ] 有沒有混用傳統 REST / Minimal API（`/api/...`），有的話一併列入攻擊面
- [ ] `wwwroot` 有沒有誤放 `.map`、備份檔、`appsettings.*.json`、匯出檔
- [ ] 第三方 SaaS / CDN / 分析服務，確認權限範圍
- [ ] 錯誤頁、404、500 有沒有洩漏內部資訊

---

## Stage 2 — 未登入測試

- [ ] 匿名建 circuit 後能觸發哪些元件事件，範圍符合預期
- [ ] `[Authorize]` 是不是只在頁面／元件層，沒落到服務／資料層（關鍵風險，Stage 3）
- [ ] `@attribute [Authorize]` 跟路由授權一致，沒漏掉的路由
- [ ] 匿名可觸發的事件會不會呼叫到需授權的服務方法
- [ ] Anti-forgery：negotiate / 登入流程 CSRF 保護完整
- [ ] prerender 有沒有洩漏本該登入才看得到的資料（互動 circuit 前會先跑一次）

---

## Stage 3 — 登入後測試

最容易出事的一層。授權要做在伺服器端，不能靠 UI 藏按鈕。

### 授權落點

「構造／重放 SignalR 事件」是指：Blazor 每個互動都是一則訊息（第幾號元件、第幾號事件、參數）。開 DevTools 看得到格式，就能改參數或送隱藏按鈕的事件，伺服器照收。

- [ ] 每個敏感操作在服務／資料層都有獨立授權檢查，不是靠使用者看不到按鈕
- [ ] 直接構造／重放 SignalR 事件時，伺服器仍拒絕越權（核心測試）
- [ ] IDOR：換 ID / key 能不能存取他人資料，服務層要驗擁有權
- [ ] 角色／權限矩陣在伺服器端強制，跟 UI 授權一致

### 狀態與 circuit

- [ ] 不同 circuit 的元件狀態、快取、DI scoped 服務有隔離，不會 A 的狀態跑到 B（常見雷：Scoped 誤設 Singleton）
- [ ] `AuthenticationStateProvider` 沒放進可被跨 circuit 污染的位置
- [ ] token / session 過期後正確失效，權限被撤銷伺服器要即時反映
- [ ] 敏感資料（PII）沒長期滯留在元件狀態 / 記憶體
- [ ] token 有沒有塞進 `ProtectedLocalStorage`（Server 模式多半不用，見文末）

### 輸入驗證

- [ ] 前端驗證在伺服器端都有對應（輸入經 SignalR 到伺服器，前端驗證可繞過）
- [ ] 綁定模型有沒有過度綁定（over-posting）
- [ ] `@((MarkupString)...)` 使用點逐一檢查 XSS

### 檔案上傳

- [ ] magic bytes 驗真實檔型，不信任副檔名 / MIME
- [ ] 圖片檢查像素上限、ZIP 檢查解壓後大小，擋解壓縮炸彈
- [ ] 有大小 / 數量上限，大檔走串流

### 完整流程

- [ ] 走完整流程找邏輯漏洞（價格、數量、訂單狀態跳關／倒退，例如沒付款跳「已出貨」）
- [ ] 付款 callback / webhook 要驗簽、要冪等（重送不會重複扣款）

---

## Stage 4 — DoS / 資源耗盡

每條 circuit 都佔伺服器記憶體，這是 Blazor Server 特有的。

- [ ] 大量並發 circuit 的資源上限與行為（記憶體、CPU）
- [ ] `CircuitOptions`：`DisconnectedCircuitMaxRetained`、`DisconnectedCircuitRetentionPeriod` 合理，避免斷線 circuit 堆積
- [ ] `MaximumReceiveMessageSize` 有限制，防超大訊息
- [ ] 單一 circuit 的昂貴操作有速率限制
- [ ] 連線層有連線數、頻率限制

---

## Stage 5 — 資料層 / PII

碰到 PII 或受規範資料才需要。

- [ ] 加密欄位解密後，明文沒滯留在記憶體或 log
- [ ] audit trail 涵蓋所有敏感操作，無法被越權繞過而不留痕
- [ ] 錯誤 / 例外 log 沒誤記 PII
- [ ] 測試環境用去識別化資料，不是 production PII
- [ ] 第三方傳輸敏感資料有加密、最小權限

---

## Stage 6 — PoC 驗證與留痕

- [ ] 高風險項目做 PoC，證明可利用，不只是可能有漏洞
- [ ] 留證據：時間戳、請求／事件內容、影響範圍
- [ ] 每個 finding 標嚴重度、資料類別、修復建議、對應 Stage
- [ ] 收尾，沒留下測試帳號或後門

---

## 白箱 vs 黑箱：盲區對照

很多項目光讀源碼看不出來：

| 面向 | 白箱（讀 C# 源碼） | 黑箱（打部署後的站） |
|---|---|---|
| 授權邏輯 | 看得到 `[Authorize]` 寫在哪 | 授權有沒有**真的落到服務層**、UI 繞過有效否 |
| SignalR / circuit | 看得到 `CircuitOptions` 值 | 實際並發、斷線堆積、訊息大小上限 |
| DetailedErrors / 環境 | 看設定檔 | production 是否真的關閉、例外是否外漏 |
| 反向代理 / WebSocket | 看不到 | **只有黑箱能發現**轉發設定與標頭洩漏 |
| prerender 外漏 | 需人工推敲 | 從外部直接觀察得到 |
| 第三方整合權限 | 看得到呼叫 | 實際權限範圍是否過寬 |

**兩個都做，盲區互補。**

---

## 實戰：Front Door + CSP 安全標頭

範例站台的做法：前面 Azure Front Door 當反向代理，安全標頭由 app 端一支 middleware 統一發。幾個踩過的坑：

**CSP nonce**：每個 request 一組隨機 nonce 授權自家 inline script。用 Hex 不用 Base64，因為 Base64 的 `+` 會被 Razor 在屬性裡 encode，害 header 跟頁面上的 nonce 對不起來，DAST 會誤報。

```csharp
byte[] nonceBytes = new byte[32];
RandomNumberGenerator.Fill(nonceBytes);
string nonce = Convert.ToHexString(nonceBytes);
context.Items["CSPNonce"] = nonce;
```

**SignalR 來源**：`connect-src` 少了 `wss://` circuit 就連不起來，用 Azure SignalR Service 還要放它的網域。

```csharp
var connectSources =
    $"'self' wss://{host} https://{host} " +
    "https://*.service.signalr.net wss://*.service.signalr.net";
```

**UI 元件庫**：Telerik / Syncfusion 這類，`style-src` 多半得留 `'unsafe-inline'`（元件把 `Width` / `Height` 等 render 成 inline style）；但 `script-src` 不一定要 `'unsafe-eval'`，別照抄範例。

**3xx 跳轉擋快取**：登入跳轉的 Location 常帶敏感 return URL，回應要 `no-store`，但排除 304，免得靜態檔快取壞掉。

**COEP**：`require-corp` 會擋掉沒有 CORP 的第三方腳本（如分析工具），要嘛不裝要嘛降 `credentialless`。

**HSTS 只在 production 開**：開發環境不加，免得 localhost SSL 出問題把自己鎖死。

---

## 附：ProtectedLocalStorage 能不能存 token？

`ProtectedLocalStorage` 用 ASP.NET Core Data Protection 在伺服器端加密後才寫進瀏覽器 localStorage，比裸存好，客戶端讀不到也改不了。但：

- **擋不了 XSS**：密文能被整包送回 app 重放，或在 circuit 裡直接動手。要擋 XSS 竊 token 該用 `HttpOnly` cookie。
- **Server 模式多半不用**：狀態本來就在 circuit，token 放伺服器就好，存 localStorage 是 WASM 的做法。
- **金鑰是部署雷**：Data Protection 金鑰環沒持久化 / web farm 沒共用，舊密文就解不開，使用者莫名被登出。

結論：`ProtectedLocalStorage` 存不敏感、掉了重取即可的狀態；auth token 留伺服器端，要瀏覽器持有用 `HttpOnly` cookie。

---

## 一點心得

最常中的是 Stage 3 授權落點：`[Authorize]` 掛在頁面就當做完，服務層沒再檢查，繞過 UI 送事件就進去了。

用自動化工具測的話，prompt 先講清楚前提：Blazor Server（走 SignalR，不是 REST-first）、UI 隱藏不等於授權、有沒有混用 REST API、render mode 是 Server / WASM / Auto。

---

本文僅供授權範圍內的安全測試與學習。所有測試只在自己擁有或已取得書面授權的環境進行；未經授權對他人系統操作屬違法行為。
