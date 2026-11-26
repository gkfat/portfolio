---
title: 腳踏車租借系統開發
slug: 2025-bicycle-rental-system
description: 包含後台、站點平台、客戶端、Line Liff 的完整腳踏車循環租借系統開發。
tech:
  - React
  - TypeScript
  - Node.js
  - Firebase
  - Line Liff
  - FCM
year: 2025
order: 1
type: work
industry: "交通租賃（腳踏車租借）"
roles:
  - "程式開發"
---

## Overview

完整的腳踏車循環租借系統，包含後台、站點平台、客戶端與 Line Liff。

## Business Problem

循環租借需要後台、站點與客戶端協同運作，才能管理車輛、營業時間、權限與銷售。

## Discovery

- 利害關係人：營運後台、站點人員、租車客戶
- 循環租借需要後台、站點與客戶端的資料一致

## Proposed Solution

以後台、Server、站點平台與客戶端組成完整系統，由 Server 提供 API 與 RBAC 權限，後台管理營運設定，站點平台負責現場銷售與通知。

### Key Features

- 後台
  - 權限設定、營業時間管理、系統設定、車輛管理
  - 主控板效能優化
  - 無限庫存商品功能
- Server
  - 基於 RBAC 架構的權限功能
  - 營業時間、系統設定與車輛管理
- 站點平台
  - 推播通知與 FCM 註冊流程
  - 商品報表
  - 銷售無限庫存商品

## Architecture

- React 前端（後台、站點平台、客戶端、LINE LIFF）+ Node.js Server
- Firebase 存放資料，FCM 推播通知站點
- Server 提供 API 與 RBAC 權限

## Implementation

- 基於 RBAC 的權限功能
- FCM 註冊與推播流程
- 主控板效能優化

## Challenges & Trade-offs

- 多端共用同一個 Server 與權限模型：一致性高，但每次權限調整需評估對各端的影響

## Evaluation & Results

- 尚未量測：目前沒有可追溯的量化數據。

## Lessons Learned

- 多端系統應先定義共用的權限與資料模型，再分別開發各端介面
