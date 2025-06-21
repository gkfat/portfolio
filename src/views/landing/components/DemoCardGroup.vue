<template>
    <v-row>
        <v-col cols="auto">
            <v-card
                flat
                rounded="lg"
                elevation="6"
                class="card-from-top"
            >
                <v-card-text>
                    <v-img
                        :src="toImageUrl('/img/demo/investment-portfolio.png')"
                        :height="smAndDown ? 140 : 200"
                        :width="smAndDown ? 120: 180"
                        aspect-ratio="1/1"
                        rounded
                        cover
                    />
                </v-card-text>
            </v-card>
            <v-card
                flat
                rounded="lg"
                elevation="10"
                class="card-from-right"
            >
                <v-card-text>
                    <v-img
                        :src="toImageUrl('/img/demo/tsmc.png')"
                        :height="smAndDown ? 140 : 200"
                        :width="smAndDown ? 120: 180"
                        aspect-ratio="1/1"
                        rounded
                        contain
                    />
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>
<script lang="ts" setup>
import { useDisplay } from 'vuetify';

import { toImageUrl } from '@/utils/image';

const { smAndDown } = useDisplay();
</script>
<style lang="scss" scoped>
.card-from-right {
    transform: translate(40%, -30%);
    animation: slideFromRight 0.7s ease-out;
}

@keyframes slideFromRight {
    0% {
        opacity: 0;
        transform: translate(60%, -30%);
    }
    100% {
        opacity: 1;
        transform: translate(40%, -30%);
    }
}

.card-from-top {
    transform: translate(0, 10%);
    animation: slideFromTop 0.7s ease-out;
}

@keyframes slideFromTop {
    0% {
        opacity: 0;
        transform: translate(0, -30%);
    }
    100% {
        opacity: 1;
        transform: translate(0, 10%);
    }
}
</style>