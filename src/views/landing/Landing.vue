<template>
    <v-card
        flat
        tile
        color="primary"
        class="position-relative"
        :style="{
            height: `${height}px`,
            width: `${width}px`,
            zIndex: 9,
        }"
    >
        <v-row
            class="w-100 align-center justify-center position-absolute mx-auto"
            :style="{
                top: '50%',
                transform: 'translateY(-50%)'
            }"
        >
            <v-col cols="auto">
                <Slogan />
            </v-col>
            <v-col
                cols="auto"
                :style="{transform: smAndDown ? `translateX(-10%)` : `translateY(20%)`}"
            >
                <DemoCardGroup />
            </v-col>
        </v-row>
    
        <div
            class="w-100 d-flex align-center justify-center position-absolute mx-auto"
            :style="{
                bottom: '60px',
            }"
        >
            <v-icon
                class="scroll-down"
                icon="mdi-chevron-down"
                size="80"
                color="white"
                @click="scrollDown"
            />
        </div>
    </v-card>
</template>
<script lang="ts" setup>
import { useDisplay } from 'vuetify';

import { useWindowSize } from '@vueuse/core';

import DemoCardGroup from './components/DemoCardGroup.vue';
import Slogan from './components/Slogan.vue';

const { smAndDown } = useDisplay();
const {
    height, width, 
} = useWindowSize();

const scrollDown = () => {
    window.scrollTo({
        top: window.innerHeight + 1,
        behavior: 'smooth',
    });
};
</script>
<style lang="scss" scoped>
.scroll-down {
    animation: downBounce 1.5s infinite;
}

@keyframes downBounce {
    0% {
        transform: translateY(0);
    }
    20% {
        transform: translateY(15px);
    }
    40% {
        transform: translateY(0);
    }
}
</style>