<template>
    <v-btn
        class="border rounded-xl position-relative"
        size="x-small"
        style="transition: all 0.3s;"
        color="primary"
        variant="plain"
        :width="50"
        :height="24"
        @click="changeTheme"
    >
        <span
            class="inner-icon position-absolute border rounded-xl d-flex align-center justify-center"
            :class="{ 'go-end': isDark }"
        >
            <v-icon
                size="16"
                :icon="isDark ? 'mdi-weather-night': 'mdi-white-balance-sunny'"
            />
        </span>
    </v-btn>
</template>
<script lang="ts" setup>
import { computed } from 'vue';

import { useAppStore } from '@/stores/app';

const appStore = useAppStore();

const isDark = computed(() => appStore.state.darkTheme);

function changeTheme() {
    appStore.switchTheme(!isDark.value);
}
</script>
<style lang="scss" scoped>
.inner-icon {
    width: 24px;
    height: 24px;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    transition: all 0.3s;

    &.go-end {
        transform: translateX(100%) translateY(-50%);
    }
}
</style>
