<template>
    <v-row class="justify-center flex-md-nowrap">
        <!-- About -->
        <v-col
            cols="12"
            md="6"
            class="mb-10 mb-md-0"
        >
            <p class="text-body-1 text-primary mb-3">你好！我是 Gk Wang，是一名集設計、專案管理與程式專業於一身的網頁開發者。經歷過設計、行銷、文案領域之後，本著對程式的熱情，自學轉職成爲程式開發者，並在軟體業歷練多年。</p>
            <p class="text-body-1 text-primary mb-3">為了追求工作與生活的平衡，我在 2025 年 5 月離職，轉為全職接案。</p>
            <p class="text-body-1 text-primary mb-8">這些是我近期較常使用的技能：</p>

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

const skills = [
    ['JavaScript(ES6+)', 'TypeScript'],
    ['Vue(3+)', 'Angular(19+)'],
    ['React', 'Node.js'],
];
</script>