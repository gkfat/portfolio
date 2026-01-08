<template>
    <ContentRenderer class="content-md" :value="content"/>

    <!-- Carousel Gallery -->
    <section v-if="images?.length" class="my-10">
        <v-divider class="mb-5" />
        <p class="text-h4 mb-5">Gallery</p>
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
