export type TechStack = string;

// work = 客戶專案；poc = 概念驗證；side_project = 個人專案
export type WorkType = 'work' | 'poc' | 'side_project';

// 首頁 Case Studies 卡片內容；有此欄位的作品才會出現在首頁
export type FeaturedCase = {
  order: number;
  context: string; // 業務情境
  problem: string; // 解決的問題
  outcome: string; // 主要成果或驗證狀態（須可追溯，不得虛構）
  capabilities: string[]; // 核心能力
  mockup: {
    desktop: string;
    mobile?: string;
  };
}

export type Work = {
  slug: string;
  title: string;
  year: string;
  description: string;
  tech: TechStack[];
  url?: string;
  github?: string;
  type?: WorkType;
  order?: number; // 同年度內的排序（小的在前），未設定者排在最後並維持檔名順序
  related_works?: string[]; // Related work slugs
  period?: string; // 專案期間，未設定時以 year 顯示
  industry?: string; // 產業與使用情境
  roles?: string[]; // 個人負責範圍
  images?: string[];
  featured?: FeaturedCase;
}

export type ListItem = {
  title: string;
  subtitle?: string;
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