<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup lang="ts">
import { siteConfig } from '~/config/config';

// 全域 SEO 設定
useHead({
    titleTemplate: `%s | ${siteConfig.siteName}`,
    meta: [
        {
            name: 'description',
            content: '專業前端工程師，專精 Vue.js、React、TypeScript 開發，提供企業級前端解決方案',
        },
        {
            name: 'keywords',
            content: '前端工程師,Vue.js,React,TypeScript,網站開發,接案',
        },
        {
            name: 'author',
            content: siteConfig.seo.author,
        },
        {
            property: 'og:type',
            content: 'website',
        },
        {
            property: 'og:locale',
            content: 'zh_TW',
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image',
        },
    ],
    link: [
        {
            rel: 'icon',
            type: 'image/x-icon',
            href: '/favicon.ico',
        }, {
            rel: 'canonical',
            href: siteConfig.domain,
        },
    ],
});
</script>
