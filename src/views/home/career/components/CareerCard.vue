<template>
    <v-card
        flat
        rounded="lg"
        color="secondary"
        class="border"
    >
        <v-card-subtitle class="mt-3">
            {{ props.career.company }}
        </v-card-subtitle>

        <v-card-title>
            <v-row>
                <v-col
                    cols="auto"
                >
                    <v-chip
                        variant="flat"
                        color="warning"
                        label
                    >
                        {{ t(`job_title.${props.career.jobTitle}`) }}
                    </v-chip>
                </v-col>
                <v-col
                    v-if="xs"
                    cols="auto"
                >
                    <TimeRangeText :time-range="props.career.timeRange" />
                </v-col>
            </v-row>
        </v-card-title>

        <v-divider />

        <v-card-text>
            <p
                v-for="(item, i) of props.career.items"
                :key="i"
            >
                - {{ item }}
            </p>
        </v-card-text>

        <template v-if="props.career.projects.length">
            <v-divider />

            <v-card-text class="pa-1">
                <v-row class="ma-0">
                    <v-col
                        v-for="(key, i) in props.career.projects"
                        :key="i"
                        cols="12"
                        class="pa-0"
                    >
                        <ProjectBtn :project-key="key" />
                    </v-col>
                </v-row>
            </v-card-text>
        </template>
    </v-card>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { useDisplay } from 'vuetify';

import { Types } from '@/types/types';

import ProjectBtn from './ProjectBtn.vue';
import TimeRangeText from './TimeRangeText.vue';

const { t } = useI18n();

const { xs } = useDisplay();

const props = defineProps<{
    career: Types.Career;
}>();
</script>
