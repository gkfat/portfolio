# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # 開發伺服器 (http://localhost:3000)
pnpm build        # SSR 建構
pnpm generate     # SSG 靜態生成（部署用）
pnpm preview      # 預覽已建構的靜態站
pnpm lint         # ESLint 自動修正（pre-commit hook 也會執行）
pnpm cf:build     # Cloudflare Pages 建構腳本
```

Node.js >= 22 / pnpm 9.15.2（見 `.nvmrc`）。

## Architecture

**Nuxt 3 / SSR**（Cloudflare Pages Functions），部署於 Cloudflare Pages。UI 框架為 **Vuetify 3**，內容由 **@nuxt/content** 驅動（Markdown 檔案）。

### 目錄職責

| 路徑 | 說明 |
|------|------|
| `pages/` | 路由頁面（薄層，只做資料查詢與 SEO 設定） |
| `views/` | 各頁面的 section 元件，按功能分組（`home/`、`works/`、`layout/`） |
| `components/ui/` | 可重用的無業務邏輯 UI 元件 |
| `content/works/` | 每件作品一個 Markdown 檔，front matter 定義 `Work` 型別欄位 |
| `content/experience/` | 工作經歷 Markdown，front matter 對應 `Experience` 型別 |
| `content/hide/` | 不在公開列表顯示的作品 |
| `config/config.ts` | 全站設定（`siteConfig`、`contactInfo`、`localeConfig`） |
| `seo/` | SEO 字典（`base.ts`、`i18n.ts`、`pages.ts`） |
| `types/index.ts` | 全域 TypeScript 型別 |

### 關鍵設計模式

**SEO**：透過 `composables/useSeo.ts` 統一管理。頁面呼叫 `useSeo({ key: 'home' })`，composable 從 `seo/i18n.ts` 取對應語系字典，支援 `{title}`、`{tech}` 等模板佔位符替換。

**Content 查詢**：作品頁（`pages/works/[slug].vue`）用 `queryContent('/works').where({ slug }).findOne()`；列表用 `queryContent('/works').find()`。首頁 Case Studies 由 `views/home/CaseStudiesView.vue` 查詢含 `featured` 欄位的作品，依 `featured.order` 排序。

**Vuetify**：透過 `plugins/vuetify.ts` 注冊，全域 Vite/Nuxt 設定皆已配置 transpile，直接使用 `v-*` 元件即可，無需 import。

### 新增作品流程

1. 在 `content/works/` 新增 Markdown 檔，front matter 需包含 `title`、`slug`、`year`、`description`、`tech[]`，可選 `url`、`github`、`type`（`work` / `poc` / `side_project`）、`period`、`industry`、`roles[]`、`images[]`。
   內文依 Case Study 模板的 h2 順序：Overview、Business Problem、Discovery、Proposed Solution、Architecture、Implementation、Challenges & Trade-offs、Evaluation & Results、Demo、Lessons Learned。尚未確認的段落不要放進 `content/`（草稿放在 gitignore 的 `local-notes/case-study-drafts/`），確認後才搬入；成果數據不得虛構，未量測者標示「尚未量測」。
2. 圖片放 `public/images/works/<slug>/`。
3. 若要列為首頁案例，在 front matter 加上 `featured`（`order`、`context`、`problem`、`outcome`、`capabilities[]`、`mockup.desktop` / `mockup.mobile`），型別見 `types/index.ts` 的 `FeaturedCase`。

### 部署

Cloudflare Pages 使用 `cf:build`（`nuxt build`，SSR）建構：Nitro 自動偵測 `CF_PAGES` 並輸出至 `dist/`（含 `_worker.js`），Pages 的 build output directory 須設為 `dist`。`CF_PAGES` 環境下 `@nuxt/image` 改用 `provider: 'none'`（Workers 無法執行 ipx/sharp）。`/` 以 `routeRules` 301 導向 `/home`。`pnpm generate` 仍可產生純靜態檔供本地檢查。
