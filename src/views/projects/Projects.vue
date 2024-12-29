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
            <v-card-title class="text-h4 text-dark text-capitalize">
                {{ t('common.project') }}
            </v-card-title>
        </v-card>
    
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
    </v-container>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

import { Projects } from '@/data/project';
import { EnumProject } from '@/enums/projects';

import ProjectCard from './components/ProjectCard.vue';

const { t } = useI18n();

const projects = [
    EnumProject.HTGameBackstage,
    EnumProject.AtrustekWeb,
    EnumProject.AsinkEIP,
    // EnumProject.HTGameBackend,

    EnumProject.TSMC,
    EnumProject.THLK,
    EnumProject.CpfEdm,
    EnumProject.LogicardDuel,
    EnumProject.Ikea,
    EnumProject.CNCMes,
    EnumProject.WelcabBackStage,
    EnumProject.WelcabLineLiff,
    // EnumProject.DiceRoller,
    // EnumProject.SimpleTodoList,
    EnumProject.TechBlog,
];
</script>
