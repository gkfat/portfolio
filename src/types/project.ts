export type IProject = {
    title: string;
    description: string;
    time: string;
    techStacks: ('FE' | 'BE')[];
    items: string[];
    tags: string[];
    imagesUrls: string[];
    weight?: number; // bubble weight, default 1
    websiteUrl?: string;
    githubUrl?: string;
}