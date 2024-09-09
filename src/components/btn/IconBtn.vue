<template>
    <v-btn
        :href="props.linkUrl"
        target="_blank"
        :ripple="false"
        color="primary"
        variant="plain"
        class="opacity-100"
        :size="props.iconSize === 'big' ? 50 : 40"
        icon
    >
        <v-icon
            :icon="props.icon"
            :size="props.iconSize === 'big' ? 34 : 28"
        />
    </v-btn>
</template>
<script lang="ts" setup>
const props = withDefaults(defineProps<{
    linkUrl?: string;
    icon: string;
    iconSize?: string;
}>(), {
    linkUrl: undefined,
    iconSize: 'default',
});
</script>
