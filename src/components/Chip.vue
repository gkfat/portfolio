<template>
    <v-chip
        color="primary"
        density="compact"
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
    text: string;
    icon?: string;
}>();
</script>
