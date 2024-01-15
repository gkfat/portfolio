<template>
    <v-container
        :id="NavItems.Proficiency"
        class="mb-5"
        fluid
    >
        <p class="text-h5 mb-3">
            {{ t('nav.' + NavItems.Proficiency) }}
        </p>

        <v-carousel
            cycle
            hide-delimiters
            show-arrows="hover"
            height="300px"
        >
            <v-carousel-item
                v-for="pro of proficiency"
                :key="pro.title"
            >
                <v-sheet
                    color="primary"
                    height="100%"
                    rounded
                >
                    <div class="pa-3 d-flex justify-center align-items-center flex-wrap ga-1">
                        <h4 class="text-h6 text-center w-100">
                            <v-icon
                                class="mb-1"
                                :icon="pro.icon"
                                size="36"
                            />
                            <br>
                            {{ pro.title }}
                        </h4>
                        <v-divider class="my-3" />
                        <v-list-item
                            v-for="item of pro.items"
                            :key="item"
                            class="text-body-2 w-100"
                        >
                            <template #prepend>
                                <v-icon
                                    icon="mdi-check-circle-outline"
                                    size="18"
                                />
                            </template>
                            <v-list-item-subtitle>
                                {{ item }}
                            </v-list-item-subtitle>
                        </v-list-item>
                    </div>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
    </v-container>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

import { NavItems } from '@/enums/nav-items';

const { t } = useI18n();

const proficiency = [
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
