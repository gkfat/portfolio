<template>
    <v-card
        flat
        class="bg-transparent mb-5"
    >
        <v-card-title class="text-h5 text-center text-dark text-capitalize">
            {{ t('project.title_feature_projects') }}
        </v-card-title>
    </v-card>
        
    <InvestmentPortfolio />
    <Tsmc />
    <Welcab />
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

import InvestmentPortfolio from './components/InvestmentPortfolio.vue';
import Tsmc from './components/Tsmc.vue';
import Welcab from './components/Welcab.vue';

const { t } = useI18n();
</script>