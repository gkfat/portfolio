<template>
    <div v-if="images?.length">
        <!-- Single image mode -->
        <v-img
            v-if="images.length === 1"
            :src="images[0]"
            contain
            class="rounded"
            loading="lazy"
            max-height="600"
            :alt="`${workTitle || '專案'} 截圖`"
        />
        
        <!-- Carousel mode -->
        <v-carousel
            v-else
            v-model="currentSlide"
            show-arrows="hover"
            max-height="600"
            :continuous="true"
            progress="primary"
            hide-delimiters
        >
            <v-carousel-item
                v-for="(img, index) in images"
                :key="index"
                :value="index"
            >
                <v-img
                    :src="img"
                    contain
                    height="100%"
                    loading="lazy"
                    class="d-flex align-center justify-center"
                    :alt="`${workTitle || '專案'} 截圖 ${index + 1}`"
                />
            </v-carousel-item>
        </v-carousel>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    images: string[]
    workTitle?: string  // 用於生成 alt 文字
}>();

// Carousel state
const currentSlide = ref(0);

// Keyboard navigation
const handleKeydown = (event: KeyboardEvent) => {
    if (!props.images?.length || props.images.length <= 1) return;
    
    if (event.key === 'ArrowLeft') {
        currentSlide.value = currentSlide.value > 0 
            ? currentSlide.value - 1 
            : props.images.length - 1;
    } else if (event.key === 'ArrowRight') {
        currentSlide.value = currentSlide.value < props.images.length - 1
            ? currentSlide.value + 1
            : 0;
    }
};

// Lifecycle
onMounted(() => {
    window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown);
});

// Reset when images change
watch(() => props.images, () => {
    currentSlide.value = 0;
});
</script>