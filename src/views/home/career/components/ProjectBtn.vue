<template>
    <v-btn
        color="white"
        variant="transparent"
        class="opacity-100 text-body-1"
        :ripple="false"
        @click="setActiveProject"
    >
        <p class="d-flex align-center ga-1">
            {{ project.title }}
            <v-icon
                icon="mdi-eye"
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
