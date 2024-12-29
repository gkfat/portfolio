<template>
    <v-card
        flat
        tile
        color="primary"
        class="position-relative"
        :style="{
            height: '100vh',
            width: '100vw',
            zIndex: 9
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
                <p class="text-h5 text-center text-white text-montserrat font-weight-bold mb-3">
                    Hi, I'm Gk Wang
                </p>
                <p class="text-h5 text-center text-white text-montserrat font-weight-bold mb-5">
                    A Web Developer
                </p>

                <v-spacer class="mb-10" />
                
                <div class="d-flex justify-center align-center ga-3">
                    <v-btn
                        :text="t('common.resume')"
                        :href="URL_SOURCE.socialMedias.resume"
                        flat
                        color="dark"
                        class="text-capitalize"
                        target="_blank"
                        append-icon="mdi-open-in-new"
                    />
                    <v-btn
                        text="Github"
                        :href="URL_SOURCE.socialMedias.github"
                        color="dark"
                        flat
                        target="_blank"
                        append-icon="mdi-open-in-new"
                    />
                </div>
            </v-col>
        </v-row>

        <div
            class="w-100 d-flex align-center justify-center position-absolute mx-auto"
            :style="{
                bottom: '80px',
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
import { useI18n } from 'vue-i18n';

import { URL_SOURCE } from '@/data/url-source';

const { t } = useI18n();

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