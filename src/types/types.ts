import { ConfigType } from 'dayjs';

import { EnumJobTitle } from '@/enums/job-title';
import { EnumProficiency } from '@/enums/proficiency';
import { EnumProject } from '@/enums/projects';
import { EnumSkill } from '@/enums/skill';

export namespace Types {
    export interface Service {
        title: string;
        serviceItems: string[];
        additionals: string[];
    }

    export interface Project {
        title: string;
        description: string;
        time: string;
        techStacks: ('FE' | 'BE')[];
        items: string[];
        tags: string[];
        imagesUrls: string[];
        websiteUrl?: string;
        githubUrl?: string;
    }

    export interface Skill {
        category: EnumSkill;
        items: string[];
    }

    export interface Proficiency {
        category: EnumProficiency;
        items: string[];
    }

    export interface Career {
        timeRange: {
            startDate: ConfigType;
            endDate: ConfigType;
        };
        company: string;
        jobTitle: EnumJobTitle;
        items: string[];
        projects: EnumProject[];
    }
}
