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
url: https://gkbot-adventure-run.vercel.app
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
  - /images/works/2026-gkbot-adventure-run/8.jpg
  - /images/works/2026-gkbot-adventure-run/9.jpg
  - /images/works/2026-gkbot-adventure-run/10.jpg
  - /images/works/2026-gkbot-adventure-run/11.jpg
industry: "遊戲"
roles:
  - "遊戲設計"
  - "架構設計"
  - "程式開發"
  - "美術素材處理"
---

## Overview

一款像素風 Roguelike 冒險手遊：玩家在 GkBot 浩劫後的廢棄設施中反覆探索、戰鬥、拾荒求生，含完整的裝備、天賦、任務與抽獎系統。

## Business Problem

- 想打造一款可反覆遊玩、具養成深度的 Roguelike 手遊

## Discovery

- 核心體驗：每次冒險不同，但戰鬥結果可重現、可驗證

## Proposed Solution

以公元 5487 年、勞力機器人「GkBot」攻擊人類的世界觀為背景，從戰鬥引擎、裝備養成到抽獎商店，全部從零設計實作。

### Key Features

- 冒險核心
  - 節點式關卡（戰鬥、事件、休息、選擇、祝福等）組成的 run 狀態機，依戰力動態生成章節與關卡難度
  - 基於種子的 Deterministic RNG，同一場戰鬥結果可重現、可驗證
- 角色養成
  - 四維屬性點分配、裝備與負重系統、天賦樹與技能系統
- 商店與收集
  - 每日補給、老虎機抽道具、稀有度補給櫃
  - 每日與常駐任務、成就系統、怪物圖鑑
  - 賽季制排行榜與信箱系統
- 體驗細節
  - 像素動畫與戰鬥特效、音效與 BGM
  - 帳密、Google、LINE、手機 OTP 多種登入方式

## Architecture

- Nuxt 4 SPA + Vuetify，Firebase Auth 與 Firestore
- Server 端 Service / Repository 分層

## Implementation

- Nuxt 4（SPA 模式）+ Vuetify 3 + Firebase（client 端 Auth、firebase-admin 操作 Firestore）
- Server 端採 Service/Repository 分層架構，統一的 `AppError` 錯誤處理與 Zod 驗證貫穿 API 請求與回應，以及 Firestore 文件結構
- 依 Zod schema 自動產生 OpenAPI 文件，API 契約與 runtime 驗證共用同一份定義
- spec-driven 開發流程，功能規格與變更皆以 openspec 文件追蹤

## Challenges & Trade-offs

- 採種子式 Deterministic RNG：戰鬥可重現、方便除錯與防作弊，代價是隨機邏輯需更嚴謹設計

## Evaluation & Results

- 尚未量測：目前沒有可追溯的量化數據。

## Demo

- 線上網站：[https://gkbot-adventure-run.vercel.app](https://gkbot-adventure-run.vercel.app){:target="_blank"}
- 原始碼：[GitHub](https://github.com/gkfat/gkbot-adventure-run){:target="_blank"}
- 操作畫面：見下方圖片列表

## Lessons Learned

- 遊戲系統越多，越需要以規格與 schema 管理資料一致性
