<template>
    <figure class="flow">
        <svg
            class="flow-svg"
            viewBox="0 0 722 492"
            role="img"
            aria-label="CNC MES 角色互動圖：管理人員使用管理後台，現場作業員使用現場工站，兩者經由後端服務存取同一份資料，後端服務並與 CNC 機台互動；報價單、出貨單與採購單提供給客戶與供應商"
        >
            <defs>
                <marker
                    id="cm-flow-arrow"
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

            <!-- 角色 -->
            <g
                v-for="actor in actors"
                :key="actor.title"
            >
                <rect
                    class="node person"
                    :class="{ external: actor.external }"
                    :x="actor.x"
                    y="30"
                    width="160"
                    height="64"
                    rx="32"
                />
                <text
                    class="node-title"
                    :x="actor.x + 80"
                    y="71"
                >
                    {{ actor.title }}
                </text>
            </g>

            <!-- 管理後台提供單據給客戶與供應商 -->
            <line
                v-for="x in [80, 267]"
                :key="`doc-${x}`"
                class="edge dashed"
                :x1="x"
                y1="156"
                :x2="x"
                y2="100"
                marker-end="url(#cm-flow-arrow)"
            />

            <!-- 角色 ↔ 前端 -->
            <line
                v-for="x in [454, 641]"
                :key="`ui-${x}`"
                class="edge"
                :x1="x"
                y1="98"
                :x2="x"
                y2="154"
                marker-start="url(#cm-flow-arrow)"
                marker-end="url(#cm-flow-arrow)"
            />

            <!-- 前端 -->
            <rect
                class="node"
                x="0"
                y="158"
                width="534"
                height="64"
                rx="10"
            />
            <text
                class="node-title"
                x="267"
                y="199"
            >
                管理後台
            </text>
            <rect
                class="node"
                x="561"
                y="158"
                width="160"
                height="64"
                rx="10"
            />
            <text
                class="node-title"
                x="641"
                y="199"
            >
                現場工站
            </text>

            <!-- 前端 ↔ 後端 -->
            <line
                v-for="x in [267, 641]"
                :key="`api-${x}`"
                class="edge accent-edge"
                :x1="x"
                y1="226"
                :x2="x"
                y2="282"
                marker-start="url(#cm-flow-arrow)"
                marker-end="url(#cm-flow-arrow)"
            />

            <!-- 後端服務 -->
            <rect
                class="node accent"
                x="0"
                y="286"
                width="722"
                height="64"
                rx="12"
            />
            <text
                class="hub-title"
                x="361"
                y="327"
            >
                後端服務
            </text>

            <!-- 後端 ↔ CNC 機台 -->
            <line
                class="edge accent-edge"
                x1="641"
                y1="354"
                x2="641"
                y2="410"
                marker-start="url(#cm-flow-arrow)"
                marker-end="url(#cm-flow-arrow)"
            />
            <rect
                class="node machine"
                x="561"
                y="414"
                width="160"
                height="64"
                rx="10"
            />
            <text
                class="node-title"
                x="641"
                y="455"
            >
                CNC 機台
            </text>
        </svg>

        <figcaption class="flow-caption">
            管理端與現場各用各的入口，資料都存取自同一個後端服務，並由後端與 CNC 機台互動。
        </figcaption>

        <FlowNotes :notes="notes" />
    </figure>
</template>

<script lang="ts" setup>
import FlowNotes, { type FlowNote } from '~/components/ui/FlowNotes.vue';

const actors = [
    {
        title: '客戶',
        x: 0,
        external: true,
    },
    {
        title: '供應商',
        x: 187,
        external: true,
    },
    {
        title: '管理人員',
        x: 374,
        external: false,
    },
    {
        title: '現場作業員',
        x: 561,
        external: false,
    },
];

const notes: FlowNote[] = [
    {
        points: [
            '管理人員（業務・管理）：在管理後台處理報價、議價、訂單、採購與對帳',
            '客戶與供應商：報價單、出貨單與採購單可輸出 PDF，提供給客戶與供應商（虛線）',
            '現場作業員：在現場工站逐站掃描 QR Code 報工',
            '加工站掃碼會觸發 CNC 機台動工，並回報運轉狀態',
            '管理後台與現場工站都經由後端服務存取同一份資料',
        ],
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

.node.person {
    stroke: rgb(var(--v-theme-secondary));
}

.node.person.external {
    stroke: rgb(var(--v-theme-lightgrey));
    stroke-dasharray: 5 5;
}

.node.accent {
    fill: rgb(var(--v-theme-secondary));
    fill-opacity: 0.14;
    stroke: rgb(var(--v-theme-secondary));
    stroke-width: 2;
}

.node.machine {
    stroke: rgb(var(--v-theme-warning));
}

.node-title {
    fill: rgb(var(--v-theme-primary));
    font-size: 28px;
    font-weight: 700;
    text-anchor: middle;
}

.hub-title {
    fill: rgb(var(--v-theme-primary));
    font-size: 30px;
    font-weight: 700;
    text-anchor: middle;
}

.edge {
    stroke: rgb(var(--v-theme-lightgrey));
    stroke-width: 1.8;
}

.accent-edge {
    stroke: rgb(var(--v-theme-secondary));
    stroke-width: 2.2;
}

.dashed {
    stroke-dasharray: 5 5;
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
