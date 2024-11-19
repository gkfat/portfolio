<template>
    <!-- 側邊欄 -->
    <v-navigation-drawer
        v-model="appStore.isMobileDrawerOpen"
        location="right"
        disable-resize-watcher
    >
        <v-list>
            <v-list-item
                class="text-primary"
                height="60"
                :title="t('common.appearance')"
            >
                <template #append>
                    <AppearanceSwitcher />
                </template>
            </v-list-item>

            <v-divider />

            <v-list-item
                class="text-primary"
                height="60"
                :title="t('common.resume')"
                :href="URL_SOURCE.socialMedias.resume"
                target="_blank"
                append-icon="mdi-open-in-new"
            />

            <v-divider />

            <v-list-item
                class="text-primary"
                height="60"
                :title="t('common.tech_blog')"
                :href="URL_SOURCE.socialMedias.techBlog"
                target="_blank"
                append-icon="mdi-open-in-new"
            />

            <v-divider />

            <v-list-item
                height="60"
            >
                <SocialMediaGroup :justify="'start'" />
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>
<script lang="ts" setup>
import { watch } from 'vue';

import { useI18n } from 'vue-i18n';
import { useDisplay } from 'vuetify';

import SocialMediaGroup from '@/components/SocialMediaGroup.vue';
import { URL_SOURCE } from '@/data/url-source';
import { useAppStore } from '@/store/app';

const { t } = useI18n();
const { mdAndUp } = useDisplay();
const appStore = useAppStore();

watch(
    mdAndUp,
    () => {
        if (mdAndUp.value) {
            appStore.isMobileDrawerOpen = false;
        }
    },
);
</script>
