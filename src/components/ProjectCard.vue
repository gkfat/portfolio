<template>
    <v-card
        class="h-100 d-flex flex-wrap"
        style="flex-direction: column;"
        hover
    >
        <v-card-text
            class="w-100 flex-grow-1 d-flex"
            style="flex-direction: column;"
        >
            <v-card-title class="text-primary">
                {{ project.title }}
            </v-card-title>

            <v-card-subtitle class="text-secondary mb-5">
                {{ project.subtitle }}
            </v-card-subtitle>

            <div class="mb-5 flex-grow-1">
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
            </div>

            <div>
                <Chip
                    v-for="tech of project.techStacks"
                    :key="tech.text"
                    class="ma-1"
                    :text="tech.text"
                    :icon="tech.icon"
                />
            </div>
        </v-card-text>

        <v-card-actions class="w-100 flex-wrap align-self-end">
            <v-divider class="w-100 mb-1" />
            <v-btn
                v-if="project.linkUrl"
                :href="project.linkUrl"
                color="primary"
                target="_blank"
                class="text-capitalize w-100"
                append-icon="mdi-open-in-new"
            >
                View Site
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script lang="ts" setup>
import { Projects } from '@/types/project';

import Chip from './Chip.vue';

defineProps<{
    project: Projects.Project;
}>();
</script>
