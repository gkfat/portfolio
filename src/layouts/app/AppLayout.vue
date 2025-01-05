<template>
    <Landing />

    <v-main>
        <Features />
        <Projects />
    </v-main>

    <AppDrawer />
    <AppHeader />
    <AppFooter />

    <ProjectDialog />
    <Lightbox />

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

import ProjectDialog from '@/components/dialog/ProjectDialog.vue';
import Lightbox from '@/components/lightbox/Lightbox.vue';
import AppHeader from '@/layouts/app/header/AppHeader.vue';
import Features from '@/views/features/Features.vue';
import Landing from '@/views/landing/Landing.vue';
import Projects from '@/views/projects/Projects.vue';

import AppDrawer from './drawer/AppDrawer.vue';
import AppFooter from './footer/AppFooter.vue';

const goTo = (y: number) => {
    window.scrollTo({
        top: y,
        behavior: 'smooth',
    });
};

const passScrollToTopThreshold = ref(false);

const onScroll = () => {
    if (typeof window === 'undefined') return;
    const top = window.scrollY || 0;
    const threshold = Math.ceil(window.innerHeight * 0.2);
    passScrollToTopThreshold.value = top >= threshold;
};
</script>
