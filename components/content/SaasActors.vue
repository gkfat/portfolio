<template>
    <figure class="flow">
        <svg
            class="flow-svg"
            viewBox="0 0 722 492"
            role="img"
            aria-label="SaaS 會員系統角色互動圖：會員使用 LINE 會員卡，管理員與超級管理員使用管理後台，系統排程直接呼叫 API Server，API Server 存取 Firestore 並與 LINE 平台互動"
        >
            <defs>
                <marker
                    id="sk-flow-arrow"
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

            <!-- 角色 ↔ 前端 -->
            <line
                v-for="x in [80, 267, 454]"
                :key="`ui-${x}`"
                class="edge"
                :x1="x"
                y1="98"
                :x2="x"
                y2="154"
                marker-start="url(#sk-flow-arrow)"
                marker-end="url(#sk-flow-arrow)"
            />

            <!-- 系統排程直接呼叫 API -->
            <line
                class="edge dashed"
                x1="641"
                y1="98"
                x2="641"
                y2="282"
                marker-end="url(#sk-flow-arrow)"
            />

            <!-- 前端 -->
            <rect
                class="node"
                x="0"
                y="158"
                width="160"
                height="64"
                rx="10"
            />
            <text
                class="node-title"
                x="80"
                y="199"
            >
                會員卡
            </text>
            <rect
                class="node"
                x="187"
                y="158"
                width="347"
                height="64"
                rx="10"
            />
            <text
                class="node-title"
                x="360"
                y="199"
            >
                管理後台
            </text>

            <!-- 前端 ↔ 後端 -->
            <line
                v-for="x in [80, 360]"
                :key="`api-${x}`"
                class="edge accent-edge"
                :x1="x"
                y1="226"
                :x2="x"
                y2="282"
                marker-start="url(#sk-flow-arrow)"
                marker-end="url(#sk-flow-arrow)"
            />

            <!-- API Server -->
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
                API Server
            </text>

            <!-- API ↔ 外部服務 -->
            <line
                class="edge accent-edge"
                x1="80"
                y1="354"
                x2="80"
                y2="410"
                marker-start="url(#sk-flow-arrow)"
                marker-end="url(#sk-flow-arrow)"
            />
            <line
                class="edge accent-edge"
                x1="267"
                y1="354"
                x2="267"
                y2="410"
                marker-start="url(#sk-flow-arrow)"
                marker-end="url(#sk-flow-arrow)"
            />
            <rect
                class="node external"
                x="0"
                y="414"
                width="160"
                height="64"
                rx="10"
            />
            <text
                class="node-title"
                x="80"
                y="455"
            >
                LINE 平台
            </text>
            <rect
                class="node"
                x="187"
                y="414"
                width="160"
                height="64"
                rx="10"
            />
            <text
                class="node-title"
                x="267"
                y="455"
            >
                Firestore
            </text>
        </svg>

        <figcaption class="flow-caption">
            會員與管理端各用各的入口，資料都經由 API Server 存取 Firestore。
        </figcaption>

        <FlowNotes :notes="notes" />
    </figure>
</template>

<script lang="ts" setup>
import FlowNotes, { type FlowNote } from '~/components/ui/FlowNotes.vue';

const actors = [
    {
        title: '會員',
        x: 0,
    },
    {
        title: '管理員',
        x: 187,
    },
    {
        title: '超級管理員',
        x: 374,
    },
    {
        title: '系統排程',
        x: 561,
    },
];

const notes: FlowNote[] = [
    {
        points: [
            '會員：用 LINE 開通會員卡，查看等級、點數與優惠券，並線上預約',
            '管理員：在管理後台管理會員、點數、優惠券、活動與預約',
            '超級管理員：在管理後台設定角色與權限',
            '系統排程（虛線）：定期評估會員等級、處理逾期未審核的預約',
            'LINE 平台：提供會員登入的身分驗證',
            '會員卡與管理後台都經由 API Server 存取 Firestore 的同一份資料',
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

.node.external {
    stroke-dasharray: 5 5;
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
