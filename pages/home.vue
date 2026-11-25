<template>
    <div>
        <!-- Hero -->
        <SectionBlock :id="'hero'">
            <HeroView />
        </SectionBlock>

        <!-- Solutions -->
        <SectionBlock
            :id="'solutions'"
            :prefix="'01.'"
            :title="'What I Solve'"
        >
            <SolutionsView />
        </SectionBlock>

        <!-- Features -->
        <SectionBlock
            :id="'features'"
            :prefix="'02.'"
            :title="'Selected Works'"
        >
            <FeaturesView />
        </SectionBlock>

        <!-- Capabilities -->
        <SectionBlock
            :id="'capabilities'"
            :prefix="'03.'"
            :title="'Capabilities'"
        >
            <CapabilitiesView />
        </SectionBlock>

        <!-- About -->
        <SectionBlock
            :id="'about'"
            :prefix="'04.'"
            :title="'About & Approach'"
        >
            <AboutView />
        </SectionBlock>

        <!-- Contact -->
        <SectionBlock
            :id="'contact'"
            :prefix="'05.'"
            :title="'Contact'"
        >
            <ContactView />
        </SectionBlock>
    </div>
</template>

<script setup lang="ts">
import ContactView from '~/views/home/ContactView.vue';
import FeaturesView from '~/views/home/FeaturesView.vue';
import SolutionsView from '~/views/home/SolutionsView.vue';
import CapabilitiesView from '~/views/home/CapabilitiesView.vue';
import HeroView from '~/views/home/HeroView.vue';
import SectionBlock from '~/views/layout/SectionBlock.vue';
import AboutView from '~/views/home/AboutView.vue';

// SEO 設定
useSeo({ key: 'home' });
</script>
