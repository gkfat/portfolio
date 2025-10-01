import { IProject } from '@/types/project';

export const INVESTMENT_PORTFOLIO: IProject = {
    meta: {
        title: '個人投資組合績效管理 App',
        description: '紀錄個人交易紀錄，掌握投資組合績效狀況，掌握市場即時報價。',
        time: '2024',
        techStacks: ['FE','BE'],
        weight: 1,
        tags: [
            'Vue3',
            'Vuetify',
            'TypeScript',
            'Redis',
            'Postgres',
            'Nest.js',
            'Render',
            'Swagger',
            'Google OAuth',
            'Grafana Cloud / Loki logs',
        ],
        isSideProject: true,
    },
    content: {
        list: [
            '會員系統',
            'RBAC 角色權限管理',
            '投資組合管理',
            '交易記錄管理',
            '金融即時報價',
            'Auditing／操作紀錄',
            'IAM／角色管理',
            'IAM／權限管理',
        ],
        imagesUrls: [
            '/img/project/investment-portfolio/1.png',
            '/img/project/investment-portfolio/2.png',
            '/img/project/investment-portfolio/3.png',
            '/img/project/investment-portfolio/4.png',
            '/img/project/investment-portfolio/5.png',
            '/img/project/investment-portfolio/6.png',
            '/img/project/investment-portfolio/7.png',
            '/img/project/investment-portfolio/8.png',
        ],
    },
    links: {
        websiteUrl: 'https://gk-app.pages.dev',
        githubUrl: 'https://github.com/gkfat/gk-app',
    },
};