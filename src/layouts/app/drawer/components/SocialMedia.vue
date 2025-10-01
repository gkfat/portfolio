<template>
    <v-list nav>
        <v-list-item
            :href="CONFIG.RESUME_URL"
            target="_blank"
            append-icon="mdi-open-in-new"
        >
            <v-list-item-title class="text-primary text-capitalize">
                {{ t('common.resume') }}
            </v-list-item-title>
        </v-list-item>

        <v-divider />

        <v-list-item
            :href="CONFIG.TECH_BLOG_URL"
            target="_blank"
            append-icon="mdi-open-in-new"
        >
            <v-list-item-title class="text-primary text-capitalize">
                {{ t('common.tech_blog') }}
            </v-list-item-title>
        </v-list-item>

        <v-divider />

        <v-list-item
            height="60"
        >
            <SocialMediaGroup :justify="'start'" />
        </v-list-item>
    </v-list>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

import SocialMediaGroup from '@/components/SocialMediaGroup.vue';
import { CONFIG } from '@/config/config';

const { t } = useI18n();
</script>
