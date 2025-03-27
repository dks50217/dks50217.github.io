---
layout: post
title: 如何使用Google開源模型SpeciesNet
date: 2025-03-26 00:00:00 +0000
description: 如何使用Google開源模型SpeciesNet
img: SpeciesNet.png
fig-caption:
tags: [SpeciesNet,AI]
---

在 AI 技術持續突破的今天，Google 推出了令人興奮的開源模型 SpeciesNet，專為辨識野生動物而設計。這個模型訓練於數千萬張由相機偵測拍攝的實際照片，能夠自動識別超過 2000 種動物物種與相關標籤。對於從事生態研究、環境保護或開發自然觀察應用的開發者來說，SpeciesNet 提供了一個強大的工具，不僅大幅減少人工標記的時間，也為全球生物多樣性的監測打開了新局。

## 模型組合架構（Ensemble）

該系統包含兩個 AI 模型，分別負責不同任務：

### 1. MegaDetector（目標偵測器）
- 用途：從影像中找出 **動物、人類、車輛** 等目標。
- 特點：**不辨識動物的種類**，僅提供「有動物」這類粗略判斷。
- 適合用於初步過濾與目標區域偵測。

### 2. SpeciesNet（物種分類器）
- 架構：採用 Google 訓練的 **EfficientNet V2 M** 架構。
- 分類能力：可辨識超過 **2000 個標籤**，包含：
  - 各種動物物種（例如：獅子、長頸鹿）
  - 高階分類群（如：哺乳類 *Mammalia*、貓科 *Felidae*）
  - 非動物類別（如：「空白」、「車輛」）
- 訓練資料：
  - 來自 Wildlife Insights 社群的整理影像
  - 公開資料庫，總數超過 **6,500 萬張相機陷阱影像**
- 功能：提供物種層級的影像分類結果。

### 🔗 整合方式
- 使用**啟發式規則（heuristics）**整合 MegaDetector 和 SpeciesNet 的輸出。
- 可選擇使用**地理資訊**以提升分類準確性。
- 最終為每張影像提供 **單一分類結果**。


這篇文章是紀錄實際應用 & 自己筆記用

## 安裝Python環境

1. 安裝 [Miniforge](https://github.com/conda-forge/miniforge/releases/latest/download/Miniforge3-Windows-x86_64.exe)

2. 安裝完成後開啟 Miniforge Prompt

<img src="../assets/img/SpeciesNet/SpeciesNet-1.png">

3. 輸入以下指令建立環境名稱:speciesnet

```bash
conda create -n speciesnet python=3.11 pip -y
```
4. 啟動speciesnet環境

```bash
conda activate speciesnet
```

5. 如出現以下代表環境建立成功

<img src="../assets/img/SpeciesNet/SpeciesNet-2.png">


## 安裝SpeciesNet

```bash
pip install speciesnet
```

## 簡易測試


1. 輸入以下指令執行預測

```bash
python -m speciesnet.scripts.run_model --folders "{需要辨識的圖片來源資料夾路徑}" --predictions_json "{輸出的json檔案}"
```

<img src="../assets/img/SpeciesNet/SpeciesNet-3.png">


2. 結果如下，把結果先丟給ChatGPT分析prediction區塊看來查看其含義


### 分類階層解析（從大到小）

| 分類層級       | 名稱                                  | 說明                                |
|----------------|---------------------------------------|-------------------------------------|
| UUID           | `18188307-3bda-4990-84eb-893863202d22` | 此筆分類資料的唯一識別碼            |
| 綱（Class）    | `mammalia`                            | 哺乳綱，哺乳類動物                   |
| 目（Order）    | `carnivora`                           | 食肉目，例如狗、貓、熊、鼬等         |
| 科（Family）   | `herpestidae`                         | 貓鼬科（獴科，mongoose family）     |
| 屬（Genus）    | `herpestes`                           | 一種貓鼬的屬                         |
| 種（Species）  | `urva`                                | *Herpestes urva*，蟹獴               |
| 常見名稱       | `crab-eating mongoose`                | 中文為「蟹獴」，以螃蟹為食的小型哺乳動物 |


<br>

```json
Predictions:
{
    "predictions": [
        {
            "filepath": "image/demo.JPG",
            "classifications": {
                "classes": [
                    "18188307-3bda-4990-84eb-893863202d22;mammalia;carnivora;herpestidae;herpestes;urva;crab-eating mongoose",
                    "341cda2b-34df-4391-a61e-ba063bbe2f9a;mammalia;carnivora;herpestidae;herpestes;ichneumon;egyptian mongoose",
                    "37b83705-ecdf-406d-923a-12a736fd56f3;mammalia;carnivora;herpestidae;ichneumia;albicauda;white-tailed mongoose",
                    "f1f22711-ef94-4cf8-a051-128182debc01;mammalia;carnivora;herpestidae;herpestes;smithii;ruddy mongoose",
                    "86f5b978-4f30-40cc-bd08-be9e3fba27a0;mammalia;rodentia;sciuridae;sciurus;carolinensis;eastern gray squirrel"
                ],
                "scores": [
                    0.9012179374694824,
                    0.05760936066508293,
                    0.004107112064957619,
                    0.003590901382267475,
                    0.0035770961549133062
                ]
            },
            "detections": [
                {
                    "category": "1",
                    "label": "animal",
                    "conf": 0.9165332913398743,
                    "bbox": [
                        0.5145527124404907,
                        0.22821350023150444,
                        0.12545955181121826,
                        0.09449891000986099
                    ]
                }
            ],
            "prediction": "18188307-3bda-4990-84eb-893863202d22;mammalia;carnivora;herpestidae;herpestes;urva;crab-eating mongoose",
            "prediction_score": 0.9012179374694824,
            "prediction_source": "classifier",
            "model_version": "4.0.0a"
        }
    ]
}
```

## 其餘應用待補

* bbox area
* admin1_region
* country
* etc..


#### 參考資料
- https://github.com/google/cameratrapai?tab=readme-ov-file
- https://github.com/google/cameratrapai/blob/main/installing-python.md
- https://www.inside.com.tw/article/37737-google-opensources-speciesnet