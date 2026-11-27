<template>
    <div class="problems">
        <section
            v-for="(item, i) in problems"
            :key="item.title"
            class="problem"
        >
            <p class="eyebrow text-secondary mb-2">
                {{ String(i + 1).padStart(2, '0') }}
            </p>
            <h3 class="text-h6 font-weight-bold mb-2">
                {{ item.title }}
            </h3>
            <p class="text-body-2 text-lightgrey mb-0">
                {{ item.desc }}
            </p>
            <NuxtLink
                v-if="item.caseLink"
                :to="item.caseLink"
                class="case-link"
            >
                看案例：{{ item.caseTitle }} →
            </NuxtLink>
        </section>
    </div>
</template>

<script lang="ts" setup>
type Problem = {
    title: string;
    desc: string;
    caseLink?: string;
    caseTitle?: string;
};

const BUSINESS_OPS_AGENT = {
    caseLink: '/works/2026-business-ops-agent', caseTitle: 'AI 報價需求處理 Agent', 
};

// 以客戶問題分類，而非技術名稱
const problems: Problem[] = [
    {
        title: 'Workflow Automation',
        desc: '將重複、跨系統的人工流程轉換成可追蹤的自動化工作流。',
        ...BUSINESS_OPS_AGENT,
    },
    {
        title: 'AI Agent',
        desc: '讓 AI 理解任務、呼叫授權工具，並在必要時交由人員確認。',
        ...BUSINESS_OPS_AGENT,
    },
    {
        title: 'Enterprise Data Integration',
        desc: '整合 API、資料庫、CRM、ERP、LINE、Email 等既有系統。',
    },
    {
        title: 'Production AI',
        desc: '提供評估、監控、權限控管、錯誤處理與持續維護。',
    },
];
</script>

<style scoped>
.problems {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    padding-top: 16px;
}

/* 4 項固定 2×2，避免 3+1 的孤行 */
@media (min-width: 600px) {
    .problems {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

.case-link {
    display: inline-block;
    margin-top: 12px;
    color: rgb(var(--v-theme-secondary));
    font-size: 0.875rem;
    font-weight: 600;
    text-decoration: none;
}

.case-link:hover {
    text-decoration: underline;
}

.problem {
    padding: 20px 22px;
    border: 1px solid var(--hairline);
    background: rgb(var(--v-theme-surface));
}
</style>
