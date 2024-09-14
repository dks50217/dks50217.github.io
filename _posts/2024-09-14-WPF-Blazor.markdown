---
layout: post
title: WPF Blazor Hybrid 中加入Route
date: 2024-09-14 00:00:00 +0000
description: 如何在WPF Blazor Hybrid中加入Route
img: how-to-start.jpg
fig-caption:
tags: [WPF,C#,Blazor]
---

微軟官方文件內有寫WPF如何結合Blazor使用 [blazor hybrid](https://learn.microsoft.com/en-us/aspnet/core/blazor/hybrid/tutorials/wpf?view=aspnetcore-8.0)，但後續沒有寫到如何加入Router，本篇將接續官方文件說明如何增加Router。

* 建立一個App.razor，內容如下，加入Router

```csharp
<Router AppAssembly="@typeof(App).Assembly">
    <Found Context="routeData">
        <RouteView RouteData="@routeData" />
    </Found>
    <NotFound>
        <h1>Page not found</h1>
    </NotFound>
</Router>
```

* 將RootComponent中的ComponentType改為App

```csharp
<Grid>
    <blazor:BlazorWebView HostPage="wwwroot\index.html" Services="{DynamicResource services}">
        <blazor:BlazorWebView.RootComponents>
            <blazor:RootComponent Selector="#app" ComponentType="{x:Type components:App}" />
        </blazor:BlazorWebView.RootComponents>
    </blazor:BlazorWebView>
</Grid>
```

* 建立一個Home.razor，按下按鈕後測試路由導向

```csharp
@page "/"
@inject NavigationManager navigationManager

<button @onclick="NavigateToPage">Go to Counter</button>

@code {
    private void NavigateToPage()
    {
        navigationManager.NavigateTo("/Counter");
    }
}
```

App.razor就算是主要的頁面，都是由此頁面操作路由

