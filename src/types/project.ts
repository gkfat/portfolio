export type IProject = {
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