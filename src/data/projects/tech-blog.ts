import { IProject } from '@/types/project';

export const TECH_BLOG: IProject = {
    meta: {
        title: 'Tech blog',
        description: '技術筆記部落格。',
        time: '2024',
        techStacks: ['FE'],
        tags: ['VitePress'],
        isSideProject: true,
    },
    content: {
        list: ['技術筆記。'],
        imagesUrls: ['/img/project/tech-blog/1.png'],
    },
    links: {
        websiteUrl: 'https://gk-blog.pages.dev',
        githubUrl: 'https://github.com/gkfat/gk-blog',
    },
};