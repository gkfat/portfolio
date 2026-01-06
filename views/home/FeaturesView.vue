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
            <v-hover>
                <template #default="{isHovering, props}">
                    <v-card
                        v-bind="props"
                        class="h-100 cursor-pointer pa-3"
                        color="dark"
                        :style="{
                            transition: 'all 0.3s',
                            transform: isHovering ? 'translateY(-8px)' : ''
                        }"
                    >
                        <v-row no-gutters class="pa-3 justify-space-between align-center">
                            <v-col cols="auto">
                                <v-icon
                                    color="primary"
                                    icon="mdi-folder-outline"
                                    size="36"
                                />
                            </v-col>

                            <v-spacer />

                            <v-col
                                v-if="work.github"
                                cols="auto"
                                class="me-2"
                            >
                                <v-btn
                                    variant="plain"
                                    target="_blank"
                                    color="white"
                                    icon="mdi-github"
                                    size="sm"
                                    :href="work.github"
                                    :ripple="false"
                                />
                            </v-col>
                            <v-col v-if="work.url" cols="auto">
                                <v-btn
                                    variant="plain"
                                    target="_blank"
                                    color="white"
                                    icon="mdi-open-in-new"
                                    size="sm"
                                    :href="work.url"
                                    :ripple="false"
                                />
                            </v-col>
                        </v-row>

                        <NuxtLink 
                            :to="`/works/${work.slug}`" 
                            class="text-decoration-none"
                        >
                            <v-card-title
                                class="text-wrap font-weight-bold mb-2 cursor-pointer"
                                :class="{
                                    'text-secondary': isHovering,
                                    'text-white': !isHovering,
                                }"
                                :style="{
                                    transition: 'all 0.3s'
                                }"
                            >
                                {{ work.title }}
                            </v-card-title>
                        </NuxtLink>
                        <v-card-text>
                            <p class="text-grey-lighten-3">{{ work.description }}</p>
                        </v-card-text>
                    </v-card>
                </template>
            </v-hover>
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

const featuredWorkSlugs = [
    '2024-welcabin-admin',
    '2024-welcabin-liff', 
    '2021-tsmc',
    '2023-logicard-duel',
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