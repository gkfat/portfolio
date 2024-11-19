<template>
    <v-card
        flat
        color="primary"
        class="w-100 py-5"
        rounded="0"
    >
        <v-card-title class="text-center font-weight-bold">
            {{ title }}
        </v-card-title>

        <v-card-subtitle
            v-if="subtitle"
            class="text-center"
        >
            {{ subtitle }}
        </v-card-subtitle>
    </v-card>
</template>
<script lang="ts" setup>
const {
    title,
    subtitle,
} = defineProps<{
    title: string;
    subtitle?: string
}>();
</script>
