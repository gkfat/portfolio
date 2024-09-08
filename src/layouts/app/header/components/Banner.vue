<template>
    <div
        class="bg-primary py-10"
    >
        <v-container>
            <v-row class="ma-0 justify-center align-center">
                <v-col
                    cols="12"
                    sm="auto"
                    class="py-0"
                >
                    <p
                        class="text-h5 ma-0"
                        :class="{ 'text-center': xs }"
                    >
                        {{ t('banner.title') }}
                    </p>
                </v-col>
                <v-col
                    class="text-slider py-0"
                    cols="12"
                    sm="auto"
                >
                    <p
                        v-for="(item, i) of textSliderItems"
                        :key="i"
                        :class="{
                            'active': currentIndex === i,
                            'previous': leavingIndex === i,
                            'text-center': xs
                        }"
                        class="text-h4 ma-0 text-no-wrap text-slider-item"
                    >
                        {{ item }}
                    </p>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script lang="ts" setup>
import {
    onMounted,
    ref,
} from 'vue';

import { useI18n } from 'vue-i18n';
import { useDisplay } from 'vuetify/lib/framework.mjs';

const { xs } = useDisplay();
const { t } = useI18n();

const textSliderItems = [
    t('banner.item_1'),
    t('banner.item_2'),
    t('banner.item_3'),
    t('banner.item_4'),
];

const currentIndex = ref(0);
const leavingIndex = ref(textSliderItems.length - 1);

function setLeavingItem() {
    if (leavingIndex.value === textSliderItems.length - 1) {
        leavingIndex.value = 0;
    } else {
        leavingIndex.value += 1;
    }
}

function startSlider() {
    setLeavingItem();

    setTimeout(() => {
        if (currentIndex.value === textSliderItems.length - 1) {
            currentIndex.value = 0;
        } else {
            currentIndex.value += 1;
        }
    }, 300);
}

onMounted(() => {
    startSlider();

    setInterval(() => startSlider(), 3000);
});
</script>

<style lang="scss" scoped>
.text-slider {
    position: relative;
    height: 80px;
    width: 220px;
    overflow: hidden;

    &-item {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        opacity: 0;
        transform: translateY(-100%);
        transition: all 0.5s ease;

        &.active {
            opacity: 1;
            transform: translateY(50%);
        }

        &.previous {
            opacity: 0;
            transform: translateY(100%);
        }
    }
}
</style>
