<template>
    <ContentRenderer class="content-md" :value="content"/>

    <!-- Gallery -->
    <v-container
        v-if="images?.length"
        fluid
        class="mt-10 pa-0"
    >
        <v-row>
            <v-col
                v-for="(img, index) in images"
                :key="index"
                cols="12"
            >
                <v-img
                    :src="img"
                    contain
                    class="rounded"
                    loading="lazy"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
const props = defineProps<{
    content: {
        images?: string[];
    }
}>();

const images = computed(() => props.content.images);
</script>
