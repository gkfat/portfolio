<template>
    <!-- 側邊欄 -->
    <v-navigation-drawer
        v-model="appStore.isMobileDrawerOpen"
        location="right"
        disable-resize-watcher
    >
        <v-list nav>
            <ThemeSelect />

            <v-divider />

            <LocaleSelect />
        </v-list>

        <template #append>
            <v-divider />
            <SocialMedia />
        </template>
    </v-navigation-drawer>
</template>
<script lang="ts" setup>
import { watch } from 'vue';

import { useDisplay } from 'vuetify';

import { useAppStore } from '@/store/app';

import LocaleSelect from './components/LocaleSelect.vue';
import SocialMedia from './components/SocialMedia.vue';
import ThemeSelect from './components/ThemeSelect.vue';

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
