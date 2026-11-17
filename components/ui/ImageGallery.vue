<template>
    <div v-if="images?.length">
        <!-- Single image mode -->
        <div v-if="images.length === 1" class="d-flex justify-center">
            <LazyImage 
                :src="images[0]"
                :alt="`${workTitle || '專案'} 截圖`"
            />
        </div>

        <!-- Grid mode -->
        <v-row v-else>
            <v-col
                v-for="(img, index) in images"
                :key="img"
                cols="12"
                sm="6"
            >
                <LazyImage 
                    :src="img"
                    :alt="`${workTitle || '專案'} 截圖 ${index + 1}`"
                />
            </v-col>
        </v-row>
    </div>
</template>

<script lang="ts" setup>
import LazyImage from './LazyImage.vue';

defineProps<{
    images: string[]
    workTitle?: string  // 用於生成 alt 文字
}>();
</script>
