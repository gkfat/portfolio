import { siteConfig } from './config/config';

// Cloudflare 部署（CF_PAGES 為 Pages build 環境變數）：Workers 無法執行 sharp/ipx
const isCloudflare = Boolean(process.env.CF_PAGES) || Boolean(process.env.NITRO_PRESET?.includes('cloudflare'));

export default defineNuxtConfig({
    compatibilityDate: '2026-06-14',

    // 禁用自動添加尾隨斜線
    site: {
        url: siteConfig.domain,
        name: siteConfig.siteName,
        trailingSlash: false,
    },

    // `/` 於 server 端 301 到 /home（不依賴 client JS，爬蟲可直接跟隨）
    routeRules: {
        '/': {
            redirect: {
                to: '/home', statusCode: 301, 
            },
        },
        // 派車系統 LIFF 與後台合併為同一個作品，舊網址 301 到合併後的頁面
        '/works/2024-welcabin-liff': {
            redirect: {
                to: '/works/2024-welcabin-admin', statusCode: 301,
            },
        },
    },

    // SSG 模式 - 混合預渲染策略 + 效能優化
    nitro: { 
        prerender: { 
            routes: ['/sitemap.xml', '/robots.txt'],
            crawlLinks: true,
        },
        // 效能優化
        minify: true,
        // Workers 需啟用 Node.js 相容層（@nuxt/content 等依賴）
        ...(isCloudflare ? { cloudflare: { nodeCompat: true } } : {}),
        compressPublicAssets: true,
        // 代碼分割優化
        rollupConfig: { output: { manualChunks: { 'vuetify-vendor': ['vuetify'] } } },
    },

    typescript: {
        strict: true,
        typeCheck: false,
    },

    css: [
        '@/assets/css/index.scss',
        '@/assets/css/markdown.scss',
        'vuetify/lib/styles/main.sass',
        '@mdi/font/css/materialdesignicons.min.css',
    ],

    // 模組
    modules: [
        '@nuxt/content',
        '@nuxt/eslint',
        '@nuxtjs/seo',
        '@nuxt/image',
    ],
    
    // @nuxt/image 配置
    image: {
        format: [
            'avif',
            'webp',
            'jpg',
        ],
        screens: {
            xs: 320,
            sm: 640,
            md: 768,
            lg: 1024,
            xl: 1280,
        },
        // Cloudflare Workers 無法使用 ipx(sharp)，改為直接輸出原圖
        ...(isCloudflare ? { provider: 'none' } : {}),
        quality: 80,
        densities: [1, 2],
        providers: { static: { provider: 'ipx' } },
    },

    // Content 模組設定
    content: {
        highlight: { theme: 'github-dark' },
        markdown: {
            anchorLinks: false,
            toc: {
                depth: 3,
                searchDepth: 3,
            },
        },
    },

    // SEO 和 meta 設定
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            htmlAttrs: { lang: 'zh-TW' },
            link: [
                {
                    rel: 'icon', type: 'image/x-icon', href: '/favicon.ico', 
                },
                {
                    rel: 'manifest', href: '/manifest.json', 
                },
                {
                    rel: 'preconnect', href: 'https://fonts.googleapis.com',
                },
                {
                    rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '',
                },
                {
                    rel: 'stylesheet', 
                    href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Inter:wght@300..800&display=swap',
                },
            ],
            script: [
                {
                    src: 'https://www.googletagmanager.com/gtag/js?id=G-VR45SF9JFN',
                    async: true,
                }, {
                    children: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-VR45SF9JFN');
                    `,
                },
            ],
        },
    },

    // CSS 以 <link> 引入，不 inline 進 HTML：
    // 否則 Vuetify / mdi 樣式約 850KB 會排在 OG meta 之前，LinkedIn 等爬蟲讀不到預覽標籤
    features: { inlineStyles: false },

    // 效能優化
    experimental: { 
        payloadExtraction: false,
        treeshakeClientOnly: true,
        componentIslands: true,
    },

    // 建構優化
    build: { transpile: ['vuetify'] },

    // Vite 配置 (Vuetify + 效能優化)
    vite: {
        define: { __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false },
        ssr: { noExternal: ['vuetify'] },
        build: {
            // 最小化配置
            minify: 'esbuild',
            cssCodeSplit: true,
        },
    },

    sitemap: {
        zeroRuntime: true,
        // `/` 為 redirect，不納入 sitemap
        exclude: ['/'],
        sources: ['/api/__sitemap__/urls'],
    },
});
