import { IProject } from '@/types/project';

export const ASINK_EIP: IProject = {
    meta: {
        title: 'Asink EIP',
        description: '公司內部入口網站，串連工廠 ERP 系統，快速掌握工單進度狀況及產線人力分配。',
        time: '2021~2022',
        techStacks: ['FE','BE'],
        tags: [
            'Angular',
            'Python',
            'MariaDB',
            'Linux',
            'Apache',
        ],
    },
    content: {
        list: [
            '帳號權限系統',
            '部門管理系統',
            '檔案上傳管理',
            'PMC 管理',
            'Cronjob',
            '部署與維護',
        ],
        imagesUrls: [],
    },
    links: { websiteUrl: 'https://www.atrustek.com/cis/home' },
};