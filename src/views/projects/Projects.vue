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
            <v-spacer />
            
            <v-col
                cols="4"
                class="d-flex justify-center"
            >
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

            <v-col
                cols="4"
                class="d-flex justify-end align-center"
            >
                <v-checkbox
                    v-model="hideSideProjects"
                    :label="t('project.hide_side_projects')"
                    color="primary"
                    hide-details
                    density="compact"
                />
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

import { Projects } from '@/data/projects';
import { EnumProject } from '@/enums/projects';

import ProjectCard from './components/ProjectCard.vue';

const {
    xs, sm,
} = useDisplay();
const { t } = useI18n();

type Selection = 'all' | 'fullstack' | 'frontend' | 'backend';

const filter = ref<Selection>('all');
const hideSideProjects = ref(true);

const selection = computed(() => [
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
]);

const projects = [
    EnumProject.INVESTMENT_PORTFOLIO,
    EnumProject.HT_GAME_BACKSTAGE,
    EnumProject.ATRUSTEK_WEB,
    EnumProject.ASINK_EIP,
    EnumProject.TSMC,
    EnumProject.THLK,
    EnumProject.CPF_EDM,
    EnumProject.IKEA,
    EnumProject.CNC_MES,
    EnumProject.WELCABIN_ADMIN,
    EnumProject.WELCABIN_PASSENGER_LIFF,
    EnumProject.LOGICARD_DUEL,
    EnumProject.LOOPBACK4_APP,
    EnumProject.FUTURE_INTERSECTION,
    EnumProject.DICE_ROLLER,
    EnumProject.AI_WRITER,
    EnumProject.TECH_BLOG,
    EnumProject.SQUASH_RESERVATION,
];

const projectChunks = computed(() => {
    const sliceProjects = [...projects].filter((p) => {
        const {
            techStacks, isSideProject, 
        } = Projects[p].meta;

        if (hideSideProjects.value && isSideProject) {
            return false;
        }

        // Tech stack 過濾
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
    }).reverse();
    
    let columns = 1;

    if (xs.value) {
        columns = 1;
    } else if (sm.value) {
        columns = 2;
    } else {
        columns = 3;
    }

    const result: EnumProject[][] = [];

    let currentColumn = 0;
    while (sliceProjects.length) {
        const p = sliceProjects.pop();

        if (!result[currentColumn]) {
            result[currentColumn] = [];
        }

        result[currentColumn].push(p);

        if (currentColumn === columns - 1) {
            currentColumn = 0;
        } else {
            currentColumn += 1;
        }
    }

    return result;
});
</script>
