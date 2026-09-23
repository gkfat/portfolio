---
title: 末日冒險 Roguelike GkBot Adventure Run
slug: 2026-gkbot-adventure-run
description: 一款像素風 Roguelike 冒險手遊，玩家在 GkBot 浩劫後的廢棄設施中反覆探索、戰鬥、拾荒求生，含完整的裝備、天賦、任務與抽獎系統。
tech:
  - Nuxt
  - Vue
  - TypeScript
  - Vuetify
  - Firebase
  - Zod
year: 2026
github: https://github.com/gkfat/gkbot-adventure-run
type: side_project
images:
  - /images/works/2026-gkbot-adventure-run/1.jpg
  - /images/works/2026-gkbot-adventure-run/2.jpg
  - /images/works/2026-gkbot-adventure-run/3.jpg
  - /images/works/2026-gkbot-adventure-run/4.jpg
  - /images/works/2026-gkbot-adventure-run/5.jpg
  - /images/works/2026-gkbot-adventure-run/6.jpg
  - /images/works/2026-gkbot-adventure-run/7.jpg
---

## 專案項目

公元 5487 年，GK 公司量產的勞力機器人「GkBot」無預警攻擊人類，倖存者只能孤身深入各處廢棄的 GK 公司設施，靠一次次的探索遠征（roguelike run）戰鬥、拾荒、賭運氣存活下來。這是一款以此世界觀為背景的像素風 Roguelike 冒險手遊，從戰鬥引擎、裝備養成到抽獎商店都是自己從零設計實作。

### 主要功能

- 冒險核心
  - 節點式關卡（戰鬥／事件／休息／選擇／祝福等）組成的 run 狀態機，依戰力動態生成章節與關卡難度
  - 基於種子的 Deterministic RNG，確保同一場戰鬥結果可重現、可驗證
  - 戰鬥、休息、事件節點觸發角色與敵人的喃喃自語文案，強化沉浸感
- 角色養成
  - 力量／敏捷／體質／幸運四維屬性點分配，衍生生命值、攻擊、防禦、攻速、爆擊、閃避等戰鬥數值
  - 裝備系統：稀有度分級、負重系統（力量與體質決定可承受重量）、武器熟練度
  - 天賦樹（分 Tier 逐層解鎖）與角色技能系統
- 商店與收集
  - 每日補給、老虎機抽道具、SR/R/N 稀有度補給櫃
  - 每日／常駐任務與成就系統、怪物圖鑑
- 體驗細節
  - 角色走路/受擊像素動畫、戰鬥特效
  - 音效與 BGM
  - 帳密／Google／LINE／手機 OTP 多種登入方式

### 技術重點

- Nuxt 4（SPA 模式）+ Vuetify 3 + Firebase（client 端 Auth、firebase-admin 操作 Firestore）
- Server 端採 Service/Repository 分層架構，統一的 `AppError` 錯誤處理與 Zod 驗證貫穿 API 請求/回應與 Firestore 文件結構
- 依 Zod schema 自動產生 OpenAPI 文件（`@asteasolutions/zod-to-openapi`），API 契約與 runtime 驗證共用同一份定義
- spec-driven 開發流程，功能規格與變更皆以 openspec 文件追蹤

<br>

## 負責角色

- 遊戲設計
- 架構設計
- 程式開發
- 美術素材處理
