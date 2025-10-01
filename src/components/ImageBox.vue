<template>
    <v-hover>
        <template #default="{props, isHovering}">
            <v-img
                :aspect="aspectRatio"
                v-bind="props"
                :src="src"
                :lazy-src="getPlaceholderImage()"
                cover
                :width="width"
                :height="height"
                class="border rounded cursor-pointer"
                :style="{
                    transition: 'all 0.3s'
                }"
                :class="{
                    'is-hovering': isHovering
                }"
                @click="openLightbox"
            />
        </template>
    </v-hover>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/stores/app';
import { IProject } from '@/types/project';
import { getPlaceholderImage } from '@/utils/image';

const appStore = useAppStore();

const {
    project,
    src,
    index,
    width,
    height,
    aspectRatio,
} = defineProps<{
    project: IProject,
    src: string;
    index: number;
    width: number;
    height: number;
    aspectRatio: string;
}>();

const openLightbox = () => {
    appStore.lightboxConfig = {
        imgs: project.content.imagesUrls,
        activeIndex: index,
        isOpen: true,
    };
};

</script>
<style lang="scss" scoped>
.is-hovering {
    filter: brightness(0.9);
}

:deep(.v-overlay__content .v-img__img) {
    border: 3px white solid;
    border-radius: 10px;
    height: auto !important;
}
</style>