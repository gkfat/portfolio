<template>
    <figure class="flow">
        <svg
            class="flow-svg"
            viewBox="0 0 722 492"
            role="img"
            aria-label="售票機角色互動圖：乘客與維運人員操作售票機介面，介面經由 BFF 後端、地端 OSS API 與 WebView 橋接，控制現金機、刷卡機與出票機等硬體"
        >
            <defs>
                <marker
                    id="tvm-flow-arrow"
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
                    width="340"
                    height="64"
                    rx="32"
                />
                <text
                    class="node-title"
                    :x="actor.x + 170"
                    y="71"
                >
                    {{ actor.title }}
                </text>
                <line
                    class="edge"
                    :x1="actor.x + 170"
                    y1="98"
                    :x2="actor.x + 170"
                    y2="154"
                    marker-start="url(#tvm-flow-arrow)"
                    marker-end="url(#tvm-flow-arrow)"
                />
            </g>

            <!-- 售票機介面 -->
            <rect
                class="node accent"
                x="0"
                y="158"
                width="722"
                height="64"
                rx="12"
            />
            <text
                class="hub-title"
                x="361"
                y="199"
            >
                售票機介面
            </text>

            <!-- 介面 ↔ 後端與地端 -->
            <line
                v-for="service in services"
                :key="`edge-${service.title}`"
                class="edge accent-edge"
                :class="{ dashed: service.fallback }"
                :x1="service.x + 112"
                y1="226"
                :x2="service.x + 112"
                y2="282"
                marker-start="url(#tvm-flow-arrow)"
                marker-end="url(#tvm-flow-arrow)"
            />
            <g
                v-for="service in services"
                :key="service.title"
            >
                <rect
                    class="node"
                    :class="{ external: service.fallback }"
                    :x="service.x"
                    y="286"
                    width="224"
                    height="64"
                    rx="10"
                />
                <text
                    class="node-title"
                    :x="service.x + 112"
                    y="327"
                >
                    {{ service.title }}
                </text>
            </g>

            <!-- WebView ↔ 硬體 -->
            <line
                class="edge accent-edge"
                x1="610"
                y1="354"
                x2="610"
                y2="410"
                marker-start="url(#tvm-flow-arrow)"
                marker-end="url(#tvm-flow-arrow)"
            />
            <rect
                class="node machine"
                x="498"
                y="414"
                width="224"
                height="64"
                rx="10"
            />
            <text
                class="node-title"
                x="610"
                y="455"
            >
                硬體裝置
            </text>
        </svg>

        <figcaption class="flow-caption">
            乘客與維運人員只面對同一個介面，資料與硬體由介面背後的服務處理。
        </figcaption>

        <FlowNotes :notes="notes" />
    </figure>
</template>

<script lang="ts" setup>
import FlowNotes, { type FlowNote } from '~/components/ui/FlowNotes.vue';

const actors = [
    {
        title: '乘客',
        x: 0,
    }, {
        title: '維運人員',
        x: 382,
    },
];

const services = [
    {
        title: 'BFF 後端',
        x: 0,
        fallback: false,
    },
    {
        title: '地端 OSS API',
        x: 249,
        fallback: true,
    },
    {
        title: 'WebView 橋接',
        x: 498,
        fallback: false,
    },
];

const notes: FlowNote[] = [
    {
        points: [
            '乘客：在觸控螢幕上購票或取票，也可用語音操作',
            '維運人員：切換機器模式（正常、測試、維修）',
            'BFF 後端：提供線上購票、取票與語音分析',
            '地端 OSS API（虛線）：BFF 無法連線時，改由地端完成離線購票',
            'WebView 橋接：由介面控制現金機、刷卡機、出票機等硬體',
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
