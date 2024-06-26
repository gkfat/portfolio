export namespace Types {

    export interface Project {
        title: string;
        time: string;
        subtitle: string;
        items: string[];
        techStacks: {
            text: string;
            icon: string;
        }[];
        imagesUrls?: string[];
        websiteUrl?: string;
        githubUrl?: string;
    }

    export interface ChipItem {
        text: string;
        icon: string;
        size?: string;
        color?: string;
        variant?: string;
    }

    export interface Skill {
        title: string;
        items: ChipItem[];
    }

    export interface Proficiency {
        title: string;
        icon: string;
        items: string[];
    }
}
