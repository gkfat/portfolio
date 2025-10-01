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
    },
    content: {
        list: [
            '個案＆司機管理',
            '長照派車調度單管理與指派',
            '核銷報表試算工具',
        ],
        imagesUrls: [
            '/img/project/welcab-backoffice/1.png',
            '/img/project/welcab-backoffice/2.png',
            '/img/project/welcab-backoffice/3.png',
            '/img/project/welcab-backoffice/4.png',
            '/img/project/welcab-backoffice/5.png',
            '/img/project/welcab-backoffice/6.png',
        ],
    },
    links: { githubUrl: 'https://github.com/gkfat/welcab-saas-frontend' },
};