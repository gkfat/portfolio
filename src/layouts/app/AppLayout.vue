<template>
    <div>
        <AppHeader />
        <v-main>
            <router-view />
        </v-main>
    </div>
</template>

<script lang="ts" setup>
import AppHeader from '@/layouts/app/header/AppHeader.vue';
</script>
