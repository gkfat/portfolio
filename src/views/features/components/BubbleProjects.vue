<template>
    <div
        ref="rootEl"
        class="w-100 my-15"
    >
        <div
            class="mx-auto position-relative"
            :style="{
                width: `${canvasWidth}px`,
                height: `${canvasHeight}px`,
            }"
        >
            <template
                v-for="node in nodes"
                :key="node.id"
            >
                <v-hover v-slot="{ isHovering, props }">
                    <div
                        v-bind="props"
                        class="position-absolute d-flex align-center justify-center cursor-pointer"
                        :style="{
                            left: `${node.x - node.r}px`,
                            top: `${node.y - node.r}px`,
                            width: `${node.r * 2}px`,
                            height: `${node.r * 2}px`,
                            borderRadius: '9999px',
                            transition: 'transform 0.25s ease',
                            transform: isHovering ? 'scale(1.06)' : '',
                        }"
                    >
                        <v-img
                            :src="getProjectImage(node.project)"
                            :width="node.r * 2"
                            :height="node.r * 2"
                            cover
                            class="rounded-circle overflow-hidden border"
                            :alt="node.project.title"
                            @click="setActiveProject(node.project)"
                        />

                        <v-fade-transition>
                            <div
                                v-if="isHovering"
                                class="position-absolute d-flex align-center justify-center text-center px-3"
                                :style="{
                                    inset: 0,
                                    borderRadius: '9999px',
                                    background: 'rgba(0,0,0,0.35)',
                                    color: 'white',
                                    fontWeight: 600,
                                }"
                                @click="setActiveProject(node.project)"
                            >
                                {{ node.project.title }}
                            </div>
                        </v-fade-transition>
                    </div>
                </v-hover>
            </template>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {
    computed, ref, 
} from 'vue';
import { useElementSize } from '@vueuse/core';

import { useAppStore } from '@/stores/app';
import { EnumProject } from '@/enums/projects';
import { Projects } from '@/data/project';
import {
    getPlaceholderImage, toImageUrl, 
} from '@/utils/image';
import type { IProject } from '@/types/project';
import { useBubbleLayout } from '@/composables/useBubbleLayout';
import {
    getProjectImageUrl, type WeightMode, 
} from '@/utils/bubbleLayout';

const appStore = useAppStore();

const props = withDefaults(defineProps<{  
  projects: EnumProject[];
  padding?: number;
  weightMode?: WeightMode;
  focusHeightRatio?: number; // 0~1, smaller -> more concentrated in middle
}>(), {
    padding: 8,
    weightMode: 'weight',
    focusHeightRatio: 0.4,
});

const rootEl = ref<HTMLElement | null>(null);
const { width } = useElementSize(rootEl);

const canvasWidth = computed(() => Math.max(320, Math.min(width.value || 0, 1200)));
const canvasHeight = computed(() => Math.round(canvasWidth.value * (props.focusHeightRatio ?? 0.5)));

const items = computed<IProject[]>(() => props.projects.map(k => Projects[k]));

const { nodes } = useBubbleLayout(items, {
    width: canvasWidth,
    height: canvasHeight,
    padding: props.padding,
    weightMode: props.weightMode,
    focusHeightRatio: props.focusHeightRatio,
});

const getProjectImage = (project: IProject) => {
    return getProjectImageUrl(project, toImageUrl, getPlaceholderImage);
};

const setActiveProject = (project: IProject) => {
    appStore.setActiveProject(project);
};
</script>