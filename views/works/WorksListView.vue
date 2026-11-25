<template>
    <section :style="{ paddingBottom: '96px' }">
        <v-container :max-width="1200" class="mx-auto px-6 px-md-16">
            <!-- 分類篩選 -->
            <div class="d-flex ga-6 mb-6">
                <button
                    v-for="type in types"
                    :key="type.value"
                    type="button"
                    class="eyebrow filter-btn pb-2"
                    :class="selectedType === type.value ? 'text-secondary is-active' : 'text-lightgrey'"
                    @click="selectedType = type.value"
                >
                    {{ type.label }}
                </button>
            </div>

            <!-- 表頭（桌機） -->
            <v-row
                v-if="smAndUp"
                no-gutters
                class="rule-top py-3"
            >
                <v-col sm="2" class="eyebrow text-lightgrey">
                    Year
                </v-col>
                <v-col sm="5" class="eyebrow text-lightgrey">
                    Title
                </v-col>
                <v-col sm="4" class="eyebrow text-lightgrey">
                    Built with
                </v-col>
                <v-col sm="1" class="eyebrow text-lightgrey text-right">
                    Link
                </v-col>
            </v-row>

            <v-row
                v-for="work in filteredWorks"
                :key="work.slug"
                no-gutters
                class="rule-top py-5 align-baseline"
            >
                <v-col cols="12" sm="2">
                    <span class="text-body-1 text-lightgrey">{{ work.year }}</span>
                </v-col>
                <v-col
                    cols="12"
                    sm="5"
                    class="pe-sm-6"
                >
                    <NuxtLink
                        :to="`/works/${work.slug}`"
                        class="work-title text-h6 font-weight-bold text-primary text-decoration-none"
                    >
                        {{ work.title }}
                    </NuxtLink>
                </v-col>
                <v-col
                    cols="12"
                    sm="4"
                    class="mt-2 mt-sm-0 pe-sm-4"
                >
                    <p class="text-body-2 text-lightgrey">
                        {{ sortedTechList(work.tech).join(' · ') }}
                    </p>
                </v-col>
                <v-col
                    cols="12"
                    sm="1"
                    class="d-flex justify-sm-end mt-2 mt-sm-0"
                >
                    <v-btn
                        v-if="work.github"
                        variant="plain"
                        target="_blank"
                        color="primary"
                        icon="mdi-github"
                        size="small"
                        :href="work.github"
                        :ripple="false"
                        :aria-label="`${work.title} GitHub`"
                    />
                    <v-btn
                        v-if="work.url"
                        variant="plain"
                        target="_blank"
                        color="primary"
                        icon="mdi-open-in-new"
                        size="small"
                        :href="work.url"
                        :ripple="false"
                        :aria-label="`${work.title} 網站`"
                    />
                </v-col>
            </v-row>
            <div class="rule-top" />
        </v-container>
    </section>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';
import type {
    Work, WorkType,
} from '~/types';

const { smAndUp } = useDisplay();

const types: { value: WorkType; label: string }[] = [
    {
        value: 'work',
        label: '合作案例', 
    }, {
        value: 'side_project',
        label: 'Side Projects', 
    },
];

const selectedType = ref<WorkType>('work');

const { data: works } = await useAsyncData('works', () =>
    queryContent<Work>('/works')
        .sort({ year: -1 })
        .find(),
);

const DEFAULT_ORDER = 999;

// 年份新到舊；同年度依 front matter 的 order（小的在前），未設定者維持原本順序
const filteredWorks = computed(() =>
    (works.value ?? [])
        .filter(work => (work.type || 'work') === selectedType.value)
        .sort((a, b) => Number(b.year) - Number(a.year)
            || (a.order ?? DEFAULT_ORDER) - (b.order ?? DEFAULT_ORDER)),
);

const sortedTechList = (techs: string[]) => {
    return [...techs].sort((a, b) => a.localeCompare(b));
};
</script>

<style scoped>
.filter-btn {
    border-bottom: 2px solid transparent;
    cursor: pointer;
}

.filter-btn.is-active {
    border-bottom-color: rgb(var(--v-theme-secondary));
}

.work-title {
    transition: color 0.2s;
}

.work-title:hover {
    color: rgb(var(--v-theme-secondary));
}
</style>
