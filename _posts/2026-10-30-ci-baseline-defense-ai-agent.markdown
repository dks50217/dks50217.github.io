---
layout: post
title: AI Agent 時代，開發者該用 CI 守住的基本防線
date: 2026-10-30 00:00:00 +0000
description: 用 CI 擋下已知弱點的幾個設定，範例以 .NET 和 Azure DevOps 為主
img: ci-baseline-defense.jpg
fig-caption: Photo by Taylor Vick on Unsplash
tags: [CI,.NET,Azure DevOps,Security]
---

## 為什麼要現在做

AI agent 能在 CVE 公開後很快寫出攻擊程式，再自動掃整個網路找目標

弱點從公開到被大規模利用，以前要幾週，現在可能只剩幾天

多數團隊不是被鎖定的對象，但會被順手掃到

最近幾件事：

- **PHP2Shell**：10/21 修補，10/26 CISA 確認已遭利用，Amazon 在公開前 4 天就看到攻擊嘗試（[Tenable](https://www.tenable.com/blog/php2shell-cve-2026-109618-cve-2026-109619-frequently-asked-questions-about-critical-php-remote)）
- **日本**：9 月起多家企業接連遭入侵、個資外洩（[JPCERT/CC](https://www.jpcert.or.jp/at/2026/at260030.html)）
- **Synology NAS**：10/29 勒索攻擊鎖定沒更新的 DSM（[TechNews](https://infosecu.technews.tw/2026/10/30/dsm-ransomware-targets-synology-urges-nas-users-update-promptly)）
- **PraisonAI**：CVE-2026-44338 公開後 3 小時 44 分就被攻擊（[CSA](https://labs.cloudsecurityalliance.org/research/csa-research-note-agentic-framework-rapid-exploitation-20260/)）

這些弱點很多在套件或執行環境底層，CI 能擋的是其中相依套件和 image 的部分

開發時擋掉新加入的弱點，排程抓出之後才公開的弱點

**這裡用的是 .NET 內建、不用另外花錢的 NuGetAudit，讓沒有付費工具的團隊先有一層基本防禦**
{: style="font-size: 1.3em"}

NuGetAudit 只查 NuGet 套件，已有 Black Duck、Snyk 這類 SCA 工具的話一樣接進 CI

## 有弱點就讓 build 失敗

.NET 8 起 restore 會跑 NuGetAudit，但查到弱點預設只是警告，在 `Directory.Build.props` 加：

```xml
<PropertyGroup>
  <NuGetAudit>true</NuGetAudit>
  <NuGetAuditMode>all</NuGetAuditMode>
  <WarningsAsErrors>$(WarningsAsErrors);NU1901;NU1902;NU1903;NU1904</WarningsAsErrors>
</PropertyGroup>
```

上游還沒修時，直接引用修補版本釘住：

```xml
<!-- Vendor package still pulls a vulnerable version (CVE-xxxx-xxxxx).
     Remove once the vendor ships a fix. -->
<PackageReference Include="Some.Transitive.Package" Version="x.y.z" />
```

連修補版本都沒有，用 `NuGetAuditSuppress` 只壓掉那一筆，不要用 `NoWarn` 整個關掉：

```xml
<ItemGroup>
  <!-- No patched version yet. Review by yyyy-mm-dd. -->
  <NuGetAuditSuppress Include="https://github.com/advisories/GHSA-xxxx-xxxx-xxxx" />
</ItemGroup>
```

## 沒有 commit 也要掃

```yaml
schedules:
- cron: '0 10 * * 1-5'   # UTC; weekdays
  branches:
    include:
    - develop
  always: true           # run even without new commits
```

沒有 `always: true`，沒 commit 的日子不會跑

self-hosted agent 保留工作目錄時 restore 可能被略過，先清工作目錄或加 `--force`

## 容易漏掉的地方

| 盲點 | 做法 |
| --- | --- |
| 正式分支不會每天 build | 加每週排程 |
| 查不到弱點資料時只發 NU1900 警告 | 也列進 `WarningsAsErrors` |
| `wwwroot` 手動放的 JS | 改用 npm，CI 跑 `npm audit` |
| 容器 base image | CI 加 Trivy 掃描 |
| 地端伺服器、作業系統 | 指定負責修補的人 |

## CI 擋不住的

未知弱點、外洩的密碼、已經發生的入侵，要靠 log 警示：

- 異常國家登入成功
- 登入失敗或 401、403、404 突增
- 新增管理員或角色提升

log 送到主機外，至少留 90 天

如果弱點剛公開、上游還沒出 patch 來不及修? 應該可以先指望 Cloudflare 或 Azure Front Door 的 WAF 代管規則幫忙先扛一波

如果連邊界都擋不住嚴重程度等級又很高，先掛維護模式關機斷網，才是最成熟的停損XD

## 檢查清單

- [ ] 有弱點（含間接相依）時 build 會失敗
- [ ] 沒用 `NoWarn` 關掉 NU190x
- [ ] 每天排程掃描，正式分支也有
- [ ] npm、容器 image 也有掃
- [ ] 至少一條異常登入警示
