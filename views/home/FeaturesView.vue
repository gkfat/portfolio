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

        <v-col cols="12" class="mt-10 text-center">
            <v-btn
                to="/works"
                color="secondary"
                size="large"
                variant="flat"
                prepend-icon="mdi-view-dashboard"
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
    '2024-welcabin-liff', 
    '2021-tsmc',
    '2023-logicard-duel',
    '2025-punch-qrcode-generator',
    '2025-bicycle-rental-system',
];

const { data: allWorks } = await useAsyncData('featured-works', () => 
    queryContent<Work>('/works').find(),
);

const featuredWorks = computed(() => {
    if (!allWorks.value) return [];
    
    return featuredWorkSlugs
        .map(slug => allWorks.value!.find(work => work.slug === slug))
        .filter(Boolean) as Work[];
});

</script>