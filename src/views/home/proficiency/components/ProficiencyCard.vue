<template>
    <v-card
        rounded="xl"
        color="white"
        flat
        class="px-4 border fill-height"
    >
        <v-card-title class="text-center text-primary">
            {{ t(`proficiency.${props.proficiency.category}`) }}
        </v-card-title>

        <v-divider />

        <v-card-text>
            <p
                v-for="(item, i) of props.proficiency.items"
                :key="i"
            >
                - {{ item }}
            </p>
        </v-card-text>
    </v-card>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

import { Types } from '@/types/types';

const { t } = useI18n();

const props = defineProps<{
    proficiency: Types.Proficiency;
}>();
</script>
