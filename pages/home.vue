<template>
    <div>
        <!-- Hero -->
        <SectionBlock :id="'hero'">
            <HeroView />
        </SectionBlock>

        <!-- Features -->
        <SectionBlock
            :id="'features'"
            :prefix="'01.'"
            :title="'精選作品'"
        >
            <FeaturesView />
        </SectionBlock>

        <!-- About -->
        <SectionBlock
            :id="'about'"
            :prefix="'02.'"
            :title="'關於我'"
        >
            <AboutView />
        </SectionBlock>

        <!-- Experience -->
        <SectionBlock
            :id="'experience'"
            :prefix="'03.'"
            :title="'工作經歷'"
            :max-width="800"
        >
            <ExperienceView />
        </SectionBlock>
        
        <!-- Contact -->
        <SectionBlock
            :id="'contact'"
            :prefix="'04.'"
            :title="'聯絡我'"
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