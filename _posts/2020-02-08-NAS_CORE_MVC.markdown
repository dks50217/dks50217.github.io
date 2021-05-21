---
layout: post
title: 在synology NAS用Docker架 .NET 5 MVC網頁(HTTPS)
date: 2021-05-21 00:00:00 +0000
description:  在synology NAS用Docker架 .NET 5 MVC網頁
img: Server.jpeg
fig-caption:
tags: [.NET 5,Docker,HTTPS,SSL]
---

最近因為一些需求，買了一台Synology NAS，順便來學習怎麼架MVC網站至NAS

## Docker安裝

在Synology 套件管理中心，將Docker安裝 

<img src="../assets/img/NAS/NASMVC1.png">

## .NET 映像檔下載或匯入

打開Docker，搜尋 .NET CORE，找到如dotnet、aspnetcore下載
但是目前下載的 .net core都是屬於2.0或3.1版本，所以我另外在Docker hub下載
https://hub.docker.com/_/microsoft-dotnet-sdk

<img src="../assets/img/NAS/NASMVC2.png">

將載好的映像檔丟到NAS中，在Docker中選擇從檔案中加入

<img src="../assets/img/NAS/NASMVC3.png">

將剛才載好的映像檔加入Docker中

<img src="../assets/img/NAS/NASMVC4.png">

確認有成功加入

<img src="../assets/img/NAS/NASMVC5.png">

## 新建並發佈一個 .NET5 MVC網頁，放至NAS

新建一個 .NET5 的MVC專案，並且發佈至資料夾內，如下圖

<img src="../assets/img/NAS/NASMVC6.png">

將發佈的檔案放至NAS中自己指定的路徑

<img src="../assets/img/NAS/NASMVC7.png">
<img src="../assets/img/NAS/NASMVC8.png">

## 新建容器

選擇新增容器，打上容器名稱
<img src="../assets/img/NAS/NASMVC9.png">

儲存空間頁籤內，選擇新增資料夾，選擇剛剛放檔案的位置
<img src="../assets/img/NAS/NASMVC10.png">

選擇後，容器掛載路徑打入指定路徑，可依照個人喜好輸入，我這裡用/app
<img src="../assets/img/NAS/NASMVC11.png">

port設定，記得防火牆也要同意相關port有開啟
<img src="../assets/img/NAS/NASMVC12.png">

最後進階設定，環境變數ASPNETCORE_URLS 中輸入 http://*:80
<img src="../assets/img/NAS/NASMVC13.png">

建立後立即啟動容器，確認容器已經開啟
<img src="../assets/img/NAS/NASMVC14.png">

點選已啟動容器，點選終端機頁籤，將 .NET 應用啟動
```console
cd app
dotnet familycenter.dll
```
<img src="../assets/img/NAS/NASMVC15.png">

## 建立憑證

在NAS中的安全性，選擇憑證並建立憑證，選擇從Let's Encrypt建立憑證

<img src="../assets/img/NAS/NASMVC16.png">

網域名稱輸入 : familycenter.{Domain}.synology.me

輸入信箱後套用

<img src="../assets/img/NAS/NASMVC17.png">

可以確認憑證已成功建立
<img src="../assets/img/NAS/NASMVC18.png">

## 反向代理伺服器設定

控制台中搜尋Proxy 並選擇反向代理伺服器頁籤 新增後輸入資料套用

### 來源
- 通訊協定: HTTPS
- 主機名稱: familycenter.{Domain}.synology.me
- Port: 443

### 目的地
- 通訊協定: HTTP
- 主機名稱: localhost
- Port: 2266

<img src="../assets/img/NAS/NASMVC19.png">

## 連結Mapping

回到憑證，選擇剛建立好的憑證，將連結Mapping

<img src="../assets/img/NAS/NASMVC20.png">


瀏覽器輸入網址 

https://familycenter.{Domain}.synology.me/

就可以用HTTPS開啟網頁了
<img src="../assets/img/NAS/NASMVC21.png">