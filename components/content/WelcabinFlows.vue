<template>
    <FlowCards
        :flows="flows"
        intro="同一個前端專案支援長照與復康兩條產品線，並可由多個營運單位共用。以下是各系統的四條核心流程。"
    />
</template>

<script lang="ts" setup>
import FlowCards, { type Flow } from '~/components/ui/FlowCards.vue';

const flows: Flow[] = [
    {
        no: '流程一',
        title: '長照叫車訂單',
        actors: '乘客 LIFF → 管理後台 → 司機 LIFF，並串接外部車資估價系統',
        steps: [
            {
                title: '建單',
                desc: '多管道進件，建單時自動套用受理規則',
            },
            {
                title: '估價',
                desc: '串接外部系統取得車資，確認訂單',
            },
            {
                title: '派車',
                desc: '調度員指派司機，也可改派或退單',
            },
            {
                title: '接送',
                desc: '司機於 LIFF 查看任務，全程狀態即時更新',
            },
            {
                title: '結案',
                desc: '從收款、司機分帳到補助申請，帳務完整結案',
            },
        ],
    },
    {
        no: '流程二',
        title: 'AI 排班',
        actors: '管理後台',
        steps: [
            {
                title: '匯入',
                desc: '匯入訂單，或快速生成測試資料',
            },
            {
                title: '設定',
                desc: '依需求設定車種與預約優先級',
            },
            {
                title: '排班',
                desc: '自動排出各車路線',
            },
            {
                title: '檢視',
                desc: '以地圖與時間軸檢視結果，找出未服務的訂單',
            },
            {
                title: '下載',
                desc: '下載班表供現場使用',
            },
        ],
    },
    {
        no: '流程三',
        title: '復康訂車',
        actors: '客服後台、乘客 Web、乘客 LIFF',
        steps: [
            {
                title: '查詢',
                desc: '查詢乘客與歷史訂單',
            },
            {
                title: '選時段',
                desc: '依即時容量選擇乘車時段',
            },
            {
                title: '劃位',
                desc: '暫時保留名額，避免重複預約',
            },
            {
                title: '確認',
                desc: '填寫乘車資訊並送出訂單',
            },
            {
                title: '派車',
                desc: '排入班表，帶出車輛與駕駛',
            },
        ],
    },
    {
        no: '流程四',
        title: '乘客簽到與家屬追蹤',
        actors: '乘客掃碼頁 → 家屬追蹤頁',
        steps: [
            {
                title: '掃碼',
                desc: '乘客掃描 QR Code，免註冊即可進入',
            },
            {
                title: '驗證',
                desc: '輸入簡易資料確認身分',
            },
            {
                title: '同意',
                desc: '確認行程並完成知情同意',
            },
            {
                title: '完成',
                desc: '完成簽到',
            },
            {
                title: '追蹤',
                desc: '家屬取得連結，隨時查看行程進度',
            },
        ],
    },
];
</script>
