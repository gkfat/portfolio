<template>
    <div>
        <!-- Hero -->
        <SectionBlock :id="'hero'">
            <HeroView />
        </SectionBlock>

        <!-- What I Solve -->
        <SectionBlock
            :id="'solutions'"
            :prefix="'01.'"
            :title="'What I Solve'"
        >
            <ProblemsView />
        </SectionBlock>

        <!-- Featured Case Studies -->
        <SectionBlock
            :id="'cases'"
            :prefix="'02.'"
            :title="'Case Studies'"
            stacked
        >
            <CaseStudiesView />
        </SectionBlock>

        <!-- How I Work + Engineering Principles -->
        <SectionBlock
            :id="'process'"
            :prefix="'03.'"
            :title="'How I Work'"
        >
            <HowIWorkView />
        </SectionBlock>

        <!-- Capabilities -->
        <SectionBlock
            :id="'capabilities'"
            :prefix="'04.'"
            :title="'Capabilities'"
        >
            <CapabilitiesView />
        </SectionBlock>

        <!-- About -->
        <SectionBlock
            :id="'about'"
            :prefix="'05.'"
            :title="'About'"
        >
            <AboutView />
        </SectionBlock>

        <!-- Contact -->
        <SectionBlock
            :id="'contact'"
            :prefix="'06.'"
            :title="'Contact'"
        >
            <ContactView />
        </SectionBlock>
    </div>
</template>

<script setup lang="ts">
import ContactView from '~/views/home/ContactView.vue';
import ProblemsView from '~/views/home/ProblemsView.vue';
import CaseStudiesView from '~/views/home/CaseStudiesView.vue';
import HowIWorkView from '~/views/home/HowIWorkView.vue';
import CapabilitiesView from '~/views/home/CapabilitiesView.vue';
import HeroView from '~/views/home/HeroView.vue';
import SectionBlock from '~/views/layout/SectionBlock.vue';
import AboutView from '~/views/home/AboutView.vue';

// SEO 設定
useSeo({ key: 'home' });
</script>
