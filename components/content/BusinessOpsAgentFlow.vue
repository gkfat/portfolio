<template>
    <figure class="flow">
        <svg
            class="flow-svg"
            viewBox="0 0 722 372"
            role="img"
            aria-label="AI 報價需求處理流程：收件、AI 擷取、格式驗證、業務規則、主管核准五個步驟；格式或規則不通過時轉需人工處理，由負責業務修正後重新檢查；主管核准後建立正式報價單；每一步都寫入 Audit Log"
        >
            <defs>
                <marker
                    id="boa-flow-arrow"
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

            <!-- 五個步驟 -->
            <g
                v-for="(stage, i) in stages"
                :key="stage.no"
            >
                <text
                    class="stage-no"
                    :x="nodeX(i) + nodeW / 2"
                    y="24"
                >
                    {{ stage.no }}
                </text>
                <rect
                    class="node"
                    :class="{ accent: stage.accent }"
                    :x="nodeX(i)"
                    y="34"
                    :width="nodeW"
                    height="62"
                    rx="10"
                />
                <text
                    class="node-title"
                    :x="nodeX(i) + nodeW / 2"
                    y="66"
                >
                    {{ stage.title }}
                </text>
                <text
                    class="node-actor"
                    :x="nodeX(i) + nodeW / 2"
                    y="86"
                >
                    {{ stage.actor }}
                </text>
                <line
                    v-if="i < stages.length - 1"
                    class="edge"
                    :x1="nodeX(i) + nodeW + 3"
                    y1="65"
                    :x2="nodeX(i + 1) - 3"
                    y2="65"
                    marker-end="url(#boa-flow-arrow)"
                />
            </g>

            <!-- 格式驗證、業務規則 → 需人工處理 -->
            <g
                v-for="i in [2, 3]"
                :key="`back-${i}`"
            >
                <line
                    class="edge alert-edge"
                    :x1="nodeX(i) + nodeW / 2"
                    y1="98"
                    :x2="nodeX(i) + nodeW / 2"
                    y2="168"
                    marker-end="url(#boa-flow-arrow)"
                />
                <text
                    class="edge-label"
                    :x="nodeX(i) + nodeW / 2 + 8"
                    y="140"
                >
                    不通過
                </text>
            </g>

            <!-- 需人工處理 -->
            <rect
                class="node alert"
                :x="nodeX(1)"
                y="172"
                :width="nodeX(3) + nodeW - nodeX(1)"
                height="64"
                rx="10"
            />
            <text
                class="band-title"
                :x="nodeX(1) + 20"
                y="202"
            >
                需人工處理
            </text>
            <text
                class="band-note"
                :x="nodeX(1) + 20"
                y="224"
            >
                負責業務修正欄位後，重新檢查規則
            </text>

            <!-- 主管核准 → 正式報價單 -->
            <line
                class="edge accent-edge"
                :x1="nodeX(4) + nodeW / 2"
                y1="98"
                :x2="nodeX(4) + nodeW / 2"
                y2="168"
                marker-end="url(#boa-flow-arrow)"
            />
            <rect
                class="node accent"
                :x="nodeX(4)"
                y="172"
                :width="nodeW"
                height="64"
                rx="10"
            />
            <text
                class="node-title"
                :x="nodeX(4) + nodeW / 2"
                y="210"
            >
                報價單
            </text>

            <!-- Audit Log -->
            <rect
                class="node"
                x="0"
                y="270"
                width="722"
                height="56"
                rx="10"
            />
            <text
                class="band-title"
                x="24"
                y="304"
            >
                Audit Log
            </text>
            <text
                class="band-note"
                x="150"
                y="304"
            >
                每次狀態變更、人工修正、核准與越權嘗試都會記錄
            </text>
        </svg>

        <figcaption class="flow-caption">
            AI 只負責讀懂信件；格式與業務規則由程式檢查，建立報價單前一定經過主管核准。
        </figcaption>
        <FlowNotes :notes="notes" />
    </figure>
</template>

<script lang="ts" setup>
import FlowNotes, { type FlowNote } from '~/components/ui/FlowNotes.vue';

const nodeW = 124;
const nodeX = (i: number) => i * 149.5;

const stages = [
    {
        no: '01', title: '收件', actor: '系統', accent: false,
    },
    {
        no: '02', title: 'AI 擷取', actor: 'LLM', accent: false,
    },
    {
        no: '03', title: '格式驗證', actor: 'Zod', accent: false,
    },
    {
        no: '04', title: '業務規則', actor: '程式', accent: false,
    },
    {
        no: '05', title: '主管核准', actor: '人員', accent: true,
    },
];

const notes: FlowNote[] = [
    {
        title: '01 收件',
        points: ['信件或 Webhook 進來即建檔，以來源訊息 ID 去重', '依寄件者 Email 對應客戶與負責業務'],
        value: '同一封信不會被處理兩次',
    },
    {
        title: '02 AI 擷取',
        points: ['以 Structured Outputs 輸出客戶、料號、數量、交期、幣別', '原文沒寫的一律留空，不推測'],
        value: '非結構化的信件變成可檢查的欄位',
    },
    {
        title: '03 格式驗證',
        points: ['數量需為正整數、日期與 Email 格式正確、至少一個品項', '模型拒答或輸出被截斷時同樣轉人工'],
        value: '格式錯的資料不會流進後續流程',
    },
    {
        title: '04 業務規則',
        points: ['料號存在、最低訂購量、單筆上限、價格底線、交期、新客戶、幣別', '主管可調整部分規則的啟用與等級'],
        value: '能不能成單由明確規則判斷，可重現、可測試',
    },
    {
        title: '05 主管核准',
        points: ['核准前用最新主檔再檢查一次規則', '重複核准也只會產生一張報價單'],
        value: '正式交易一定經過人員確認',
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
    font-size: 17px;
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

.node.alert {
    stroke-dasharray: 6 4;
}

.node-title {
    fill: rgb(var(--v-theme-primary));
    font-size: 21px;
    font-weight: 700;
    text-anchor: middle;
}

.node-actor {
    fill: rgb(var(--v-theme-lightgrey));
    font-size: 14px;
    text-anchor: middle;
}

.band-title {
    fill: rgb(var(--v-theme-primary));
    font-size: 20px;
    font-weight: 700;
}

.band-note {
    fill: rgb(var(--v-theme-lightgrey));
    font-size: 15px;
}

.edge-label {
    fill: rgb(var(--v-theme-lightgrey));
    font-size: 13px;
}

.edge {
    stroke: rgb(var(--v-theme-lightgrey));
    stroke-width: 1.8;
}

.accent-edge {
    stroke: rgb(var(--v-theme-secondary));
    stroke-width: 2.2;
}

.alert-edge {
    stroke-dasharray: 5 4;
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
