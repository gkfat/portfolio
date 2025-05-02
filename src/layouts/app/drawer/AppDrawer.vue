<template>
    <v-dialog
        v-model="appStore.isMobileDrawerOpen"
        transition="dialog-bottom-transition"
        fullscreen
    >
        <v-card
            flat
            class="bg-white"
        >
            <v-spacer :style="{height: '25vh'}" />
            
            <v-card-text class="pa-0">
                <ThemeSelect />
    
                <v-divider />
    
                <LocaleSelect />
    
                <v-divider />
    
                <SocialMedia />
            </v-card-text>
            
            <v-card-actions class="pa-0">
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
            </v-card-actions>
        </v-card>
    </v-dialog>
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
};
</script>
