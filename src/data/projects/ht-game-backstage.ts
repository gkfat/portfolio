import { IProject } from '@/types/project';

export const HT_GAME_BACKSTAGE: IProject = {
    meta: {
        title: '遊戲專案後台全端開發',
        description: '遊戲商後台，包含會員/道具/活動控制，另有排程服務，即時管理活動進行狀態。',
        time: '2023~2024',
        techStacks: ['FE','BE'],
        tags: [
            'Vue',
            'Vuetify',
            'Node.js',
            'Fastify',
            'Mysql',
            'MongoDB',
            'Firebase',
            'ELK',
        ],
    },
    content: {
        list: [
            '帳號權限系統',
            '遊戲、會員管理功能',
            '各式活動設定、道具設定與報表',
            '跑馬燈管理功能',
            '帳務報表',
            'Cronjob',
            '系統維護排程',
            '部署與維護',
        ],
        imagesUrls: ['/img/project/ht-game-backstage/1.png', '/img/project/ht-game-backstage/2.png'],
    },
    links: {},
};