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