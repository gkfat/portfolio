<template>
    <v-row no-gutters class="justify-center">
        <v-col cols="12">
            <v-list class="bg-transparent" density="compact">
                <v-list-item class="pl-5 text-body-2 text-grey-darken-1">
                    您好，我是
                </v-list-item>
                <v-list-item class="mb-2">
                    <h1 class="text-h2 text-primary font-weight-bold mb-3">
                        Gk Wang
                    </h1>
                    <h2 class="text-h4 text-primary font-weight-bold" :style="{filter: 'opacity(0.9)'}">
                        集設計、專案管理與程式專業於一身的網頁開發者
                    </h2>
                </v-list-item>
                <v-list-item
                    v-for="(item, i) in list"
                    :key="i"
                >
                    <v-icon icon="mdi-minus" class="text-caption" />
                    {{ item.title }}
                </v-list-item>
            </v-list>
        </v-col>
    </v-row>
</template>
<script lang="ts" setup>
import type { ListItem } from '~/types';

const list: ListItem[] = [
    { title: '設計背景，提供具基礎美感的 UI/UX' },
    { title: '豐富專案管理經驗，熟悉跨部門溝通協作，推動專案' },
    { title: '專業程式開發者，致力於為您提供最適合、高度可維護性的解決方案' },
];
</script>