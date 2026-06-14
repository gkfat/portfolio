<template>
    <v-row class="justify-center flex-md-nowrap">
        <!-- About -->
        <v-col
            cols="12"
            md="6"
            class="mb-10 mb-md-0"
        >
            <template
                v-for="(block, i) in aboutBlocks"
                :key="i"
            >
                <p
                    v-if="block.type === 'p'"
                    class="text-body-1 text-primary mb-3"
                >
                    {{ block.text }}
                </p>

                <v-list
                    v-else-if="block.type === 'list'"
                    density="compact"
                    class="text-body-1 text-primary mb-3"
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

            <v-row no-gutters>
                <v-col
                    v-for="(row, i) in skills"
                    :key="i"
                    cols="12"
                >
                    <v-row no-gutters>
                        <v-col
                            v-for="(skill) in row"
                            :key="skill"
                            cols="6"
                        >
                            <p class="text-secondary font-weight-bold py-1">
                                <v-icon
                                    :style="{transform: 'rotate(90deg)'}"
                                    icon="mdi-triangle-small-up"
                                />
                                {{ skill }}
                            </p>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-col>

        <!-- Avatar -->
        <v-col
            cols="12"
            md="6"
            class="text-center"
        >
            <v-avatar
                rounded="xl"
                :size="mdAndUp ? '90%' : 300"
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
        text: '我是 Gk Wang。',
    },
    {
        type: 'p',
        text: '在這個 AI 爆發的時代，你的產品是否能放心依靠 AI？眾所皆知，AI 非常擅長產生程式碼，但不擅長：',
    },
    {
        type: 'list',
        items: [
            '(1) 理解隱藏需求',
            '(2) 維持架構一致性',
            '(3) 長期演進',
        ],
    },
    {
        type: 'p',
        text: '你要尋找的人不是會用 AI 就好，而必須能夠「精準駕馭」。同理，架構並非能動就好，而是需要經過妥善設計。真正稀缺的能力不再是寫出程式，而是定義問題、設計架構與整合需求。',
    },
    {
        type: 'p',
        text: '而我，從設計、行銷、文案到軟體開發，橫跨產品打造的多個角色，在具有寫程式的熱忱之餘，兼有理解需求、規劃流程與設計系統的能力。最重要的是，我能溝通。',
    },
    {
        type: 'p',
        text: '我具備以下優勢：',
    },
    {
        type: 'list',
        items: [
            '(1) 擅長需求分析與產品規劃',
            '(2) 系統架構設計',
            '(3) Client side UX 流程設計與 API 串接管理',
            '(4) Server side 邏輯釐清與設計',
            '(5) SDD 規格驅動開發',
            '(6) 擅長溝通',
        ],
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
