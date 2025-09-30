<template>
    <vue-easy-lightbox
        :visible="appStore.lightboxConfig.isOpen"
        :imgs="appStore.lightboxConfig.imgs"
        :index="appStore.lightboxConfig.activeIndex"
        move-disabled
        loop
        @hide="appStore.lightboxConfig.isOpen = false"
    />
</template>
<script lang="ts" setup>
import VueEasyLightbox from 'vue-easy-lightbox';

import { useAppStore } from '@/stores/app';

const appStore = useAppStore();

</script>