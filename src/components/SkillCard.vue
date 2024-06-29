<template>
    <v-card
        class="h-100 rounded-xl"
        variant="tonal"
    >
        <v-card-title class="text-primary text-h6 font-weight-bold">
            {{ skill.title }}
        </v-card-title>
        <v-card-text>
            <Chip
                v-for="item of skill.items"
                :key="item.text"
                :color="'primary'"
                class="ma-1"
                :text="item.text"
                :icon="item.icon"
            />
        </v-card-text>
    </v-card>
</template>

<script lang="ts" setup>
import { Types } from '@/types/types';

import Chip from './Chip.vue';

defineProps<{
    skill: Types.Skill;
}>();
</script>
