<template>
    <v-container fluid>
        <v-card
            flat
            class="bg-transparent"
        >
            <v-card-title class="text-h5 text-center text-dark text-capitalize">
                {{ t('project.title_feature_projects') }}
            </v-card-title>
        </v-card>
    
        <BubbleProjects
            v-if="mdAndUp"
            :projects="projects"
        />
        <InfiniteScrollProjects
            v-else
            :projects="projects"
            :scroll-direction="'left'"
        />
    </v-container>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { useDisplay } from 'vuetify';

import InfiniteScrollProjects from './components/InfiniteScrollProjects.vue';
import BubbleProjects from './components/BubbleProjects.vue';
import { EnumProject } from '@/enums/projects';

const { t } = useI18n();
const { mdAndUp } = useDisplay();

const projects = [
    EnumProject.INVESTMENT_PORTFOLIO,
    EnumProject.TODOLESS,
    EnumProject.TSMC,
    EnumProject.THLK,
    EnumProject.LOGICARD_DUEL,
    EnumProject.IKEA,
    EnumProject.WELCABIN_ADMIN,
    EnumProject.WELCABIN_PASSENGER_LIFF,
    EnumProject.LOOPBACK4_APP,
    EnumProject.FUTURE_INTERSECTION,
    EnumProject.AI_WRITER,
    EnumProject.TECH_BLOG,
];
</script>