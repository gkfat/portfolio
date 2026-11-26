---
title: 打卡 QR Code 產生器
slug: 2025-punch-qrcode-generator
description: 定時產生 OTP Code，並以此產生打卡 QR Code 的小工具。
tech:
  - Vue
  - TypeScript
  - Vuetify
year: 2025
github: https://github.com/gkfat/punch-qrcode-generator
url: https://punch-qrcode-generator.pages.dev
type: work
images:
  - /images/works/2025-punch-qrcode-generator/1.png
industry: "企業內部（出勤打卡）"
roles:
  - "程式開發"
---

## Overview

定時產生 OTP Code，並以此產生打卡 QR Code 的小工具。

## Business Problem

- 打卡需要防止重複使用的 QR Code，靜態 QR Code 容易被翻拍冒用

## Discovery

- 打卡最終在 LINE LIFF 完成，QR Code 需導向正確的 LIFF 連結

## Proposed Solution

依 secret 定時產生 OTP Code，再依 OTP Code 產生 QR Code，並組裝連結導向 Line Liff，完成打卡。

### Key Features

- 依 secret 產生 OTP Code
- 依 OTP Code 產生 QR Code
- 組裝連結導向 Line Liff，完成打卡

## Architecture

- 純前端工具：依 secret 產生 OTP，再產生 QR Code 與 LIFF 連結

## Implementation

- 定時輪替 OTP Code，QR Code 隨之更新

## Challenges & Trade-offs

- 以時間型 OTP 讓 QR Code 定時失效，提升安全性，代價是需確保裝置時間準確

## Evaluation & Results

- 尚未量測：目前沒有可追溯的量化數據。

## Demo

- 線上網站：[https://punch-qrcode-generator.pages.dev](https://punch-qrcode-generator.pages.dev){:target="_blank"}
- 原始碼：[GitHub](https://github.com/gkfat/punch-qrcode-generator){:target="_blank"}
- 操作畫面：見下方圖片列表

## Lessons Learned

- 小工具也要先想清楚安全模型，例如 QR Code 被翻拍的風險
