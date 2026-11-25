---
title: 售票機介面開發
slug: 2025-ticket-vending-machine-interface
description: 整合 BFF 與地端服務的售票機介面開發。
tech:
  - Angular
  - TypeScript
year: 2025
order: 2
type: work
---

## Overview

售票機介面，運行於觸控螢幕，整合 BFF 後端、地端服務與多種硬體，並支援離線購票與語音購票。

## Business Challenge

售票機要在同一個介面完成購票、取票、付款與出票，流程分支多，還要整合 BFF、地端服務與現金機、刷卡機等硬體；網路中斷時也必須持續服務。

## Solution

使用 Angular 19 重新開發介面，以 WebView 與地端服務交互、整合 BFF 資料流；系統化控管複雜流程，並以 Service Worker 與離線模組，確保一定程度的離線操作性。

::tvm-actors
::

## 核心流程

::tvm-flows
::

## Key Features

- 線上購票與取票
- 現金與刷卡付款、出票
- 離線購票，連線恢復後補傳
- 語音購票
- 多語系與音效
- 維修與測試的機器模式
- 使用 Playwright 撰寫 e2e 整合流程測試

## My Role

- 程式開發
