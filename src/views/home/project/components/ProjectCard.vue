<template>
    <v-card
        rounded="xl"
        color="white"
        class="py-4 border fill-height"
        hover
        @click="setActiveProject"
    >
        <v-card-subtitle class="text-warning">
            <v-row>
                <v-col class="font-weight-bold">
                    {{ props.project.subtitle }}
                </v-col>
                <v-col
                    cols="auto"
                    class="ml-auto"
                >
                    <v-icon icon="mdi-eye" />
                </v-col>
            </v-row>
        </v-card-subtitle>

        <v-card-title class="text-primary text-wrap text-h6">
            {{ props.project.title }}
        </v-card-title>

        <v-divider />

        <v-card-text>
            <p
                v-for="(item, i) of props.project.items"
                :key="i"
            >
                - {{ item }}
            </p>
        </v-card-text>

        <v-card-actions class="px-3 flex-wrap ga-1">
            <p
                v-for="(tag, i) in props.project.tags"
                :key="i"
                class="text-caption text-decoration-underline cursor-pointer me-2"
            >
                {{ `#${tag}` }}
            </p>
        </v-card-actions>
    </v-card>
</template>
<script lang="ts" setup>
import { useAppStore } from '@/store/app';
import { Types } from '@/types/types';

const appStore = useAppStore();

const props = defineProps<{
    project: Types.Project;
}>();

const setActiveProject = () => {
    appStore.setActiveProject(props.project);
};
</script>
