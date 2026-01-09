<template>
    <NuxtImg
        :src="src"
        loading="lazy"
        :alt="alt"
        placeholder="blur"
        style="object-fit: contain; max-height: 600px;"
        class="w-100 fill-height"
        sizes="(max-width: 640px) 100vw, 600px"
    />
</template>

<script lang="ts" setup>
defineProps<{
  src: string;
  alt: string;
}>();
</script>
