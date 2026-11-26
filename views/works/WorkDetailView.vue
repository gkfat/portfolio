<template>
    <section :style="{ paddingTop: smAndUp ? '140px' : '100px', paddingBottom: '96px' }">
        <v-container :max-width="1200" class="mx-auto px-6 px-md-16">
            <v-row no-gutters>
                <!-- 左側 meta（3 欄） -->
                <v-col
                    cols="12"
                    md="3"
                    class="pe-md-6 mb-8 mb-md-0"
                >
                    <div class="meta-sticky">
                        <v-btn
                            variant="text"
                            color="primary"
                            to="/works"
                            prepend-icon="mdi-arrow-left"
                            class="text-none px-0 mb-6"
                            :ripple="false"
                        >
                            All Works
                        </v-btn>

                        <template v-if="typeLabel">
                            <p class="eyebrow text-lightgrey mb-1">
                                Project Type
                            </p>
                            <p class="text-body-1 mb-5">
                                {{ typeLabel }}
                            </p>
                        </template>

                        <p class="eyebrow text-lightgrey mb-1">
                            {{ work.period ? 'Period' : 'Year' }}
                        </p>
                        <p class="text-body-1 mb-5">
                            {{ work.period ?? work.year }}
                        </p>

                        <template v-if="work.industry">
                            <p class="eyebrow text-lightgrey mb-1">
                                Industry
                            </p>
                            <p class="text-body-2 mb-5">
                                {{ work.industry }}
                            </p>
                        </template>

                        <template v-if="work.roles?.length">
                            <p class="eyebrow text-lightgrey mb-1">
                                My Role
                            </p>
                            <p class="text-body-2 mb-5">
                                {{ work.roles.join(' · ') }}
                            </p>
                        </template>

                        <p class="eyebrow text-lightgrey mb-1">
                            Built with
                        </p>
                        <p class="text-body-2 mb-5">
                            {{ work.tech.join(' · ') }}
                        </p>

                        <div v-if="work.github || work.url" class="d-flex flex-column ga-2">
                            <v-btn
                                v-if="work.url"
                                prepend-icon="mdi-open-in-new"
                                variant="outlined"
                                :href="work.url"
                                target="_blank"
                                color="primary"
                                rounded="0"
                                class="text-none justify-start"
                            >
                                Website
                            </v-btn>
                            <v-btn
                                v-if="work.github"
                                prepend-icon="mdi-github"
                                variant="outlined"
                                :href="work.github"
                                target="_blank"
                                color="primary"
                                rounded="0"
                                class="text-none justify-start"
                            >
                                GitHub
                            </v-btn>
                        </div>
                    </div>
                </v-col>

                <!-- 右側內容（9 欄） -->
                <v-col
                    cols="12"
                    md="9"
                    class="rule-top pt-8 pt-md-10"
                >
                    <h1 class="display-title mb-6" :style="{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }">
                        {{ work.title }}
                    </h1>
                    <p class="text-h6 font-weight-regular text-lightgrey mb-10" :style="{ maxWidth: '720px', lineHeight: 1.7 }">
                        {{ work.description }}
                    </p>

                    <div class="work-content" :style="{ maxWidth: '760px' }">
                        <MDContentRenderer :content="work" />
                    </div>

                    <!-- Related Works -->
                    <div v-if="relatedWorks?.length" class="mt-16">
                        <p class="eyebrow text-secondary mb-4">
                            Related Works
                        </p>
                        <v-row>
                            <v-col
                                v-for="relatedWork in relatedWorks"
                                :key="relatedWork.slug"
                                cols="12"
                                sm="6"
                                class="pa-2"
                            >
                                <WorkCard :work="relatedWork" />
                            </v-col>
                        </v-row>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';
import MDContentRenderer from '~/components/ui/MDContentRenderer.vue';
import WorkCard from '~/components/ui/WorkCard.vue';
import type { Work } from '~/types';

const props = defineProps<{ work: Work }>();

const { smAndUp } = useDisplay();

const typeLabel = computed(() => getWorkTypeLabel(props.work.type));

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

<style scoped>
@media (min-width: 960px) {
    .meta-sticky {
        position: sticky;
        top: 96px;
    }
}

/* Case Study 章節標題：Swiss 風格 eyebrow + 分隔線 */
.work-content :deep(h2) {
    border-top: 1px solid var(--hairline);
    padding-top: 1rem;
    margin: 2.5rem 0 1rem;
    font-size: 0.8125rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgb(var(--v-theme-secondary));
}

.work-content :deep(h3) {
    font-size: 1.05rem;
    font-weight: 700;
}

.work-content :deep(p),
.work-content :deep(li) {
    line-height: 1.8;
}
</style>
