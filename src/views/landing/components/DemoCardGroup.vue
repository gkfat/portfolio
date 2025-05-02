<template>
    <v-row>
        <v-col cols="auto">
            <v-card
                flat
                rounded="lg"
                elevation="6"
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
                :style="{
                    transform: `translateX(30%) translateY(-60%)`
                }"
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