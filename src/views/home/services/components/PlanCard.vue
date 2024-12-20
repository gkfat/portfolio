<template>
    <v-card
        rounded="lg"
        class="fill-height"
        :title="service.title"
    >
        <v-divider />
        <v-card-text>
            <p
                :style="{fontSize: '1.1rem'}"
                class="mb-3"
            >
                <v-icon icon="mdi-label-multiple" />
                服務項目
            </p>
            <p
                v-for="(item, i) in service.serviceItems"
                :key="i"
                class="my-1"
            >
                <v-icon
                    icon="mdi-circle-medium"
                    color="secondary"
                />
                {{ item }}
            </p>
        </v-card-text>
        <v-divider />
        <v-card-text>
            <p
                :style="{fontSize: '1.1rem'}" 
                class="mb-3"
            >
                <v-icon icon="mdi-emoticon-outline" />
                附加項目
            </p>
            <p
                v-for="(item, i) in service.additionals"
                :key="i"
                class="my-1"
            >
                <v-icon
                    icon="mdi-circle-medium"
                    color="secondary"
                />
                {{ item }}
            </p>
        </v-card-text>
    </v-card>
</template>
<script lang="ts" setup>
import { Types } from '@/types/types';

const { service } = defineProps<{
    service: Types.Service
}>();
</script>