<template>
    <v-hover>
        <template #default="{ isHovering, props }">
            <v-card
                v-bind="props"
                class="h-100 pa-5 d-flex flex-column"
                color="surface"
                rounded="0"
                variant="flat"
                :style="{
                    border: `1px solid ${isHovering ? 'rgb(var(--v-theme-secondary))' : 'var(--hairline)'}`,
                    transition: 'border-color 0.2s',
                }"
            >
                <div class="d-flex align-center mb-4">
                    <span class="eyebrow text-lightgrey">{{ work.year }}</span>
                    <v-spacer />
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
                </div>

                <NuxtLink
                    :to="`/works/${work.slug}`"
                    class="text-decoration-none"
                >
                    <h3
                        class="text-h6 font-weight-bold mb-3"
                        :class="isHovering ? 'text-secondary' : 'text-primary'"
                        :style="{ transition: 'color 0.2s' }"
                    >
                        {{ work.title }}
                    </h3>
                </NuxtLink>
                <p class="text-body-2 text-lightgrey">
                    {{ work.description }}
                </p>
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
