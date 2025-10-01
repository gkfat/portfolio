import { IProject } from '@/types/project';

export const LOGICARD_DUEL: IProject = {
    meta: {
        title: 'Logicard Duel',
        description: '從單純的撲克比大小邏輯延伸發展出的卡牌對戰遊戲，代入 RPG 元素，讓玩家以擊敗敵人，獲得戰利品及經驗值為角色升級為動力，引發遊玩興趣。',
        time: '2023',
        techStacks: ['FE'],
        weight: 1.5,
        tags: [
            'JavaScript',
            'TypeScript',
            'Vue',
            'Cloudflare',
            'Worker',
            'Hono',
            'Cloudstorage',
        ],
        isSideProject: true,
    },
    content: {
        list: [
            '遊戲流程邏輯設計與開發',
            '前端視覺設計與開發',
            'NPC 邏輯設計與開發',
            '部署與維護',
        ],
        imagesUrls: [
            '/img/project/logicard-duel/1.png',
            '/img/project/logicard-duel/2.png',
            '/img/project/logicard-duel/3.png',
            '/img/project/logicard-duel/4.png',
            '/img/project/logicard-duel/5.png',
            '/img/project/logicard-duel/6.png',
            '/img/project/logicard-duel/7.png',
            '/img/project/logicard-duel/8.png',
            '/img/project/logicard-duel/9.png',
        ],
    },
    links: {
        websiteUrl: 'https://logicard-duel.pages.dev',
        githubUrl: 'https://github.com/gkfat/logicard-duel',
    },
};