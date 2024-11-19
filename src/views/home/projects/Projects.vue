<template>
    <v-card
        id="projects"
        :max-width="1000"
        class="mx-auto bg-transparent py-10"
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
import { Projects } from '@/data/project';
import { EnumProject } from '@/enums/projects';

import ProjectCard from './components/ProjectCard.vue';

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
