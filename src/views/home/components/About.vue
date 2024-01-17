<template>
    <v-container
        :id="NavItems.About"
        class="mb-10"
        fluid
    >
        <v-row class="flex-wrap mb-14">
            <v-col cols="12">
                <p class="text-h5 text-center font-weight-medium">
                    {{ t('nav.' + NavItems.About) }}
                </p>
            </v-col>
            <v-col col="12">
                <v-divider
                    thickness="3"
                    class="w-25 mx-auto"
                />
            </v-col>
        </v-row>

        <v-row
            justify="center"
            justify-sm="start"
        >
            <!-- Avatar -->
            <v-col
                cols="auto"
                sm="2"
            >
                <v-avatar size="100">
                    <v-img
                        src="/gkfat.png"
                        cover
                    />
                </v-avatar>
            </v-col>
            <!-- 介紹 -->
            <v-col
                cols="auto"
                sm="10"
            >
                <h5 class="text-h5 mb-3 text-primary">
                    王哲楷 | Gk Wang
                </h5>

                <v-chip
                    color="secondary"
                    class="mb-8"
                    label
                >
                    Full-stack developer
                </v-chip>

                <p class="mb-3">
                    我是 Gk，一名全端工程師。由於本科設計系的訓練，對於美感有較高要求，從程式碼編排格式、註解、命名風格、架構設計、效能到說明文件編寫，一以貫之。具備美感的程式碼及文件，才能流暢交付，節省大量無形溝通成本。
                </p>
                <p class="mb-5">
                    在交付期限與品質的拉鋸間，我能提出最佳解決方案。事前分析規劃、良好的架構設計、清楚的文件，才能確保開發效率，減少除錯時間。在期限內達到品質保證，取得完美平衡，就是我所追求的軟體開發標準。
                </p>

                <!-- Social media -->
                <div class="d-flex justify-center justify-sm-start ga-3 mb-5">
                    <!-- Resume -->
                    <v-tooltip
                        text="Resume"
                        location="bottom"
                    >
                        <template #activator="{ props }">
                            <v-btn
                                icon
                                color="primary"
                                v-bind="props"
                                href="https://www.cakeresume.com/s--nFb6N436eKp-1VNtf_cmSg--/gk-wang"
                                target="_blank"
                            >
                                <v-icon>mdi-file-account</v-icon>
                            </v-btn>
                        </template>
                    </v-tooltip>

                    <!-- Github -->
                    <v-tooltip
                        text="Github"
                        location="bottom"
                    >
                        <template #activator="{ props }">
                            <v-btn
                                icon
                                color="primary"
                                v-bind="props"
                                href="https://github.com/gkfat"
                                target="_blank"
                            >
                                <v-icon>mdi-github</v-icon>
                            </v-btn>
                        </template>
                    </v-tooltip>

                    <!-- LinkedIn -->
                    <v-tooltip
                        text="LinkedIn"
                        location="bottom"
                    >
                        <template #activator="{ props }">
                            <v-btn
                                icon
                                color="primary"
                                v-bind="props"
                                href="https://www.linkedin.com/in/gkgkwang"
                                target="_blank"
                            >
                                <v-icon>mdi-linkedin</v-icon>
                            </v-btn>
                        </template>
                    </v-tooltip>

                    <!-- Email -->
                    <v-tooltip
                        text="Email"
                        location="bottom"
                    >
                        <template #activator="{ props }">
                            <v-btn
                                icon
                                color="primary"
                                v-bind="props"
                                href="mailto:gkgkdesign@gmail.com"
                                target="_blank"
                            >
                                <v-icon>mdi-email</v-icon>
                            </v-btn>
                        </template>
                    </v-tooltip>

                    <!-- Blog -->
                    <v-tooltip
                        text="Blog"
                        location="bottom"
                    >
                        <template #activator="{ props }">
                            <v-btn
                                icon
                                color="primary"
                                v-bind="props"
                                href="https://gkfat.github.io/"
                                target="_blank"
                            >
                                <v-icon>mdi-note</v-icon>
                            </v-btn>
                        </template>
                    </v-tooltip>
                </div>

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
            { text: 'TypeScript', icon: 'mdi-language-typescript' },
            { text: 'Vue', icon: 'mdi-vuejs' },
            { text: 'Angular', icon: 'mdi-angular' },
            { text: 'SCSS', icon: 'mdi-language-css3' },
            { text: 'Vuetify', icon: 'mdi-vuetify' },
            { text: 'Bootstrap', icon: 'mdi-bootstrap' },
        ],
    },
    {
        title: t('skills.backend'),
        items: [
            { text: 'Node.js', icon: 'mdi-nodejs' },
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
            { text: 'Docker', icon: 'mdi-docker' },
            { text: 'Linux', icon: 'mdi-linux' },
            { text: 'GCP GKE', icon: 'mdi-google' },
            { text: 'AWS EC2', icon: 'mdi-aws' },
            { text: 'Cloudflare', icon: 'mdi-cloud-outline' },
        ],
    },
];
</script>
