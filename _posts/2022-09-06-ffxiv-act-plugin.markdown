---
layout: post
title: 如何開發及引用FFXIV ACT插件
date: 2022-09-06 00:00:00 +0000
description: 如何開發及引用FFXIV ACT插件
img: how-to-start.jpg
fig-caption:
tags: [FFXIV,C#,ACT]
---

<style>
r { color: Red }
</style>

遊戲製作人禁止玩家使用ACT等外部插件，禁止使用副本輔助工具等會影響公平性的工具

若有使用請以不影響其它玩家為主

本篇主要自己紀錄一下如何使用開發ACT插件基底

### 建立一個C#類別庫專案

<img src="../assets/img/FFXIV/FFXIV2.jpg">

至Nuget安裝 AdvancedCombatTracker

<img src="../assets/img/FFXIV/FFXIV3.jpg">

在專案內建立一個使用者控制項

<img src="../assets/img/FFXIV/FFXIV4.jpg">

於使用者控制項內實作ACT介面，InitPlugin, DeInitPlugin

```csharp
public partial class UserControl1 : UserControl, IActPluginV1
{
    public UserControl1()
    {
        InitializeComponent();
    }

    public void InitPlugin(TabPage pluginScreenSpace, Label pluginStatusText)
    {
        //插件初始化
    }

    public void DeInitPlugin()
    {
        //插件解除初始化
    }
}
```

### 測試讀取遊戲Log

- 建立一個 lblChatLog 的Label，將遊戲的log印到控制項中
- 註冊讀取log事件 Game_LogLineRead

```csharp
public partial class UserControl1 : UserControl, IActPluginV1
{
    public UserControl1()
    {
        InitializeComponent();
    }

    public void InitPlugin(TabPage pluginScreenSpace, Label pluginStatusText)
    {
        pluginScreenSpace.Controls.Add(this);
        Dock = DockStyle.Fill;
        lblStatus = pluginStatusText;
        lblStatus.Text = "插件初始化";

        ActGlobals.oFormActMain.BeforeLogLineRead += Game_LogLineRead;
    }

    private void Game_LogLineRead(bool isImport, LogLineEventArgs logInfo)
    {
        string[] logLine = logInfo.originalLogLine.Split('|');
        this.lblChatLog.Text = string.Join(", ", logLine.Select(x => $"\"{x}\""));
    }
}

```

## 編譯專案與加入自製插件

將專案以Release Build為DLL檔案後，由ACT引用DLL

<img src="../assets/img/FFXIV/FFXIV5.jpg">

至ACT點擊Plugins頁籤，點擊Browse將剛才Build好的DLL加入

<img src="../assets/img/FFXIV/FFXIV6.jpg">

下方就會出現剛剛自製的DLL了

<img src="../assets/img/FFXIV/FFXIV7.jpg">

點入DLL頁籤，從遊戲中測試Log有正常讀取

<img src="../assets/img/FFXIV/FFXIV8.jpg">

這樣一個簡單的自製ACT插件就完成了，之後就可以利用遊戲中的log或是其它plugin搭配使用開發出好用的插件


