---
title: 個人投資組合績效管理 App
slug: 2024-investment-portfolio
description: 紀錄個人交易紀錄，掌握投資組合績效狀況，掌握市場即時報價。
tech:
  - Vue
  - TypeScript
  - Vuetify
  - Redis
  - Postgres
  - Nest.js
  - Google OAuth
  - Grafana Cloud / Loki logs
  - Swagger
  - Render
year: 2024
github: https://github.com/gkfat/gk-app
type: side_project
images:
  - /images/works/2024-investment-portfolio/1.png
  - /images/works/2024-investment-portfolio/2.png
  - /images/works/2024-investment-portfolio/3.png
  - /images/works/2024-investment-portfolio/4.png
  - /images/works/2024-investment-portfolio/5.png
  - /images/works/2024-investment-portfolio/6.png
  - /images/works/2024-investment-portfolio/7.png
  - /images/works/2024-investment-portfolio/8.png
industry: "個人理財"
roles:
  - "PO"
  - "程式開發"
---

## Overview

個人投資組合績效管理 App，紀錄交易、掌握績效與市場即時報價。

## Business Problem

個人投資人需要集中紀錄交易，才能掌握投資組合的績效狀況與市場即時報價。

## Discovery

- 交易紀錄分散時難以計算整體投資組合績效
- 需要市場即時報價才能掌握當下績效

## Proposed Solution

建置含會員與角色權限的全端應用：以交易紀錄計算投資組合績效，並串接金融即時報價。

### Key Features

- 會員系統
- RBAC 角色權限管理
- 投資組合管理
- 交易記錄管理
- 金融即時報價
- Auditing／操作紀錄
- IAM／角色與權限管理

## Architecture

- Vue 前端 + Nest.js API，資料存於 Postgres，Redis 作為快取
- Google OAuth 登入，RBAC 控制權限
- Grafana Cloud / Loki 收集日誌，Swagger 產生 API 文件，部署於 Render

## Implementation

- 以交易紀錄計算投資組合績效
- RBAC 與 IAM 角色權限管理，並記錄操作稽核紀錄（Auditing）
- 即時報價串接與快取

## Challenges & Trade-offs

- 即時報價以 Redis 快取：降低外部 API 呼叫次數，代價是報價可能有短暫延遲

## Evaluation & Results

- 尚未量測：目前沒有可追溯的量化數據。

## Demo

- 原始碼：[GitHub](https://github.com/gkfat/gk-app){:target="_blank"}
- 操作畫面：見下方圖片列表

## Lessons Learned

- 個人專案也導入稽核紀錄與集中日誌，有助於練習 Production 等級的可觀測性
