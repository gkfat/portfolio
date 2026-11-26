---
title: 模組化快速建置 SaaS 會員系統
slug: 2026-saas-starter-kit
description: 一套可快速套用的 SaaS 會員系統範本，Monorepo 架構含後台管理、API Server 與 LINE 會員卡三個子系統，涵蓋會員、RBAC 權限、等級、點數、優惠券、活動、預約等常見功能。
tech:
  - Nuxt
  - Vue
  - TypeScript
  - Vuetify
  - Vite
  - Nitro
  - Firebase
  - Line Liff
year: 2026
github: https://github.com/gkfat/saas-starter-kit
url: https://saas-starter-kit-admin.web.app
type: side_project
images:
  - /images/works/2026-saas-starter-kit/1.jpg
  - /images/works/2026-saas-starter-kit/2.jpg
  - /images/works/2026-saas-starter-kit/3.jpg
  - /images/works/2026-saas-starter-kit/4.jpg
  - /images/works/2026-saas-starter-kit/5.jpg
  - /images/works/2026-saas-starter-kit/6.jpg
  - /images/works/2026-saas-starter-kit/7.jpg
  - /images/works/2026-saas-starter-kit/8.jpg
  - /images/works/2026-saas-starter-kit/9.jpg
  - /images/works/2026-saas-starter-kit/10.jpg
  - /images/works/2026-saas-starter-kit/11.jpg
  - /images/works/2026-saas-starter-kit/12.jpg
  - /images/works/2026-saas-starter-kit/13.jpg
  - /images/works/2026-saas-starter-kit/14.jpg
  - /images/works/2026-saas-starter-kit/15.jpg
  - /images/works/2026-saas-starter-kit/16.jpg
  - /images/works/2026-saas-starter-kit/17.jpg
  - /images/works/2026-saas-starter-kit/18.jpg
  - /images/works/2026-saas-starter-kit/19.jpg
  - /images/works/2026-saas-starter-kit/20.jpg
  - /images/works/2026-saas-starter-kit/21.jpg
  - /images/works/2026-saas-starter-kit/22.jpg
  - /images/works/2026-saas-starter-kit/23.jpg
  - /images/works/2026-saas-starter-kit/24.jpg
  - /images/works/2026-saas-starter-kit/25.jpg
industry: "店家會員經營（SaaS）"
roles:
  - "架構設計"
  - "程式開發"
  - "自動化部署建置"
featured:
  order: 3
  context: "店家與品牌普遍需要會員、點數、優惠券、VIP 等級與線上預約等會員經營功能。"
  problem: "每次導入會員系統都得從零開發，耗時又重複。"
  outcome: "個人專案（範本），已部署可操作的後台與 LINE 會員卡 Demo；導入成效尚未量測。"
  capabilities:
    - "SaaS Architecture（Monorepo）"
    - "RBAC"
    - "LINE LIFF"
    - "自動化部署"
  mockup:
    desktop: "/images/works/2026-saas-starter-kit/1.jpg"
    mobile: "/images/works/2026-saas-starter-kit/20.jpg"
---

## Overview

可快速套用的 SaaS 會員系統範本，採 Monorepo 架構，拆分為後台管理介面、獨立 API Server，以及讓客人在 LINE 裡直接使用的會員卡三個子系統。

## Business Problem

許多店家或品牌都需要「會員系統」：讓客人加入會員、累積點數、領優惠券、升等 VIP、線上預約，但每次都得從零開發。

## Discovery

- 常見需求：會員、點數、優惠券、VIP 等級、活動、預約
- 目標：功能模組化，可依店家需求挑選套用

## Proposed Solution

把這些常見需求整理成一套可以直接套用的範本：後台管理會員與營運，API Server 提供服務，客人用 LINE 就能直接開通會員卡，不需要額外註冊帳號密碼。

### 角色互動

::saas-actors
::

### Key Features

- 會員與權限管理
  - 帳密、Google、LINE、手機 OTP 多種登入方式，支援綁定同一帳號
  - Hybrid RBAC 權限系統：角色決定身分，並可在後台細粒度動態調整權限
  - 管理員帳號管理、登入紀錄、稽核紀錄
- VIP 等級：依消費或點數自動計算會員等級
- 點數：發放點數、設定折抵比例、查詢紀錄
- 優惠券：建立、發放給會員、現場核銷
- 活動公告：上架與下架行銷活動
- 預約模組：服務項目、提供者、時段模板管理，會員可線上預約與取消
- 儀表板：會員成長趨勢等關鍵指標
- LINE 會員卡：查看等級、點數與優惠券，線上預約，結帳時出示 QR Code 核銷
- 環境與體驗：dev 與 prod 環境隔離、繁體中文與英文多語系、統一錯誤訊息與 Toast 通知

## Architecture

### 核心流程

::saas-flows
::

### 系統說明

- Monorepo 拆分為後台管理介面、獨立 API Server、LINE 會員卡三個子系統，部署於 Firebase

## Implementation

- Hybrid RBAC：角色決定身分，並可在後台細粒度動態調整權限
- 多種登入方式（帳密、Google、LINE、手機 OTP）綁定同一帳號
- dev 與 prod 環境隔離，自動化部署

## Challenges & Trade-offs

- Monorepo 讓三個子系統共用型別與工具，代價是建置與部署設定較複雜

## Evaluation & Results

- 尚未量測：目前沒有可追溯的量化數據。

## Demo

- 後台管理介面：[saas-starter-kit-admin.web.app](https://saas-starter-kit-admin.web.app){:target="_blank"}
- LINE 會員卡：[點此開啟](https://liff.line.me/2010923466-SNdYbl8E){:target="_blank"}（會直接在 LINE App 內開啟，需在手機 LINE 裡點擊才能正常登入）
- 操作畫面：見下方圖片列表

## Lessons Learned

- 範本的價值在於模組邊界清楚，讓功能可以獨立啟用或移除
