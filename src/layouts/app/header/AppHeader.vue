<template>
    <v-app-bar
        class="px-3 border-b-thin"
        flat
    >
        <v-btn
            flat
            :ripple="false"
            variant="plain"
            class="opacity-100"
            :height="40"
            @click="goTop"
        >
            <v-img
                src="/icon-512.png"
                :max-width="40"
                :width="40"
                contain
            />
        </v-btn>

        <v-spacer class="ml-auto" />

        <div
            v-if="mdAndUp"
            class="d-flex align-center ga-1"
        >
            <TextBtn
                :title="t('common.resume')"
                :link-url="URL_SOURCE.socialMedias.resume"
            />

            <TextBtn
                :title="t('common.tech_blog')"
                :link-url="URL_SOURCE.socialMedias.techBlog"
            />

            <v-divider
                vertical
                inset
                class="mx-3"
            />

            <AppearanceSwitcher />

            <v-divider
                vertical
                inset
                class="mx-3"
            />

            <SocialMediaGroup />
        </div>

        <v-app-bar-actions v-if="!mdAndUp">
            <v-app-bar-nav-icon
                icon="mdi-dots-horizontal"
                :ripple="false"
                variant="plain"
                @click.stop="appStore.isMobileDrawerOpen = !appStore.isMobileDrawerOpen"
            />
        </v-app-bar-actions>
    </v-app-bar>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { useDisplay } from 'vuetify';

import TextBtn from '@/components/btn/TextBtn.vue';
import SocialMediaGroup from '@/components/SocialMediaGroup.vue';
import { URL_SOURCE } from '@/data/url-source';
import { useAppStore } from '@/store/app';

import AppearanceSwitcher from './components/AppearanceSwitcher.vue';

const { t } = useI18n();
const { mdAndUp } = useDisplay();
const appStore = useAppStore();

function goTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}
</script>
