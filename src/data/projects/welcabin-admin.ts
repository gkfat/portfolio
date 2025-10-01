import { IProject } from '@/types/project';

export const WELCABIN_ADMIN: IProject = {
    meta: {
        title: '派車系統',
        description: '解決長照預約派車管控問題的後台，讓車行安排車趟更便利，提升管理效率。',
        time: '2024',
        techStacks: ['FE'],
        weight: 2,
        tags: [
            'Vue',
            'Vuex',
            'Vuetify',
            'TypeScript',
            'Vitest',
        ],
        isSideProject: false,
    },
    content: {
        list: ['個案＆司機管理', '長照派車調度單管理與指派'],
        imagesUrls: [
            '/img/project/welcabin-admin/1.png',
            '/img/project/welcabin-admin/2.png',
            '/img/project/welcabin-admin/3.png',
            '/img/project/welcabin-admin/4.png',
            '/img/project/welcabin-admin/5.png',
        ],
    },
    links: { githubUrl: 'https://github.com/gkfat/welcab-saas-frontend' },
};