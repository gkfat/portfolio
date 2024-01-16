export namespace Projects {
    export interface Project {
        title: string;
        subtitle: string;
        items: string[];
        techStacks: {
            text: string;
            icon: string;
        }[];
        imagesUrls?: string[];
        linkUrl?: string;
    }
}
