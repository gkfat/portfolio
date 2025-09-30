<template>
    <v-fade-transition>
        <v-app-bar
            v-show="show"
            :class="{
                'bg-theme': true,
                'bg-transparent': !smAndUp,
            }"
            flat
        >
            <Logo />
    
            <!-- desktop -->
            <v-row
                v-if="mdAndUp"
                class="justify-end align-center ma-0 pe-3"
            >
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

                <LocaleSelectMenu />

                <v-divider
                    vertical
                    inset
                    class="mx-3"
                />
    
                <v-col
                    cols="auto"
                    class="pa-0"
                >
                    <SocialMediaGroup />
                </v-col>
            </v-row>
    
            <!-- mobile -->
            <v-row
                v-if="!mdAndUp"
                class="justify-end align-center ma-0 pe-3"
            >
                <v-app-bar-nav-icon
                    icon="mdi-menu"
                    :ripple="false"
                    class="text-primary"
                    variant="plain"
                    :style="{
                        transition: 'all 0.3s'
                    }"
                    @click.stop="appStore.isMobileDrawerOpen = !appStore.isMobileDrawerOpen"
                />
            </v-row>
        </v-app-bar>
    </v-fade-transition>
</template>

<script lang="ts" setup>
import {
    onMounted,
    ref,
} from 'vue';

import { useI18n } from 'vue-i18n';
import { useDisplay } from 'vuetify';

import SocialMediaGroup from '@/components/SocialMediaGroup.vue';
import { URL_SOURCE } from '@/data/url-source';
import { useAppStore } from '@/stores/app';

import AppearanceSwitcher from './components/AppearanceSwitcher.vue';
import LocaleSelectMenu from './components/LocaleSelectMenu.vue';
import Logo from './components/Logo.vue';

const { t } = useI18n();
const {
    smAndUp, mdAndUp, 
} = useDisplay();
const appStore = useAppStore();

const show = ref(false);

onMounted(() => {
    window.addEventListener('scroll', () => {
        show.value = window.scrollY > (window.innerHeight - 20);
    });
});

</script>
<style lang="scss" scoped>
.bg-theme {
    background: rgba(var(--v-theme-white), 0.9);
}
</style>
