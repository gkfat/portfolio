import { IProject } from '@/types/project';

export const THLK: IProject = {
    meta: {
        title: '海禾通商',
        description: '重新構建網站，於第三方平台託管網站，增加安全性及提升整體形象。',
        time: '2022~2024',
        techStacks: ['FE'],
        tags: [
            'HTML',
            'CSS',
            'JavaScript',
            'TypeScript',
            'Vue',
        ],
    },
    content: {
        list: [
            '靜態網站加上 RWD',
            '部署與維護',
            '使用 Vue3 + TypeScript 重構網站',
            '開發基於 md 檔的文章系統',
        ],
        imagesUrls: [
            '/img/project/thlk/1.png',
            '/img/project/thlk/2.png',
            '/img/project/thlk/3.png',
            '/img/project/thlk/4.png',
        ],
    },
    links: {
        websiteUrl: 'https://www.thlk.com.tw',
        githubUrl: 'https://github.com/gkfat/thlk',
    },
};