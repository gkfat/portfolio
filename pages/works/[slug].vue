<template>
    <WorkDetailView :work="work" />
</template>

<script setup lang="ts">
import WorkDetailView from '~/views/works/WorkDetailView.vue';
import type { Work } from '~/types';

const route = useRoute();
const slug = route.params.slug as string;

const data = await queryContent('/works').where({ slug: slug }).findOne();

if (!data) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Work not found',
    });
}

// 整合並擴充作品資料
const work = computed<Work>(() => ({
    ...data,
    slug: slug,
    title: data.title || '',
    year: data.year || '',
    description: data.description,
    tech: data.tech || [],
    url: data.url,
    github: data.github,
    images: data.images || [],
}));

// SEO 設定 - 使用增強的 useSeo 並傳入內容資料
useSeo({ 
    key: 'work',
    contentData: work.value,
});

// JSON-LD 結構化資料
useSchemaOrg([
    {
        '@type': 'CreativeWork',
        name: work.value.title,
        description: work.value.description,
        author: {
            '@type': 'Person',
            name: '您的名字',
        },
        dateCreated: `${work.value.year}-01-01`,
        keywords: work.value.tech.join(', '),
    },
]);
</script>