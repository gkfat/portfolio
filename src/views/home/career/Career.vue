<template>
    <v-card
        rounded="xl"
        flat
        variant="transparent"
    >
        <v-card-title class="text-center text-primary mb-3">
            {{ t('common.career') }}
        </v-card-title>

        <v-card-text>
            <v-timeline
                :justify="xs ? 'start' : 'center'"
                :side="xs ? 'end' : ''"
                truncate-line="both"
            >
                <v-timeline-item
                    v-for="(career, i) in Careers"
                    :key="i"
                    dot-color="secondary"
                    :hide-opposite="xs"
                    :size="xs ? 14 : 20"
                    :width="xs ? '100%' : ''"
                    fill-dot
                >
                    <!-- 年份 -->
                    <template #opposite>
                        <TimeRangeText :time-range="career.timeRange" />
                    </template>

                    <CareerCard :career="career" />
                </v-timeline-item>
            </v-timeline>
        </v-card-text>
    </v-card>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { useDisplay } from 'vuetify';

import { Careers } from '@/data/career';

import CareerCard from './components/CareerCard.vue';
import TimeRangeText from './components/TimeRangeText.vue';

const { t } = useI18n();
const { xs } = useDisplay();
</script>
