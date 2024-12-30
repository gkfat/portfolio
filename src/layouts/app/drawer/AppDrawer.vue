<template>
    <v-navigation-drawer v-model="appStore.isMobileDrawerOpen" disable-resize-watcher location="bottom">
        <v-card
            flat
            class="bg-transparent"
        >
            <v-list nav>
                <ThemeSelect />
    
                <v-divider />
    
                <LocaleSelect />
            </v-list>
    
            <v-divider />
    
            <SocialMedia />
    
            <v-btn
                block
                flat
                tile
                :ripple="false"
                size="x-large"
                :height="80"
                @click="closeDrawer"
            >
                <v-icon
                    size="40"
                    color="primary"
                    icon="mdi-chevron-down"
                />
            </v-btn>
        </v-card>
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

const closeDrawer = () => {
    appStore.isMobileDrawerOpen = false;
}
</script>
