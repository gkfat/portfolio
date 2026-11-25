<template>
    <div>
        <h3 class="display-title mb-6" :style="{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }">
            Have a Business Problem to Solve?
        </h3>
        <p class="text-h6 font-weight-regular text-lightgrey mb-8" :style="{ maxWidth: '640px', lineHeight: 1.7 }">
            無論是 AI 應用、流程自動化或系統整合，不論需求已經明確，或只有一個想像，歡迎先來聊聊，讓我們把想法變成可運作的解決方案。
        </p>
        <div class="d-flex flex-wrap align-center ga-3 mb-6">
            <v-btn
                variant="flat"
                size="x-large"
                class="text-none"
                color="secondary"
                rounded="0"
                :href="`mailto:${contactInfo.email}`"
            >
                Let's Build Something.
            </v-btn>
            <v-btn
                v-for="link in socialLinks"
                :key="link.name"
                variant="outlined"
                size="x-large"
                class="text-none"
                rounded="0"
                target="_blank"
                :prepend-icon="link.icon"
                :href="link.url"
            >
                {{ link.name }}
            </v-btn>
        </div>
        <p class="text-body-2 text-lightgrey">
            <v-icon
                icon="mdi-circle"
                color="success"
                size="10"
                class="me-2"
            />通常在 24 小時內回覆
        </p>
    </div>
</template>
<script setup lang="ts">
import { contactInfo } from '~/config/config';

const socialLinks = Object.values(contactInfo.socialLinks);
</script>
