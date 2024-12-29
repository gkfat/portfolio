<template>
    <v-menu open-on-hover>
        <template #activator="{ props }">
            <v-btn
                color="primary"
                v-bind="props"
                icon="mdi-translate"
            />
        </template>

        <v-list>
            <v-list-item
                v-for="lang in locales"
                :key="lang"
                @click="setLocale(lang)"
            >
                <v-list-item-title class="text-capitalize">
                    {{ t(`locale.${lang}`) }}
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-menu>
</template>
<script lang="ts" setup>
import {
    ref,
    watch,
} from 'vue';

import { useI18n } from 'vue-i18n';

import { useAppStore } from '@/store/app';

const {
    t, locale, 
} = useI18n();

const appStore = useAppStore();
const locales = ['zh', 'en'];

const localeSelect = ref(locale.value);

const setLocale = (lang: string) => {
    locale.value = lang;
    appStore.setLocale(lang);
};

watch(
    () => localeSelect.value,
    () => {
        setLocale(localeSelect.value);
    },
);
</script>
