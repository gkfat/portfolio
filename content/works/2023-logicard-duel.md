---
title: 卡牌冒險遊戲 Logicard Duel
slug: 2023-logicard-duel
description: 從單純的撲克比大小邏輯延伸發展出的卡牌冒險遊戲，代入 RPG 元素，讓玩家以擊敗敵人，獲得戰利品及經驗值為角色升級為動力，引發遊玩興趣。
tech:
  - Vue
  - TypeScript
  - Vuetify
  - Cloudflare Worker
  - Cloud Storage
year: 2025
type: side_project
github: https://github.com/gkfat/logicard-duel
url: https://logicard-duel.pages.dev
images:
  - /images/works/2023-logicard-duel/1.png
  - /images/works/2023-logicard-duel/2.png
  - /images/works/2023-logicard-duel/3.png
  - /images/works/2023-logicard-duel/4.png
  - /images/works/2023-logicard-duel/5.png
  - /images/works/2023-logicard-duel/6.png
  - /images/works/2023-logicard-duel/7.png
  - /images/works/2023-logicard-duel/8.png
  - /images/works/2023-logicard-duel/9.png
industry: "遊戲"
roles:
  - "PO"
  - "程式開發"
---

## Overview

從單純的撲克比大小邏輯延伸發展出的卡牌冒險遊戲。

## Business Problem

單純的比大小玩法缺少持續遊玩的動力。

## Discovery

- 比大小玩法本身缺少重複遊玩的動力
- 目標：在簡單規則上加入成長與收集要素

## Proposed Solution

代入 RPG 元素：玩家擊敗敵人、獲得戰利品與經驗值，為角色升級，引發遊玩興趣。

### Key Features

- 遊戲流程邏輯設計與開發
- 前端視覺設計與開發
- NPC 邏輯設計與開發
- 部署與維護

## Architecture

- Vue 前端遊戲，Cloudflare Worker 提供後端功能，資源存於 Cloud Storage

## Implementation

- 遊戲流程與 NPC 行為邏輯設計

## Challenges & Trade-offs

- 以 Serverless（Cloudflare Worker）取代自建伺服器：降低維運成本，但需遵守其執行限制

## Evaluation & Results

- 尚未量測：目前沒有可追溯的量化數據。

## Demo

- 線上網站：[https://logicard-duel.pages.dev](https://logicard-duel.pages.dev){:target="_blank"}
- 原始碼：[GitHub](https://github.com/gkfat/logicard-duel){:target="_blank"}
- 操作畫面：見下方圖片列表

## Lessons Learned

- 遊戲設計需要先驗證核心循環是否有趣，再擴充內容
