---
title: 看見齊柏林基金會電子報
slug: 2021-cpf-edm
description: 齊柏林基金會 EDM 模板排版。
tech:
  - HTML
year: 2021
type: work
github: https://github.com/gkfat/cpf-edm
url: https://demo-cpf-edm.pages.dev/edm.html
images:
  - /images/works/2021-cpf-edm/1.png
  - /images/works/2021-cpf-edm/2.png
industry: "非營利組織（電子報）"
roles:
  - "程式開發"
---

## Overview

為基金會製作的電子報（EDM）模板排版。

## Business Problem

電子報需要一份排版穩定、可重複使用的模板。

## Discovery

- 電子報需在各家郵件軟體中正確顯示，且能重複套用

## Proposed Solution

完成 EDM 模板的切版與排版，提供可預覽的 Demo。

### Key Features

- EDM 模板排版

## Architecture

- 純 HTML 模板，以表格排版與 inline style 確保郵件軟體相容性

## Implementation

- 以郵件相容的表格排版完成切版

## Challenges & Trade-offs

- 採表格排版而非現代 CSS 版面：程式較冗長，但郵件軟體相容性最好

## Evaluation & Results

- 尚未量測：目前沒有可追溯的量化數據。

## Demo

- 線上網站：[https://demo-cpf-edm.pages.dev/edm.html](https://demo-cpf-edm.pages.dev/edm.html){:target="_blank"}
- 原始碼：[GitHub](https://github.com/gkfat/cpf-edm){:target="_blank"}
- 操作畫面：見下方圖片列表

## Lessons Learned

- 郵件環境的限制與一般網頁差異很大，需先確認目標郵件軟體
