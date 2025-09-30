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
                v-for="(item, i) in items"
                :key="i"
                :active="item.isSelected"
                :title="item.title"
                @click="updateLocale(item.value)"
            />
        </v-list>
    </v-menu>
</template>
<script lang="ts" setup>
import { computed } from 'vue';

import { useI18n } from 'vue-i18n';

import { useAppStore } from '@/stores/app';

const {
    t, locale, 
} = useI18n();

const appStore = useAppStore();
const items = computed(() => {
    return [
        {
            title: t('locale.zh'), value: 'zh', isSelected: appStore.state.locale === 'zh', 
        }, {
            title: t('locale.en'), value: 'en', isSelected: appStore.state.locale === 'en', 
        },
    ];
});

const updateLocale = (lang: string) => {
    locale.value = lang;
    appStore.setLocale(lang);
};
</script>
