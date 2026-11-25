<template>
    <v-row>
        <v-col
            v-for="work in featuredWorks"
            :key="work.slug"
            cols="12"
            sm="6"
            md="4"
            class="pa-2"
        >
            <WorkCard :work="work" />
        </v-col>

        <v-col cols="12" class="mt-6 px-2">
            <v-btn
                to="/works"
                color="primary"
                size="large"
                variant="outlined"
                rounded="0"
                class="text-none"
                append-icon="mdi-arrow-right"
            >
                查看所有作品
            </v-btn>
        </v-col>
    </v-row>
</template>
<script lang="ts" setup>
import type { Work } from '~/types';
import WorkCard from '~/components/ui/WorkCard.vue';

const featuredWorkSlugs = [
    '2024-welcabin-admin',
    '2024-cnc-mes',
    '2026-saas-starter-kit',
];

const { data: featuredWorks } = await useAsyncData('featured-works', async () => {
    const results = await queryContent<Work>('/works')
        .where({ slug: { $in: featuredWorkSlugs } })
        .find();
    return featuredWorkSlugs
        .map(slug => results.find(w => w.slug === slug))
        .filter(Boolean) as Work[];
});

</script>