<template>
    <div>
        <!-- 合作流程 -->
        <ol class="steps">
            <li
                v-for="(step, i) in steps"
                :key="step.title"
                class="step"
            >
                <p class="eyebrow text-secondary mb-1">
                    {{ String(i + 1).padStart(2, '0') }}
                </p>
                <h3 class="text-h6 font-weight-bold mb-1">
                    {{ step.title }}
                </h3>
                <p class="text-body-2 text-lightgrey mb-0">
                    {{ step.desc }}
                </p>
            </li>
        </ol>

        <!-- 工程原則 -->
        <section class="mt-12">
            <p class="eyebrow text-secondary rule-top pt-4 mb-2">
                Engineering Principles
            </p>
            <ul class="principles">
                <li
                    v-for="principle in principles"
                    :key="principle"
                    class="principle"
                >
                    {{ principle }}
                </li>
            </ul>
        </section>
    </div>
</template>

<script lang="ts" setup>
type Step = {
    title: string;
    desc: string;
};

const steps: Step[] = [
    {
        title: 'Discovery',
        desc: '需求探索與流程盤點',
    },
    {
        title: 'Solution Design',
        desc: '方案與架構設計',
    },
    {
        title: 'Prototype',
        desc: '快速驗證可行性',
    },
    {
        title: 'Production',
        desc: '正式開發與系統整合',
    },
    {
        title: 'Deployment',
        desc: '部署、監控與驗收',
    },
    {
        title: 'Handover',
        desc: '文件、教育訓練與維護',
    },
];

const principles: string[] = [
    'AI 不應取代必要的業務規則。',
    '高風險操作需要權限控管與人工確認。',
    'AI 輸出必須經過驗證，不能直接視為事實。',
    '系統需要 Logging、Monitoring 與可追蹤紀錄。',
    '交付必須包含文件、維護方式與知識移轉。',
    '優先選擇符合需求的簡單方案，不過度導入 Agent 或複雜架構。',
];
</script>

<style scoped>
.steps {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    margin: 0;
    padding: 0;
    list-style: none;
}

/* 6 步固定 2×3 / 3×2，避免孤行 */
@media (min-width: 600px) {
    .steps {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (min-width: 960px) {
    .steps {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}

.step {
    padding: 16px 18px;
    border: 1px solid var(--hairline);
    background: rgb(var(--v-theme-surface));
}

.principles {
    margin: 0;
    padding: 0;
    list-style: none;
}

.principle {
    padding: 11px 0;
    border-top: 1px solid var(--hairline);
    color: rgb(var(--v-theme-primary));
    font-size: 1rem;
    line-height: 1.5;
}

.principle:first-child {
    border-top: none;
}
</style>
