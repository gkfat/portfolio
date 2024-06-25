<template>
    <v-card
        class="h-100 d-flex flex-wrap rounded-xl"
        style="flex-direction: column;"
        hover
    >
        <v-card-text
            class="w-100 flex-grow-1 d-flex"
            style="flex-direction: column;"
        >
            <div class="d-flex justify-end">
                <v-chip
                    color="secondary"
                    density="compact"
                >
                    {{ project.time }}
                </v-chip>
            </div>

            <v-card-text
                class="flex-grow-1 d-flex mb-5"
                style="flex-direction: column;"
            >
                <v-card-title class="text-primary text-wrap px-0">
                    {{ project.title }}
                </v-card-title>

                <v-card-subtitle class="text-secondary px-0 mb-5">
                    {{ project.subtitle }}
                </v-card-subtitle>

                <div>
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
            </v-card-text>

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

        <v-card-actions class="w-100 flex-wrap align-self-end" v-if="project.linkUrl">
            <v-divider class="w-100 mb-1" />
            <v-btn
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
import { Types } from '@/types/types';

import Chip from './Chip.vue';

defineProps<{
    project: Types.Project;
}>();
</script>
