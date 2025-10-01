import { IProject } from '@/types/project';

export const CNC_MES: IProject = {
    meta: {
        title: 'CNC MES 系統',
        description: '整合 MES 加工/製造/生產管理的控制後台，現場可掃描 QRCode 登錄資料進後台，即時追蹤工單狀況。',
        time: '2024',
        techStacks: ['FE'],
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
            '帳號＆權限',
            '客戶＆供應商管理',
            '料件管理',
            '報價單＆訂單＆採購單管理',
            'MES 管理',
        ],
        imagesUrls: [],
    },
    links: { githubUrl: 'https://github.com/gkfat/cnc-mes-frontend' },
};