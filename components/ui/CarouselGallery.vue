<template>
    <div v-if="images?.length">
        <!-- Single image mode -->
        <div v-if="images.length === 1" class="d-flex justify-center">
            <LazyImage 
                :src="images[0]"
                :alt="`${workTitle || '專案'} 截圖`"
            />
        </div>
        
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
                <div class="w-100 fill-height d-flex justify-center">
                    <LazyImage 
                        :src="img"
                        :alt="`${workTitle || '專案'} 截圖 ${index + 1}`"
                    />
                </div>
            </v-carousel-item>
        </v-carousel>
    </div>
</template>

<script lang="ts" setup>
import LazyImage from './LazyImage.vue';

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
