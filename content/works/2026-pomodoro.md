---
title: Pomodoro 專注計時器
slug: 2026-pomodoro
description: 純前端的番茄鐘 Web App，支援自訂專注/休息時間、階段自動切換、專注模式、多種提示音與系統通知，並以月曆與每日時間軸回顧專注紀錄。
tech:
  - Vue
  - TypeScript
  - Vuetify
  - Vite
  - Vitest
year: 2026
github: https://github.com/gkfat/pomodoro
url: https://pomodoro.gkgkdesign.workers.dev/
type: side_project
images:
  - /images/works/2026-pomodoro/1.jpg
  - /images/works/2026-pomodoro/2.jpg
  - /images/works/2026-pomodoro/3.jpg
  - /images/works/2026-pomodoro/4.jpg
  - /images/works/2026-pomodoro/5.jpg
  - /images/works/2026-pomodoro/6.jpg
  - /images/works/2026-pomodoro/7.jpg
industry: "生產力工具"
roles:
  - "UI/UX 設計"
  - "程式開發"
---

## Overview

純前端的番茄鐘 Web App，支援自訂專注與休息時間、階段自動切換、專注模式、多種提示音與系統通知，並以月曆與每日時間軸回顧專注紀錄。

## Business Problem

市面上的番茄鐘不是功能太多就是太陽春。

## Discovery

- 既有番茄鐘不是功能過多就是過於陽春
- 限制：不需帳號與後端，資料存在瀏覽器

## Proposed Solution

做一個「開了就能用、結束了會提醒、事後看得到成果」的專注計時器。純前端 SPA，所有資料存在瀏覽器 localStorage，不需要帳號與後端。

### Key Features

- 計時：專注與休息自動切換，分頁在背景或電腦睡眠後回到前景也能立即校正
- 自訂時間：專注與休息時間皆可調整，並有 10 秒測試模式
- 專注模式：畫面只留下時鐘，專注與休息使用不同色調
- 階段結束提醒：頁內視覺提示、提示音與系統通知，任一失敗不影響其他管道
- 專注紀錄：月曆總覽與每日時間軸，只累計完整完成的專注
- 響應式版面：桌機三欄、手機底部導覽，並支援 PWA

## Architecture

- 純前端 SPA（Vue + Vuetify），資料存於 localStorage，支援 PWA

## Implementation

- 計時狀態機集中於單一 engine，非法狀態轉換一律拒絕，UI 不直接修改倒數時間
- 以結束時間戳計算剩餘時間，不因瀏覽器節流 timer 而失準
- localStorage 內容一律視為不可信：讀取時逐欄位驗證，損毀或舊版資料自動降級
- 採用 OpenSpec 以規格驅動開發，並以 Vitest 為計時引擎、設定、統計與提醒邏輯撰寫單元測試

## Challenges & Trade-offs

- 資料只存在瀏覽器：零維運、免登入，代價是無法跨裝置同步

## Evaluation & Results

- 尚未量測：目前沒有可追溯的量化數據。
- 已知狀態：計時引擎、設定、統計與提醒邏輯皆有 Vitest 單元測試。

## Demo

- 線上網站：[https://pomodoro.gkgkdesign.workers.dev/](https://pomodoro.gkgkdesign.workers.dev/){:target="_blank"}
- 原始碼：[GitHub](https://github.com/gkfat/pomodoro){:target="_blank"}
- 操作畫面：見下方圖片列表

## Lessons Learned

- 瀏覽器 timer 會被節流，計時應以時間戳計算而非累加
