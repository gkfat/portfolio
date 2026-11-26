---
title: 派車系統（LINE LIFF 預約 × 管理後台）
slug: 2024-welcabin-admin
description: 長照接送派車系統：乘客透過 LINE LIFF 預約，需求單直接串接到管理後台，與內勤電話接單集中調度，消弭資訊落差。
tech:
  - Vue
  - TypeScript
  - Vuetify
  - Line Liff
year: 2026
url: https://admin-web-welcabin.rickson.com.tw
type: work
images:
  - /images/works/2024-welcabin-admin/3.png
  - /images/works/2024-welcabin-admin/4.png
  - /images/works/2024-welcabin-admin/2.png
  - /images/works/2024-welcabin-admin/1.png
  - /images/works/2024-welcabin-admin/5.png
  - /images/works/2024-welcabin-liff/1.png
  - /images/works/2024-welcabin-liff/2.png
  - /images/works/2024-welcabin-liff/3.png
  - /images/works/2024-welcabin-liff/4.png
  - /images/works/2024-welcabin-liff/5.png
  - /images/works/2024-welcabin-liff/6.png
industry: "長照交通（接送派車）"
roles:
  - "程式開發"
  - "UI / UX 設計（LINE LIFF 端）"
featured:
  order: 2
  context: "長照接送車行：乘客透過 LINE 自助預約、內勤以電話接單，再集中安排車趟。"
  problem: "預約需求來自多個管道、資訊分散，車行難以集中管控與安排車趟。"
  outcome: "長期合作專案，系統持續擴充（AI 排班、復康訂車、乘客簽到），提供線上 Demo；量化成效尚未量測。"
  capabilities:
    - "System Integration"
    - "LINE LIFF"
    - "調度流程設計"
  mockup:
    desktop: "/images/works/2024-welcabin-admin/3.png"
    mobile: "/images/works/2024-welcabin-liff/3.png"
---

## Overview

長期合作專案：為長照領域的車行接送開發一套結合 LINE LIFF 與 Admin Web 的派車系統。乘客端用 LINE LIFF 自助預約，車行內勤用管理後台集中調度，兩端共用同一張調度單。

## Business Problem

長照預約派車的需求來自多個管道（乘客自行送單、內勤電話接單），資訊分散，車行難以集中管控與安排車趟。

## Discovery

- 利害關係人：乘客與家屬（預約）、車行內勤（調度）、司機（執行任務）
- 現況：LIFF 送單與電話接單分散在不同管道，容易漏派、漏確認
- 需求：所有需求單集中在同一份調度列表

## Proposed Solution

- 乘客透過 LINE LIFF 表單預約，需求單直接串接到後台，消弭資訊落差
- 內勤電話接單時，由後台代為建立調度單，與 LIFF 送單集中在同一份列表
- 儀表板主動列出需要處理的單，降低漏派、漏確認的風險

::welcabin-actors
::

### Key Features

- 乘客端（LINE LIFF）
  - 自助預約，支援單次與重複預約、多位聯絡人與多趟行程
  - 訂單查詢
- 管理後台
  - 調度單管理：建單、派車、改派、狀態追蹤
  - 儀表板提醒待處理事項
  - 基礎資料管理：個案、司機車輛、地址簿
- 訂單全流程：進件、估價、派車、接送、收款、司機分帳、補助申請到結案
- 外部系統串接：車資估價
- 司機端（LINE LIFF）：任務列表
- AI 排班：匯入訂單、車種與預約設定、自動排路線、地圖與時間軸檢視、下載班表
- 復康訂車：客服代訂、乘客自助與代理人預約、時段劃位保留
- 乘客簽到：免註冊掃碼簽到、知情同意、家屬行程追蹤
- 多營運單位共用同一套程式

## Architecture

### 核心流程

::welcabin-flows
::

### 系統說明

- 乘客端 LINE LIFF 與管理後台共用同一張調度單；外部系統串接車資估價

## Implementation

- 電話接單由後台代建調度單，與 LIFF 送單集中於同一份列表
- 儀表板主動列出待處理的單，降低漏派風險
- 多營運單位共用同一套程式

## Challenges & Trade-offs

- 乘客端使用 LINE LIFF 而非獨立 App：免安裝、貼近長照族群的使用習慣，代價是受限於 LINE 平台能力

## Evaluation & Results

- 尚未量測：目前沒有可追溯的量化數據。
- 已知狀態：長期合作專案，功能持續擴充中。

## Demo

- 管理後台：[admin-web-welcabin.rickson.com.tw](https://admin-web-welcabin.rickson.com.tw){:target="_blank"}
- LINE LIFF 預約：[welcabin-line.rickson.com.tw](https://welcabin-line.rickson.com.tw){:target="_blank"}
- 操作畫面：見下方圖片列表

## Lessons Learned

- 多管道進件的關鍵是「單一資料來源」，讓所有需求落在同一份調度單
