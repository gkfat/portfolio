<template>
    <ContentRenderer class="content-md" :value="content"/>

    <!-- Image Gallery -->
    <section v-if="images?.length" class="mt-16">
        <h2 class="eyebrow text-secondary rule-top pt-4 mb-5">圖片列表</h2>
        <ImageGallery :images="images" :work-title="content.title"/>
    </section>
</template>

<script lang="ts" setup>
import ImageGallery from './ImageGallery.vue';

const props = defineProps<{
    content: {
        title?: string;
        images?: string[];
    }
}>();

const images = computed(() => props.content.images);
</script>
