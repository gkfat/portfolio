import { ref } from 'vue';

import { defineStore } from 'pinia';

import { useLocalStorage } from '@vueuse/core';
import { IProject } from '@/types/project';

function createDefaultState() {
    return {
        appTitle: 'Gk\'s Portfolio',
        darkTheme: true,
        locale: 'zh',
    };
}

export const useAppStore = defineStore('app', () => {
    const state = useLocalStorage('gk-portfolio', createDefaultState(), { mergeDefaults: true });
    const isMobileDrawerOpen = ref(false);
    const activeProject = ref(null as IProject | null);
    const isOpenDialog = ref(false);
    const lightboxConfig = ref({
        imgs: [] as string[],
        activeIndex: 0,
        isOpen: false,
    });

    const setActiveProject = (project: IProject) => {
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
        lightboxConfig,
        setActiveProject,
        switchTheme,
        setLocale,
    };
});
