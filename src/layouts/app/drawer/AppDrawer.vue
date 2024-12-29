<template>
    <v-overlay
        v-model="appStore.isMobileDrawerOpen"
        scroll-strategy="block"
        persistent
        transition="v-slide-y-transition"
        :no-click-animation="true"
        location-strategy="connected"
        class="justify-center align-end"
        @after-enter="toggleMenu(true)"
    >
        <v-card
            flat
            :style="{
                transform: isMenuShow ? `translateY(${movingDistance}px)` : 'translateY(100%)',
                transition: isAnimating ? 'all 0.2s' : '',
                width: '100vw',
            }"
            @touchstart="onTouchStart"
            @touchmove="onTouchMove"
            @touchend="onTouchEnd"
        >
            <div class="py-2 bg-white cursor-grab">
                <div
                    class="rounded w-75 mx-auto bg-lightgrey"
                    :style="{
                        height: '5px',
                    }"
                />
            </div>
    
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
                @click="toggleMenu(false)"
            >
                <v-icon
                    size="40"
                    color="primary"
                    icon="mdi-chevron-down"
                />
            </v-btn>

            <div :style="{height: '45px'}" />
        </v-card>
    </v-overlay>
</template>
<script lang="ts" setup>
import {
    ref,
    watch,
} from 'vue';

import { useDisplay } from 'vuetify';

import { useAppStore } from '@/store/app';
import { sleepSeconds } from '@/utils/time';

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

const isMenuShow = ref(false);
const isAnimating = ref(false);
const startY = ref(0);
const isDragging = ref(false);
const movingDistance = ref(45);

const onTouchStart = (event: TouchEvent) => {
    startY.value = event.touches[0].clientY;
    isAnimating.value = false;
    isDragging.value = true;
};

const onTouchMove = async (event: TouchEvent) => {
    if (!isDragging.value) return;

    const currentY = event.touches[0].clientY;
    const touchMoveDistance = Math.floor(currentY - startY.value) + 45;

    movingDistance.value = touchMoveDistance < 0 ? 0 : touchMoveDistance;
};

const toggleMenu = async (open: boolean) => {
    isAnimating.value = true;

    if (open) {
        await sleepSeconds(0.2);
        isMenuShow.value = open;
    } else {
        isMenuShow.value = open;
        await sleepSeconds(0.2);
        appStore.isMobileDrawerOpen = false;
    }
};

const onTouchEnd = async () => {
    if (movingDistance.value > 150) {
        await toggleMenu(false);
    }
    
    movingDistance.value = 45;
    isAnimating.value = true;
};
</script>
