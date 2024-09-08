<template>
    <v-card
        rounded="xl"
        flat
        variant="transparent"
    >
        <v-card-title class="text-center text-primary mb-3">
            {{ t('common.skill') }}
        </v-card-title>

        <v-card-text>
            <v-row>
                <v-col
                    v-for="(skill, i) of Skills"
                    :key="i"
                    cols="12"
                    sm="6"
                    md="4"
                >
                    <SkillCard :skill="skill" />
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

import { Skills } from '@/data/skill';

import SkillCard from './components/SkillCard.vue';

const { t } = useI18n();
</script>
