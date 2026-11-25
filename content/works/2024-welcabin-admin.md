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
---

## Overview

長期合作專案：為長照領域的車行接送開發一套結合 LINE LIFF 與 Admin Web 的派車系統。乘客端用 LINE LIFF 自助預約，車行內勤用管理後台集中調度，兩端共用同一張調度單。

### Live Demo

- 管理後台：[admin-web-welcabin.rickson.com.tw](https://admin-web-welcabin.rickson.com.tw){:target="_blank"}
- LINE LIFF 預約：[welcabin-line.rickson.com.tw](https://welcabin-line.rickson.com.tw){:target="_blank"}

## Business Challenge

長照預約派車的需求來自多個管道（乘客自行送單、內勤電話接單），資訊分散，車行難以集中管控與安排車趟。

## Solution

- 乘客透過 LINE LIFF 表單預約，需求單直接串接到後台，消弭資訊落差
- 內勤電話接單時，由後台代為建立調度單，與 LIFF 送單集中在同一份列表
- 儀表板主動列出需要處理的單，降低漏派、漏確認的風險

::welcabin-actors
::

## 核心流程

::welcabin-flows
::

## Key Features

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

## My Role

- 程式開發
- UI / UX 設計（LINE LIFF 端）
