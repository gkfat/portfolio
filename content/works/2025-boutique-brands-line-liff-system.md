---
title: 多家精品品牌行銷系統開發
slug: 2025-boutique-brands-line-liff-system
description: 協助開發行銷所需系統功能。
tech:
  - React
  - TypeScript
  - Node.js
  - Firebase
  - Line Liff
  - AppSmith
year: 2025
type: work
industry: "精品零售（品牌行銷）"
roles:
  - "程式開發"
---

## Overview

為多家精品品牌開發行銷所需的系統功能。

## Business Problem

品牌需要透過 Line Liff 與後台，提供桌布收藏、預約與主視覺等行銷互動。

## Discovery

- 多個品牌需要透過 LINE 與客戶互動：桌布收藏、預約與主視覺展示
- 品牌團隊需能自行在後台維護內容

## Proposed Solution

拆成桌布櫃、預約與主視覺三個模組，各自由 Server API、後台維護與 Line Liff 前端組成。

### Key Features

- 桌布櫃模組
  - 後台維護桌布系列、Line Liff 收藏桌布系列
- 預約模組
  - 業務端綁定與客戶備註、客戶端註冊與預約
- 主視覺模組
  - 後台維護主視覺、Line Liff 顯示當期主視覺

## Architecture

- React / LINE LIFF 前端 + Node.js Server，資料存於 Firebase
- 後台以 AppSmith 建置，供品牌團隊維護內容
- 桌布櫃、預約、主視覺三個模組各自由 API、後台與 LIFF 組成

## Implementation

- 模組化拆分，讓不同品牌可依需求組合功能

## Challenges & Trade-offs

- 後台採 AppSmith 低程式碼工具：快速交付內部管理介面，代價是客製彈性較低

## Evaluation & Results

- 尚未量測：目前沒有可追溯的量化數據。

## Lessons Learned

- 多品牌共用系統時，模組化與設定化比為單一品牌客製更有效率
