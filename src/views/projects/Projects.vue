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
                {{ t('project.title_all_projects') }}
            </v-card-title>
        </v-card>

        <v-row class="justify-center">
            <v-col cols="auto">
                <v-btn-toggle
                    v-model="filter"
                    mandatory
                >
                    <v-btn
                        v-for="(item, i) in selection"
                        :key="i"
                        :value="item.value"
                    >
                        {{ item.title }}
                    </v-btn>
                </v-btn-toggle>
            </v-col>
        </v-row>

        <v-row>
            <v-col
                v-for="(chunk, i) in projectChunks"
                :key="i"
                :cols="12 / projectChunks.length"
            >
                <v-row>
                    <v-col
                        v-for="(key, j) in chunk"
                        :key="j"
                        cols="12"
                    >
                        <ProjectCard :project="Projects[key]" />
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import {
    computed,
    ref,
} from 'vue';

import { useI18n } from 'vue-i18n';
import { useDisplay } from 'vuetify';

import { Projects } from '@/data/project';
import { EnumProject } from '@/enums/projects';

import ProjectCard from './components/ProjectCard.vue';

const {
    xs, sm,
} = useDisplay();
const { t } = useI18n();

type Selection = 'all' | 'fullstack' | 'frontend' | 'backend';

const filter = ref<Selection>('all');

const selection = [
    {
        title: t('common.all'), value: 'all', 
    },
    {
        title: t('common.fullstack'), value: 'fullstack', 
    },
    {
        title: t('common.frontend'), value: 'frontend', 
    },
    {
        title: t('common.backend'), value: 'backend', 
    },
];

const projects = [
    EnumProject.InvestmentPortfolio,
    EnumProject.HTGameBackstage,
    EnumProject.AtrustekWeb,
    EnumProject.AsinkEIP,
    // EnumProject.HTGameBackend,

    EnumProject.TodoLess,
    EnumProject.TSMC,
    EnumProject.THLK,
    // EnumProject.CpfEdm,
    EnumProject.LogicardDuel,
    EnumProject.Ikea,
    EnumProject.CNCMes,
    EnumProject.WelcabBackStage,
    EnumProject.WelcabLineLiff,
    EnumProject.Loopback4App,
    EnumProject.FutureIntersection,
    // EnumProject.DiceRoller,
    // EnumProject.SimpleTodoList,
    EnumProject.AIWriter,
    EnumProject.TechBlog,
];

const projectChunks = computed(() => {
    const sliceProjects = [...projects].filter((p) => {
        const { techStacks } = Projects[p];

        if (filter.value === 'fullstack') {
            return ['FE', 'BE'].every((techStack) => techStacks.includes(techStack as 'FE' | 'BE'));
        }

        if (filter.value === 'frontend') {
            return ['FE'].every((techStack) => techStacks.includes(techStack as 'FE' | 'BE'));
        }

        if (filter.value === 'backend') {
            return ['BE'].every((techStack) => techStacks.includes(techStack as 'FE' | 'BE'));
        }

        return true;
    });
    
    let columns = 1;

    if (xs.value) {
        columns = 1;
    } else if (sm.value) {
        columns = 2;
    } else {
        columns = 3;
    }

    const chunkSize = Math.ceil(sliceProjects.length / columns);
    const result: EnumProject[][] = [];

    for (let i = 0; i < columns; i++) {
        result.push(sliceProjects.slice(i * chunkSize, (i + 1) * chunkSize));
    }

    return result;
});
</script>
