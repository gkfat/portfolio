<template>
    <div>
        <AppHeader />
        <MobileDrawer />

        <v-main>
            <router-view />
        </v-main>
    </div>
</template>

<script lang="ts" setup>
import AppHeader from '@/layouts/app/header/AppHeader.vue';

import MobileDrawer from './header/components/MobileDrawer.vue';
</script>
