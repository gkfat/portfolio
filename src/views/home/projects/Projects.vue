<template>
    <v-container
        id="projects"
        fluid
    >
        <v-row class="justify-center align-center">
            <v-col
                cols="12"
                sm="10"
            >
                <v-card
                    flat
                    variant="text"
                >
                    <v-card-title class="text-center">
                        專案展示
                    </v-card-title>

                    <v-card-subtitle class="text-center mb-5" />

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
            </v-col>
        </v-row>
    </v-container>
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
