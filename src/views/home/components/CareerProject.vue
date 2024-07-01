<template>
    <v-container
        :id="NavItems.Project"
        class="mb-10"
        fluid
    >
        <v-row class="mb-8">
            <v-col cols="12">
                <p class="text-h5 text-center font-weight-medium">
                    {{ t('nav.' + NavItems.CareerProject) }}
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
        title: 'Atrustek Fintech SaaS',
        time: '2019~2021',
        subtitle: '網站前端開發 & 串接',
        items: [
            '會員系統',
            '多語系',
            '論壇系統',
            '股票篩選器',
            '投資組合模擬交易系統',
            '部署與維護',
        ],
        techStacks: [
            { text: 'Angular', icon: 'mdi-angular' },
            { text: 'NgRx', icon: 'mdi-angular' },
            { text: 'TypeScript', icon: 'mdi-language-typescript' },
            { text: 'Linux', icon: 'mdi-linux' }],
        websiteUrl: 'https://www.atrustek.com/cis/home',
    },
    {
        title: 'Asink EIP',
        time: '2021~2022',
        subtitle: '網站前端開發 & 串接',
        items: [
            '帳號權限系統',
            '部門管理系統',
            '檔案上傳管理',
            'PMC 管理',
            '排程工具',
            '部署與維護',
        ],
        techStacks: [
            { text: 'Angular', icon: 'mdi-angular' },
            { text: 'NgRx', icon: 'mdi-angular' },
            { text: 'TypeScript', icon: 'mdi-language-typescript' },
            { text: 'Mysql', icon: 'mdi-database' },
            { text: 'Python', icon: 'mdi-language-python' },
            { text: 'Flask', icon: 'mdi-language-python' },
            { text: 'Linux', icon: 'mdi-linux' },
        ],
        websiteUrl: 'https://www.atrustek.com/cis/home',
    },
    {
        title: '遊戲後台全端開發',
        time: '2023~2024',
        subtitle: '全端開發',
        items: [
            '帳號權限系統',
            '遊戲管理功能',
            '帳務報表＆ELK 查詢',
            '會員管理功能',
            '活動管理功能',
            '道具管理功能',
            '跑馬燈管理功能',
            '系統維護排程功能',
            'Cronjob',
        ],
        techStacks: [
            { text: 'Vue', icon: 'mdi-vuejs' },
            { text: 'VueX', icon: 'mdi-vuejs' },
            { text: 'Vuetify', icon: 'mdi-vuetify' },
            { text: 'TypeScript', icon: 'mdi-language-typescript' },
            { text: 'NodeJS', icon: 'mdi-nodejs' },
            { text: 'Fastify', icon: 'mdi-nodejs' },
            { text: 'Mysql', icon: 'mdi-database' },
            { text: 'ELK', icon: 'mdi-magnify' },
        ],
    },
];
</script>
