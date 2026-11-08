---
title: Facet yourself 多維度自我分析
slug: 2026-facet-yourself
description: AI 個人特質分析 Web App，整合星座、血型、MBTI、生命靈數、八字、人類圖等多個系統與自我評量測驗，並以可追溯來源的規則疊合成綜合報告，再由 OpenAI 產出詳細分析。
tech:
  - Nuxt
  - Vue
  - TypeScript
  - Vuetify
  - Firebase
  - OpenAI
  - Zod
  - Vitest
year: 2026
github: https://github.com/gkfat/facet-yourself
url: https://facet-yourself.vercel.app
type: side_project
images:
  - /images/works/2026-facet-yourself/1.jpg
  - /images/works/2026-facet-yourself/2.jpg
  - /images/works/2026-facet-yourself/3.jpg
  - /images/works/2026-facet-yourself/4.jpg
  - /images/works/2026-facet-yourself/5.jpg
  - /images/works/2026-facet-yourself/6.jpg
  - /images/works/2026-facet-yourself/7.jpg
  - /images/works/2026-facet-yourself/8.jpg
  - /images/works/2026-facet-yourself/9.jpg
  - /images/works/2026-facet-yourself/10.jpg
---

## 專案項目

單一命理或性格系統只能看到自己的一個面向。這個專案想從不同角度認識自己，再把結果疊合成一份屬於使用者的報告。Nuxt 4 SPA 搭配 Nitro server，部署於 Vercel，資料存於 Firestore。

### 主要功能

- 多系統固定內容
  - 星座、血型、MBTI、生命靈數、Maya Kin、八字、人類圖
  - 星座與人類圖命盤以 `astronomy-engine` 計算，八字以 `lunar-typescript` 推算
  - 塔羅、盧恩、星座運勢等每日狀態系統
- 自我評量測驗
  - 16 型人格測驗，以及 Big Five、九型、HEXACO 等量表
  - 以統一框架定義，新增一種測驗只需加定義檔，並自動納入綜合報告可選系統
- 綜合報告
  - 可選 2–4 個維度合併，依固定區塊順序組裝（位置、重點、概述、事實、總結、交互影響、建議、限制）
  - 跨系統的特質互動卡，協助看出不同系統之間的共通與矛盾
- AI 詳細報告
  - 以 OpenAI 依報告內容產生詳細章節，回應後於背景執行，並有品質檢查
- 會員與點數
  - 訪客可先以 guest session 使用，登入後可認領紀錄
  - 點數制與多維度定價、付款流程

### 工程細節

- 報告以純函式組裝：同一份輸入一定得到同一份報告。每個系統只需實作 adapter，轉成共用的 `SystemReportInput`，區塊順序與推論規則共用
- 推論只從畫面上顯示的事實出發：事實的 term 對應到 28 個特質軸，再以規則找出特質兩兩互動。報告的每句話都帶有來源，不產生無來源的句子；規則措辭有驗證，限制使用保守用語、禁用診斷與財務用語
- Server 分層為 route handler → service → repository，Firestore 只經 `firebase-admin` 存取，`firestore.rules` 全擋 client；存取控制集中於單一規則表，預設需登入
- API 輸入輸出皆以 Zod schema 驗證，前後端共用契約
- 以 CI 腳本檢查 client bundle 不洩漏 server secret
- 採用 OpenSpec 以規格驅動開發，並產出系統分析文件；Vitest 搭配記憶體版 fake Firestore，不需 emulator 即可測試

<br>

## 負責角色

- 系統分析
- UI/UX 設計
- 程式開發
