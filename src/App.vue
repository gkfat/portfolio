<template>
    <v-app class="bg-background">
        <router-view />
    </v-app>
</template>
<script lang="ts" setup>
import {
    computed,
    onMounted,
    watch,
} from 'vue';

import { useI18n } from 'vue-i18n';
import { useTheme } from 'vuetify';

import { useAppStore } from './store/app';

const appStore = useAppStore();
const theme = useTheme();
const { locale } = useI18n();
const currentTheme = computed(() => (appStore.state.darkTheme ? 'dark' : 'light'));
const currentLang = computed(() => appStore.state.locale);

const setTheme = (themeValue: 'dark'|'light') => {
    document.documentElement.setAttribute(
        'data-color-theme',
        themeValue,
    );

    // Set vuetify theme
    theme.global.name.value = themeValue;
};

const setI18nLocale = (lang: string) => {
    locale.value = lang;
};

watch((currentTheme), () => setTheme(currentTheme.value));
watch((locale), () => appStore.setLocale(locale.value));

onMounted(async () => {
    setTheme(currentTheme.value);
    setI18nLocale(currentLang.value);
});
</script>
