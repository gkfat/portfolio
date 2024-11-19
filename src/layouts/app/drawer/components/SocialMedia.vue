<template>
    <v-list nav>
        <v-list-item
            class="text-primary"
            :title="t('common.resume')"
            :href="URL_SOURCE.socialMedias.resume"
            target="_blank"
            append-icon="mdi-open-in-new"
        />

        <v-divider />

        <v-list-item
            class="text-primary"
            :title="t('common.tech_blog')"
            :href="URL_SOURCE.socialMedias.techBlog"
            target="_blank"
            append-icon="mdi-open-in-new"
        />

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
import { URL_SOURCE } from '@/data/url-source';

const { t } = useI18n();
</script>
