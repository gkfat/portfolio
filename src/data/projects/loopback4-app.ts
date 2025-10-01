import { IProject } from '@/types/project';

export const LOOPBACK4_APP: IProject = {
    meta: {
        title: 'Loopback4 TodoList App',
        description: 'TodoList API server build with loopback4',
        time: '2025',
        techStacks: ['BE'],
        tags: [
            'Loopback4',
            'TypeScript',
            'Mysql',
            'Swagger',
        ],
        isSideProject: true,
    },
    content: {
        list: ['API server'],
        imagesUrls: ['/img/project/loopback4-app/1.png'],
    },
    links: { githubUrl: 'https://github.com/gkfat/loopback4-app' },
};