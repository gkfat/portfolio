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
            name: 'author',
            content: siteConfig.siteName,
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
        },
    ],
});
</script>
