<script setup lang="ts">
import CoverView from '~/views/home/CoverView.vue';

useSeo({ key: 'home' });

onMounted(() => {
    setTimeout(() => {
        navigateTo('/home');
    }, 100);
});
</script>

<template>
    <CoverView :start-animation="false" />
</template>
