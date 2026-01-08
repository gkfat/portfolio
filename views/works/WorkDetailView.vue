<template>
    <v-container :max-width="700" class="mx-auto mb-10">
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
                <p class="text-body-1 bg-dark pa-5 rounded">
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

            <!-- Related Works -->
            <v-col v-if="relatedWorks?.length">
                <v-divider class="mb-8" />
                <h2 class="text-h5 text-primary font-weight-bold mb-10">
                    相關專案
                </h2>
                <v-row>
                    <v-col
                        v-for="relatedWork in relatedWorks"
                        :key="relatedWork.slug"
                        cols="12"
                        sm="6"
                        md="4"
                        class="pa-1"
                    >
                        <WorkCard :work="relatedWork" />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import MDContentRenderer from '~/components/ui/MDContentRenderer.vue';
import WorkCard from '~/components/ui/WorkCard.vue';
import type { Work } from '~/types';

const props = defineProps<{ work: Work }>();

// Query related works based on related_works slugs
const { data: allWorks } = await useAsyncData('all-works-for-related', () => 
    queryContent<Work>('/works').find(),
);

const relatedWorks = computed(() => {
    if (!props.work.related_works?.length || !allWorks.value) return [];
    
    return props.work.related_works
        .map(slug => allWorks.value!.find(work => work.slug === slug))
        .filter(Boolean) as Work[];
});
</script>