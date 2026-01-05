<template>
    <v-container :max-width="700" class="mx-auto">
        <v-row no-gutters class="ga-5 flex-column">
            <v-col>
                <v-btn
                    variant="outlined"
                    class="border"
                    color="primary"
                    prepend-icon="mdi-chevron-left"
                    to="/works"
                >
                    回列表
                </v-btn>
            </v-col>

            <v-col>
                <v-chip variant="tonal" label>{{ work.year }}</v-chip>
            </v-col>

            <v-col>
                <h1 class="text-h4 text-primary font-weight-bold mb-3">
                    {{ work.title }}
                </h1>
                <p class="text-subtitle bg-secondary pa-5 rounded text-white">
                    {{ work.description }}
                </p>
            </v-col>

            <v-col v-if="work.github || work.url" class="d-flex ga-3">
                <v-btn
                    v-if="work.github"
                    prepend-icon="mdi-github"
                    variant="outlined"
                    :href="work.github"
                    target="_blank"
                    color="primary"
                    class="text-none"
                >
                    Check Github
                </v-btn>
                <v-btn
                    v-if="work.url"
                    prepend-icon="mdi-web"
                    variant="outlined"
                    :href="work.url"
                    target="_blank"
                    color="primary"
                    class="text-none"
                >
                    Check Website
                </v-btn>
            </v-col>

            <v-col>
                <MDContentRenderer :content="work" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import MDContentRenderer from '~/components/ui/MDContentRenderer.vue';
import type { Work } from '~/types';

defineProps<{ work: Work }>();
</script>