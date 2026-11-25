<template>
    <section :style="{ paddingTop: smAndUp ? '140px' : '100px', paddingBottom: '48px' }">
        <v-container :max-width="1200" class="mx-auto px-6 px-md-16">
            <p class="eyebrow text-secondary mb-4">
                Works
            </p>
            <h1 class="display-title mb-6">
                Selected Case Studies
            </h1>
            <p class="text-h6 font-weight-regular text-lightgrey" :style="{ maxWidth: '720px', lineHeight: 1.7 }">
                我協助企業解決的實際問題：從系統整合、流程自動化到客製化軟體，包含合作案例與 Side Projects。
            </p>
        </v-container>
    </section>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';

const { smAndUp } = useDisplay();
</script>
