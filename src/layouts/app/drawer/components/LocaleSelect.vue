<template>
    <v-item-group
        v-model="localeSelect"
        mandatory
        selected-class="primary"
    >
        <v-list-item
            prepend-icon="mdi-translate"
            :title="t('config.locale')"
        />

        <v-container>
            <v-row class="flex-nowrap align-cetner">
                <v-col
                    v-for="(lang, i) of locales"
                    :key="i"
                >
                    <v-item
                        v-slot="{isSelected, toggle}"
                        :value="lang"
                    >
                        <v-card
                            :class="isSelected ? 'bg-primary': 'border border-primary'"
                            class="d-flex align-center border border-primary justify-center"
                            flat
                            rounded
                            @click="toggle"
                        >
                            <v-card-text class="text-center text-no-wrap">
                                {{ t(`locale.${lang}`) }}
                            </v-card-text>
                        </v-card>
                    </v-item>
                </v-col>
            </v-row>
        </v-container>
    </v-item-group>
</template>
<script lang="ts" setup>
import {
    ref,
    watch,
} from 'vue';

import { useI18n } from 'vue-i18n';

import { useAppStore } from '@/stores/app';

const {
    t, locale, 
} = useI18n();

const appStore = useAppStore();
const locales = ['zh', 'en'];

const localeSelect = ref(locale.value);

watch(
    () => localeSelect.value,
    () => {
        locale.value = localeSelect.value;
        appStore.setLocale(localeSelect.value);
    },
);
</script>
