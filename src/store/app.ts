import { ref } from 'vue';

import { defineStore } from 'pinia';

import { Types } from '@/types/types';
import { useLocalStorage } from '@vueuse/core';

function createDefaultState() {
    return {
        appTitle: import.meta.env.VITE_APP_TITLE || 'Gk\'s Portfolio',
        darkTheme: true,
        locale: 'zh',
    };
}

export const useAppStore = defineStore('app', () => {
    const state = useLocalStorage('gk-portfolio', createDefaultState(), { mergeDefaults: true });
    const isMobileDrawerOpen = ref(false);
    const activeProject = ref(null as Types.Project | null);
    const isOpenDialog = ref(false);

    const setActiveProject = (project: Types.Project) => {
        activeProject.value = project;
        isOpenDialog.value = true;
    };

    const switchTheme = (isDark: boolean) => {
        state.value.darkTheme = isDark;
    };

    const setLocale = (newLocale: string) => {
        state.value.locale = newLocale;
    };

    return {
        state,
        isMobileDrawerOpen,
        activeProject,
        isOpenDialog,
        setActiveProject,
        switchTheme,
        setLocale,
    };
});
