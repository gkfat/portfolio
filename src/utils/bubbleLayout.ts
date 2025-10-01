import type { IProject } from '@/types/project';

// 常數定義
export const SIM_STRENGTH = 0.12;
export const SIM_TICKS = 220;

// 型別定義
export type BubbleNodeBase = {
  id: string;
  x: number;
  y: number;
  r: number;
  project: IProject;
};

export type SimNode = BubbleNodeBase & {
  vx: number;
  vy: number;
  targetX: number;
  targetY: number;
};

export type BubbleNode = BubbleNodeBase;

// Hierarchy datum type
export type BubbleDatum = {
  name: string;
  value: number;
  project: IProject;
};

/**
 * Y 座標重映射函數，讓中間密集、上下稀疏
 */
export const remapY = (y: number, canvasHeight: number, amplify = 0.85): number => {
    const centerY = canvasHeight / 2;
    // 將 y 轉為 [-1, 1] 的相對位置
    const t = (y - centerY) / centerY; // -1 ~ 1
    // ease：靠近 0（中心）越密集
    const eased = Math.sign(t) * Math.pow(Math.abs(t), 1.6); // 指數 >1 讓邊界稀疏
    // 重新映射回畫布座標
    return centerY + eased * centerY * amplify;
};

/**
 * 權重計算策略
 */
export const weightStrategies = {
    tags: (p: IProject) => Math.max(1, p.tags?.length || 1),
    weight: (p: IProject) => Math.max(1, p.weight ?? 1),
    equal: () => 1,
} as const;

export type WeightMode = keyof typeof weightStrategies;

/**
 * 計算專案權重值
 */
export const getValue = (project: IProject, mode: WeightMode): number => {
    return weightStrategies[mode](project);
};

/**
 * 取得專案圖片 URL
 */
export const getProjectImageUrl = (project: IProject, toImageUrl: (path?: string) => string, getPlaceholderImage: () => string): string => {
    return toImageUrl(project.imagesUrls?.[0]) || getPlaceholderImage();
};