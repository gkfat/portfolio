import { EnumSkill } from '@/enums/skill';
import { Types } from '@/types/types';

export const Skills: Types.Skill[] = [
    {
        category: EnumSkill.FrontEnd,
        items: [
            'HTML',
            'CSS',
            'JavaScript',
            'TypeScript',
            'Vue',
            'Angular',
            'SCSS',
            'Vuetify',
            'Bootstrap',
        ],
    },
    {
        category: EnumSkill.BackEnd,
        items: [
            'Node.js',
            'Python',
            'Mysql',
            'MongoDB',
            'Firebase',
            'CloudStorage',
        ],
    },
    {
        category: EnumSkill.DevOps,
        items: [
            'Docker',
            'Linux',
            'GCP GKE',
            'AWS EC2',
            'Cloudflare',
        ],
    },
];
