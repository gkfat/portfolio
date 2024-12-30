<template>
    <v-container
        fluid
        :max-width="1000"
        class="mb-10"
    >
        <v-card
            flat
            class="bg-transparent mb-5"
        >
            <v-card-title class="text-h5 text-center text-dark text-capitalize">
                {{ t('common.about') }}
            </v-card-title>
        </v-card>
    
        <v-card-text>
            I'm Gk Wang.
        </v-card-text>
      
    </v-container>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

const {t} = useI18n()
</script>