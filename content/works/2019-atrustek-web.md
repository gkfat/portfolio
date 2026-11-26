---
title: 金融科技網站 Atrustek Fintech SaaS
slug: 2019-atrustek-web
description: 個人金融顧問網站，從 KYC 分析到股票、外匯投資理財管理，一應俱全。
tech:
  - Angular
  - TypeScript
year: 2021
type: work
url: https://www.atrustek.com/cis/home
images:
  - /images/works/2019-atrustek-web/1.png
  - /images/works/2019-atrustek-web/2.png
  - /images/works/2019-atrustek-web/3.png
  - /images/works/2019-atrustek-web/4.png
industry: "金融科技（個人理財顧問）"
roles:
  - "PM"
  - "程式開發"
---

## Overview

個人金融顧問網站，從 KYC 分析到股票、外匯投資理財管理，一應俱全。

## Business Problem

個人投資人需要在同一個平台完成風險評估（KYC）、研究投資標的，並管理自己的投資組合。

## Discovery

- 使用者為個人投資人，需在同一平台完成 KYC、研究標的與管理投資組合
- 既有網站需支援多語系，原架構難以擴充
- 範圍限制：模擬交易，不涉及真實下單

## Proposed Solution

以會員系統為基礎，整合股票篩選器、投資組合模擬交易與論壇，並重構多語系架構。

### Key Features

- 會員系統
- 多語系重構
- 論壇系統
- 股票篩選器
- 投資組合模擬交易系統
- 部署與維護

## Architecture

- Angular SPA 前端，透過 API 取得會員、股票篩選與投資組合資料
- 會員系統作為各功能模組（論壇、篩選器、模擬交易）的共用基礎

## Implementation

- 多語系架構重構：將文案抽離為語系檔，新增語系不需改動元件
- 股票篩選器的條件組合與結果呈現

## Challenges & Trade-offs

- 多語系採全面重構而非逐頁修補：前期成本較高，但後續新增語系與維護成本低

## Evaluation & Results

- 尚未量測：目前沒有可追溯的量化數據。
- 已知狀態：網站已上線。

## Demo

- 線上網站：[https://www.atrustek.com/cis/home](https://www.atrustek.com/cis/home){:target="_blank"}
- 操作畫面：見下方圖片列表

## Lessons Learned

- 多語系應在專案初期就規劃，事後重構的成本遠高於一開始設計
