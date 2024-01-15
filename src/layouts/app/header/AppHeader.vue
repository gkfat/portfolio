<template>
    <v-app-bar
        flat
    >
        <v-app-bar-title
            class="logo"
            @click="goTop()"
        >
            {{ t('app.title') }}
        </v-app-bar-title>

        <v-spacer />

        <div class="d-flex align-center">
            <v-switch
                v-model="isDark"
                :prepend-icon="isDark ? 'mdi-weather-night' : 'mdi-white-balance-sunny'"
                hide-details
                inset
                @click.prevent="changeTheme()"
            />

            <v-btn-toggle
                v-if="!xs"
                class="ml-3"
            >
                <v-btn
                    v-for="nav of navItems"
                    :key="nav"
                    :ripple="false"
                    variant="plain"
                    class="text-capitalize"
                    @click="goToSection(nav)"
                >
                    {{ t('nav.' + nav) }}
                </v-btn>
            </v-btn-toggle>
            <v-app-bar-nav-icon
                v-if="xs"
                @click.stop="drawer = !drawer"
            />
        </div>
    </v-app-bar>

    <!-- 側邊欄 -->
    <v-navigation-drawer
        v-if="xs"
        v-model="drawer"
        location="right"
    >
        <v-list
            nav
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
        </v-list>
    </v-navigation-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import { useI18n } from 'vue-i18n';
import {
    useDisplay,
    useTheme,
} from 'vuetify';

import { NavItems } from '@/enums/nav-items';

const { t } = useI18n();
const theme = useTheme();

const { xs } = useDisplay();
const drawer = ref(false);
const navItems: string[] = Object.values(NavItems);

const isDark = ref(false);

/** 切換主題 */
function changeTheme() {
    isDark.value = !isDark.value;
    const themeName = isDark.value ? 'dark' : 'light';

    document.documentElement.setAttribute(
        'data-color-theme',
        themeName,
    );
    theme.global.name.value = themeName;
}

function goTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

function goToSection(nav: string) {
    document.getElementById(nav)!.scrollIntoView({
        behavior: 'smooth',
    });
    drawer.value = false;
}
</script>
<style lang="scss">
.logo {
    cursor: pointer;
}
</style>
