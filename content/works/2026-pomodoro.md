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
---

## 專案項目

市面上的番茄鐘不是功能太多就是太陽春，這個專案想做一個「開了就能用、結束了會提醒、事後看得到成果」的專注計時器。純前端 SPA，所有資料存在瀏覽器 localStorage，不需要帳號與後端。

### 主要功能

- 計時
  - 專注 → 休息自動切換，支援暫停、繼續與 Reset
  - 以結束時間戳計算剩餘時間，分頁在背景或電腦睡眠後回到前景也能立即校正，不會因 timer 被瀏覽器節流而失準
  - 重新整理頁面可還原進行中的計時
- 自訂時間
  - 專注時間 5–120 分鐘（5 分鐘為單位）、休息時間 30 秒–120 分鐘（30 秒為單位），拖曳條即時顯示
  - 內建 10 秒測試模式，方便驗證提醒流程，且不計入統計
- 專注模式
  - 開始計時後畫面只留下時鐘，專注中背景緩慢呼吸、休息時切換為另一種色調
  - 顯示今日第幾輪與預計結束時間
- 階段結束提醒
  - 頁內視覺提示、提示音與瀏覽器系統通知三種管道，任一失敗不影響其他管道
  - 8 種提示音可選（含原創旋律的 Marimba、Glass Bell、Harp、Jazz Piano、Blues Guitar 等），音檔以靜態資源隨專案發佈，離線可用
- 專注紀錄
  - 月曆總覽：每天累計的專注時數一目了然
  - 每日時間軸：以直條呈現每一輪專注發生在幾點，並標示目前時間線
  - 只累計「完整完成」的專注，中途 Reset 與休息時間不計入
- 響應式版面
  - 桌機三欄並列；手機改為底部導覽（Summary / Focus / Daily），一次專注在一個區塊
  - 提供 PWA manifest，可加入主畫面當 App 使用

### 工程細節

- 計時狀態機（IDLE / WORKING / BREAK / PAUSED）集中於單一 engine，非法狀態轉換一律拒絕，UI 不直接修改倒數時間
- localStorage 內容一律視為不可信：讀取時逐欄位驗證，損毀或舊版資料自動降級，不影響計時
- 採用 OpenSpec 以規格驅動開發，並以 Vitest 為計時引擎、設定、統計與提醒邏輯撰寫單元測試

<br>

## 負責角色

- UI/UX 設計
- 程式開發
