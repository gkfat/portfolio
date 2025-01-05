<template>
    <v-dialog
        v-model="appStore.isOpenDialog"
        transition="dialog-bottom-transition"
        max-width="800"
        class="mx-auto"
    >
        <v-card
            v-if="project"
            rounded="lg"
            color="white"
        >
            <v-row class="align-center ma-0">
                <v-col
                    cols="10"
                    sm="auto"
                >
                    <v-card-title class="text-primary text-wrap">
                        {{ project.title }}
                        <em class="ml-3 text-caption">{{ project.time }}</em>
                    </v-card-title>
                </v-col>

                <v-col
                    cols="2"
                    sm="auto"
                    class="ml-auto"
                >
                    <v-btn
                        flat
                        variant="text"
                        color="grey"
                        icon="mdi-close"
                        @click="appStore.isOpenDialog = false"
                    />
                </v-col>
            </v-row>

            <!-- 預覽圖 -->
            <v-card-text v-if="!project.imagesUrls.length">
                <p class="text-warning text-center py-3">
                    無預覽圖。
                </p>
            </v-card-text>

            <v-card-text v-else>
                <v-row class="ma-0 ga-3 flex-nowrap overflow-x-scroll">
                    <v-col
                        v-for="(imgUrl, i) in project.imagesUrls"
                        :key="i"
                        class="pa-0"
                        cols="auto"
                    >
                        <ImageBox
                            :project="project"
                            :index="i"
                            :src="imgUrl"
                            :aspect-ratio="'1/1'"
                            :width="120"
                            :height="120"
                        />
                    </v-col>
                </v-row>
            </v-card-text>

            <!-- 專案描述 -->
            <v-card-text>
                <p
                    class="mb-3"
                    :style="{ fontSize: '1.1rem' }"
                >
                    專案描述
                </p>
                <p
                    v-for="(item, i) of project.items"
                    :key="i"
                >
                    - {{ item }}
                </p>
            </v-card-text>

            <v-card-text class="py-1 d-flex flex-wrap ga-1">
                <v-chip
                    v-for="(tag, i) in project.tags"
                    :key="i"
                    size="x-small"
                >
                    <span
                        :style="{
                            fontSize: '0.7rem'
                        }"
                    >
                        {{ tag }}
                    </span>
                </v-chip>
            </v-card-text>

            <template v-if="project.githubUrl || project.websiteUrl">
                <v-divider class="mt-3" />

                <v-card-actions class="px-5">
                    <TextBtn
                        v-if="project.githubUrl"
                        :title="'Github'"
                        :link-url="project.githubUrl"
                        class="me-3"
                    />
                    <TextBtn
                        v-if="project.websiteUrl"
                        :title="'Website'"
                        :link-url="project.websiteUrl"
                    />
                </v-card-actions>
            </template>
        </v-card>
    </v-dialog>
</template>
<script lang="ts" setup>
import { computed } from 'vue';

import TextBtn from '@/components/btn/TextBtn.vue';
import { useAppStore } from '@/store/app';

import ImageBox from '../ImageBox.vue';

const appStore = useAppStore();

const project = computed(() => appStore.activeProject);
</script>
