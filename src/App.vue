<template>
    <v-app class="bg-background fill-height">
        <router-view />
    </v-app>

    <ProjectDialog />
</template>
<script lang="ts" setup>
import {
    computed,
    onMounted,
    watch,
} from 'vue';

import { useTheme } from 'vuetify';

import ProjectDialog from '@/components/dialog/ProjectDialog.vue';

import { useAppStore } from './store/app';

const appStore = useAppStore();
const theme = useTheme();
const currentTheme = computed(() => (appStore.state.darkTheme ? 'dark' : 'light'));

const setTheme = (themeValue: 'dark'|'light') => {
    document.documentElement.setAttribute(
        'data-color-theme',
        themeValue,
    );

    // Set vuetify theme
    theme.global.name.value = themeValue;
};

// Set theme when theme changed
watch((currentTheme), () => setTheme(currentTheme.value));

onMounted(async () => {
    setTheme(currentTheme.value);
});
</script>
