<template>
    <v-list-group>
        <template #activator="{ props }">
            <v-list-item
                v-bind="props"
                prepend-icon="mdi-translate"
                :title="t('config.locale')"
            />
        </template>

        <v-list-item
            v-for="lang in locales"
            :key="lang"
            :value="lang"
            :active="lang === currentLocale"
            color="primary"
            @click="setLocale(lang)"
        >
            <v-list-item-title>{{ t(`locale.${lang}`) }}</v-list-item-title>
        </v-list-item>
    </v-list-group>
</template>
<script lang="ts" setup>
import { computed } from 'vue';

import { useI18n } from 'vue-i18n';

import { useAppStore } from '@/store/app';

const { t, locale } = useI18n();

const appStore = useAppStore();
const currentLocale = computed(() => locale.value);
const locales = ['zh'];

const setLocale = (val: string) => {
    locale.value = val;
    appStore.setLocale(val);
};
</script>
