<template>
    <v-container
        :id="NavItems.Project"
        class="mb-10"
        fluid
    >
        <v-row class="flex-wrap mb-8">
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
        <v-row class="align-stretch flex-wrap">
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
import { Projects } from '@/types/project';

const { t } = useI18n();

const projects: Projects.Project[] = [
    {
        title: '台積心築藝術季 2021',
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
        subtitle: '網站改版 & RWD',
        items: [
            '靜態網站改版為 RWD 網站',
            '程式碼重構與整理',
            '部署與維護',
        ],
        techStacks: [
            { text: 'HTML', icon: 'mdi-language-html5' },
            { text: 'CSS', icon: 'mdi-language-css3' },
            { text: 'JavaScript', icon: 'mdi-language-javascript' },
        ],
        linkUrl: 'https://demo-thlk.pages.dev/',
    },
    {
        title: '艾信科金融科技網站',
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
        linkUrl: 'https://www.atrustek.com/cis/home',
    },
    {
        title: 'Asink 艾新科 EIP',
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
        linkUrl: 'https://www.atrustek.com/cis/home',
    },
    {
        title: '齊柏林基金會 EDM',
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
];
</script>
