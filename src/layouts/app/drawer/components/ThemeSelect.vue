<template>
    <v-list-group>
        <template #activator="{ props }">
            <v-list-item
                v-bind="props"
                prepend-icon="mdi-brightness-6"
                :title="t('config.theme')"
            />
        </template>

        <v-list-item
            v-for="item in themes"
            :key="item.theme"
            :value="item.theme"
            :active="item.theme === 'dark' ? isDark : !isDark"
            color="primary"
            :prepend-icon="item.icon"
            @click="setTheme(item.theme)"
        >
            <v-list-item-title>{{ t(`theme.${item.theme}`) }}</v-list-item-title>
        </v-list-item>
    </v-list-group>
</template>
<script lang="ts" setup>
import { computed } from 'vue';

import { useI18n } from 'vue-i18n';

import { useAppStore } from '@/store/app';

const { t } = useI18n();
const appStore = useAppStore();
const isDark = computed(() => appStore.state.darkTheme);

const themes = [
    {
        theme: 'dark',
        icon: 'mdi-weather-night',
    }, {
        theme: 'light',
        icon: 'mdi-white-balance-sunny',
    },
];

const setTheme = (theme: string) => {
    const dark = theme === 'dark';

    appStore.switchTheme(dark);
};
</script>
