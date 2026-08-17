---
layout: post
title: 我寫了一個幫 DJ 排歌單的小程式
date: 2026-08-16 00:00:00 +0000
description: 把 DJ 的接歌手感拆成一道作業研究題目：用調性、BPM、能量走勢把「接得順不順」變成分數，再拿動態規劃跟 Pareto 前緣算出幾套各有取捨的歌單。
img: dj-set-planner.jpg
fig-caption:
tags: [作業研究, 動態規劃, 最佳化, DJ, C#]
---

放歌這件事，最麻煩的其實不是選歌，是「順序」。同樣那幾首歌，先放哪首後放哪首，出來的感覺可以差超多。前一首放很嗨、下一首突然變慢，舞池馬上就冷掉了；有時候兩首歌的調不合，接起來就是怪怪的、說不上來哪裡刺耳；不然就是整場都同一個能量，聽起來很平、很無聊。

厲害的 DJ 靠手感就搞定了。但我想說，這種東西有沒有可能讓電腦幫我算？所以就有了這個小程式。

## 先把「好不好聽」變成分數

電腦當然聽不懂音樂，所以我得先想辦法，把「接得順不順」拆成幾條電腦照著就能算的規則。

每首歌我先標三個東西：調（就是 DJ 圈在用的那個 Camelot 輪盤編號，像 8A、5A 那種）、BPM（快慢）、還有能量（有多嗨，我用 1 到 10）。

然後訂三條接歌的規則：

第一條，看調合不合。你可以把那些調想成時鐘上的刻度，相鄰的接起來就很順，隔壁的關係大小調也可以，亂跳就會刺耳。順的加分、撞調的扣分。

第二條，比 BPM 差多少。兩首 BPM 越接近越好接，差太多就會斷拍。差個三以內加很多分，差超過十二就直接扣。

第三條，看能量的走勢。能量一路往上堆會有那種越來越嗨的衝勁，可是你要是突然大掉，場子就冷了。所以往上加成、往下打折。

把整場每一次「這首接下一首」的分數全部加起來，就是這份歌單的總分了。

## 難的地方在這裡

假設我要從 20 首裡挑 8 首排順序，總共有幾種排法？答案是幾百億種以上。一種一種試，電腦根本算不完。

而且還有一個更煩的事情：「好」根本不是只有一種。我這個程式同時在看三件事，整場多嗨、接歌多順、高潮衝多高。這三個常常會打架。你要接歌超順，可能就衝不高；你要炸裂的高潮，接起來可能就沒那麼順。根本沒有唯一的標準答案，只有一堆各有取捨的選擇。

## 其實這就是一題「作業研究」

做到一半我才發現，這個排歌單的問題，跟工廠怎麼排產線、貨車怎麼跑路線最短，其實骨子裡是同一種東西。這不就是我們在讀的工業工程跟作業研究在幹的事嗎，一堆限制底下，用數學去找一個最好的安排。

對照起來還蠻剛好的：決定歌的先後，在 OR 裡就是排序、排程；從一堆歌先挑再排，叫組合最佳化。最有意思的是「上一首會影響下一首順不順」這種事，OR 裡叫順序相依成本，工廠換模、換線在算的就是它。至於要同時顧到嗨、順、高潮這三件會打架的事，那是多目標最佳化；最後吐出一組各有取捨的方案，就是所謂的 Pareto 效率前緣。

尤其「接不接得順，要看上一首是什麼」這點很關鍵，讓整題變得超像旅行推銷員問題（TSP），就是業務員要跑完所有城市，每段路有距離，怎麼跑總路程最短。你把城市換成歌、距離換成接得順不順，幾乎就是同一題。而這種題目麻煩的地方就在這裡：它是所謂的 NP-hard。講白一點，歌一多就別想又快又保證最佳。這也是為什麼我這個東西頂多算到二十幾首，再多電腦就吃不消了。

所以我做的，就是把 DJ 靠手感在做的事，拆成一條一條電腦算得動的規則，再拿課本裡的動態規劃跟 Pareto 前緣去解。

## 那動態規劃是什麼？

動態規劃聽起來很難，其實概念很簡單：算過的東西記下來，不要每次都從頭重算。

拿旅行來比喻好了。你要規劃一趟跑很多城市的路線，你不用把每一條完整路線都從頭走一遍，只要記住「走到某個城市、手上還剩哪些沒去」，後面再經過這裡的路線，就直接拿這個結果來用，不用重算。排歌單也是一樣，電腦只要記住「已經放了哪幾首、現在最後一首是什麼」，就不用一直重複計算。

至於「沒有唯一答案」那件事，我的做法是留一整組互不吃虧的方案。意思是，一套方案只要找不到另一套樣樣都比它強的，就留著。所以最後程式不是丟一個答案給我，而是給我好幾套風格不一樣的歌單，我今天想順一點還是想炸一點，自己挑。

## 實際跑起來長這樣

拿內建的 10 首曲庫、要編 6 首來說，程式一次吐出 11 套各有取捨的歌單。挑幾套來看就懂那個「取捨」是什麼意思了：

```
最嗨的一套（嗨度 61.2 | 流暢度 4.2 | 高峰 10）:
  Satisfaction → Opus → Insomnia → Levels → One → Strobe
  能量一路 7→8→8→9→9→10 往上堆，但中間 Levels→One 撞了一次調

最順的一套（嗨度 42.7 | 流暢度 7.1 | 高峰 9）:
  Titanium → One More Time → Around the World → Music Sounds Better with You → Opus → Levels
  每一接都順，但少了那記炸裂的高潮，也沒那麼嗨
```

一套嗨到頂但接歌會凸一下，一套從頭順到尾但沒有爆點，沒有誰對誰錯，就是看你今天想要哪種。中間那九套則是各種程度的折衷。

## 怎麼知道電腦沒算錯？

這個我還蠻在意的，所以特別寫了一段來驗算。

做法是拿一個很小的曲庫，一邊讓聰明的演算法算，另一邊我用最笨的方法，就是把每一種排法真的通通列出來，也算一次，然後兩邊對答案。要兩邊結果一模一樣，我才敢相信聰明的那版沒有偷偷算漏。就跟你用計算機算完、再手動驗算一次是一樣的意思。

## 老實講，這東西實用嗎？

我自己覺得，拿來「小範圍精算」很好用，但要它排整個曲庫，還差得遠。

它算得動的大概就二十幾首上限，再多真的會爆（前面講過那個排列爆炸是天生的，躲不掉）。可是真實的 DJ 曲庫動不動就上百上千首，所以比較實際的做法是：先用簡單規則粗篩，把上千首砍到十五到二十首候選，再丟給這個程式去精算順序。

還有一件事要老實說：電腦再怎麼算得準，它也只是很精準地照著「我訂的那幾條評分規則」去最佳化而已。那些規則到底貼不貼近真正好聽，才是最難的地方，而這部分還是得靠人一直去調。

程式碼放在 GitHub：[dks50217/DjSetPlanner](https://github.com/dks50217/DjSetPlanner)，用 C# / .NET 8 寫的，`dotnet run` 就能跑內建曲庫的 demo，也能餵自己的 CSV。

---

最後推薦一套讓我很有感的現場：**Armin van Buuren F2F Maddix @ A State of Trance 2025**。F2F 是 Armin 搞出來的玩法：兩個 DJ 面對面、各用一套分開的器材，看不到對方在點什麼歌，全靠手勢跟耳朵即時對。這比一般共用一台混音器、還能事先套好歌單的 B2B 更即興。整場的能量走勢跟每一次轉場都是當場喬出來的，我程式想算的那個「順」，他們靠手感直接就做到了。看完再回頭想想我那三條規則，會很有感覺。

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:1.5em 0;">
  <iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" src="https://www.youtube.com/embed/2-s3hXbDu7Y" title="Armin van Buuren F2F Maddix @ ASOT 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

順手把這場 set 的能量走勢畫成一張圖，五段（P1–P5）都是先掉到低點、再一路爬回高潮，那個呼吸感看圖就懂。

<figure style="margin:1.5em 0;">
<svg viewBox="0 0 720 300" xmlns="http://www.w3.org/2000/svg" style="width:100%;height:auto;display:block;border-radius:12px" role="img" aria-label="ASOT 2025 Armin F2F Maddix 這場 set 的能量隨時間變化，五段各自重置後爬升到高峰。">
<rect x="0" y="0" width="720" height="300" rx="12" fill="#0f0a17"/>
<line x1="34.0" y1="26" x2="34.0" y2="266" stroke="#54e0ff" opacity="0.2"/>
<text x="39.0" y="37" font-family="monospace" font-size="9" letter-spacing="1.5" fill="#6c6280">P1</text>
<rect x="179.3" y="26" width="149.1" height="240" fill="#fff" opacity="0.03"/>
<line x1="179.3" y1="26" x2="179.3" y2="266" stroke="#54e0ff" opacity="0.2"/>
<text x="184.3" y="37" font-family="monospace" font-size="9" letter-spacing="1.5" fill="#6c6280">P2</text>
<line x1="328.4" y1="26" x2="328.4" y2="266" stroke="#54e0ff" opacity="0.2"/>
<text x="333.4" y="37" font-family="monospace" font-size="9" letter-spacing="1.5" fill="#6c6280">P3</text>
<rect x="469.5" y="26" width="151.1" height="240" fill="#fff" opacity="0.03"/>
<line x1="469.5" y1="26" x2="469.5" y2="266" stroke="#54e0ff" opacity="0.2"/>
<text x="474.5" y="37" font-family="monospace" font-size="9" letter-spacing="1.5" fill="#6c6280">P4</text>
<line x1="620.6" y1="26" x2="620.6" y2="266" stroke="#54e0ff" opacity="0.2"/>
<text x="625.6" y="37" font-family="monospace" font-size="9" letter-spacing="1.5" fill="#6c6280">P5</text>
<line x1="34" y1="146.0" x2="710" y2="146.0" stroke="#2a2036" stroke-dasharray="2 5"/>
<text x="28" y="149.0" text-anchor="end" font-family="monospace" font-size="9" fill="#6c6280">E5</text>
<line x1="34" y1="26.0" x2="710" y2="26.0" stroke="#2a2036" stroke-dasharray="2 5"/>
<text x="28" y="29.0" text-anchor="end" font-family="monospace" font-size="9" fill="#6c6280">E10</text>
<rect x="35.0" y="122.0" width="47.9" height="144.0" rx="2.5" fill="hsl(330,52%,40%)"/>
<rect x="84.9" y="98.0" width="12.3" height="168.0" rx="2.5" fill="hsl(330,63%,47%)"/>
<rect x="99.2" y="74.0" width="30.6" height="192.0" rx="2.5" fill="hsl(330,74%,54%)"/>
<rect x="131.8" y="98.0" width="25.6" height="168.0" rx="2.5" fill="hsl(330,63%,47%)"/>
<rect x="159.4" y="74.0" width="18.9" height="192.0" rx="2.5" fill="hsl(330,74%,54%)"/>
<rect x="180.3" y="98.0" width="37.8" height="168.0" rx="2.5" fill="hsl(330,63%,47%)"/>
<rect x="220.1" y="74.0" width="29.8" height="192.0" rx="2.5" fill="hsl(330,74%,54%)"/>
<rect x="251.9" y="74.0" width="30.8" height="192.0" rx="2.5" fill="hsl(330,74%,54%)"/>
<rect x="284.6" y="50.0" width="26.8" height="216.0" rx="2.5" fill="hsl(330,85%,61%)"/>
<rect x="313.5" y="50.0" width="13.9" height="216.0" rx="2.5" fill="hsl(330,85%,61%)"/>
<rect x="329.4" y="98.0" width="23.8" height="168.0" rx="2.5" fill="hsl(330,63%,47%)"/>
<rect x="355.2" y="50.0" width="25.8" height="216.0" rx="2.5" fill="hsl(330,85%,61%)"/>
<rect x="383.0" y="74.0" width="21.9" height="192.0" rx="2.5" fill="hsl(330,74%,54%)"/>
<rect x="406.9" y="50.0" width="45.7" height="216.0" rx="2.5" fill="hsl(330,85%,61%)"/>
<rect x="454.6" y="74.0" width="13.9" height="192.0" rx="2.5" fill="hsl(330,74%,54%)"/>
<rect x="470.5" y="74.0" width="20.9" height="192.0" rx="2.5" fill="hsl(330,74%,54%)"/>
<rect x="493.4" y="50.0" width="32.8" height="216.0" rx="2.5" fill="hsl(330,85%,61%)"/>
<rect x="528.1" y="50.0" width="13.9" height="216.0" rx="2.5" fill="hsl(330,85%,61%)"/>
<rect x="544.0" y="26.0" width="25.0" height="240.0" rx="2.5" fill="#ffd24d" filter="url(#g)"/>
<rect x="571.1" y="26.0" width="48.5" height="240.0" rx="2.5" fill="#ffd24d" filter="url(#g)"/>
<rect x="621.6" y="74.0" width="15.9" height="192.0" rx="2.5" fill="hsl(330,74%,54%)"/>
<rect x="639.4" y="74.0" width="21.9" height="192.0" rx="2.5" fill="hsl(330,74%,54%)"/>
<rect x="663.3" y="50.0" width="31.8" height="216.0" rx="2.5" fill="hsl(330,85%,61%)"/>
<rect x="697.1" y="26.0" width="11.9" height="240.0" rx="2.5" fill="#ffd24d" filter="url(#g)"/>
<polyline points="58.9,122.0 91.0,98.0 114.5,74.0 144.6,98.0 168.9,74.0 199.2,98.0 235.0,74.0 267.3,74.0 298.1,50.0 320.4,50.0 341.3,98.0 368.1,50.0 394.0,74.0 429.7,50.0 461.5,74.0 480.9,74.0 509.7,50.0 535.1,50.0 556.6,26.0 595.3,26.0 629.5,74.0 650.4,74.0 679.2,50.0 703.0,26.0" fill="none" stroke="#ff3d8a" stroke-width="1.5" opacity="0.85"/>
<text x="30.2" y="288" text-anchor="middle" font-family="monospace" font-size="9" fill="#6c6280">00:00</text>
<text x="149.5" y="288" text-anchor="middle" font-family="monospace" font-size="9" fill="#6c6280">10:00</text>
<text x="268.7" y="288" text-anchor="middle" font-family="monospace" font-size="9" fill="#6c6280">20:00</text>
<text x="388.0" y="288" text-anchor="middle" font-family="monospace" font-size="9" fill="#6c6280">30:00</text>
<text x="507.3" y="288" text-anchor="middle" font-family="monospace" font-size="9" fill="#6c6280">40:00</text>
<text x="626.5" y="288" text-anchor="middle" font-family="monospace" font-size="9" fill="#6c6280">50:00</text>
<defs><filter id="g" x="-40%" y="-40%" width="180%" height="180%"><feDropShadow dx="0" dy="0" stdDeviation="3" flood-color="#ffd24d" flood-opacity="0.7"/></filter></defs>
</svg>
<figcaption style="font-size:13px;color:#888;margin-top:8px;line-height:1.6;">橫軸是演出時間、柱寬是每首歌播放的長度、柱高是能量，粉紅線是能量弧線，琥珀色柱是 E10 的高潮。時間與曲序取自實際 tracklist，能量為依段落結構的估計值。</figcaption>
</figure>
