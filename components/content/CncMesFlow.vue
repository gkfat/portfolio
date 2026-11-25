<template>
    <figure class="flow">
        <svg
            class="flow-svg"
            viewBox="0 0 722 340"
            role="img"
            aria-label="CNC MES 系統分析圖：報價成本、接單備料、現場生產、出貨對帳四個階段，由同一張流程卡串起，現場每站掃描後匯整成進度表"
        >
            <defs>
                <marker
                    id="cnc-flow-arrow"
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

            <!-- 四個階段 -->
            <g
                v-for="(stage, i) in stages"
                :key="stage.no"
            >
                <text
                    class="stage-no"
                    :x="nodeX(i) + nodeW / 2"
                    y="26"
                >
                    {{ stage.no }}
                </text>
                <rect
                    class="node"
                    :x="nodeX(i)"
                    y="36"
                    :width="nodeW"
                    height="64"
                    rx="10"
                />
                <text
                    class="node-title"
                    :x="nodeX(i) + nodeW / 2"
                    y="77"
                >
                    {{ stage.title }}
                </text>
                <line
                    v-if="i < stages.length - 1"
                    class="edge"
                    :x1="nodeX(i) + nodeW + 4"
                    y1="68"
                    :x2="nodeX(i + 1) - 4"
                    y2="68"
                    marker-end="url(#cnc-flow-arrow)"
                />
            </g>

            <!-- 階段 ↔ 流程卡 -->
            <line
                v-for="i in [0, 1]"
                :key="`down-${i}`"
                class="edge accent-edge"
                :x1="nodeX(i) + nodeW / 2"
                y1="102"
                :x2="nodeX(i) + nodeW / 2"
                y2="166"
                marker-end="url(#cnc-flow-arrow)"
            />
            <line
                v-for="i in [2, 3]"
                :key="`up-${i}`"
                class="edge accent-edge"
                :x1="nodeX(i) + nodeW / 2"
                y1="170"
                :x2="nodeX(i) + nodeW / 2"
                y2="106"
                marker-end="url(#cnc-flow-arrow)"
            />

            <!-- 流程卡 -->
            <rect
                class="node accent"
                x="0"
                y="172"
                width="722"
                height="70"
                rx="12"
            />
            <text
                class="hub-title"
                x="361"
                y="217"
            >
                流程卡
            </text>

            <!-- 流程卡 → 進度表 -->
            <line
                class="edge accent-edge"
                x1="361"
                y1="244"
                x2="361"
                y2="282"
                marker-end="url(#cnc-flow-arrow)"
            />

            <!-- 進度表 -->
            <rect
                class="node"
                x="0"
                y="286"
                width="722"
                height="50"
                rx="10"
            />
            <text
                class="band-title"
                x="24"
                y="319"
            >
                進度表
            </text>
        </svg>

        <figcaption class="flow-caption">
            一張流程卡串起報價、生產、出貨與對帳。
        </figcaption>
        <FlowNotes :notes="notes" />
    </figure>
</template>

<script lang="ts" setup>
import FlowNotes, { type FlowNote } from '~/components/ui/FlowNotes.vue';

const nodeW = 160;
const nodeX = (i: number) => i * 187;

const stages = [
    {
        no: '01',
        title: '報價成本',
    },
    {
        no: '02',
        title: '接單備料',
    },
    {
        no: '03',
        title: '現場生產',
    },
    {
        no: '04',
        title: '出貨對帳',
    },
];

const notes: FlowNote[] = [
    {
        title: '01 報價與成本',
        points: ['料號＝材質＋工法＋表面處理，工法含順序與工時', '依材料、加工、表處成本試算，再依客戶報價係數算出利潤率'],
        value: '報價有依據，議價前先看見利潤',
    },
    {
        title: '02 接單與備料',
        points: ['訂單帶入料號、數量、交期', '轉採購單給供應商，並依客戶與訂單號轉檔'],
        value: '成交後單據一路帶下去，不重打',
    },
    {
        title: '03 現場生產',
        points: [
            '逐站掃描 QR Code：材料、加工、表處、品檢、包裝、出貨',
            '加工站掃碼即觸發 CNC 動工，運轉中、異常、結束即時回報',
            '品檢異常可留註，顯示在進度表',
        ],
        value: '不用跑現場問進度，異常當下可見',
    },
    {
        title: '04 出貨與對帳',
        points: ['依流程卡列印出貨單，銷項發票對應訂單與流程卡', '對帳單可查詢進銷發票與收付款'],
        value: '出貨、發票、帳款對得上同一張單',
    },
    {
        title: '流程卡',
        points: ['同一張卡包含客戶・料號・數量、材質、工法順序與工時、刀具表、圖面、供應商、表面處理', '附 6 組站別 QR Code，現場照卡逐站作業'],
    },
    {
        title: '進度表',
        points: ['每張工單目前在哪一站、有無異常，一眼看完'],
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

.stage-no {
    fill: rgb(var(--v-theme-secondary));
    font-size: 19px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-anchor: middle;
}

.node {
    fill: rgb(var(--v-theme-background));
    stroke: rgb(var(--v-theme-lightgrey));
    stroke-width: 1.4;
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

.band-title {
    fill: rgb(var(--v-theme-primary));
    font-size: 26px;
    font-weight: 700;
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
