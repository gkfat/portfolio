<template>
    <section
        :id="id"
        :style="{
            'padding-top': smAndUp ? '100px' : '60px',
            'padding-bottom': smAndUp ? '100px' : '60px',
        }"
    >
        <v-container
            v-if="title"
            :max-width="maxWidth"
            class="mx-auto"
        >
            <!-- center type -->
            <v-row
                v-if="justifyCenter"
                no-gutters
                class="justify-center align-center"
            >
                <v-col cols="auto" class="text-h6 font-weight-bold">
                    {{ title }}
                </v-col>
            </v-row>

            <!-- left type -->
            <v-row
                v-else
                no-gutters
                class="align-center ga-5 nowrap"
            >
                <v-col cols="auto" class="text-h5 font-weight-bold">
                    {{ title }}
                </v-col>
                <v-col class="flex-grow">
                    <v-divider
                        :thickness="2"
                        :length="120"
                    />
                </v-col>
            </v-row>
        </v-container>

        <v-container :max-width="maxWidth" class="mx-auto">
            <slot />
        </v-container>
    </section>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';

defineProps<{ id?: string; title?: string; maxWidth?: number; justifyCenter?: boolean; }>();

const { smAndUp } = useDisplay();
</script>
