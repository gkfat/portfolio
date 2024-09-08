<template>
    <v-btn
        color="white"
        variant="transparent"
        class="opacity-100 text-body-1"
        :ripple="false"
        @click="setActiveProject"
    >
        <p class="d-flex align-start">
            {{ project.title }}
            <v-icon
                color="white"
                icon="mdi-arrow-top-right"
                size="14"
            />
        </p>
    </v-btn>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import { Projects } from '@/data/project';
import { EnumProject } from '@/enums/projects';
import { useAppStore } from '@/store/app';

const props = defineProps<{
    projectKey: EnumProject;
}>();

const project = ref(Projects[props.projectKey]);

const appStore = useAppStore();

const setActiveProject = () => {
    appStore.setActiveProject(project.value);
};
</script>
