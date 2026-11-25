<template>
    <v-row class="justify-center flex-md-nowrap">
        <!-- About -->
        <v-col
            cols="12"
            md="7"
            class="mb-10 mb-md-0 pe-md-8"
        >
            <template
                v-for="(block, i) in aboutBlocks"
                :key="i"
            >
                <p
                    v-if="block.type === 'p'"
                    class="text-body-1 mb-3"
                >
                    {{ block.text }}
                </p>

                <v-list
                    v-else-if="block.type === 'list'"
                    density="compact"
                    class="text-body-1 mb-3 bg-transparent px-0"
                >
                    <v-list-item v-if="block.items">
                        <template
                            v-for="(item, j) in block.items"
                            :key="j"
                        >
                            {{ item }}<br v-if="j < block.items.length - 1">
                        </template>
                    </v-list-item>
                </v-list>
            </template>

            <div class="d-flex flex-wrap ga-2 mt-4">
                <v-chip
                    v-for="skill in skills.flat()"
                    :key="skill"
                    variant="outlined"
                    rounded="0"
                >
                    {{ skill }}
                </v-chip>
            </div>
        </v-col>

        <!-- Avatar -->
        <v-col
            cols="12"
            md="5"
            class="text-center text-md-right"
        >
            <v-avatar
                rounded="0"
                :size="mdAndUp ? 260 : 220"
            >
                <v-img
                    alt="Gk Wang 個人照片"
                    aspect-ratio="1/1"
                    contain
                    :src="AvatarImg"
                />
            </v-avatar>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';
import AvatarImg from '~/public/avatar.jpg';

const { mdAndUp } = useDisplay();

type AboutBlock = {
    type: 'p' | 'list';
    text?: string;
    items?: string[];
}

const aboutBlocks: AboutBlock[] = [
    {
        type: 'p',
        text: '我是 Gk Wang。真正稀缺的能力不再是寫出程式，而是定義問題、設計架構與整合需求。',
    },
    {
        type: 'p',
        text: '我的工作方式：',
    },
    {
        type: 'list',
        items: [
            '(1) Understand the Business：理解營運流程、痛點與真正需求',
            '(2) Design the Solution：規劃系統架構、資料流、API 與 AI 應用方式',
            '(3) Build & Integrate：開發軟體、整合現有系統與第三方服務',
            '(4) Deploy & Iterate：部署、測試，並依實際使用情況持續改善',
        ],
    },
    {
        type: 'p',
        text: '我從設計、行銷、文案到軟體開發，橫跨產品打造的多個角色，能理解需求、規劃流程、設計系統，也能和不同角色順暢溝通。',
    },
    {
        type: 'p',
        text: '這些是我近期較常使用的技能：',
    },
];

const skills = [
    ['JavaScript(ES6+)', 'TypeScript'],
    ['Vue(3+)', 'Angular(19+)'],
    ['React', 'Node.js'],
    ['Claude'],
];
</script>
