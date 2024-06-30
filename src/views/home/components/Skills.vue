<template>
    <v-container
        :id="NavItems.About"
        class="mb-10"
        fluid
    >
        <v-row class="mb-14">
            <v-col cols="12">
                <p class="text-h5 text-center font-weight-medium">
                    {{ t('nav.' + NavItems.Skills) }}
                </p>
            </v-col>
            <v-col col="12">
                <v-divider
                    thickness="3"
                    class="w-25 mx-auto"
                />
            </v-col>
        </v-row>

        <!-- 技術棧 -->
        <v-row class="align-stretch flex-wrap">
            <v-col
                v-for="skill of skills"
                :key="skill.title"
                cols="12"
                sm="6"
                md="4"
            >
                <SkillCard :skill="skill" />
            </v-col>
        </v-row>

        <!-- 技能描述 -->
        <v-row>
            <v-col
                v-for="(item, i) of skillsDescription"
                :key="i"
                cols="12"
            >
                <v-list
                    bg-color="transparent"
                    density="compact"
                >
                    <v-list-title class="text-h6 text-primary font-weight-bold">
                        {{ item.title }}
                    </v-list-title>

                    <v-list-item
                        v-for="(description, _i) of item.descriptions"
                        :key="_i"
                        :title="description"
                        prepend-icon="mdi-circle-medium"
                    />
                </v-list>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

import SkillCard from '@/components/SkillCard.vue';
import { NavItems } from '@/enums/nav-items';
import { Types } from '@/types/types';

const { t } = useI18n();

const skills: Types.Skill[] = [
    {
        title: t('skills.frontend'),
        items: [
            { text: 'HTML', icon: 'mdi-language-html5' },
            { text: 'CSS', icon: 'mdi-language-css3' },
            { text: 'JavaScript', icon: 'mdi-language-javascript' },
            { text: 'TypeScript', icon: 'mdi-language-typescript', variant: 'flat' },
            { text: 'Vue', icon: 'mdi-vuejs', variant: 'flat' },
            { text: 'Angular', icon: 'mdi-angular' },
            { text: 'SCSS', icon: 'mdi-language-css3' },
            { text: 'Vuetify', icon: 'mdi-vuetify', variant: 'flat' },
            { text: 'Bootstrap', icon: 'mdi-bootstrap' },
        ],
    },
    {
        title: t('skills.backend'),
        items: [
            { text: 'Node.js', icon: 'mdi-nodejs', variant: 'flat' },
            { text: 'Python', icon: 'mdi-language-python' },
            { text: 'Mysql', icon: 'mdi-database' },
            { text: 'MongoDB', icon: 'mdi-database' },
            { text: 'Firebase', icon: 'mdi-firebase' },
            { text: 'CloudStorage', icon: 'mdi-cloud-outline' },
        ],
    },
    {
        title: t('skills.devops'),
        items: [
            { text: 'Docker', icon: 'mdi-docker', variant: 'flat' },
            { text: 'Linux', icon: 'mdi-linux' },
            { text: 'GCP GKE', icon: 'mdi-google' },
            { text: 'AWS EC2', icon: 'mdi-aws' },
            { text: 'Cloudflare', icon: 'mdi-cloud-outline' },
        ],
    },
];

const skillsDescription = [
    {
        title: '前端開發',
        descriptions: [
            '基於 OOP 概念，設計方便擴充與測試的程式碼結構',
            '具備設計系經驗，自我美感要求高，不跑版與 RWD 是基本，畫面與配色應更有要求',
            '熟悉 Docker 打包',
        ],
    },
    {
        title: '後端開發',
        descriptions: [
            '熟悉系統後端服務設計，串接各種第三方服務如 SMTP、NAS、ERP、Firebase、ELK、GCP 等',
            '熟悉多種溝通協定如：Http、WebSocket、gRPC、Ice',
            '熟悉 Docker 打包',
        ],
    },
    {
        title: '部署維運',
        descriptions: [
            '具備在 AWS EC2 上安裝環境到建置部署流程的架站經驗',
            '具備在 GKE 上部署 Docker Image Pods 的經驗',
        ],
    },
];
</script>
