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
                <v-tabs-window-item :value="currentTab">
                    <v-card
                        v-if="currentExperience"
                        flat
                        class="bg-transparent"
                    >
                        <v-card-title>
                            {{ currentExperience.jobTitle}} <span class="text-primary font-weight-bold">@ {{ currentExperience.company }}</span>
                        </v-card-title>
                        <v-card-subtitle>
                            {{ currentExperience.timeRange }}
                        </v-card-subtitle>
                        <v-card-text>
                            <MDContentRenderer :content="currentExperience" />
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
const currentExperience = computed(() => {
    if (!experiences.value) {
        return null;
    }
    
    return experiences.value[currentTab.value];
});
</script>