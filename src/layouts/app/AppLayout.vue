<template>
    <div class="fill-height">
        <AppHeader />
        <AppDrawer />

        <v-main class="fill-height">
            <router-view />
        </v-main>
    </div>

    <!-- Go Top Button -->
    <v-scale-transition>
        <v-btn
            v-show="passScrollToTopThreshold"
            v-scroll="onScroll"
            color="primary"
            position="fixed"
            location="right bottom"
            class="ma-6"
            icon
            @click="goTo(0)"
        >
            <v-icon>mdi-chevron-up</v-icon>
        </v-btn>
    </v-scale-transition>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import AppHeader from '@/layouts/app/header/AppHeader.vue';

import AppDrawer from './drawer/AppDrawer.vue';

const goTo = (y: number) => {
    window.scrollTo({
        top: y,
        behavior: 'smooth',
    });
};

const passScrollToTopThreshold = ref(false);

const onScroll = (e: any) => {
    if (typeof window === 'undefined') return;
    const top = window.scrollY || e.target.scrollTop || 0;
    const threshold = Math.ceil(window.innerHeight * 0.2);
    passScrollToTopThreshold.value = top >= threshold;
};
</script>
