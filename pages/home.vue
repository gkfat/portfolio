<template>
    <div>
        <!-- Hero -->
        <SectionBlock :id="'hero'">
            <HeroView />
        </SectionBlock>

        <!-- Features -->
        <SectionBlock
            :id="'features'"
            :title="'01. 精選作品'"
        >
            <FeaturesView />
        </SectionBlock>

        <!-- About -->
        <SectionBlock
            :id="'about'"
            :title="'02. 關於我'"
        >
            <AboutView />
        </SectionBlock>

        <!-- Experience -->
        <SectionBlock
            :id="'experience'"
            :title="'03. 工作經歷'"
            :max-width="800"
        >
            <ExperienceView />
        </SectionBlock>
        
        <!-- Contact -->
        <SectionBlock
            :id="'contact'"
            :title="'04. 聯絡我'"
            :max-width="800"
            justify-center
        >
            <ContactView />
        </SectionBlock>
    </div>
</template>

<script setup lang="ts">
import ExperienceView from '~/views/home/ExperienceView.vue';
import ContactView from '~/views/home/ContactView.vue';
import FeaturesView from '~/views/home/FeaturesView.vue';
import HeroView from '~/views/home/HeroView.vue';
import SectionBlock from '~/views/layout/SectionBlock.vue';
import AboutView from '~/views/home/AboutView.vue';

useSeo({ key: 'home' });
</script>
