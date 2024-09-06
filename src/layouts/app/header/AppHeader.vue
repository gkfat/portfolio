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

            <v-btn
                v-for="(item, i) of socialMedias"
                :key="i"
                color="primary"
                :href="item.link"
                target="_blank"
                :size="32"
                icon
                flat
            >
                <v-icon
                    :icon="item.icon"
                    :size="24"
                />
            </v-btn>
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
        <v-list
            nav
            density="compact"
        >
            <v-list-item
                v-for="nav of navItems"
                :key="nav"
                @click="goToSection(nav)"
            >
                <v-list-item-title>
                    {{ t('nav.' + nav) }}
                </v-list-item-title>
            </v-list-item>
            <v-divider />
        </v-list>

        <v-list>
            <v-list-item>
                <v-list-item-title>
                    <v-row class="align-center">
                        <v-col>
                            {{ t('app.appearance') }}
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
                <v-list-item-title>
                    <v-row>
                        <v-col
                            v-for="(item, i) of socialMedias"
                            :key="i"
                            cols="auto"
                            class="pa-1"
                        >
                            <v-btn
                                :href="item.link"
                                target="_blank"
                                :ripple="false"
                                color="primary"
                                variant="plain"
                                class="opacity-100"
                                :size="40"
                                icon
                            >
                                <v-icon
                                    :icon="item.icon"
                                    :size="28"
                                />
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import { useI18n } from 'vue-i18n';
import { useDisplay } from 'vuetify';

import { SocialMedias } from '@/data/social-media';
import { NavItems } from '@/enums/nav-items';

import AppearanceSwitcher from './components/AppearanceSwitcher.vue';

const { t } = useI18n();

const { mdAndUp } = useDisplay();
const drawer = ref(false);
const navItems: string[] = Object.values(NavItems);

const socialMedias = SocialMedias.filter((item) => item.showInNav);

function goTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

function goToSection(nav: string) {
    const { offsetTop } = document.getElementById(nav)!;
    window.scrollTo({
        top: offsetTop - 100,
        behavior: 'smooth',
    });
    drawer.value = false;
}
</script>
