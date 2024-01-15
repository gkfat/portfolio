<template>
    <v-container
        :id="NavItems.Project"
        class="mb-5"
        fluid
    >
        <p class="text-h5">
            {{ t('nav.' + NavItems.Project) }}
        </p>

        <v-divider class="my-3" />
    </v-container>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

import { NavItems } from '@/enums/nav-items';

const { t } = useI18n();
</script>
