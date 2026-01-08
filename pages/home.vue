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

        <CoverView 
            :start-animation="startAnimation"
            :direction="coverDirection"
        />
    </div>
</template>

<script setup lang="ts">
import ExperienceView from '~/views/home/ExperienceView.vue';
import ContactView from '~/views/home/ContactView.vue';
import FeaturesView from '~/views/home/FeaturesView.vue';
import HeroView from '~/views/home/HeroView.vue';
import SectionBlock from '~/views/layout/SectionBlock.vue';
import AboutView from '~/views/home/AboutView.vue';
import CoverView from '~/views/home/CoverView.vue';

type SlideDirection = 'slide-left' | 'slide-right' | 'slide-up' | 'slide-down';

// SEO 設定
useSeo({ key: 'home' });

const startAnimation = ref(false);
const coverDirection = ref<SlideDirection>('slide-left');

// 隨機選擇滑出方向
const getRandomDirection = (): SlideDirection => {
    const directions: SlideDirection[] = [
        'slide-left',
        'slide-right',
        'slide-up',
        'slide-down',
    ];
    return directions[Math.floor(Math.random() * directions.length)];
};

// 1 秒後開始滑出動畫
onMounted(() => {
    setTimeout(() => {
        // 隨機選擇滑出方向
        coverDirection.value = getRandomDirection();
        startAnimation.value = true;
    }, 1000);
});
</script>