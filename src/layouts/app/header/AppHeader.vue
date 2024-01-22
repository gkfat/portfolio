<template>
    <v-app-bar
        flat
        style="position:fixed;"
    >
        <v-app-bar-title
            class="logo text-primary"
            @click="goTop()"
        >
            {{ t('app.title') }}
        </v-app-bar-title>

        <v-spacer />

        <div class="d-flex align-center">
            <v-btn
                v-model="isDark"
                variant="plain"
                :icon="isDark ? 'mdi-weather-night' : 'mdi-white-balance-sunny'"
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
                    variant="text"
                    class="text-primary"
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
    const { offsetTop } = document.getElementById(nav)!;
    window.scrollTo({
        top: offsetTop - 100,
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
