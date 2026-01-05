<template>
    <div v-show="mdAndUp" class="position-fixed left-0 bottom-0">
        <v-container class="pb-0">
            <v-row no-gutters class="flex-column">
                <v-col v-for="(social, i) of socialLinks" :key="i">
                    <v-btn
                        :key="social.name"
                        :href="social.url" 
                        target="_blank" 
                        icon
                        variant="plain"
                        :ripple="false"
                        color="primary"
                        :aria-label="social.name"
                    >
                        <v-icon>{{ social.icon }}</v-icon>
                    </v-btn>
                </v-col>
                <v-col cols="auto" class="mt-3 d-flex justify-center">
                    <v-divider
                        color="primary"
                        vertical
                        :length="150"
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
const { socialLinks } = contactInfo;
</script>