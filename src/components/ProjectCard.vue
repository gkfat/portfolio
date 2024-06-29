<template>
    <v-card
        class="rounded-xl fill-height"
        variant="tonal"
    >
        <v-row
            style="flex-direction: column;"
            class="fill-height align-items-stretch ma-0"
        >
            <v-col
                cols="auto"
                class="pa-0"
            >
                <v-row class="flex-no-wrap ma-0">
                    <v-col
                        cols="auto"
                        class="text-warning pb-0"
                    >
                        {{ project.subtitle }}
                    </v-col>
                    <v-col
                        cols="auto"
                        class="ml-auto pb-0"
                    >
                        <Chip
                            :color="'warning'"
                            :variant="'flat'"
                            :text="project.time"
                        />
                    </v-col>
                </v-row>
            </v-col>

            <v-col cols="auto">
                <p class="text-h6 font-weight-bold text-primary">
                    {{ project.title }}
                </p>
            </v-col>

            <v-col class="px-5">
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
                <v-spacer class="mb-3" />
                <Chip
                    v-for="tech of project.techStacks"
                    :key="tech.text"
                    class="ma-1"
                    :text="tech.text"
                    :icon="tech.icon"
                />
            </v-col>

            <v-col
                v-if="project.linkUrl"
                cols="auto"
                class="text-right mt-3"
            >
                <v-btn
                    :href="project.linkUrl"
                    color="primary"
                    variant="flat"
                    target="_blank"
                    class="rounded-xl"
                    icon="mdi-arrow-right"
                />
            </v-col>
        </v-row>
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
