<template>
    <v-card
        rounded="xl"
        flat
        variant="transparent"
    >
        <v-card-title class="text-center text-primary mb-3">
            {{ t('common.proficiency') }}
        </v-card-title>

        <v-card-text>
            <v-row>
                <v-col
                    v-for="(proficiency, i) of Proficiencys"
                    :key="i"
                    cols="12"
                    sm="6"
                    :class="{ 'px-0': xs }"
                >
                    <ProficiencyCard :proficiency="proficiency" />
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { useDisplay } from 'vuetify';

import { Proficiencys } from '@/data/proficiency';

import ProficiencyCard from './components/ProficiencyCard.vue';

const { t } = useI18n();
const { xs } = useDisplay();
</script>
