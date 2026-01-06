<template>
    <v-footer
        :class="{
            'bg-transparent': mdAndUp,
            'bg-dark': !mdAndUp
        }"
    >
        <v-container class="pb-10">
            <v-row no-gutters class="justify-center ga-3">
                <v-col
                    v-if="!mdAndUp"
                    cols="12"
                    class="text-center"
                >
                    <v-btn
                        v-for="(social, i) of socialLinks"
                        :key="i"
                        :href="social.url" 
                        target="_blank"
                        icon
                        variant="plain"
                        :ripple="false"
                        color="white"
                        :aria-label="social.name"
                    >
                        <v-icon>{{ social.icon }}</v-icon>
                    </v-btn>
                </v-col>

                <v-col
                    cols="12"
                    class="text-primary text-center"
                    :style="{letterSpacing: '1px'}"
                >
                    {{ currentYear }} Gk All rights reserved.
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';
import { contactInfo } from '~/config/config';

const { mdAndUp } = useDisplay();
const { socialLinks } = contactInfo;

const currentYear = computed(() => createDate().year());
</script>