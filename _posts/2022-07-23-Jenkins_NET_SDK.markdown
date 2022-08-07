---
layout: post
title: 離線環境安裝Jenkins .NET SDK Plugin
date: 2022-07-23 00:00:00 +0000
description:  在離線 Linux Server 安裝Jenkins .NET SDK Plugin
img: jenkins-1.png
fig-caption:
tags: [.NET SDK,CI,Jenkins,docker,NAS]
---

前陣子在公司測試 Jenkins dotnet 插件，本範例是用docker進行

#### 下載.NET SDK

[連結](https://dotnet.microsoft.com/en-us/download/dotnet/thank-you/sdk-6.0.302-linux-x64-binaries)

<img src="../assets/img/CI/dotnet.jpg">


#### 將SDK放在Jenkins容器某個資料夾

```bash
docker cp $sdkLocationPath $container:$containerSDKPath
```

#### 安裝.NET SDK Support

至官網下載[.NET SDK Support plugin](https://plugins.jenkins.io/dotnet-sdk/)

<img src="../assets/img/CI/dotnet2.jpg">

到Jenkins中選擇部屬外掛，選擇剛剛下載的hpi檔

<img src="../assets/img/CI/dotnet3.jpg">
<img src="../assets/img/CI/dotnet4.jpg">

#### Jenkins設定SDK路徑

到 jenkins Global Tool Configuration 設定  .NET SDK ，設定路徑、NAME

<img src="../assets/img/CI/dotnet5.jpg">

#### pipeline

在pipeline 加上 tools section，加上 dotnetsdk '{NAME}'，NAME為剛剛設定的.NET SDK NAME

```yaml
tools {
        dotnetsdk 'dotnetsdk6'
      }
```

#### 完整使用方式

完整pipeline如下

```groovy
pipeline {
  agent any
  environment {

  }
  tools {
    dotnetsdk 'dotnetsdk6'
  }
  stages {
    stage('Clean workspace') {
      steps {
        cleanWs()
      }
    }
    stage('Git Checkout') {
      steps {
        git branch: 'master', credentialsId: 'credentialsId', url: 'git_url'
      }
    }
    stage('Restore packages') {
      steps {
        dotnetRestore project: 'Project_Name', workDirectory: 'Project_Path'
      }
    }
    stage('Build') {
      steps {
        dotnetBuild project: 'Project_Name', workDirectory: 'Project_Path'
      }
    }
    stage('Publish') {
      steps {
        dotnetPublish configuration: 'Release', project: 'Project_Name', workDirectory: 'Project_Path'
      }
    }
    stage('Clean') {
      steps {
        dotnetClean project: 'Project_Name', workDirectory: 'Project_Path'
      }
    }
  }
```

#### 參考資料
- https://plugins.jenkins.io/dotnet-sdk/#documentation
- https://www.jenkins.io/doc/book/pipeline/syntax/#supported-tools
