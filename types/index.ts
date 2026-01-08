export type TechStack = string;

export type WorkType = 'work' | 'side_project';

export type Work = {
  slug: string;
  title: string;
  year: string;
  description: string;
  tech: TechStack[];
  url?: string;
  github?: string;
  type?: WorkType;
  related_works?: string[]; // Related work slugs
}

export type ListItem = {
  title: string;
  content?: string;
  link?: string;
}

// Experience type for Nuxt Content
export type Experience = {
    id: number;
    company: string;
    jobTitle: string;
    timeRange: string;
    order: number;
}

export type SeoMeta = {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
}

export type NavigationItem = {
  name: string
  anchor: string
}