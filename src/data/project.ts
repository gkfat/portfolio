import { EnumProject } from '@/enums/projects';
import { Types } from '@/types/types';

export const Projects: Record<EnumProject, Types.Project> = {
    [EnumProject.TSMC]: {
        title: '台積心築藝術季',
        time: '2021',
        subtitle: '前端開發',
        items: [
            '網站視覺與流程設計',
            'Motion vision 製作',
            '部署與維護',
        ],
        tags: [
            'HTML',
            'CSS',
            'JavaScript',
        ],
        websiteUrl: 'https://demo-tsmc-art-festival-2021.pages.dev',
        githubUrl: 'https://github.com/gkfat/tsmc-art-festival-2021',
    },
    [EnumProject.THLK]: {
        title: '海禾通商',
        time: '2022~2024',
        subtitle: '前端開發',
        items: [
            '靜態網站加上 RWD',
            '部署與維護',
            '使用 Vue3 + TypeScript 重構網站',
            '開發基於 md 檔的文章系統',
        ],
        tags: [
            'HTML',
            'CSS',
            'JavaScript',
            'TypeScript',
            'Vue',
        ],
        websiteUrl: 'https://www.thlk.com.tw',
        githubUrl: 'https://github.com/gkfat/thlk',
    },
    [EnumProject.CpfEdm]: {
        title: '齊柏林基金會 EDM',
        time: '2021',
        subtitle: 'EDM 切版',
        items: [
            'EDM 模板設計',
        ],
        tags: [
            'HTML',
        ],
        websiteUrl: 'https://demo-cpf-edm.pages.dev/edm.html',
        githubUrl: 'https://github.com/gkfat/cpf-edm',
    },
    [EnumProject.LogicardDuel]: {
        title: 'Logicard Duel',
        time: '2023',
        subtitle: '前端遊戲規劃 & 開發',
        items: [
            '遊戲流程邏輯設計與開發',
            '前端視覺設計與開發',
            'Google App Script 串接',
            'NPC 邏輯設計與開發',
            '部署與維護',
        ],
        tags: [
            'JavaScript',
            'TypeScript',
            'Vue',
            'Cloudflare',
        ],
        websiteUrl: 'https://logicard-duel.pages.dev/',
        githubUrl: 'https://github.com/gkfat/logicard-duel',
    },
    [EnumProject.Ikea]: {
        title: 'IKEA 活動網頁切版',
        time: '2021',
        subtitle: '前端開發',
        items: [
            '前端 RWD 網頁開發',
        ],
        tags: [
            'HTML',
            'CSS',
            'JavaScript',
        ],
        websiteUrl: 'https://demo-2021-ikea-csr-campaign.pages.dev',
        githubUrl: 'https://github.com/gkfat/2021-ikea-csr-campaign',
    },
    [EnumProject.CNCMes]: {
        title: 'CNC MES 系統',
        time: '2024',
        subtitle: '前端開發',
        items: [
            '帳號＆權限',
            '客戶＆供應商管理',
            '料件管理',
            '報價單＆訂單＆採購單管理',
            'MES 管理',
        ],
        tags: [
            'Vue',
            'Vuex',
            'Vuetify',
            'TypeScript',
            'Vitest',
        ],
        githubUrl: 'https://github.com/gkfat/cnc-mes-frontend',
    },
    [EnumProject.WelcabBackStage]: {
        title: '派車系統',
        time: '2024',
        subtitle: '前端開發',
        items: [
            '個案＆司機管理',
            '主控版卡片式呈現',
            '報價單管理',
        ],
        tags: [
            'Vue',
            'Vuex',
            'Vuetify',
            'TypeScript',
            'Vitest',
        ],
        githubUrl: 'https://github.com/gkfat/welcab-saas-frontend',
    },
    [EnumProject.WelcabLineLiff]: {
        title: '派車系統 Line Liff 服務',
        time: '2024',
        subtitle: '前端開發',
        items: [
            '表單驗證服務',
            '串接 Line Auth 服務',
        ],
        tags: [
            'Vue',
            'Vuex',
            'Vuetify',
            'TypeScript',
            'Vitest',
        ],
        githubUrl: 'https://github.com/gkfat/welcab-line-reservation',
    },
    [EnumProject.DiceRoller]: {
        title: 'Dice Roller',
        time: '2024',
        subtitle: '前端開發',
        items: [
            '3D 骰子切版',
            '擲骰子動畫',
            '彈跳動畫',
        ],
        tags: [
            'Vue',
            'Css',
            'Vuetify',
            'TypeScript',
        ],
        websiteUrl: 'https://dice-roller-cuq.pages.dev/',
        githubUrl: 'https://github.com/gkfat/dice-roller',
    },
    [EnumProject.SimpleTodoList]: {
        title: 'Simple Todo List',
        time: '2024',
        subtitle: '前端開發',
        items: [
            '極簡待辦 app',
        ],
        tags: [
            'Vue',
            'Css',
            'Vuetify',
            'TypeScript',
        ],
        websiteUrl: 'https://simple-todo-list.pages.dev',
        githubUrl: 'https://github.com/gkfat/simple-todo-list',
    },
    [EnumProject.TechBlog]: {
        title: 'Tech blog',
        time: '2024',
        subtitle: '前端開發',
        items: [
            '技術筆記',
        ],
        tags: [
            'VitePress',
        ],
        websiteUrl: 'https://gk-blog.pages.dev',
        githubUrl: 'https://github.com/gkfat/gk-blog',
    },
    [EnumProject.HTGameBackend]: {
        title: '遊戲後端開發',
        time: '2023',
        subtitle: '後端開發',
        items: [
            'API 接口',
        ],
        tags: [
            'Node.js',
            'MongoDB',
            'GKE',
        ],
    },
    [EnumProject.HTGameBackstage]: {
        title: '遊戲專案後台全端開發',
        time: '2023 ~ 2024',
        subtitle: '全端開發',
        items: [
            '帳號權限系統',
            '遊戲、會員管理功能',
            '各式活動設定、道具設定與報表',
            '跑馬燈管理功能',
            '帳務報表',
            'Cronjob',
            '系統維護排程',
            '部署與維護',
        ],
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
    [EnumProject.AsinkEIP]: {
        title: 'Asink EIP',
        time: '2021 ~ 2022',
        subtitle: '全端開發',
        items: [
            '帳號權限系統',
            '部門管理系統',
            '檔案上傳管理',
            'PMC 管理',
            'Cronjob',
            '部署與維護',
        ],
        tags: [
            'Angular',
            'Python',
            'MariaDB',
            'Linux',
            'Apache',
        ],
        websiteUrl: 'https://www.atrustek.com/cis/home',
    },
    [EnumProject.AtrustekWeb]: {
        title: 'Atrustek Fintech Saas',
        time: '2019 ~ 2021',
        subtitle: '前端開發',
        items: [
            '會員系統',
            '多語系重構',
            '論壇系統',
            '股票篩選器',
            '投資組合模擬交易系統',
            '部署與維護',
        ],
        tags: [
            'Angular',
            'NgRx',
            'TypeScript',
            'Linux',
        ],
        websiteUrl: 'https://www.atrustek.com/cis/home',
    },
};