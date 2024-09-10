<template>
    <v-btn
        :href="props.linkUrl"
        color="primary"
        target="_blank"
        variant="plain"
        class="opacity-100 px-0 ma-0 text-body-1"
        :ripple="false"
    >
        <p class="d-flex align-center">
            {{ props.title }}
            <v-icon
                v-if="props.linkUrl"
                color="lightgrey"
                icon="mdi-open-in-new"
                size="14"
            />
        </p>
    </v-btn>
</template>

<script lang="ts" setup>
const props = defineProps<{
    title: string;
    linkUrl?: string;
}>();
</script>
