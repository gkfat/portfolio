<template>
    <v-container
        :id="NavItems.Proficiency"
        :max-width="1000"
    >
        <BlockTitle :title="t('nav.' + NavItems.Proficiency)" />

        <v-row>
            <v-col
                v-for="proficiency of proficiencys"
                :key="proficiency.title"
                cols="12"
                sm="6"
                md="4"
            >
                <ProficiencyCard :proficiency="proficiency" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

import BlockTitle from '@/components/BlockTitle.vue';
import ProficiencyCard from '@/components/ProficiencyCard.vue';
import { NavItems } from '@/enums/nav-items';
import { Types } from '@/types/types';

const { t } = useI18n();

const proficiencys: Types.Proficiency[] = [
    {
        title: '程式碼分析＆文件編寫',
        icon: 'mdi-text-box-search-outline',
        items: [
            '編寫清楚的系統分析文件',
            '滾動重構程式碼，提升擴充性',
            '流程整理與優化（協作／備份／版更）',
        ],
    },
    {
        title: '全端開發',
        icon: 'mdi-xml',
        items: [
            '無論有無設計稿，都能交付美感一流的切版',
            'API 串接與資料呈現',
            'DB／API server／前端切版與串接，一手包辦',
            '清楚明瞭的 API 說明文件',
        ],
    },
    {
        title: '自動化工具開發',
        icon: 'mdi-tools',
        items: [
            '繁瑣人工作業，就該用自動化工具取代',
            '釐清流程，去除重複操作',
        ],
    },
    {
        title: '需求分析＆開發規劃',
        icon: 'mdi-checkbox-marked-circle-plus-outline',
        items: [
            '需求分析成開發任務，節省 PM＆RD 溝通障礙',
            '基於 OOP＆UML，設計可複用架構',
        ],
    },
    {
        title: '流暢語文能力',
        icon: 'mdi-chat',
        items: [
            '基於文案寫作經驗，文件可大幅提升協作效率',
            '聽說讀寫溝通無礙的英文能力',
        ],
    },
];
</script>
