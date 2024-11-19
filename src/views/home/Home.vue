<template>
    <v-container
        class="bg-background"
        style="max-width: 1000px !important;"
    >
        <About />

        <v-spacer class="my-5" />

        <Skill />
        <Proficiency />
        <Career />
        <Project />
    </v-container>

    <ProjectDialog />

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

import About from './about/About.vue';
import Career from './career/Career.vue';
import Proficiency from './proficiency/Proficiency.vue';
import Project from './project/Project.vue';
import Skill from './skill/Skill.vue';

// I build web applications with a focus on providing an excellent user experience.
// I optimize the performance of API servers.
// I solve problems.
// I deliver aesthetically pleasing and localized UI/UX designs.

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
<style lang="scss" scoped>

</style>
