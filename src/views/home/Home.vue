<template>
    <v-container>
        <About />
        <Proficiency />
        <Project />
    </v-container>

    <!-- Go Top Button -->
    <v-btn
        v-show="passScrollToTopThreshold"
        v-scroll="onScroll"
        position="fixed"
        location="right bottom"
        class="ma-6"
        icon
        @click="goTo(0)"
    >
        <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import About from './components/About.vue';
import Proficiency from './components/Proficiency.vue';
import Project from './components/Project.vue';

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
