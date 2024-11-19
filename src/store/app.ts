import { ref } from 'vue';

import { defineStore } from 'pinia';

import { Types } from '@/types/types';

export const useAppStore = defineStore('app', () => {
    const isMobileDrawerOpen = ref(false);
    const activeProject = ref(null as Types.Project | null);
    const isOpenDialog = ref(false);

    const setActiveProject = (project: Types.Project) => {
        activeProject.value = project;
        isOpenDialog.value = true;
    };

    return {
        isMobileDrawerOpen,
        activeProject,
        isOpenDialog,
        setActiveProject,
    };
});
