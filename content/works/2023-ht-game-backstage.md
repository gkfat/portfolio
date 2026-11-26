---
title: 遊戲專案後台全端開發
slug: 2023-ht-game-backstage
description: 遊戲商後台，包含會員/道具/活動控制，另有排程服務，即時管理活動進行狀態。
tech:
  - Vue
  - TypeScript
  - Vuetify
  - Node.js
  - Redis
  - Mysql
  - MongoDB
  - Firebase
  - ELK
type: work
year: 2024
order: 2
images:
  - /images/works/2023-ht-game-backstage/1.png
  - /images/works/2023-ht-game-backstage/2.png
industry: "遊戲營運"
roles:
  - "程式開發"
---

## Overview

遊戲商後台，包含會員、道具與活動控制，另有排程服務。

## Business Problem

營運團隊需要即時管理活動的進行狀態。

## Discovery

- 使用者為遊戲營運團隊，需管理會員、道具與活動，並即時掌握活動狀態
- 活動有時間性，需排程自動切換狀態

## Proposed Solution

建置全端後台，提供帳號權限、會員與道具管理、各式活動設定與報表，並以排程服務處理定期工作與系統維護。

### Key Features

- 帳號權限系統
- 遊戲、會員管理功能
- 各式活動設定、道具設定與報表
- 跑馬燈管理功能
- 帳務報表
- Cronjob 與系統維護排程
- 部署與維護

## Architecture

- Vue 後台 + Node.js 服務
- 資料分散於 MySQL、MongoDB、Redis 與 Firebase，日誌以 ELK 集中
- 排程服務（Cronjob）處理活動狀態切換與系統維護

## Implementation

- 帳號權限系統控管營運人員可操作的功能
- 排程服務定期處理活動與維護工作

## Challenges & Trade-offs

- 多種資料庫各司其職，提升彈性，但增加維運與資料一致性的複雜度

## Evaluation & Results

- 尚未量測：目前沒有可追溯的量化數據。

## Demo

- 操作畫面：見下方圖片列表

## Lessons Learned

- 有時間性的營運功能，需要可觀測的排程與日誌，才能快速排查問題
