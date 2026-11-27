---
title: CNC MES 系統
slug: 2024-cnc-mes
description: 整合 MES 加工/製造/生產管理的控制後台，現場可掃描 QRCode 登錄資料進後台，即時追蹤工單狀況。
tech:
  - Vue
  - TypeScript
  - Vuetify
year: 2024
order: 1
type: work
images:
  - /images/works/2024-cnc-mes/1.jpg
  - /images/works/2024-cnc-mes/2.jpg
  - /images/works/2024-cnc-mes/3.jpg
industry: "製造業（CNC 加工）"
roles:
  - "程式開發"
featured:
  order: 2
  context: "CNC 加工廠的報價、訂單、採購與現場生產，都需要追蹤到每一張工單。"
  problem: "現場生產進度仰賴人工回報，管理端無法即時掌握每張工單的狀況。"
  outcome: "已實作現場掃描 QR Code 登錄與工單即時追蹤；量化成效尚未量測。"
  capabilities:
    - "Workflow Automation"
    - "Admin Dashboard"
    - "帳號權限"
  mockup:
    desktop: "/images/works/2024-cnc-mes/1.jpg"
---

## Overview

整合 MES（加工、製造、生產管理）的控制後台，涵蓋從客戶、料件到報價、訂單、採購與生產追蹤的完整管理流程。

## Business Problem

製造現場的生產狀況需要即時回報到後台，管理端才能掌握每張工單的進度。

## Discovery

- 利害關係人：管理端（追蹤進度）、現場人員（回報生產）
- 現況：生產進度靠人工回報，資訊延遲且容易遺漏
- 限制：現場操作需簡單，不能增加太多輸入負擔

## Proposed Solution

現場人員掃描 QR Code 即可將資料登錄進後台，管理端即時追蹤工單狀況，把現場生產資訊數位化。

::cnc-mes-actors
::

### Key Features

- 帳號＆權限
- 客戶＆供應商管理
- 料件管理
- 報價單＆訂單＆採購單管理
- MES 管理（QR Code 登錄、工單追蹤）

## Architecture

### 核心流程

::cnc-mes-flow
::

### 系統說明

- 同一張流程卡貫穿報價、生產到出貨；現場每站掃描 QR Code 回報，後台匯整成進度表

## Implementation

- 以 QR Code 掃描取代手動輸入，降低現場回報成本
- 報價單、訂單、採購單與工單之間的資料串連

## Challenges & Trade-offs

- 採 QR Code 掃描而非自動化設備串接：導入成本低、不需改動現場設備，代價是仍需人員主動掃描

## Evaluation & Results

- 尚未量測：目前沒有可追溯的量化數據。

## Demo

- 操作畫面：見下方圖片列表

## Lessons Learned

- 現場數位化的關鍵是降低操作門檻，流程設計比功能數量更重要
