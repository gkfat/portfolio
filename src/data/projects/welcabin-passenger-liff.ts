import { IProject } from '@/types/project';

export const WELCABIN_PASSENGER_LIFF: IProject = {
    meta: {
        title: '派車系統 Line Liff 服務',
        description: '解決長照預約麻煩問題，需求者可透過 Line Liff 表單預約，需求單直接串接到後台，消弭資訊落差。',
        time: '2024',
        techStacks: ['FE'],
        weight: 1.8,
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
        list: ['表單驗證服務', '串接 Line Auth 服務'],
        imagesUrls: [
            '/img/project/welcabin-passenger-liff/1.png',
            '/img/project/welcabin-passenger-liff/2.png',
            '/img/project/welcabin-passenger-liff/3.png',
        ],
    },
    links: { githubUrl: 'https://github.com/gkfat/welcab-line-reservation' },
};