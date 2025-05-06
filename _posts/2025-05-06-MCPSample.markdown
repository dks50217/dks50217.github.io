---
layout: post
title: 用 WPF + NetStone + MCP 架構你的 FFXIV 對話式查詢工具
date: 2025-05-06 00:00:00 +0000
description: 
img: mcp-ffxiv.png
fig-caption: WPF Chat UI 結合 NetStone 與 MCP 的 FFXIV 對話查詢應用畫面
tags: [MCP, AI, FFXIV, WPF, NetStone]
---

本篇文章是從零開始打造一個結合 自然語言處理（MCP Server）、FFXIV 資料查詢（NetStone），並以 WPF (MCP Client) 呈現聊天介面的桌面應用程式。你將學會如何：

* 使用 MCP 協定處理聊天語意與工具呼叫
* 整合 NetStone 查詢《Final Fantasy XIV》的角色與世界資料
* 使用 WPF 呈現 ChatGPT 風格的對話框與 Markdown 回應

若你是一位 MMO 玩家、AI 工具開發者，或是想結合遊戲與語言模型的工程師，這篇文章會是你的入門指南。

## 工具架構概覽

* WPF 作為前端（輸入框、對話框）
* MCP Server 處理自然語言與工具匹配
* NetStone 提供 FFXIV 資料查詢
* OpenAI API 作為語言理解後端（可選）

## 建立 MCP Server 

1. 建立一個`Server.csproj`專案 (MCP 伺服器)，安裝以下套件

    ```xml
    <PackageReference Include="ModelContextProtocol" Version="0.1.0-preview.8" />
    <PackageReference Include="NetStone" Version="1.4.1" />
    ```

2. 於`Server.csproj` 專案的 `Program.cs`中加入以下

    ```csharp
    builder.Services
        .AddMcpServer()
        .WithStdioServerTransport()
        .WithToolsFromAssembly();
    ```

3. 撰寫 NetStone Service `NetStoneService.cs`，寫一個讀取FC資訊服務
   
    ```csharp
    public interface INetStoneService
    {
        Task InitializeAsync();
        Task<FreeCompanySearchEntry?> GetFCInformation(string name, string world);
    }

    public class NetStoneService : INetStoneService
    {
        private LodestoneClient? _lodestoneClient;

        public async Task InitializeAsync()
        {
            _lodestoneClient = await LodestoneClient.GetClientAsync();
        }

        public async Task<CharacterSearchEntry?> GetCharacterID(string name, string world)
        {
            if (_lodestoneClient == null)
                throw new Exception("LodestoneClient initialization failed.");

            var searchResponse = await _lodestoneClient.SearchCharacter(new CharacterSearchQuery()
            {
                CharacterName = name,
                World = world
            });

            var lodestoneCharacter =
                searchResponse?.Results
                .FirstOrDefault(entry => entry.Name == name);

            return lodestoneCharacter;
        }
    }

    ```

4. 撰寫 NetStone Tool `FreeCompanyTool.cs`，使用INetStoneService服務

    ```csharp
    [McpServerToolType]
    public class FreeCompanyTool(INetStoneService netStone, ILogger<CharacterInformationTool> logger)
    {
        private readonly INetStoneService _netStoneService = netStone;
        private readonly ILogger<CharacterInformationTool> _logger = logger;

        [McpServerTool(Name = "get_fc_information", Title = "Get fc information")]
        [Description("Get free Company information")]
        public async Task<FreeCompanySearchEntry?> GetFCInformation(
        [Description("The free company name.")] string name,
        [Description("The data center (world).")] string world
    )
        {
            var freeCompany = await _netStoneService.GetFCInformation(name, world);

            return freeCompany;
        }
    }
    ```

5. `Program.cs`中初始化服務
   
    ```csharp
    builder.Services.AddSingleton<INetStoneService, NetStoneService>();

    static async Task InitNetStone(IHost host)
    {
        var netStoneService = host.Services.GetRequiredService<INetStoneService>();
        await netStoneService.InitializeAsync();
    }

    var app = builder.Build();

    await InitNetStone(app);

    await app.RunAsync();
    ```

## MCP Client

* 可使用Claude Desktop 或 自行建立的Client UI

1. 以本範例WPF為例，用OpenAI的key來實現

```csharp
private async Task InitializeMCP()
{
    AddUIMessage(ChatRole.System, "初始化中，請稍候...");

    var clientTransport = new StdioClientTransport(new StdioClientTransportOptions
    {
        Name = "helpTroubleshooter",
        Command = "dotnet",
        // 指定MCP Server csproj位置
        Arguments = ["run", "--project", "../../../../../src/NetStoneMCP.csproj", "--no-build"],
    });

    var client = await McpClientFactory.CreateAsync(clientTransport);

    _tools = await client.ListToolsAsync();

    _apiKey = Environment.GetEnvironmentVariable("OPENAI_API_KEY") ?? string.Empty;

    if (string.IsNullOrEmpty(_apiKey))
    {
        MessageBox.Show("API Key is Empty!", "Info");
        return;
    }

    _chatClient = new OpenAIClient(_apiKey).GetChatClient(_model).AsIChatClient()
                        .AsBuilder().UseFunctionInvocation().Build();

    _messages.Add(new(ChatRole.System, "請使用繁體中文回答所有問題。"));
    _messages.Add(new(ChatRole.System, "公司是指公會。"));

    AddUIMessage(ChatRole.System, "歡迎使用本工具！這是一個結合 NetStone 的自然語言 MCP 伺服器，可用來查詢《Final Fantasy XIV》的角色與世界資料。");
}
```

**Client程式碼較長，詳細程式碼請參考Repo**

## 實際使用效果

<img src="../assets/img/MCP/mcp-client.png">

## GitHub 專案連結

[查看完整原始碼 on GitHub，陸續增加工具中](https://github.com/dks50217/NetStoneMCP)  

透過本篇文章，我們成功打造了一個結合 WPF、MCP 協定、NetStone 工具視覺呈現的 FFXIV 對話式資料查詢工具。這不僅是一個實用的小工具，更是一種整合語言模型與遊戲資料的範例：讓開發者能以自然語言，直接與複雜的系統進行互動。

當然，也可以不只利用 NetStone —— MCP Server 是彈性開放的，也可以輕鬆整合其他第三方 API、資料庫查詢工具，甚至你的 AI 模型工具，打造屬於自己的自然語言操作平台。

無論你是《Final Fantasy XIV》的忠實玩家，還是正在探索語言介面與遊戲結合可能性的開發者，這樣的系統都提供了更多創作空間。你可以繼續擴充工具功能，支援更多查詢、角色行為、甚至製作 Discord Bot、網頁前端或語音助理版本。



















