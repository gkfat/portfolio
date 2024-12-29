<template>
    <v-item-group
        v-model="themeSelect"
        mandatory
        selected-class="primary"
    >
        <v-list-item
            prepend-icon="mdi-brightness-6"
            :title="t('config.theme')"
        />

        <v-container>
            <v-row class="flex-nowrap align-cetner">
                <v-col
                    v-for="(item, i) of themes"
                    :key="i"
                >
                    <v-item
                        v-slot="{isSelected, toggle}"
                        :value="item.value"
                    >
                        <v-card
                            :class="isSelected ? 'bg-primary': 'border border-primary'"
                            class="d-flex align-center border border-primary justify-center"
                            flat
                            rounded
                            @click="toggle"
                        >
                            <v-card-text class="text-center text-no-wrap">
                                {{ item.title }}
                                <v-icon :icon="item.icon" />
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
    computed,
    onMounted,
    ref,
    watch,
} from 'vue';

import { useI18n } from 'vue-i18n';

import { useAppStore } from '@/store/app';

const { t } = useI18n();
const appStore = useAppStore();
const isDark = computed(() => appStore.state.darkTheme);

const themeSelect = ref(false);

watch(
    () => themeSelect.value,
    () => {
        appStore.switchTheme(themeSelect.value);
    },
);

const themes = [
    {
        title: t('theme.light'), value: false, icon: 'mdi-white-balance-sunny', 
    }, {
        title: t('theme.dark'), value: true, icon: 'mdi-moon-waxing-crescent', 
    },
];

onMounted(() => {
    themeSelect.value = isDark.value;
});
</script>
