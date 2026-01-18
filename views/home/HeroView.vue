<template>
    <v-row no-gutters class="justify-center">
        <v-col cols="12">
            <v-list class="bg-transparent" density="compact">
                <v-list-item class="pl-5 text-primary">
                    您好，我是
                </v-list-item>
                <v-list-item class="mb-2">
                    <h1 class="text-h2 text-secondary font-weight-bold mb-3">
                        Gk Wang
                    </h1>
                    <h2 class="text-h4 text-secondary font-weight-bold" :style="{filter: 'opacity(0.9)'}">
                        集設計、專案管理與程式專業於一身的網頁開發者
                    </h2>
                </v-list-item>
                <v-list-item class="pl-5 text-primary">
                    我提供哪些服務？
                </v-list-item>
                <v-list-item
                    v-for="(item, i) in list"
                    :key="i"
                    class="text-primary mb-2"
                >
                    <v-list-item-title class="font-weight-bold" :style="{ letterSpacing: '1px' }">
                        <v-icon
                            icon="mdi-triangle-small-up"
                            class="text-secondary"
                            :style="{transform: 'rotate(90deg)'}"
                        />
                        {{ item.title }}
                    </v-list-item-title>
                    <v-list-item-subtitle class="pl-7">
                        {{ item.subtitle }}
                    </v-list-item-subtitle>
                </v-list-item>
            </v-list>
        </v-col>
    </v-row>
</template>
<script lang="ts" setup>
import type { ListItem } from '~/types';

const list: ListItem[] = [
    {
        title: '全端開發', subtitle: '後台、前端、部署，一次搞定', 
    },
    {
        title: 'Line Liff 應用', subtitle: '現代化輕巧 App，開箱即用', 
    },
    {
        title: '複雜業務邏輯', subtitle: 'ERP 整合、數據報表、RBAC 權限管理', 
    },
    {
        title: '設計驅動開發', subtitle: '美感 UI 搭配高度可維護程式碼', 
    },
    {
        title: '長期技術夥伴', subtitle: '掌握時程、詳盡交接、持續維護', 
    },
];
</script>