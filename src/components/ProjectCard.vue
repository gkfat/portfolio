<template>
    <v-card
        class="h-100 d-flex flex-wrap rounded-xl"
        style="flex-direction: column;"
        variant="tonal"
    >
        <v-card-text
            class="w-100 flex-grow-1 d-flex"
            style="flex-direction: column;"
        >
            <div class="d-flex justify-end">
                <v-chip
                    color="primary"
                    density="compact"
                    variant="flat"
                >
                    {{ project.time }}
                </v-chip>
            </div>

            <v-card-text
                class="flex-grow-1 d-flex mb-5"
                style="flex-direction: column;"
            >
                <v-card-title class="text-h6 font-weight-bold text-primary text-wrap px-0">
                    {{ project.title }}
                </v-card-title>

                <v-card-subtitle class="text-warning px-0 mb-5">
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

            <div
                v-if="project.linkUrl"
                class="mt-3 align-self-end"
            >
                <v-btn
                    :href="project.linkUrl"
                    color="primary"
                    variant="flat"
                    target="_blank"
                    class="rounded-xl"
                    icon="mdi-arrow-right"
                />
            </div>
        </v-card-text>
    </v-card>
</template>

<script lang="ts" setup>
import { Types } from '@/types/types';

import Chip from './Chip.vue';

defineProps<{
    project: Types.Project;
}>();
</script>
<style lang="scss" scoped>

</style>
