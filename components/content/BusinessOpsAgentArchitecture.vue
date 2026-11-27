<template>
    <figure class="flow">
        <svg
            class="flow-svg"
            viewBox="0 0 722 392"
            role="img"
            aria-label="系統架構：業務與主管透過瀏覽器使用審核後台，詢價信件經 Webhook 進入 API；部署在 Vercel 的 Nuxt 4 包含審核後台與 Nitro API，API 呼叫 OpenAI 做結構化擷取，並讀寫 Neon 上的 PostgreSQL"
        >
            <defs>
                <marker
                    id="boa-arch-arrow"
                    viewBox="0 0 10 10"
                    refX="9"
                    refY="5"
                    markerWidth="7"
                    markerHeight="7"
                    orient="auto-start-reverse"
                >
                    <path
                        class="arrowhead"
                        d="M0 0 L10 5 L0 10 z"
                    />
                </marker>
            </defs>

            <!-- 左：來源 -->
            <rect
                class="node"
                x="0"
                y="44"
                width="150"
                height="76"
                rx="10"
            />
            <text
                class="node-title"
                x="75"
                y="78"
            >
                業務／主管
            </text>
            <text
                class="node-sub"
                x="75"
                y="102"
            >
                瀏覽器
            </text>

            <rect
                class="node"
                x="0"
                y="226"
                width="150"
                height="76"
                rx="10"
            />
            <text
                class="node-title"
                x="75"
                y="260"
            >
                詢價信件
            </text>
            <text
                class="node-sub"
                x="75"
                y="284"
            >
                Webhook／表單
            </text>

            <!-- 中：Nuxt on Vercel -->
            <rect
                class="node accent"
                x="190"
                y="8"
                width="330"
                height="376"
                rx="12"
            />
            <text
                class="group-title"
                x="208"
                y="36"
            >
                Nuxt 4 · Vercel
            </text>

            <rect
                class="node inner"
                x="208"
                y="52"
                width="294"
                height="60"
                rx="8"
            />
            <text
                class="inner-title"
                x="224"
                y="80"
            >
                審核後台
            </text>
            <text
                class="inner-sub"
                x="224"
                y="100"
            >
                Vue · Vuetify · SSR
            </text>

            <rect
                class="node inner"
                x="208"
                y="128"
                width="294"
                height="240"
                rx="8"
            />
            <text
                class="inner-title"
                x="224"
                y="156"
            >
                API · Nitro
            </text>
            <text
                v-for="(module, i) in modules"
                :key="module"
                class="module"
                x="224"
                :y="188 + i * 34"
            >
                {{ module }}
            </text>

            <!-- 右：外部服務 -->
            <rect
                class="node"
                x="560"
                y="44"
                width="162"
                height="76"
                rx="10"
            />
            <text
                class="node-title"
                x="641"
                y="78"
            >
                OpenAI API
            </text>
            <text
                class="node-sub"
                x="641"
                y="102"
            >
                Structured Outputs
            </text>

            <rect
                class="node"
                x="560"
                y="208"
                width="162"
                height="112"
                rx="10"
            />
            <text
                class="node-title"
                x="641"
                y="242"
            >
                PostgreSQL
            </text>
            <text
                class="node-sub"
                x="641"
                y="266"
            >
                Neon · Drizzle
            </text>
            <text
                class="node-sub"
                x="641"
                y="300"
            >
                需求 · 報價 · 歷程
            </text>

            <!-- 連線 -->
            <line
                class="edge"
                x1="152"
                y1="82"
                x2="204"
                y2="82"
                marker-end="url(#boa-arch-arrow)"
            />
            <line
                class="edge"
                x1="152"
                y1="264"
                x2="204"
                y2="264"
                marker-end="url(#boa-arch-arrow)"
            />
            <line
                class="edge"
                x1="355"
                y1="114"
                x2="355"
                y2="124"
                marker-end="url(#boa-arch-arrow)"
            />
            <polyline
                class="edge"
                points="504,160 532,160 532,82 556,82"
                marker-end="url(#boa-arch-arrow)"
            />
            <line
                class="edge"
                x1="504"
                y1="264"
                x2="556"
                y2="264"
                marker-start="url(#boa-arch-arrow)"
                marker-end="url(#boa-arch-arrow)"
            />
        </svg>

        <figcaption class="flow-caption">
            單一 Nuxt 專案同時提供審核後台與 API；擷取交給 OpenAI，所有狀態與歷程存在 PostgreSQL。
        </figcaption>
        <FlowNotes :notes="notes" />
    </figure>
</template>

<script lang="ts" setup>
import FlowNotes, { type FlowNote } from '~/components/ui/FlowNotes.vue';

const modules = [
    '權限與客戶歸屬',
    '擷取與格式驗證',
    '業務規則（可設定）',
    '核准與報價單',
    'Audit Log',
];

const notes: FlowNote[] = [
    {
        title: '審核後台',
        points: ['依身分顯示可做的操作：業務修正自己客戶的需求，主管核准、指派客戶、調整規則', '簽核欄呈現每一關的處理狀態'],
    },
    {
        title: 'API',
        points: [
            '所有權限在伺服器端檢查；讀不到別人客戶的單（404），越權操作回 403 並記錄',
            '狀態轉換帶前置狀態條件，併發時不互相覆蓋',
            '外部 API 有逾時與有限次數重試，最終失敗可手動重試',
        ],
    },
    {
        title: 'PostgreSQL',
        points: ['來源訊息 ID、每筆需求的報價單、客戶 Email 皆有唯一性約束', '規則設定以版本號防止同時修改互相覆蓋'],
    },
];
</script>

<style scoped>
.flow {
    margin: 24px 0 32px;
    padding: 20px 20px 24px;
    border: 1px solid var(--hairline);
    background: rgb(var(--v-theme-surface));
}

.flow-svg {
    display: block;
    width: 100%;
    height: auto;
    font-family: 'Inter', 'Noto Sans TC', sans-serif;
}

.node {
    fill: rgb(var(--v-theme-background));
    stroke: rgb(var(--v-theme-lightgrey));
    stroke-width: 1.4;
}

.node.accent {
    fill: rgb(var(--v-theme-secondary));
    fill-opacity: 0.08;
    stroke: rgb(var(--v-theme-secondary));
    stroke-width: 2;
}

.node.inner {
    fill: rgb(var(--v-theme-surface));
}

.node-title {
    fill: rgb(var(--v-theme-primary));
    font-size: 19px;
    font-weight: 700;
    text-anchor: middle;
}

.node-sub {
    fill: rgb(var(--v-theme-lightgrey));
    font-size: 13px;
    text-anchor: middle;
}

.group-title {
    fill: rgb(var(--v-theme-secondary));
    font-size: 15px;
    font-weight: 700;
    letter-spacing: 0.06em;
}

.inner-title {
    fill: rgb(var(--v-theme-primary));
    font-size: 18px;
    font-weight: 700;
}

.inner-sub {
    fill: rgb(var(--v-theme-lightgrey));
    font-size: 13px;
}

.module {
    fill: rgb(var(--v-theme-primary));
    font-size: 15px;
}

.edge {
    fill: none;
    stroke: rgb(var(--v-theme-secondary));
    stroke-width: 1.8;
}

.arrowhead {
    fill: rgb(var(--v-theme-secondary));
}

.flow-caption {
    margin: 12px 0 0;
    color: rgb(var(--v-theme-lightgrey));
    font-size: 0.875rem;
}
</style>
