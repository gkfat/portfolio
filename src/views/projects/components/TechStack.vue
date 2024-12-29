<template>
    <v-btn
        flat
        color="lightgrey"
        icon
        size="x-small"
        :text="text"
    />
</template>
<script lang="ts" setup>
const { text } = defineProps<{
    text: string;
}>();
</script>