<template>
    <v-layout>
        <AppHeader />
        <v-main>
            <router-view />
        </v-main>
    </v-layout>
</template>

<script lang="ts" setup>
import AppHeader from '@/layouts/app/header/AppHeader.vue';
</script>
