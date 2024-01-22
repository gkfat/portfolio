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
        linkUrl?: string;
    }

    export interface ChipItem {
        text: string;
        icon: string;
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
