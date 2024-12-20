<template>
    <div
        id="services"
        class="bg-secondary py-15"
    >
        <v-container fluid>
            <v-row class="justify-center align-center">
                <v-col
                    cols="12"
                    sm="10"
                >
                    <v-card
                        flat
                        variant="text"
                    >
                        <v-card-title class="text-center">
                            客製化服務
                        </v-card-title>

                        <v-card-subtitle class="text-center mb-5">
                            不需設計稿，從零到有一次架到好<br>
                            包含部署與維護，至少一年保固
                        </v-card-subtitle>

                        <v-card-text>
                            <v-row>
                                <v-col
                                    cols="12"
                                    sm="4"
                                    class="pa-1"
                                >
                                    <PlanCard :service="services[0]" />
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="4"
                                    class="pa-1"
                                >
                                    <PlanCard :service="services[1]" />
                                </v-col>
                                <v-col
                                    cols="12"
                                    sm="4"
                                    class="pa-1"
                                >
                                    <PlanCard :service="services[2]" />
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script lang="ts" setup>
import { Types } from '@/types/types';

import PlanCard from './components/PlanCard.vue';

const services: Types.Service[] = [
    {
        title: '品牌形象網站',
        serviceItems: [
            'RWD 響應式設計',
            '無需設計稿',
            '最快 7 天交件',
        ],
        additionals: [
            '附帶 SSL 憑證',
            '一年保固',
            '雲端平台部署',
        ],
    },
    {
        title: '後台管理系統',
        serviceItems: [
            '會員系統',
            '權限管理系統',
            '部落格系統',
            '客製化功能',
        ],
        additionals: [
            '附帶 SSL 憑證',
            '一年保固',
            '雲端平台部署',
        ],
    },
    {
        title: '專案重構與分析',
        serviceItems: [
            '前端／後端專案重構',
            '整理＆分析雜亂系統',
            '提供系統分析 SA 文件',
        ],
        additionals: ['一年保固'],
    },
];

</script>
