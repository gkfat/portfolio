<template>
    <v-app>
        <AppHeader />
    
        <v-main>
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
