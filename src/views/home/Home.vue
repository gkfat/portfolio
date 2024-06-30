<template>
    <v-container style="max-width: 1000px">
        <About />
        <Skills />
        <Proficiency />
        <Project />
    </v-container>

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

import About from './components/About.vue';
import Proficiency from './components/Proficiency.vue';
import Project from './components/Project.vue';
import Skills from './components/Skills.vue';

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
