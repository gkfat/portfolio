<template>
    <v-container
        :id="NavItems.Project"
        class="mb-10"
        fluid
    >
        <v-row class="mb-8">
            <v-col cols="12">
                <p class="text-h5 text-center font-weight-medium">
                    {{ t('nav.' + NavItems.Project) }}
                </p>
            </v-col>
            <v-col col="12">
                <v-divider
                    thickness="3"
                    class="w-25 mx-auto"
                />
            </v-col>
        </v-row>

        <!-- 專案 -->
        <v-row class="align-stretch">
            <v-col
                v-for="project of projects"
                :key="project.title"
                cols="12"
                sm="6"
                md="4"
            >
                <ProjectCard :project="project" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

import ProjectCard from '@/components/ProjectCard.vue';
import { NavItems } from '@/enums/nav-items';
import { Types } from '@/types/types';

const { t } = useI18n();

const projects: Types.Project[] = [
    {
        title: '台積心築藝術季',
        time: '2021',
        subtitle: '前端網站開發',
        items: [
            '網站視覺與流程設計',
            'Motion vision 製作',
            '部署與維護',
        ],
        techStacks: [
            { text: 'HTML', icon: 'mdi-language-html5' },
            { text: 'CSS', icon: 'mdi-language-css3' },
            { text: 'JavaScript', icon: 'mdi-language-javascript' },
        ],
        linkUrl: 'https://demo-tsmc-art-festival-2021.pages.dev',
    },
    {
        title: '海禾通商',
        time: '2022~2024',
        subtitle: '網站改版 & RWD',
        items: [
            '靜態網站加上 RWD',
            '部署與維護',
            '使用 Vue3 + TypeScript 重構網站',
            '開發基於 md 檔的文章系統',
        ],
        techStacks: [
            { text: 'HTML', icon: 'mdi-language-html5' },
            { text: 'CSS', icon: 'mdi-language-css3' },
            { text: 'JavaScript', icon: 'mdi-language-javascript' },
            { text: 'Vue', icon: 'mdi-vuejs' },
            { text: 'VueX', icon: 'mdi-vuejs' },
            { text: 'TypeScript', icon: 'mdi-language-typescript' },
        ],
        linkUrl: 'https://www.thlk.com.tw',
    },
    {
        title: '齊柏林基金會 EDM',
        time: '2021',
        subtitle: 'EDM 切版',
        items: [
            'EDM 模板設計',
        ],
        techStacks: [
            { text: 'HTML', icon: 'mdi-language-html5' },
        ],
        linkUrl: 'https://demo-cpf-edm.pages.dev/edm.html',
    },
    {
        title: 'Logicard Duel',
        time: '2023',
        subtitle: '前端遊戲規劃 & 開發',
        items: [
            '遊戲流程邏輯設計與開發',
            '前端視覺設計與開發',
            'Google App Script 串接',
            'NPC 邏輯設計與開發',
            '部署與維護',
        ],
        techStacks: [
            { text: 'Vue', icon: 'mdi-vuejs' },
            { text: 'VueX', icon: 'mdi-vuejs' },
            { text: 'TypeScript', icon: 'mdi-language-typescript' },
            { text: 'Cloudflare', icon: 'mdi-cloud-outline' },
        ],
        linkUrl: 'https://logicard-duel.pages.dev/',
    },
    {
        title: 'IKEA 活動網頁切版',
        time: '2021',
        subtitle: '前端開發',
        items: [
            '前端 RWD 網頁開發',
        ],
        techStacks: [
            { text: 'HTML', icon: 'mdi-language-html5' },
            { text: 'CSS', icon: 'mdi-language-css3' },
            { text: 'JavaScript', icon: 'mdi-language-javascript' },
        ],
        linkUrl: 'https://demo-2021-ikea-csr-campaign.pages.dev',
    },
    {
        title: 'CNC MES 系統',
        time: '2024',
        subtitle: '前端開發',
        items: [
            '帳號＆權限',
            '客戶＆供應商管理',
            '料件管理',
            '報價單＆訂單＆採購單管理',
            'MES 管理',
        ],
        techStacks: [
            { text: 'Vue', icon: 'mdi-vuejs' },
            { text: 'VueX', icon: 'mdi-vuejs' },
            { text: 'Vuetify', icon: 'mdi-vuetify' },
            { text: 'TypeScript', icon: 'mdi-language-typescript' },
        ],
        linkUrl: undefined,
    },
    {
        title: '派車系統',
        time: '2024',
        subtitle: '前端開發',
        items: [
            '個案＆司機管理',
            '主控版卡片式呈現',
            '報價單管理',
        ],
        techStacks: [
            { text: 'Vue', icon: 'mdi-vuejs' },
            { text: 'VueX', icon: 'mdi-vuejs' },
            { text: 'Vuetify', icon: 'mdi-vuetify' },
            { text: 'TypeScript', icon: 'mdi-language-typescript' },
        ],
        linkUrl: undefined,
    },
];
</script>
