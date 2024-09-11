<template>
    <v-dialog
        v-model="appStore.isOpenDialog"
        transition="dialog-bottom-transition"
        max-width="800"
        class="mx-auto"
    >
        <v-card
            v-if="project"
            rounded="xl"
            class="py-3"
            color="white"
        >
            <v-card-title class="text-primary text-wrap">
                {{ project.title }}
            </v-card-title>

            <v-card-subtitle class="font-weight-bold mb-3">
                <span class="text-warning me-3">{{ project.subtitle }}</span>
                <em class="text-caption">{{ project.time }}</em>
            </v-card-subtitle>

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
                            contain
                        />
                    </div>
                </v-carousel-item>
            </v-carousel>

            <v-divider />

            <!-- 專案描述 -->
            <v-card-text>
                <p
                    v-for="(item, i) of project.items"
                    :key="i"
                >
                    - {{ item }}
                </p>
            </v-card-text>

            <v-card-text class="py-1 d-flex flex-wrap ga-1">
                <p
                    v-for="(tag, i) in project.tags"
                    :key="i"
                    class="text-caption text-decoration-underline cursor-pointer me-2"
                >
                    {{ `#${tag}` }}
                </p>
            </v-card-text>

            <template v-if="project.githubUrl || project.websiteUrl">
                <v-divider />

                <v-card-actions class="px-3">
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
import { toImageUrl } from '@/utils/image';

const appStore = useAppStore();

const project = computed(() => appStore.activeProject);

const activeIndex = ref(0);

const setActiveImage = (index: number) => {
    activeIndex.value = index;
};

watch(
    () => appStore.activeProject,
    () => {
        if (project.value?.imagesUrls.length) {
            setActiveImage(0);
        }
    },
);
</script>
