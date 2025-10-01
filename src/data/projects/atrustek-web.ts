import { IProject } from '@/types/project';

export const ATRUSTEK_WEB: IProject = {
    meta: {
        title: 'Atrustek Fintech Saas',
        description: '個人金融顧問網站，從 KYC 分析到股票、外匯投資理財管理，一應俱全。',
        time: '2019~2021',
        techStacks: ['FE'],
        tags: [
            'Angular',
            'NgRx',
            'TypeScript',
            'Linux',
        ],
    },
    content: {
        list: [
            '會員系統',
            '多語系重構',
            '論壇系統',
            '股票篩選器',
            '投資組合模擬交易系統',
            '部署與維護',
        ],
        imagesUrls: [
            '/img/project/atrustek-web/1.png',
            '/img/project/atrustek-web/2.png',
            '/img/project/atrustek-web/3.png',
            '/img/project/atrustek-web/4.png',
        ],
    },
    links: { websiteUrl: 'https://www.atrustek.com/cis/home' },
};