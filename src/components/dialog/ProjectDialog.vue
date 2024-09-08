<template>
    <v-dialog
        v-model="appStore.isOpenDialog"
        transition="dialog-bottom-transition"
        max-width="800"
        class="mx-auto"
    >
        <v-card
            v-if="project"
            rounded="xl"
            class="py-5"
            color="white"
        >
            <v-card-subtitle>
                <v-row class="align-center">
                    <v-col class="font-weight-bold">
                        <span class="text-warning me-3">{{ project.subtitle }}</span>
                        <em class="text-caption">{{ project.time }}</em>
                    </v-col>
                    <v-col
                        cols="auto"
                        class="ml-auto"
                    >
                        <TextBtn
                            v-if="project.githubUrl"
                            :title="'Github'"
                            :link-url="project.githubUrl"
                            class="me-3"
                        />
                        <TextBtn
                            v-if="project.websiteUrl"
                            :title="'Link'"
                            :link-url="project.websiteUrl"
                        />
                    </v-col>
                </v-row>
            </v-card-subtitle>

            <v-card-title class="text-primary text-wrap text-h6">
                {{ project.title }}
            </v-card-title>

            <v-divider />

            <v-card-text>
                <p
                    v-for="(item, i) of project.items"
                    :key="i"
                >
                    - {{ item }}
                </p>
            </v-card-text>

            <v-card-actions class="px-3 flex-wrap ga-1">
                <p
                    v-for="(tag, i) in project.tags"
                    :key="i"
                    class="text-caption text-decoration-underline cursor-pointer me-2"
                >
                    {{ `#${tag}` }}
                </p>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>
<script lang="ts" setup>
import { computed } from 'vue';

import TextBtn from '@/components/btn/TextBtn.vue';
import { useAppStore } from '@/store/app';

const appStore = useAppStore();

const project = computed(() => appStore.activeProject);

</script>
