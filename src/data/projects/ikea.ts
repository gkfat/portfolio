import { IProject } from '@/types/project';

export const IKEA: IProject = {
    meta: {
        title: 'IKEA 活動網頁切版',
        description: '純前端 RWD 網頁開發。',
        time: '2021',
        techStacks: ['FE'],
        tags: [
            'HTML',
            'CSS',
            'JavaScript',
        ],
        isSideProject: false,
    },
    content: {
        list: ['前端 RWD 網頁開發'],
        imagesUrls: [
            '/img/project/ikea/1.png',
            '/img/project/ikea/2.png',
            '/img/project/ikea/3.png',
            '/img/project/ikea/4.png',
            '/img/project/ikea/5.png',
        ],
    },
    links: {
        websiteUrl: 'https://demo-2021-ikea-csr-campaign.pages.dev',
        githubUrl: 'https://github.com/gkfat/2021-ikea-csr-campaign',
    },
};