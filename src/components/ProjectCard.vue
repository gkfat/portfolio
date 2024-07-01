<template>
    <v-dialog
        transition="dialog-bottom-transition"
    >
        <!-- Activator card -->
        <template #activator="{ props: activatorProps }">
            <v-card
                class="rounded-xl fill-height"
                variant="tonal"
                v-bind="activatorProps"
                hover
            >
                <v-row
                    style="flex-direction: column;"
                    class="fill-height align-items-stretch ma-0"
                >
                    <v-col
                        cols="auto"
                        class="pa-0"
                    >
                        <v-row class="flex-no-wrap ma-0">
                            <v-col
                                cols="auto"
                                class="text-warning pb-0"
                            >
                                {{ project.subtitle }}
                            </v-col>
                            <v-col
                                cols="auto"
                                class="ml-auto pb-0"
                            >
                                <Chip
                                    :color="'warning'"
                                    :variant="'flat'"
                                    :text="project.time"
                                />
                            </v-col>
                        </v-row>
                    </v-col>

                    <v-col cols="auto">
                        <p class="text-h6 font-weight-bold text-primary">
                            {{ project.title }}
                        </p>
                    </v-col>

                    <v-col class="px-5">
                        <p
                            v-for="item of project.items"
                            :key="item"
                        >
                            <v-icon
                                icon="mdi-check-circle-outline"
                                size="18"
                            />
                            {{ item }}
                        </p>
                        <v-spacer class="mb-3" />
                        <Chip
                            v-for="tech of project.techStacks"
                            :key="tech.text"
                            class="ma-1"
                            :text="tech.text"
                            :icon="tech.icon"
                        />
                    </v-col>

                <!-- <v-col
                    v-if="project.websiteUrl"
                    cols="auto"
                    class="text-right mt-3"
                >
                    <v-btn
                        :href="project.websiteUrl"
                        color="primary"
                        variant="flat"
                        target="_blank"
                        class="rounded-xl"
                        icon="mdi-arrow-right"
                    />
                </v-col> -->
                </v-row>
            </v-card>
        </template>

        <!-- Dialog -->
        <template #default="{ isActive }">
            <v-card class="rounded-xl">
                <!-- 無預覽圖或網頁 -->
                <v-card-text v-if="!project.websiteUrl && !project.imagesUrls">
                    <p class="text-warning text-center py-3">
                        無預覽圖或網頁。
                    </p>
                </v-card-text>

                <!-- iframe 網頁呈現 -->
                <v-card-text
                    v-if="project.websiteUrl"
                    class="overflow-hidden pa-3"
                >
                    <div class="overflow-y-auto border-lg rounded-xl">
                        <v-row v-if="loading">
                            <v-col
                                cols="auto"
                                class="py-5 mx-auto"
                            >
                                <v-progress-circular
                                    indeterminate
                                    :size="40"
                                    :width="5"
                                    color="warning"
                                />
                            </v-col>
                        </v-row>

                        <p
                            v-if="!loading && loadingError"
                            class="text-warning text-center py-3"
                        >
                            無法載入內容，請重新整理網頁。
                        </p>

                        <iframe
                            :key="reloadKey"
                            :src="project.websiteUrl"
                            width="100%"
                            :height="iframeHeight"
                            class="bg-white"
                            :style="{ display: loading ? 'none' : 'block' }"
                            frameborder="0"
                            allowfullscreen
                            @error="handleError"
                            @load="handleOnLoad"
                        />
                    </div>
                </v-card-text>

                <!-- 專案描述 -->
                <v-card-text>
                    <p class="text-h6 text-primary font-weight-bold mb-3">
                        {{ project.title }}
                    </p>
                    <p class="text-caption text-warning mb-3">
                        {{ project.subtitle }}
                    </p>
                    <v-row class="ma-0">
                        <Chip
                            v-for="(item, i) of project.items"
                            :key="i"
                            :text="item"
                            :variant="'flat'"
                            :color="'warning'"
                            class="ma-1"
                        />
                    </v-row>
                </v-card-text>

                <v-card-actions class="py-3 px-5 justify-end">
                    <!-- 重新整理 -->
                    <v-btn
                        v-if="project.websiteUrl"
                        color="warning"
                        variant="flat"
                        class="rounded-xl"
                        icon="mdi-refresh"
                        @click="reloadWebsite"
                    />
                    <!-- github -->
                    <v-btn
                        v-if="project.githubUrl"
                        :href="project.githubUrl"
                        color="primary"
                        variant="flat"
                        target="_blank"
                        class="rounded-xl"
                        icon="mdi-github"
                    />
                    <!-- close -->
                    <v-btn
                        color="secondary"
                        variant="flat"
                        class="rounded-xl"
                        icon="mdi-close"
                        @click="isActive.value = false"
                    />
                </v-card-actions>
            </v-card>
        </template>
    </v-dialog>
</template>

<script lang="ts" setup>
import {
    onMounted,
    ref,
} from 'vue';

import { Types } from '@/types/types';

import Chip from './Chip.vue';

defineProps<{
    project: Types.Project;
}>();

const loading = ref(true);
const loadingError = ref(false);
const reloadKey = ref(0);

const handleError = () => {
    loadingError.value = true;
};

const handleOnLoad = () => {
    loading.value = false;
    loadingError.value = false;
};
const iframeHeight = ref('400px');

const updateIframeHeight = () => {
    const innerHeight = window.innerHeight * 0.6;
    iframeHeight.value = `${innerHeight + 15}px`;
};

const reloadWebsite = () => {
    reloadKey.value += 1;
};

onMounted(() => {
    updateIframeHeight();
    window.addEventListener('resize', updateIframeHeight);
});
</script>
<style lang="scss" scoped>

</style>
