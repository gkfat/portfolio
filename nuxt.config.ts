export default defineNuxtConfig({
    // 禁用自動添加尾隨斜線
    site: { trailingSlash: false },

    // SSG 模式 - 混合預渲染策略 + 效能優化
    nitro: { 
        prerender: { 
            routes: ['/sitemap.xml'],
            crawlLinks: true,
        },
        // 效能優化
        minify: true,
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
                    rel: 'canonical', href: process.env.SITE_DOMAIN || 'https://portfolio-cbf.pages.dev', 
                },
                {
                    rel: 'preconnect', href: 'https://fonts.googleapis.com',
                },
                {
                    rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '',
                },
                {
                    rel: 'stylesheet', 
                    href: 'https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap',
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
});
