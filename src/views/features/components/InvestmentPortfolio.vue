<template>
    <v-container
        fluid
        :max-width="1000"
        :style="{
            marginBottom: '60px'
        }"
    >
        <v-row class="justify-center align-center">
            <v-col cols="auto">
                <v-card
                    flat
                    class="bg-transparent"
                >
                    <v-card-title class="text-wrap text-capitalize">
                        {{ t('project.label_investment_portfolio') }}
                    </v-card-title>
                    <v-card-subtitle
                        class="text-wrap"
                        :style="{
                            maxWidth: '320px'
                        }"
                    >
                        {{ t('project.label_investment_portfolio_intro') }}
                    </v-card-subtitle>
                    <v-card-text>
                        <v-btn
                            color="primary"
                            block
                            variant="outlined"
                            class="text-capitalize"
                            :text="t('button.view_project')"
                            @click="setActiveProject"
                        />
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="auto">
                <v-card
                    :width="320"
                    :height="240"
                    elevation="10"
                    class="rounded-lg overflow-hidden"
                >
                    <v-carousel
                        v-model="activeSlide"
                        show-arrows="hover"
                        hide-delimiters
                        cycle
                        :width="300"
                        :height="240"
                        progress
                    >
                        <v-carousel-item
                            v-for="(slide, i) in project.imagesUrls"
                            :key="i"
                        >
                            <v-img
                                :src="toImageUrl(slide)"
                                aspect-ratio="1/1"
                                :height="240"
                                cover
                            />
                        </v-carousel-item>
                    </v-carousel>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

import { useI18n } from 'vue-i18n';

import { Projects } from '@/data/project';
import { EnumProject } from '@/enums/projects';
import { useAppStore } from '@/store/app';
import { toImageUrl } from '@/utils/image';

const appStore = useAppStore();
const { t } = useI18n();

const project = Projects[EnumProject.InvestmentPortfolio];
const activeSlide = ref(project.imagesUrls[0]);

const setActiveProject = () => {
    appStore.setActiveProject(project);
};
</script>