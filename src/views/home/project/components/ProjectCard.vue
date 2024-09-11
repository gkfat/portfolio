<template>
    <v-card
        rounded="xl"
        color="white"
        class="border fill-height"
    >
        <div class="d-flex flex-column fill-height">
            <v-img
                class="align-end"
                :height="mdAndUp ? 180 : 120"
                :lazy-src="getPlaceholderImage()"
                :src="getProjectImage"
                cover
            />

            <v-card-title class="text-primary text-wrap text-h6">
                {{ props.project.title }}
            </v-card-title>

            <v-card-text class="px-3 d-flex justify-space-between">
                <span class="text-warning">{{ props.project.subtitle }}</span>
                <span>{{ props.project.time }}</span>
            </v-card-text>

            <v-card-text class="px-3 d-flex flex-wrap ga-1 fill-height">
                <p
                    v-for="(tag, i) in props.project.tags"
                    :key="i"
                    class="text-caption text-decoration-underline cursor-pointer"
                >
                    {{ `#${tag}` }}
                </p>
            </v-card-text>

            <v-card-actions class="justify-end">
                <TextBtn
                    :title="t('common.browse') + t('common.project')"
                    @click="setActiveProject"
                />
            </v-card-actions>
        </div>
    </v-card>
</template>
<script lang="ts" setup>
import { computed } from 'vue';

import { useI18n } from 'vue-i18n';
import { useDisplay } from 'vuetify';

import TextBtn from '@/components/btn/TextBtn.vue';
import { useAppStore } from '@/store/app';
import { Types } from '@/types/types';
import {
    getPlaceholderImage,
    toImageUrl,
} from '@/utils/image';

const appStore = useAppStore();
const { t } = useI18n();

const { mdAndUp } = useDisplay();

const props = defineProps<{
    project: Types.Project;
}>();

const setActiveProject = () => {
    appStore.setActiveProject(props.project);
};

const getProjectImage = computed(() => {
    if (props.project.imagesUrls?.length) {
        return toImageUrl(props.project.imagesUrls[0]);
    }

    return getPlaceholderImage();
});
</script>
