<template>
    <v-hover>
        <template #default="{ props, isHovering }">
            <v-card
                v-bind="props"
                rounded="lg"
                :color="isHovering ? 'secondary' : 'white'"
                :elevation="isHovering ? 5 : 3"
                class="fill-height"
                :min-height="200"
                hover
                :class="{
                    'on-hover': isHovering
                }"
                :style="{
                    transition: 'all 0.3s'
                }"
                @click="setActiveProject"
            >
                <v-card-title>
                    <TechStack
                        v-for="tech in project.techStacks"
                        :key="tech"
                        :text="tech"
                        class="me-1"
                    />
                </v-card-title>

                <v-card-title
                    class="text-primary text-h6 text-wrap"
                >
                    {{ project.title }}
                </v-card-title>

                <v-card-text>
                    <v-row class="ma-0 align-center justify-start">
                        <v-col
                            cols="auto"
                            class="pa-1"
                        >
                            <v-img
                                :src="getProjectImage"
                                class="border"
                                aspect-ratio="1/1"
                                cover
                                rounded
                                :width="60"
                                :height="60"
                            />
                        </v-col>
                    </v-row>
                </v-card-text>

                <v-card-actions class="flex-wrap">
                    <p
                        v-for="(tag, i) in project.tags"
                        :key="i"
                        class="text-caption text-decoration-underline cursor-pointer"
                    >
                        {{ `#${tag}` }}
                    </p>
                </v-card-actions>
            </v-card>
        </template>
    </v-hover>
</template>
<script lang="ts" setup>
import { computed } from 'vue';

import { useAppStore } from '@/store/app';
import { Types } from '@/types/types';
import {
    getPlaceholderImage,
    toImageUrl,
} from '@/utils/image';

import TechStack from './TechStack.vue';

const appStore = useAppStore();

const { project } = defineProps<{
    project: Types.Project;
}>();

const setActiveProject = () => {
    appStore.setActiveProject(project);
};

const getProjectImage = computed(() => {
    if (project.imagesUrls?.length) {
        return toImageUrl(project.imagesUrls[0]);
    }

    return getPlaceholderImage();
});
</script>
<style lang="scss" scoped>
.on-hover {
    transform: translateY(-5px);
}
</style>