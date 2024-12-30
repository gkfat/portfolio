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
                <v-col cols="auto">
                    <v-card-title class="text-primary text-wrap">
                        {{ project.title }}
                    </v-card-title>
                    <v-card-subtitle class="font-weight-bold">
                        <em class="text-caption">{{ project.time }}</em>
                    </v-card-subtitle>
                </v-col>

                <v-col cols="auto" class="ml-auto">
                    <v-btn
                        flat
                        variant="text"
                        color="grey"
                        icon="mdi-close"
                        @click="appStore.isOpenDialog = false"
                    ></v-btn>
                </v-col>
            </v-row>

            <v-divider />

            <!-- 預覽圖 -->
            <v-card-text v-if="!project.imagesUrls.length">
                <p class="text-warning text-center py-3">
                    無預覽圖。
                </p>
            </v-card-text>

            <v-carousel
                v-model="activeIndex"
                :show-arrows="project.imagesUrls.length > 1 ? 'hover' : false"
                hide-delimiters
                height="auto"
                cycle
                interval="3000"
            >
                <v-carousel-item
                    v-for="(imgUrl, index) of project.imagesUrls"
                    :key="index"
                    :value="index"
                >
                    <div
                        class="d-flex justify-center align-center"
                        style="height: 100%; max-height: 400px;"
                    >
                        <v-img
                            :src="toImageUrl(imgUrl)"
                            :lazy-src="getPlaceholderImage()"
                            :contain="isImageLoaded"
                            :cover="!isImageLoaded"
                            @load="onImageLoadUpdate"
                        />
                    </div>
                </v-carousel-item>
            </v-carousel>

            <v-divider />

            <!-- 專案描述 -->
            <v-card-text>
                <p class="mb-3" :style="{ fontSize: '1.1rem' }">專案描述</p>
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
                    <span :style="{
                        fontSize: '0.7rem'
                    }">
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
import {
  computed,
  ref,
  watch,
} from 'vue';

import TextBtn from '@/components/btn/TextBtn.vue';
import { useAppStore } from '@/store/app';
import {
  getPlaceholderImage,
  toImageUrl,
} from '@/utils/image';

const appStore = useAppStore();

const project = computed(() => appStore.activeProject);

const activeIndex = ref(0);
const isImageLoaded = ref(false);

const setActiveImage = (index: number) => {
    activeIndex.value = index;
};

const onImageLoadUpdate = () => {
    isImageLoaded.value = true;
};

watch(
    () => appStore.activeProject,
    () => {
        isImageLoaded.value = false;
        if (project.value?.imagesUrls.length) {
            setActiveImage(0);
        }
    },
);
</script>
