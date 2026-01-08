<template>
    <v-hover>
        <template #default="{ isHovering, props }">
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
</template>

<script lang="ts" setup>
import type { Work } from '~/types';

defineProps<{
    work: Work
}>();
</script>