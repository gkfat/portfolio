import { IProject } from '@/types/project';

export const FUTURE_INTERSECTION: IProject = {
    meta: {
        title: 'Future Intersection AI Blog',
        description: '串接 OpenAI，每日自動產生文章的部落格。',
        time: '2025',
        techStacks: ['FE'],
        tags: [
            'OpenAI',
            'Github Actions',
            'Vue',
            'Vuetify',
            'TypeScript',
        ],
    },
    content: {
        list: ['OpenAI'],
        imagesUrls: ['/img/project/future-intersection/1.png', '/img/project/future-intersection/2.png'],
    },
    links: {
        websiteUrl: 'https://future-intersection.netlify.app',
        githubUrl: 'https://github.com/gkfat/future-intersection',
    },
};