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
import { ref } from 'vue';

import { useTheme } from 'vuetify';

const theme = useTheme();

const isDark = ref(false);

function changeTheme() {
    isDark.value = !isDark.value;
    const themeName = isDark.value ? 'dark' : 'light';

    document.documentElement.setAttribute(
        'data-color-theme',
        themeName,
    );
    theme.global.name.value = themeName;
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
