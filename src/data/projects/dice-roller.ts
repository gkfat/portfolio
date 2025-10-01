import { IProject } from '@/types/project';

export const DICE_ROLLER: IProject = {
    meta: {
        title: 'Dice Roller',
        description: '',
        time: '2024',
        techStacks: ['FE'],
        tags: [
            'Vue',
            'Css',
            'Vuetify',
            'TypeScript',
        ],
    },
    content: {
        list: [
            '3D 骰子切版',
            '擲骰子動畫',
            '彈跳動畫',
        ],
        imagesUrls: ['/img/project/dice-roller/1.png'],
    },
    links: {
        websiteUrl: 'https://dice-roller-cuq.pages.dev/',
        githubUrl: 'https://github.com/gkfat/dice-roller',
    },
};