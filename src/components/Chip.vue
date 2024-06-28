<template>
    <v-chip
        :color="color ?? 'primary'"
        density="compact"
        :variant="variant ?? 'outlined'"
        link
    >
        <v-icon
            v-if="icon"
            :icon="icon"
            size="18"
            class="mr-1"
        />
        {{ text }}
    </v-chip>
</template>

<script lang="ts" setup>
defineProps<{
    color?: string;
    text: string;
    icon?: string;
    variant?: string;
}>();
</script>
