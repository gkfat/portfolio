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
            class="py-5"
            color="white"
        >
            <v-card-subtitle>
                <v-row class="align-center">
                    <v-col class="font-weight-bold">
                        <span class="text-warning me-3">{{ project.subtitle }}</span>
                        <em class="text-caption">{{ project.time }}</em>
                    </v-col>
                    <v-col
                        cols="auto"
                        class="ml-auto"
                    >
                        <TextBtn
                            v-if="project.githubUrl"
                            :title="'Github'"
                            :link-url="project.githubUrl"
                            class="me-3"
                        />
                        <TextBtn
                            v-if="project.websiteUrl"
                            :title="'Site'"
                            :link-url="project.websiteUrl"
                        />
                    </v-col>
                </v-row>
            </v-card-subtitle>

            <v-card-title class="text-primary text-wrap text-h6">
                {{ project.title }}
            </v-card-title>

            <v-divider />

            <v-card-text class="overflow-y-auto">
                <!-- 無預覽圖或網頁 -->
                <v-card-text v-if="!project.websiteUrl && !project.imagesUrls">
                    <p class="text-warning text-center py-3">
                        無預覽圖或網頁。
                    </p>
                </v-card-text>

                <!-- iframe 網頁呈現 -->
                <v-card-text
                    v-if="project.websiteUrl"
                    class="fill-height pa-3"
                >
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

                    <div
                        v-else
                        class="iframe-container"
                    >
                        <iframe
                            :key="reloadKey"
                            :src="project.websiteUrl"
                            class="bg-white border rounded-xl"
                            :style="{ display: loading ? 'none' : 'block' }"
                            allowfullscreen
                            @error="handleError"
                            @load="handleOnLoad"
                        />
                    </div>
                </v-card-text>

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
            </v-card-text>

            <v-card-actions class="px-3 flex-wrap ga-1">
                <IconBtn
                    :icon="'mdi-refresh'"
                    @click="reloadWebsite"
                />
                <v-spacer class="ml-auto" />
                <p
                    v-for="(tag, i) in project.tags"
                    :key="i"
                    class="text-caption text-decoration-underline cursor-pointer me-2"
                >
                    {{ `#${tag}` }}
                </p>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script lang="ts" setup>
import {
    computed,
    ref,
} from 'vue';

import IconBtn from '@/components/btn/IconBtn.vue';
import TextBtn from '@/components/btn/TextBtn.vue';
import { useAppStore } from '@/store/app';

const appStore = useAppStore();

const loading = ref(true);
const loadingError = ref(false);
const reloadKey = ref(0);

const project = computed(() => appStore.activeProject);

const handleError = () => {
    loadingError.value = true;
};

const handleOnLoad = () => {
    loading.value = false;
    loadingError.value = false;
};

const reloadWebsite = () => {
    reloadKey.value += 1;
};
</script>
<style lang="scss" scoped>
.iframe-container {
    position: relative;
    width: 100%;
    height: 400px;
}

.iframe-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
}
</style>
