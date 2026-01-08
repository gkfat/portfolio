<template>
    <ContentRenderer class="content-md" :value="content"/>

    <!-- Carousel Gallery -->
    <section v-if="images?.length" class="mt-16">
        <v-divider class="mb-8" />
        <h2 class="text-h5 font-weight-bold text-primary mb-5">圖片列表</h2>
        <CarouselGallery :images="images"/>
    </section>
</template>

<script lang="ts" setup>
import CarouselGallery from './CarouselGallery.vue';

const props = defineProps<{
    content: {
        images?: string[];
    }
}>();

const images = computed(() => props.content.images);
</script>
