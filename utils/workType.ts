import type { WorkType } from '~/types';

// 專案類型對外顯示的標籤，讓訪客清楚區分正式客戶專案、POC 與個人專案
export const WORK_TYPE_LABELS: Record<WorkType, string> = {
    work: 'Client Project',
    poc: 'POC',
    side_project: 'Personal Project',
};

export const getWorkTypeLabel = (type?: WorkType): string | undefined => {
    if (!type) return undefined;

    return WORK_TYPE_LABELS[type];
};
