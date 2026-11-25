<template>
    <FlowCards :flows="flows" />
</template>

<script lang="ts" setup>
import FlowCards, { type Flow } from '~/components/ui/FlowCards.vue';

const flows: Flow[] = [
    {
        no: '流程一',
        title: '線上購票',
        actors: '乘客 → 售票機介面 → BFF 後端 → 硬體裝置',
        steps: [
            {
                title: '選行程',
                desc: '選擇行程類型與起訖站',
            },
            {
                title: '填乘客',
                desc: '選擇票種並輸入乘客資料',
            },
            {
                title: '選班次',
                desc: '選擇日期與班次',
            },
            {
                title: '付款',
                desc: '確認明細後，以現金或刷卡付款',
            },
            {
                title: '出票',
                desc: '逐張出票，異常時進入處理流程',
            },
        ],
    },
    {
        no: '流程二',
        title: '取票',
        actors: '乘客 → 售票機介面 → BFF 後端 → 硬體裝置',
        steps: [
            {
                title: '輸入',
                desc: '輸入取票所需資料',
            },
            {
                title: '確認',
                desc: '確認取票明細',
            },
            {
                title: '出票',
                desc: '必要時付款，之後出票',
            },
        ],
    },
    {
        no: '流程三',
        title: '離線購票',
        actors: '售票機介面 → 地端 OSS API → 硬體裝置',
        steps: [
            {
                title: '偵測',
                desc: 'BFF 無法連線時，判定為斷線',
            },
            {
                title: '切換',
                desc: '下一筆交易開始時，改走地端服務',
            },
            {
                title: '購票',
                desc: '完成單程購票、付款與出票',
            },
            {
                title: '恢復',
                desc: '連線恢復後補傳資料，回到線上',
            },
        ],
    },
    {
        no: '流程四',
        title: '語音購票',
        actors: '乘客 → 售票機介面 → BFF 後端',
        steps: [
            {
                title: '喚醒',
                desc: '以喚醒詞開始語音操作',
            },
            {
                title: '說話',
                desc: '在各頁面以語音說出選擇',
            },
            {
                title: '分析',
                desc: '後端分析語意，帶入對應欄位',
            },
            {
                title: '確認',
                desc: '觸控與語音並存，乘客確認後繼續流程',
            },
        ],
    },
];
</script>
