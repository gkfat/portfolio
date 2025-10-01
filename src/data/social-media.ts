import { CONFIG } from '@/config/config';

export const SocialMedias: {
    link: string;
    icon: string;
}[] = [
    {
        link: CONFIG.GITHUB_URL,
        icon: 'mdi-github',
    }, {
        link: CONFIG.LINKED_IN_URL,
        icon: 'mdi-linkedin',
    },
];
