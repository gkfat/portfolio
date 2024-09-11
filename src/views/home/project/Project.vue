<template>
    <v-card
        rounded="xl"
        flat
        variant="transparent"
    >
        <v-card-title class="text-center text-primary mb-3">
            {{ t('common.project') }}
        </v-card-title>

        <v-card-text>
            <v-row>
                <v-col
                    v-for="(key, i) of projects"
                    :key="i"
                    cols="12"
                    sm="6"
                    md="4"
                >
                    <ProjectCard :project="Projects[key]" />
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

import { Projects } from '@/data/project';
import { EnumProject } from '@/enums/projects';

import ProjectCard from './components/ProjectCard.vue';

const { t } = useI18n();

const projects = [
    EnumProject.AtrustekWeb,
    EnumProject.AsinkEIP,
    EnumProject.HTGameBackstage,
    EnumProject.HTGameBackend,

    EnumProject.TSMC,
    EnumProject.THLK,
    EnumProject.CpfEdm,
    EnumProject.LogicardDuel,
    EnumProject.Ikea,
    EnumProject.CNCMes,
    EnumProject.WelcabBackStage,
    EnumProject.WelcabLineLiff,
    EnumProject.DiceRoller,
    EnumProject.SimpleTodoList,
    EnumProject.TechBlog,
];
</script>
