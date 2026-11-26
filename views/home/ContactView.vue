<template>
    <div>
        <h3 class="display-title mb-6" :style="{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }">
            Have a Business Problem to Solve?
        </h3>
        <p class="text-h6 font-weight-regular text-lightgrey mb-8" :style="{ maxWidth: '640px', lineHeight: 1.7 }">
            無論是 AI 應用、流程自動化或系統整合，不論需求已經明確，或只有一個想像，歡迎先來聊聊，讓我們把想法變成可運作的解決方案。
        </p>

        <!-- 適合洽談的需求 -->
        <v-row class="mb-8">
            <v-col
                cols="12"
                sm="6"
            >
                <p class="eyebrow text-secondary rule-top pt-4 mb-2">
                    適合洽談的需求
                </p>
                <ul class="list">
                    <li
                        v-for="item in engagementTypes"
                        :key="item"
                    >
                        {{ item }}
                    </li>
                </ul>
            </v-col>
            <v-col
                cols="12"
                sm="6"
            >
                <p class="eyebrow text-secondary rule-top pt-4 mb-2">
                    來信時可以先告訴我
                </p>
                <ul class="list">
                    <li
                        v-for="item in inquiryFields"
                        :key="item"
                    >
                        {{ item }}
                    </li>
                </ul>
            </v-col>
        </v-row>

        <div class="d-flex flex-wrap align-center ga-3 mb-6">
            <v-btn
                variant="flat"
                size="x-large"
                class="text-none"
                color="secondary"
                rounded="0"
                :href="mailtoHref"
            >
                Discuss a Project
            </v-btn>
            <v-btn
                v-for="link in socialLinks"
                :key="link.name"
                variant="outlined"
                size="x-large"
                class="text-none"
                rounded="0"
                target="_blank"
                :prepend-icon="link.icon"
                :href="link.url"
            >
                {{ link.name }}
            </v-btn>
        </div>
        <p class="text-body-2 text-lightgrey">
            <v-icon
                icon="mdi-circle"
                color="success"
                size="10"
                class="me-2"
            />通常在 24 小時內回覆
        </p>
    </div>
</template>

<script setup lang="ts">
import { contactInfo } from '~/config/config';

const socialLinks = Object.values(contactInfo.socialLinks);

const engagementTypes: string[] = [
    'AI 導入評估',
    'AI Agent / Workflow 開發',
    '既有系統 AI 整合',
    '企業內部工具與流程自動化',
    '技術顧問與 POC',
];

const inquiryFields: string[] = [
    '公司／產業',
    '目前遇到的問題',
    '使用中的系統',
    '希望改善的流程',
    '預計時程',
];

// mailto 預先帶入詢問欄位，降低來信門檻
const mailSubject = '專案洽詢';
const mailBody = inquiryFields.map(field => `${field}：\n`).join('\n');
const mailtoHref = `mailto:${contactInfo.email}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(mailBody)}`;
</script>

<style scoped>
.list {
    margin: 0;
    padding-left: 1.25em;
    color: rgb(var(--v-theme-primary));
    line-height: 1.9;
}
</style>
