<template>
    <figure class="flow">
        <svg
            class="flow-svg"
            viewBox="0 0 722 356"
            role="img"
            aria-label="派車系統角色互動圖：客戶與司機透過 LINE LIFF，使用者透過管理後台，兩者都經由後端服務存取同一份資料"
        >
            <defs>
                <marker
                    id="wa-flow-arrow"
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
                    :x="actor.x"
                    y="30"
                    width="220"
                    height="64"
                    rx="32"
                />
                <text
                    class="node-title"
                    :x="actor.x + 110"
                    y="71"
                >
                    {{ actor.title }}
                </text>
            </g>

            <!-- 角色 ↔ 前端 -->
            <line
                v-for="x in [110, 361, 612]"
                :key="x"
                class="edge"
                :x1="x"
                y1="98"
                :x2="x"
                y2="154"
                marker-start="url(#wa-flow-arrow)"
                marker-end="url(#wa-flow-arrow)"
            />

            <!-- 前端 -->
            <rect
                class="node"
                x="0"
                y="158"
                width="471"
                height="64"
                rx="10"
            />
            <text
                class="node-title"
                x="235.5"
                y="199"
            >
                LINE LIFF
            </text>
            <rect
                class="node"
                x="502"
                y="158"
                width="220"
                height="64"
                rx="10"
            />
            <text
                class="node-title"
                x="612"
                y="199"
            >
                管理後台
            </text>

            <!-- 前端 ↔ 後端 -->
            <line
                v-for="x in [235, 612]"
                :key="x"
                class="edge accent-edge"
                :x1="x"
                y1="226"
                :x2="x"
                y2="282"
                marker-start="url(#wa-flow-arrow)"
                marker-end="url(#wa-flow-arrow)"
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
        </svg>

        <figcaption class="flow-caption">
            客戶、司機與使用者各自的入口不同，資料都存取自同一個後端服務。
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
    },
    {
        title: '司機',
        x: 251,
    },
    {
        title: '使用者',
        x: 502,
    },
];

const notes: FlowNote[] = [
    {
        points: [
            '客戶（乘客・家屬）：透過 LINE LIFF 預約叫車、查詢訂單',
            '司機：透過 LINE LIFF 查看任務',
            '使用者（車行內勤）：透過管理後台建單、派車與管理基礎資料',
            'LINE LIFF 與管理後台都經由後端服務存取同一份資料',
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

.node.accent {
    fill: rgb(var(--v-theme-secondary));
    fill-opacity: 0.14;
    stroke: rgb(var(--v-theme-secondary));
    stroke-width: 2;
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

.arrowhead {
    fill: rgb(var(--v-theme-secondary));
}

.flow-caption {
    margin: 12px 0 0;
    color: rgb(var(--v-theme-lightgrey));
    font-size: 0.875rem;
}
</style>
