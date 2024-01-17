<template>
    <v-card
        color="primary"
        class="h-100 d-flex flex-wrap rounded-xl gradient justify-start"
        style="flex-direction: column;"
        hover
    >
        <v-card-item>
            <v-card-title class="text-center mb-3">
                <v-icon
                    class="mb-1"
                    :icon="proficiency.icon"
                    size="24"
                />
                <br>
                {{ proficiency.title }}
            </v-card-title>

            <v-divider />

            <v-card-text class="px-0">
                <v-list-item
                    v-for="item of proficiency.items"
                    :key="item"
                    class="pa-0"
                >
                    <template #prepend>
                        <v-icon
                            icon="mdi-check-circle-outline"
                            style="margin-right: -20px;"
                            size="20"
                        />
                    </template>
                    <v-list-item-title class="text-wrap text-body-2 text-white">
                        {{ item }}
                    </v-list-item-title>
                </v-list-item>
            </v-card-text>
        </v-card-item>
    </v-card>
</template>

<script lang="ts" setup>
import { Types } from '@/types/types';

defineProps<{
    proficiency: Types.Proficiency;
}>();
</script>

<style lang="scss" scoped>
.gradient {
    background: linear-gradient(
        45deg,
        rgba(var(--v-theme-secondary), 0.5) 0%,
        rgb(var(--v-theme-primary)) 80%
    );
}
</style>
