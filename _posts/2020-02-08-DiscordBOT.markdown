---
layout: post
title: 多功能DiscordBOT在GCP
date: 2020-02-08 10:00:00 +0300
description: 使用Node.js建立可新刪修回話的機器人，並且部屬至GCP中
img: DiscordBOT.jpg
tags: [tmux, GCP, Discord,Node.js]
---
有用過Discord的人多少都會聽過MEE6這個機器人，可以在聊天室中加入前餟符號(如驚嘆號)+某字，機器人便會隨機回話，增加聊天室的趣味性

    使用者: !你好
    機器人: 嗨你好

但機器人在免付費的模式所設定的回話是有限的，而且只有管理員能夠新增刪除回話文字，因此產生了想做一個有額外附加功能的機器人

這個機器人與一般的機器人不同點在於:
<ol>
    <li>可新刪請求文字</li>
    <li>可設定回話文字出現權重</li>
    <li>當機器人不懂請求文字時的反應</li>
    <li>定期提醒功能</li>
    <li>指定加入語音對話頻道</li>
</ol>

本篇文主要介紹這個機器人的專案結構與相關作法，細部作法可至我的repo中觀看

## 如何做資料存取
機器人具有說A回B的機制，想必要有一些存取的方法，但又不想要另外架個資料庫存取。
因此想到使用JSON格式來存取

| 項目 | 描述 |
| ----------- | ----------- |
| GUID | 新刪的key值 |
| request | 使用者ping機器人 (!可撥鼠) |
| weight | 回話項目權重 |
| pictureFlag | 回話是否要涵蓋圖片 |
| tagFlag | 回話是否要Tag人 |

---------------------------------------

```json
  [
    {
        "GUID": "2a1b59f2-b5bd-4115-8f3b-111e5925efbf",
        "request": "可撥鼠",
        "response": [
        {
            "weight": 1, 
            "message": "不要嚇我"
        },
        {
            "weight": 1,
            "message": "有夠可撥"
        },
        {
            "weight": 1,
            "message": "我就可撥"
        }
        ],
        "pictureFlag": false,
        "tagFlag": false
    }
  ]
```

## 頻道中設定機器人
機器人並不是只要回話就好，希望能夠直接用一些簡單的文字設定機器人，會更方便

| 項目 | 描述 |
| ----------- | ----------- |
| DefaultMsg | 當機器人不懂你在說什麼時會回的話 |
| DefaultMsgTagFlag | 當機器人不懂你在說什麼時，是否要隨機Tag一個人|
| DefaultVoiceServer | 預設加入的語音頻道 |
| SttFlag | 是否開啟STT |
| IgnoreList | 忽略這些ping(因為某些音樂機器人 是用 !p 來撥放音樂) |
| RelicChannel | 提醒清單要顯示的頻道 |
| IgnoreAddList | 忽略新刪的文字 |

---------------------------------------

```json
{
    "DefaultMsg": "不會用不要用 ",
    "DefaultMsgTagFlag":true,
    "DefaultVoiceServer":"701636190482202629",
    "SttFlag":false,
    "IgnoreList":["P","next","n","p","q"],
    "RelicChannel":"701815724611469372",
    "MainServer":"452119391648219137",
    "IgnoreAddList":["9"]
}
```

## 機器人功能

* 新增/刪除 回話母項、子項

  <img src="../assets/img/DiscordBOT/discordBOT_5.jpg">

* 顯示所有新增的項目

  <img src="../assets/img/DiscordBOT/discordBOT_6.jpg">

* 新增/刪除 回話母項、子項

  <img src="../assets/img/DiscordBOT/discordBOT_5.jpg">
  <img src="../assets/img/DiscordBOT/discordBOT_6.jpg">

* 顯示所有新增的項目

  <img src="../assets/img/DiscordBOT/discordBOT_7.jpg">

* 出現權重設定

  <img src="../assets/img/DiscordBOT/discordBOT_8.jpg">

* 使用

  <img src="../assets/img/DiscordBOT/discordBOT_9.jpg">

* 排除可新增文字
  
  <img src="../assets/img/DiscordBOT/discordBOT_11.jpg">


* 新增提醒清單

    以某線上遊戲為例，每天都會有 "聖物" 要搶，聖物放置後會有安定時間，需等安定時間過後才能再搶，因此發想了提示功能，也可替換為其它文字，看要如何運用。
    只需輸入以下文字格式，前綴為$

    ```
    ${想要輸入的文字1} {想要輸入的文字2} {hhmm}
    ```

    如果有多個，可以輸入如下

    ```
    $紅叢林 槍香火杯1837
    藍阿姆 甲1838
    藍沙漠 雙杖.甲1847
    紅KC 水1850
    紅KC 杯1902
    藍阿姆 LV2珠1907
    紅沙漠 秤1943
    紅叢林 LV2經1945
    黃沙漠 盾2013
    紅阿姆 LV2弓2024
    ```

    就會依據設定提醒時間發布於頻道中，且快到的項目才會做提醒

    <img src="../assets/img/DiscordBOT/discordBOT_15.jpg">



* 使用tmux / 架設置GCP中

  <img src="../assets/img/DiscordBOT/discordBOT_14.jpg">


更多使用可以參照以下的Method Table 或 我的repo

| Prefix        | Method        |  Example      |    ResponseExample   |
| ------------- |:-------------:| -------------:| -------------:   | 
| !             | Call item      | !可撥         | 我就可撥
| +             | Add item       | +可撥 我就可撥 | 我就可撥 已加入 
| -             | Remove item    | -可撥 我就可撥 | 我就可撥 已移除
| *             | Show all item  | *可撥         | 0. 我就可撥
| #             | Setting        | #[join]       | -
|               |                | #[leave]      | -
|               |                | #[presence]   | -(設定機器人狀態)
|               |                | #[tts]        | 語音已開啟/關閉(預設為關閉)
|               |                | #[rename] OOO     | XXX 已修改 XXX的匿名 為OOO
|               |                | #[ignore] OOO     | XXX 已加入忽略清單(忽略!文字)
|               |                | #[mouse]         | 預設回復已開啟/關閉(預設為開啟)
|               |                | #[replay] OOO     | 預設回復已更改為OOO
|               |                | #[ignoreAdd] OOO     | XXX 已加入忽略清單(忽略+文字)
|$             | Add Remind List | $XXX OO1600| 已加入X筆
|%             | ChangeWeight   | %可撥 我就可撥 1.2| 可撥,我就可撥 已設定為1.2
|?             | Show help      |               |

















