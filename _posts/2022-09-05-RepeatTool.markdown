---
layout: post
title: 開發簡易影像辨識腳本小工具
date: 2022-09-05 00:00:00 +0000
description:  使用pythongui加上簡易設定，讓遊戲重複動作自動完成
img: repeat.jpg
fig-caption:
tags: [python,pyautogui]
---

這是一個因為遊戲中的重複作業實在是太麻煩了，又浪費時間，所做出來的小工具
網路上搜了半天沒有找到一個同時包含腳本、辨識的輕量化小工具，因此想自己開發一個
Library也非常簡單，主要以下三個就好，辨識 & 控制滑鼠、鍵盤

- pyautogui
- cv2
- json

## 設定檔 (config.json)

為了讓使用者可以自行編輯腳本，規劃設定檔如下
1. image: 代表此動作要影像辨識
2. command: 輸入影像實體路徑
3. dir: 對圖片做的動作 (left、right 左右鍵)

```json
{"type":"image", "command":"A.jpg","dir":"left", "alt":"A_alt.jpg"},
```
1. button: 代表此動作要按下某按鈕
2. command: 按下的按鈕
3. dir: 留空

```json
{"type":"button","command":"num0","dir":""},
```

1. long: 代表此動作要按下滑鼠
2. command: 留空
3. dir: left、right 左右鍵

```json
{"type":"long","command":"","dir":"left"}
```

而組合而成後，就代表要先辨識A圖片後按下左鍵 => 按下數字鍵0 => 按下滑鼠左鍵

```json
{"type":"image", "command":"A.jpg","dir":"left", "alt":"A_alt.jpg"},
{"type":"button","command":"num0","dir":""},
{"type":"long","command":"","dir":"left"}
```

## 程式碼

程式啟用後鍵入的設定

1. 次數: 跑config.json流程的次數
2. 信度: 辨識圖片的信度，越高越嚴謹
3. 間格秒數: 每個流程的間隔
4. 灰度匹配: 先轉成黑白在辨識

```python
runtime = input("次數: ")
conf = float(input("信度: "))
sec = float(input("間隔秒數: "))
isGray = input("啟用灰度匹配 (Y/N): ").upper()
```

將設定檔轉為JSON物件，讓不同type跑不同的動作

```python

for i in jsonObject:
   type = i["type"]
   commmand = i["command"]
   dir = i["dir"]

   if type == "button":
      press(commmand)
   elif type == "image":
      path = img_dir + commmand
      if not locate_click(path, alt_path, t=0.35, button = dir): 
            break;
   elif type == "long":
      long_click(button=dir)
   else:
      print("not defind")

   time.sleep(sec)
```

辨識圖片則是locateOnScreen檢查有沒有圖片在當前螢幕中後點擊

```python
box = locateOnScreen(img,confidence=conf, grayscale=isGrayscale)
print(imgname, "found at:\n\t", box)
if box is None:
   if alt is not None:
      locate_click(alt, button=button)     
   print("找不到圖片" + imgname)
```

這樣一個簡單的腳本小工具就完成了，
後續只要更改Config.json即可，小工具Repo如以下連結
[FFXIV_Cook_Guildleve](https://github.com/dks50217/FFXIV_Cook_Guildleve)











