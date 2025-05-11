<template>
    <InfiniteScrollProjects
        :title="t('project.title_feature_projects') "
        :tech-stacks="['FE']"
        :scroll-direction="'left'"
    />
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

import InfiniteScrollProjects from './components/InfiniteScrollProjects.vue';

const { t } = useI18n();
</script>