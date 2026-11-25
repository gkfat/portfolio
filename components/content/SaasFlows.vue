<template>
    <FlowCards :flows="flows" />
</template>

<script lang="ts" setup>
import FlowCards, { type Flow } from '~/components/ui/FlowCards.vue';

const flows: Flow[] = [
    {
        no: '流程一',
        title: '會員開通與登入',
        actors: 'LINE 會員卡 → API Server，由 LINE 提供身分驗證',
        steps: [
            {
                title: '開啟',
                desc: '在 LINE 內開啟會員卡',
            },
            {
                title: '登入',
                desc: '以 LINE 身分驗證，不需另外註冊帳號密碼',
            },
            {
                title: '開通',
                desc: '自動建立會員資料與會員卡',
            },
            {
                title: '使用',
                desc: '查看等級、點數與優惠券',
            },
        ],
    },
    {
        no: '流程二',
        title: '優惠券',
        actors: '管理後台 → LINE 會員卡 → 店家掃碼',
        steps: [
            {
                title: '建立',
                desc: '管理員建立優惠券',
            },
            {
                title: '發放',
                desc: '發放給指定會員',
            },
            {
                title: '領用',
                desc: '會員在會員卡查看自己的優惠券',
            },
            {
                title: '核銷',
                desc: '結帳時出示 QR Code，店家掃碼核銷',
            },
        ],
    },
    {
        no: '流程三',
        title: '線上預約',
        actors: '管理後台 → LINE 會員卡',
        steps: [
            {
                title: '設定',
                desc: '管理員設定服務項目、提供者與時段',
            },
            {
                title: '預約',
                desc: '會員選擇服務與時段進行預約',
            },
            {
                title: '確認',
                desc: '依審核模式自動確認，或交由管理員審核',
            },
            {
                title: '取消',
                desc: '會員可自行取消預約',
            },
        ],
    },
    {
        no: '流程四',
        title: '點數與等級',
        actors: '管理後台 → LINE 會員卡，並由系統排程定期評估',
        steps: [
            {
                title: '設定',
                desc: '設定點數折抵比例與等級門檻',
            },
            {
                title: '發放',
                desc: '管理員發放或調整會員點數',
            },
            {
                title: '累積',
                desc: '會員在會員卡查詢點數紀錄',
            },
            {
                title: '升等',
                desc: '系統依期間評估，自動計算會員等級',
            },
        ],
    },
];
</script>
