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
                {{ t('common.project') }}
            </v-card-title>
        </v-card>

        <div v-if="xs">
            <v-row>
                <v-col
                    v-for="(key, i) in projects"
                    :key="i"
                    cols="12"
                >
                    <ProjectCard :project="Projects[key]" />
                </v-col>
            </v-row>
        </div>

        <div v-else-if="mdAndUp">
            <v-row>
                <v-col
                    v-for="(_projects, i) in projectsIn3Chunks"
                    :key="i"
                    cols="4"
                >
                    <v-row>
                        <v-col
                            v-for="(key, _i) in _projects"
                            :key="_i"
                            cols="12"
                        >
                            <ProjectCard :project="Projects[key]" />
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </div>

        <div v-else>
            <v-row>
                <v-col
                    v-for="(_projects, i) in projectsIn2Chunks"
                    :key="i"
                    cols="6"
                >
                    <v-row>
                        <v-col
                            v-for="(key, _i) in _projects"
                            :key="_i"
                            cols="12"
                        >
                            <ProjectCard :project="Projects[key]" />
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </div>
    </v-container>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

import { useI18n } from 'vue-i18n';
import { useDisplay } from 'vuetify/lib/framework.mjs';

import { Projects } from '@/data/project';
import { EnumProject } from '@/enums/projects';

import ProjectCard from './components/ProjectCard.vue';

const {
    xs, mdAndUp, 
} = useDisplay();
const { t } = useI18n();

const projects = [
    EnumProject.InvestmentPortfolio,
    EnumProject.HTGameBackstage,
    EnumProject.AtrustekWeb,
    EnumProject.AsinkEIP,
    // EnumProject.HTGameBackend,

    EnumProject.TSMC,
    EnumProject.THLK,
    // EnumProject.CpfEdm,
    EnumProject.LogicardDuel,
    EnumProject.Ikea,
    EnumProject.CNCMes,
    EnumProject.WelcabBackStage,
    EnumProject.WelcabLineLiff,
    // EnumProject.DiceRoller,
    // EnumProject.SimpleTodoList,
    EnumProject.TechBlog,
];

const projectsIn2Chunks = computed(() => {
    const half = Math.floor(projects.length / 2);
    return [projects.slice(0, half), projects.slice(half)];
});

const projectsIn3Chunks = computed(() => {
    const third = Math.floor(projects.length / 3);

    return [
        projects.slice(0, third),
        projects.slice(third, third * 2),
        projects.slice(third * 2),
    ];
});
</script>
