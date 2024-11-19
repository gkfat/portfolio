<template>
    <div>
        <AppHeader />

        <v-main>
            <router-view />
        </v-main>
    </div>
    <AppDrawer />
</template>

<script lang="ts" setup>
import AppHeader from '@/layouts/app/header/AppHeader.vue';

import AppDrawer from './drawer/AppDrawer.vue';
</script>
