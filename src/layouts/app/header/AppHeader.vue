<template>
    <v-app-bar
        class="px-3 border-b-thin"
        flat
    >
        <v-btn
            class="text-primary text-title opacity-100"
            variant="plain"
            :ripple="false"
            @click="goTop"
        >
            {{ t('app.title') }}
        </v-btn>

        <v-spacer class="ml-auto" />

        <div
            v-if="mdAndUp"
            class="d-flex align-center"
        >
            <TextBtn
                :title="t('common.resume')"
                :link-url="URL_SOURCE.socialMedias.resume"
            />

            <TextBtn
                :title="t('common.tech_blog')"
                :link-url="URL_SOURCE.socialMedias.techBlog"
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
        </div>

        <v-app-bar-actions v-if="!mdAndUp">
            <v-app-bar-nav-icon
                icon="mdi-dots-horizontal"
                :ripple="false"
                variant="plain"
                @click.stop="drawer = !drawer"
            />
        </v-app-bar-actions>
    </v-app-bar>

    <!-- 側邊欄 -->
    <v-navigation-drawer
        v-model="drawer"
        location="right"
    >
        <v-list>
            <v-list-item>
                <v-list-item-title>
                    <v-row class="align-center">
                        <v-col class="text-primary font-weight-bold">
                            {{ t('common.appearance') }}
                        </v-col>
                        <v-col>
                            <AppearanceSwitcher />
                        </v-col>
                    </v-row>
                </v-list-item-title>
            </v-list-item>
        </v-list>

        <v-divider />

        <v-list>
            <v-list-item>
                <TextBtn
                    :title="t('common.resume')"
                    :link-url="URL_SOURCE.socialMedias.resume"
                />
            </v-list-item>
        </v-list>

        <v-divider />

        <v-list>
            <v-list-item>
                <TextBtn
                    :title="t('common.tech_blog')"
                    :link-url="URL_SOURCE.socialMedias.techBlog"
                />
            </v-list-item>
        </v-list>

        <v-divider />

        <v-list>
            <v-list-item>
                <v-list-item-title>
                    <SocialMediaGroup :justify="'start'" />
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts" setup>
import {
    ref,
    watch,
} from 'vue';

import { useI18n } from 'vue-i18n';
import { useDisplay } from 'vuetify';

import TextBtn from '@/components/btn/TextBtn.vue';
import SocialMediaGroup from '@/components/SocialMediaGroup.vue';
import { URL_SOURCE } from '@/data/url-source';

import AppearanceSwitcher from './components/AppearanceSwitcher.vue';

const { t } = useI18n();

const { mdAndUp } = useDisplay();
const drawer = ref(false);

watch(
    mdAndUp,
    () => {
        if (mdAndUp.value) {
            drawer.value = false;
        }
    },
);

function goTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}
</script>
