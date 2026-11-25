<template>
    <v-row no-gutters>
        <v-col
            v-for="(group, i) in groups"
            :key="group.title"
            cols="12"
            sm="6"
            class="pb-8"
            :class="{ 'pe-sm-8': i % 2 === 0 }"
        >
            <h3 class="eyebrow text-secondary mb-3">
                {{ group.title }}
            </h3>
            <p
                v-for="item in group.items"
                :key="item"
                class="text-body-1 py-2 rule-top"
            >
                {{ item }}
            </p>
            <p
                v-for="item in group.experiments"
                :key="item"
                class="text-body-1 text-lightgrey py-2 rule-top"
            >
                {{ item }}
                <span class="text-caption font-weight-bold ms-2">EXPERIMENT</span>
            </p>
        </v-col>
    </v-row>
</template>
<script lang="ts" setup>
type Group = {
    title: string;
    items: string[];
    experiments?: string[];
};

// 僅列出已在作品中實作的能力；尚未有正式交付經驗者標記為 Experiment
const groups: Group[] = [
    {
        title: 'AI Engineering',
        items: ['AI-assisted Development（SDD 規格驅動開發）'],
        experiments: [
            'LLM API Integration',
            'RAG / Embedding',
            'Function Calling',
        ],
    },
    {
        title: 'Backend & Integration',
        items: [
            'RESTful API',
            'Authentication / RBAC',
            'Third-party Login（Google / LINE / OTP）',
            'Firebase / Firestore',
        ],
    },
    {
        title: 'Frontend & Product',
        items: [
            'Vue / Nuxt / TypeScript',
            'Admin Dashboard',
            'SaaS Architecture（Monorepo）',
            'LINE LIFF',
        ],
    },
    {
        title: 'Deployment & Operations',
        items: ['Cloud Deployment', 'Automated Deployment Setup'],
    },
];
</script>
