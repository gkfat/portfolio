<template>
    <v-row no-gutters class="d-flex flex-sm-nowrap">
        <v-col
            cols="12"
            sm="auto"
        >
            <v-tabs
                v-model="currentTab"
                color="primary"
                :direction="smAndUp ? 'vertical' : 'horizontal'"
            >
                <v-tab
                    v-for="(exp, i) of experiences"
                    :key="i"
                    :value="i"
                    class="text-none"
                >
                    {{ exp.company }}
                </v-tab>
            </v-tabs>
        </v-col>

        <v-col cols="12" sm="auto">
            <v-divider
                :vertical="smAndUp"
                :thickness="1"
                :length="'100%'"
            />
        </v-col>

        <v-col
            cols="12"
            md="auto"
            class="flex-grow-1 flex-shrink-1"
            style="min-width: 0;"
        >
            <v-tabs-window v-model="currentTab">
                <v-tabs-window-item
                    v-for="(exp, i) in experiences"
                    :key="i"
                    :value="i"
                >
                    <v-card
                        flat
                        class="bg-transparent"
                    >
                        <v-card-title class="d-flex ga-1 align-center">
                            <span class="text-primary">{{ exp.jobTitle }}</span>
                            <span class="text-secondary font-weight-bold">@</span>
                            <span class="text-secondary font-weight-bold">{{ exp.company }}</span>
                        </v-card-title>
                        <v-card-subtitle>
                            {{ exp.timeRange }}
                        </v-card-subtitle>
                        <v-card-text>
                            <MDContentRenderer :content="exp" />
                        </v-card-text>
                    </v-card>
                </v-tabs-window-item>
            </v-tabs-window>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';
import MDContentRenderer from '~/components/ui/MDContentRenderer.vue';
import type { Experience } from '~/types';

const { smAndUp } = useDisplay();

const { data: experiences } = await useAsyncData('experiences', () => 
    queryContent<Experience>('/experience')
        .sort({ order: 1 }) // 按 order 欄位排序
        .find(),
);

const currentTab = ref(0);
</script>