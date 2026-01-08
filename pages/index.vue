<script setup lang="ts">
useSeo({ key: 'home' });

onMounted(() => {
    setTimeout(() => {
        navigateTo('/home');
    }, 500);
});
</script>

<template>
    <div class="position-fixed top-0 left-0 right-0 bottom-0 bg-background d-flex justify-center align-center" :style="{zIndex: 3000}">
        <h1 class="text-h2 text-secondary font-weight-bold">Hello!</h1>
    </div>
</template>
