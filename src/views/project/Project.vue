<template>
    <PageHeader :title="t('common.project')" />
    <v-card
        :max-width="1000"
        class="mx-auto"
        flat
    >
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
import PageHeader from '@/layouts/panel/PageHeader.vue';

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
