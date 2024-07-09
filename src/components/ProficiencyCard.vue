<template>
    <v-card
        color="warning"
        class="h-100 rounded-xl gradient"
    >
        <v-card-title class="py-3 d-flex align-center ga-3">
            <v-icon
                variant="flat"
                size="small"
                :icon="proficiency.icon"
            />
            <span class="text-h6 font-weight-medium">
                {{ proficiency.title }}
            </span>
        </v-card-title>

        <v-divider />

        <v-card-text>
            <v-list-item
                v-for="item of proficiency.items"
                :key="item"
                class="pa-0"
            >
                <template #prepend>
                    <v-icon
                        icon="mdi-label"
                        style="margin-right: -20px; opacity: 100;"
                        color="light"
                        size="20"
                    />
                </template>
                <v-list-item-title class="text-wrap text-body-2">
                    {{ item }}
                </v-list-item-title>
            </v-list-item>
        </v-card-text>
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
        rgba(var(--v-theme-warning), 0.5) 0%,
        rgb(var(--v-theme-white)) 80%
    );
}
:deep(.v-list-item__prepend) {
    height: 100%;
    align-items: start;
}
:deep(.v-list-item__content) {
    height: 100%;
    align-items: start;
}
</style>
