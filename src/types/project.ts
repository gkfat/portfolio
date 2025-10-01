export type IProject = {
    meta: {
        title: string;
        description: string;
        time: string;
        techStacks: ('FE' | 'BE')[];
        /** bubble weight, default 1 */
        weight?: number;
        tags: string[];
        isSideProject: boolean;
    };

    content: {
        /** 原 items */
        list: string[];
        imagesUrls: string[];
    }

    links: {
        websiteUrl?: string;
        githubUrl?: string;
    }
}