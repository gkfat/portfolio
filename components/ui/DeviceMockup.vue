<template>
    <div class="device-mockup">
        <!-- Desktop -->
        <div class="device-desktop">
            <div class="device-desktop-bar">
                <span class="device-dot" />
                <span class="device-dot" />
                <span class="device-dot" />
            </div>
            <img
                :src="desktopSrc"
                :alt="`${alt} 桌面版畫面`"
                class="device-desktop-img"
                loading="lazy"
            >
        </div>

        <!-- Mobile -->
        <div
            v-if="mobileSrc"
            class="device-mobile"
        >
            <img
                :src="mobileSrc"
                :alt="`${alt} 手機版畫面`"
                class="device-mobile-img"
                loading="lazy"
            >
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    desktopSrc: string;
    mobileSrc?: string;
    alt: string;
}>();
</script>

<style scoped>
.device-mockup {
    position: relative;
    padding-bottom: 28px;
    padding-right: 28px;
}

.device-desktop {
    border: 1px solid var(--hairline);
    background: rgb(var(--v-theme-surface));
    overflow: hidden;
}

.device-desktop-bar {
    display: flex;
    gap: 6px;
    padding: 8px 12px;
    border-bottom: 1px solid var(--hairline);
}

.device-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--hairline);
}

.device-desktop-img {
    display: block;
    width: 100%;
    aspect-ratio: 16 / 10;
    object-fit: cover;
    object-position: top left;
}

.device-mobile {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 24%;
    min-width: 88px;
    border: 4px solid rgb(var(--v-theme-background));
    outline: 1px solid var(--hairline);
    border-radius: 16px;
    background: rgb(var(--v-theme-surface));
    overflow: hidden;
}

.device-mobile-img {
    display: block;
    width: 100%;
    aspect-ratio: 9 / 19;
    object-fit: cover;
    object-position: top;
}
</style>
