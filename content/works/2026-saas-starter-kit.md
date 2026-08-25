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
---

## 專案項目

許多店家或品牌都需要「會員系統」：讓客人加入會員、累積點數、領優惠券、升等 VIP、線上預約。這個專案把這些常見需求整理成一套可以直接套用的範本，採 Monorepo 架構拆分為後台管理介面、獨立 API Server，以及讓客人在 LINE 裡直接使用的會員卡三個子系統。

### 立即體驗

- 後台管理介面：[saas-starter-kit-admin.web.app](https://saas-starter-kit-admin.web.app){:target="_blank"}
- LINE 會員卡：[點此開啟](https://liff.line.me/2010923466-SNdYbl8E){:target="_blank"}（會直接在 LINE App 內開啟，需在手機 LINE 裡點擊才能正常登入）

### 主要功能

- 會員與權限管理
  - 帳密（主要）、Google、LINE、手機 OTP 多種登入方式，支援綁定同一帳號
  - Hybrid RBAC 權限系統：角色（superadmin / admin / member）決定身分，並可在後台以 `resource:action` 細粒度動態調整權限
  - 管理員帳號管理、登入紀錄、稽核紀錄，操作皆受權限保護
- VIP 等級
  - 依消費或點數自動計算會員等級
- 點數
  - 發放點數、設定折抵比例、查詢紀錄
- 優惠券
  - 建立優惠券、發放給會員、現場核銷使用
- 活動公告
  - 上架/下架行銷活動
- 預約模組
  - 服務項目、提供者、時段模板管理，會員可線上預約與取消
- 儀表板
  - 會員成長趨勢等關鍵指標一覽
- 環境與體驗
  - Firestore collection 依環境（dev/prod）加前綴隔離，同一專案可安全共用
  - 內建繁體中文 / 英文多語系切換
  - 統一 API 錯誤訊息在地化與全域 Toast 通知

### LINE 會員卡

客人不需要額外註冊帳號密碼，用 LINE 就能直接開通會員卡，在裡面查看自己的等級、點數與優惠券，並可直接進行線上預約，結帳時出示 QR Code 讓店家掃碼核銷。

<br>

## 負責角色

- 架構設計
- 程式開發
- 自動化部署建置
