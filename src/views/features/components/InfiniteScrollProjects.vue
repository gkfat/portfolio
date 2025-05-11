<template>
    <v-card
        flat
        class="bg-transparent mb-5"
    >
        <v-card-title class="text-h5 text-center text-dark text-capitalize">
            {{ parentProps.title }}
        </v-card-title>
    </v-card>

    <div class="w-100 overflow-hidden text-no-wrap">
        <div
            class="testimony-track"
            :class="scrollDirectionClass"
        >
            <div
                v-for="(project, i) in duplicateProjects"
                :key="i"
                class="d-inline-block pa-3 mx-2"
            >
                <v-hover>
                    <template #default="{ isHovering, props }">
                        <v-img
                            v-bind="props"
                            :width="160"
                            :height="160"
                            aspect-ratio="1/1"
                            class="rounded-circle overflow-hidden cursor-pointer border mx-auto mb-3"
                            :style="{
                                transition: 'all 0.3s',
                                transform: isHovering ? 'scale(1.1)' : ''
                            }"
                            cover
                            :src="project.imagesUrls[0] ?? getPlaceholderImage()"
                            @click="setActiveProject(project)"
                        />
    
                        <p class="text-center">
                            {{ project.title }}
                        </p>
                    </template>
                </v-hover>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import {
    computed,
    ref,
} from 'vue';

import { Projects } from '@/data/project';
import { useAppStore } from '@/store/app';
import { Types } from '@/types/types';
import { getPlaceholderImage } from '@/utils/image';

const appStore = useAppStore();

const parentProps = defineProps<{
    title: string;
    techStacks: ('FE' | 'BE')[];
    scrollDirection: 'left' | 'right';
}>();

const scrollDirectionClass = computed(() =>
    parentProps.scrollDirection === 'left' ? 'scroll-left' : 'scroll-right',
);

const rawProjects = computed(() => {
    return Object.values(Projects).filter((p) => parentProps.techStacks.every((techStack) => p.techStacks.includes(techStack)));
});

const duplicateProjects = ref([...rawProjects.value, ...rawProjects.value]);

const setActiveProject = (project: Types.Project) => {
    appStore.setActiveProject(project);
};
</script>
<style lang="scss" scoped>
.testimony-track {
  animation-duration: 15s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-play-state: running;
  width: max-content;

  &:hover {
    animation-play-state: paused;
  }
}

.scroll-left {
    animation-name: scroll-left;
}

.scroll-right {
    animation-name: scroll-right;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes scroll-right {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
}
</style>