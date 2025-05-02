<template>
    <v-card
        rounded="lg"
        hover
        elevation="8"
        @click="setActiveProject"
    >
        <v-img
            :src="getProjectImage"
            :height="200"
            cover
        />

        <v-card-title
            class="text-primary text-wrap mt-3 mb-1"
        >
            {{ project.title }}
        </v-card-title>

        <v-card-subtitle
            v-if="project.description"
            class="text-wrap mb-1"
        >
            {{ project.description }}
        </v-card-subtitle>

        <v-card-actions class="align-start flex-wrap">
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
        </v-card-actions>
    </v-card>
</template>
<script lang="ts" setup>
import { computed } from 'vue';

import { useAppStore } from '@/store/app';
import { Types } from '@/types/types';
import {
    getPlaceholderImage,
    toImageUrl,
} from '@/utils/image';

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

</style>