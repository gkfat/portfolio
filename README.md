# Portfolio

個人作品集網站，展示開發經歷與專案作品。

## Tech Stack

- **Framework**: Nuxt 3 + Vue 3 + TypeScript
- **UI**: Vuetify + Material Design Icons
- **Content**: Nuxt Content (Markdown-based)
- **Build**: SSG (Static Site Generation)

## Features

- 響應式設計 (RWD)
- 多語系支援 (中文/英文)
- Markdown 內容管理
- Material Design UI
- 靜態站點生成
- 作品分類篩選 (合作案例/Side Projects)

## Development

```bash
# 安裝依賴
pnpm install

# 開發模式
pnpm dev

# 建構
pnpm build

# 生成靜態站點
pnpm generate
```

## Project Structure

```
├── content/          # Markdown 內容
│   ├── works/        # 作品集
│   ├── experience/   # 工作經歷  
│   └── en/          # 英文內容
├── views/           # 頁面元件
├── components/      # UI 元件
└── types/           # TypeScript 定義
```