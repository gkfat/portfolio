<template>
    <div v-show="mdAndUp" class="position-fixed right-0 bottom-0">
        <v-container class="pb-0">
            <v-row no-gutters class="flex-column align-center">
                <v-col cols="auto">
                    <v-btn
                        target="_blank"
                        variant="plain"
                        :ripple="false"
                        class="text-none text-primary"
                        :href="`mailto:${contactInfo.email}`"
                        :style="{ writingMode: 'vertical-rl', height: 'auto', letterSpacing: '2px' }"
                    >
                        {{ contactInfo.email }}
                    </v-btn>
                </v-col>
                <v-col cols="auto" class="mt-4 d-flex justify-center">
                    <v-divider
                        color="primary"
                        vertical
                        :length="120"
                    />
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';
import { contactInfo } from '~/config/config';

const { mdAndUp } = useDisplay();
</script>
