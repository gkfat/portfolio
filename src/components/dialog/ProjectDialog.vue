<template>
    <v-dialog
        v-model="appStore.isOpenDialog"
        transition="dialog-bottom-transition"
        :max-width="800"
        :max-height="600"
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
                    {{ t('project_dialog.label_no_images') }}
                </p>
            </v-card-text>

            <v-card-text
                v-else
                class="overflow-hidden"
                :style="{height: '500px'}"
            >
                <v-row class="fill-height">
                    <!-- 左欄 -->
                    <v-col
                        cols="12"
                        sm="6"
                    >
                        <p
                            class="mb-3"
                            :style="{ fontSize: '1.1rem' }"
                        >
                            {{ t('project_dialog.label_project_description') }}
                        </p>

                        <div class="mb-5">
                            <p
                                v-for="(item, i) of project.items"
                                :key="i"
                            >
                                - {{ item }}
                            </p>
                        </div>

                        <v-row class="ma-0 ga-1 flex-wrap">
                            <v-col
                                v-for="(tag, i) in project.tags"
                                :key="i"
                                cols="auto"
                                class="pa-0"
                            >
                                <v-chip
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
                            </v-col>
                        </v-row>
                    </v-col>

                    <!-- 右欄 -->
                    <v-col
                        cols="12"
                        sm="6"
                        class="overflow-y-auto"
                        :style="{maxHeight: '100%'}"
                    >
                        <v-row class="ma-0 ga-3 flex-wrap">
                            <v-col
                                v-for="(imgUrl, i) in project.imagesUrls"
                                :key="i"
                                class="pa-0"
                                :class="{ 'mx-auto': smAndDown }"
                                cols="auto"
                            >
                                <ImageBox
                                    :project="project"
                                    :index="i"
                                    :src="imgUrl"
                                    :aspect-ratio="'1/1'"
                                    :width="smAndDown ? 240 : 160"
                                    :height="smAndDown ? 240 : 160"
                                />
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
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

import { useI18n } from 'vue-i18n';
import { useDisplay } from 'vuetify';

import TextBtn from '@/components/btn/TextBtn.vue';
import { useAppStore } from '@/store/app';

import ImageBox from '../ImageBox.vue';

const appStore = useAppStore();
const { smAndDown } = useDisplay();
const { t } = useI18n();

const project = computed(() => appStore.activeProject);
</script>
