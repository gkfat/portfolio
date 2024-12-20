<template>
    <v-app-bar
        class="px-3 border-b-thin"
        flat
    >
        <Logo />

        <v-spacer class="ml-auto" />

        <!-- desktop -->
        <v-app-bar-actions v-if="mdAndUp">
            <v-row class="align-center ma-0">
                <v-btn
                    :text="t('common.resume')"
                    :href="URL_SOURCE.socialMedias.resume"
                    target="_blank"
                    color="primary"
                    append-icon="mdi-open-in-new"
                />

                <v-btn
                    :text="t('common.tech_blog')"
                    :href="URL_SOURCE.socialMedias.techBlog"
                    target="_blank"
                    color="primary"
                    append-icon="mdi-open-in-new"
                />

                <v-divider
                    vertical
                    inset
                    class="mx-3"
                />

                <AppearanceSwitcher />

                <v-divider
                    vertical
                    inset
                    class="mx-3"
                />

                <SocialMediaGroup />
            </v-row>
        </v-app-bar-actions>

        <!-- mobile -->
        <v-app-bar-actions v-if="!mdAndUp">
            <v-hover>
                <template #default="{isHovering, props}">
                    <v-app-bar-nav-icon
                        v-bind="props"
                        :class="{
                            'rotate': isHovering
                        }"
                        color="primary"
                        icon="mdi-cog"
                        :ripple="false"
                        variant="plain"
                        :style="{
                            transition: 'all 0.3s'
                        }"
                        @click.stop="appStore.isMobileDrawerOpen = !appStore.isMobileDrawerOpen"
                    />
                </template>
            </v-hover>
        </v-app-bar-actions>
    </v-app-bar>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';
import { useDisplay } from 'vuetify';

import SocialMediaGroup from '@/components/SocialMediaGroup.vue';
import { URL_SOURCE } from '@/data/url-source';
import { useAppStore } from '@/store/app';

import AppearanceSwitcher from './components/AppearanceSwitcher.vue';
import Logo from './components/Logo.vue';

const { t } = useI18n();
const { mdAndUp } = useDisplay();
const appStore = useAppStore();
</script>
<style lang="scss" scoped>
.rotate {
    transform: rotate(135deg);
}
</style>
