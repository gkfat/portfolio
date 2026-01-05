<template>
    <div>
        <HeroView />
        <WorksListView />
    </div>
</template>

<script setup lang="ts">
import HeroView from '~/views/works/HeroView.vue';
import WorksListView from '~/views/works/WorksListView.vue';

useSeo({ key: 'works' });
</script>