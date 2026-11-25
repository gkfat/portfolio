<template>
    <div>
        <v-row
            v-for="(item, i) in solutions"
            :key="item.title"
            no-gutters
            class="py-5 align-baseline"
            :class="{ 'rule-top': i > 0 }"
        >
            <v-col cols="12" md="4">
                <h3 class="text-h6 font-weight-bold">
                    {{ item.title }}
                </h3>
            </v-col>
            <v-col
                cols="12"
                md="5"
                class="mt-1 mt-md-0"
            >
                <p class="text-body-1">
                    {{ item.value }}
                </p>
            </v-col>
            <v-col
                cols="12"
                md="3"
                class="mt-2 mt-md-0"
            >
                <p class="text-body-2 text-lightgrey">
                    {{ item.tech.join(' · ') }}
                </p>
            </v-col>
        </v-row>
    </div>
</template>
<script lang="ts" setup>
type Solution = {
    title: string;
    value: string;
    tech: string[];
};

const solutions: Solution[] = [
    {
        title: 'Workflow Automation',
        value: '將重複性人工流程轉換為自動化工作流程',
        tech: [
            'API',
            'Workflow',
            'Automation',
        ],
    },
    {
        title: 'AI Application & RAG',
        value: '建立企業知識庫、AI 助理與文件檢索系統',
        tech: [
            'LLM',
            'Embedding',
            'RAG',
        ],
    },
    {
        title: 'System Integration',
        value: '整合既有系統、API、資料庫與第三方服務',
        tech: [
            'REST API',
            'Database',
            'Webhooks',
        ],
    },
    {
        title: 'Custom Software',
        value: '開發企業內部工具、管理系統與客製化 SaaS',
        tech: ['Full-stack', 'SaaS Architecture'],
    },
];
</script>
