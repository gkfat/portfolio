<template>
    <InfiniteScrollProjects
        :title="t('project.title_feature_projects') "
        :projects="projects"
        :scroll-direction="'left'"
    />
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

import InfiniteScrollProjects from './components/InfiniteScrollProjects.vue';
import { EnumProject } from '@/enums/projects';

const { t } = useI18n();

const projects = [
    EnumProject.InvestmentPortfolio,
    EnumProject.TodoLess,
    EnumProject.TSMC,
    EnumProject.THLK,
    EnumProject.LogicardDuel,
    EnumProject.Ikea,
    EnumProject.WelcabBackStage,
    EnumProject.WelcabLineLiff,
    EnumProject.Loopback4App,
    EnumProject.FutureIntersection,
    EnumProject.AIWriter,
    EnumProject.TechBlog,
];
</script>