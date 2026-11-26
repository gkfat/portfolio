<template>
    <v-app>
        <AppHeader />
    
        <v-main class="app-main">
            <slot />
        </v-main>
    
        <AppFooter />
    
        <AppFixedLeft />
    
        <AppFixedRight />
    </v-app>
</template>

<script setup lang="ts">
import AppFixedLeft from '~/views/layout/AppFixedLeft.vue';
import AppFixedRight from '~/views/layout/AppFixedRight.vue';
import AppFooter from '~/views/layout/AppFooter.vue';
import AppHeader from '~/views/layout/AppHeader.vue';
</script>

<style scoped>
/*
 * Vuetify layout 在 SSR 時把 v-main 的 --v-layout-top 輸出為 0，
 * hydration 後才補上 app-bar 高度，導致首屏內容整體下移。
 * 固定為 app-bar 預設高度（density default = 64px），SSR 與 client 一致。
 */
.app-main {
    padding-top: 64px !important;
}
</style>
