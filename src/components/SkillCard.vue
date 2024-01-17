<template>
    <v-card class="h-100 rounded-xl">
        <v-card-title class="text-primary">
            {{ skill.title }}
        </v-card-title>
        <v-divider />
        <v-card-text>
            <Chip
                v-for="item of skill.items"
                :key="item.text"
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
