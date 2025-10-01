import { IProject } from '@/types/project';

export const TSMC: IProject = {
    meta: {
        title: '台積心築藝術季',
        description: '重新定義台積電藝術文教基金會 2021 策展網站，以該年主視覺設計 UI，讓瀏覽網站的過程與看表演有同等的沉浸式體驗。',
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
        list: [
            '網站視覺與流程設計',
            'Motion vision 製作',
            '部署與維護',
        ],
        imagesUrls: [
            '/img/project/tsmc/1.png',
            '/img/project/tsmc/2.png',
            '/img/project/tsmc/3.png',
            '/img/project/tsmc/4.png',
            '/img/project/tsmc/5.png',
        ],
    },
    links: {
        websiteUrl: 'https://demo-tsmc-art-festival-2021.pages.dev',
        githubUrl: 'https://github.com/gkfat/tsmc-art-festival-2021',
    },
};