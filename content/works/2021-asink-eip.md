---
title: 內部入口網站 Asink EIP
slug: 2021-asink-eip
description: 公司內部入口網站，串連工廠 ERP 系統，快速掌握工單進度狀況及產線人力分配。
tech:
  - Angular
  - TypeScript
  - Python
  - MariaDB
year: 2022
type: work
industry: "製造業（工廠內部管理）"
roles:
  - "PO"
  - "程式開發"
---

## Overview

公司內部入口網站，串連工廠 ERP 系統。

## Business Problem

管理端需要快速掌握工單進度狀況與產線人力分配。

## Discovery

- 使用者為管理端與各部門人員，需要即時掌握工單進度與產線人力
- 資料來源為既有工廠 ERP，入口網站不取代 ERP，只做串接與呈現

## Proposed Solution

建立內部入口網站並串接工廠 ERP 系統，將工單進度與人力分配集中呈現，並提供帳號權限與部門管理。

### Key Features

- 帳號權限系統
- 部門管理系統
- 檔案上傳管理
- PMC 管理
- Cronjob
- 部署與維護

## Architecture

- Angular 前端 + Python 後端，資料存於 MariaDB
- 後端串接工廠 ERP 取得工單資料，並以 Cronjob 定期同步
- 帳號權限與部門管理控制資料可見範圍

## Implementation

- ERP 資料以 Cronjob 定期同步，避免前端直接查詢 ERP
- 依部門與角色控管功能權限

## Challenges & Trade-offs

- 以排程同步取代即時查詢 ERP：降低對 ERP 的負載，代價是資料有同步延遲

## Evaluation & Results

- 尚未量測：目前沒有可追溯的量化數據。

## Lessons Learned

- 整合既有企業系統時，先釐清資料擁有者與同步頻率，比介面設計更關鍵
