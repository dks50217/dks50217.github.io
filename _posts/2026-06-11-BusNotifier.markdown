---
layout: post
title: 需求我來想，程式你來寫，公車我來搭
date: 2026-06-11 00:00:00 +0000
description: 用 Claude Code 把 TDX、LINE Bot、OpenAI 串在一起，做一個公車到站推播工具。
img: how-to-start.jpg
fig-caption: BusNotifier
tags: [LINE Bot, TDX, OpenAI, Claude Code, AI]
---

這種專案應該很多人做過，不過我還是做了一個自己的小工具自己用。

我家附近有一班公車，每次要搭的時候我就開 App 查，發現還有 8 分鐘，心想不急，然後錯過了。這件事發生了好幾次，所以我做了一個東西讓公車快到的時候主動來戳我。

---

## 為什麼是 LINE Bot

一開始想做瀏覽器通知，做完才發現網頁要一直開著。LINE Bot 是推播，手機上的 LINE 本來就一直開著，順理成章。

---

## 加 AI 是因為懶得記指令

原本要說 `設定 台北市 307 去程 台北車站`，用了一個禮拜之後覺得煩。剛好在研究 OpenAI 的 function calling，就加進去了。

現在可以說「我要搭新北市紅51從台北灣社區去淡水捷運」，Bot 會自動判斷去程還是回程——TDX 回傳每個方向的站序，比對上下車站的序號就能知道方向。

---

## 目前的狀態

夠用了。設定監控、到站推播、查詢 ETA、AI 自然語言都有，重啟不會掉資料。儲存先用 JSON 檔，沒有上 SQLite，使用者數量少的時候沒必要，真的需要再換。還有些小缺陷懶得修，但我搭公車不再錯過班次，目標達成。

---

順帶學到兩件事。一是怎麼串 TDX台灣的公共運輸資料其實都在，API 也算完整，只是平常比較少看到有人拿來做東西。二是 OpenAI function calling 的模式，本質上跟 MCP 一樣：你定義好工具的 schema，讓模型自己決定什麼時候呼叫、帶什麼參數，你只負責實作工具本身。這個模式一旦熟了，之後要讓 AI 操作任何外部系統都可以套用。

程式幾乎都是 Claude Code 寫的。我的角色是描述需求、決定要做什麼、然後驗證結果對不對，功能跑起來之後實際用看看，不對就告訴它哪裡有問題。實際動手的部分是 LINE Bot 的申請與設定、TDX 帳號和 API 金鑰、OpenAI API、還有部署用的機器和 Docker。

所以這篇比較像「我把一堆服務串在一起，讓 Claude Code 把中間的程式填上」，不是「我寫了一個 LINE Bot」。

專案在 GitHub：[dks50217/BusNotifier](https://github.com/dks50217/BusNotifier)
