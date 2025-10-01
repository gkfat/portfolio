import { IProject } from '@/types/project';

export const AI_WRITER: IProject = {
    meta: {
        title: 'AI Writer - AI 作家',
        description: '串接 OpenAI，每日自動產生短小說。',
        time: '2025',
        techStacks: ['FE'],
        tags: [
            'OpenAI',
            'Github Actions',
            'Vue',
            'Vuetify',
            'TypeScript',
        ],
        isSideProject: true,
    },
    content: {
        list: ['OpenAI'],
        imagesUrls: ['/img/project/ai-writer/1.png', '/img/project/ai-writer/2.png'],
    },
    links: {
        websiteUrl: 'https://ai-writer-1lf.pages.dev',
        githubUrl: 'https://github.com/gkfat/ai-writer',
    },
};