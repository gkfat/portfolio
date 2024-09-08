import { EnumJobTitle } from '@/enums/job-title';
import { EnumProject } from '@/enums/projects';
import { Types } from '@/types/types';
import { createDate } from '@/utils/time';

export const Careers: Types.Career[] = [
    {
        timeRange: {
            startDate: createDate('2023-03-01'),
            endDate: createDate(),
        },
        company: '向上國際 - 浩天',
        jobTitle: EnumJobTitle.PrincipleEngineer,
        items: [
            '遊戲專案後端開發',
            '遊戲後台專案全端開發',
            '其他部門報表功能開發',
        ],
        projects: [
            EnumProject.HTGameBackend,
            EnumProject.HTGameBackstage,
        ],
    },
    {
        timeRange: {
            startDate: createDate('2019-10-14'),
            endDate: createDate('2022-12-31'),
        },
        company: '艾信科股份有限公司',
        jobTitle: EnumJobTitle.FrontEndDeveloper,
        items: [
            '金融科技網站開發與維護',
            '內部 EIP 整合服務開發與維護',
            '管理專案開發時程',
            '需求訪談、系統分析、開發項目規劃、全端開發',
        ],
        projects: [
            EnumProject.AtrustekWeb,
            EnumProject.AsinkEIP,
        ],
    },
    {
        timeRange: {
            startDate: createDate('2018-04-09'),
            endDate: createDate('2019-05-17'),
        },
        company: '台灣防潮科技 - 收藏家',
        jobTitle: EnumJobTitle.CopyWriting,
        items: [
            '管理公司社群',
            '建立消費者連結，活絡社群',
            '優化官網文章 SEO',
        ],
        projects: [],
    },
    {
        timeRange: {
            startDate: createDate('2015-12-07'),
            endDate: createDate('2017-12-29'),
        },
        company: '橘子磨坊數位創意溝通股份有限公司',
        jobTitle: EnumJobTitle.AccountExecutive,
        items: [
            '整合設計、創意、程式部門與客戶，確保專案順利完成',
            '提案、review、maintain 長期專案',
        ],
        projects: [],
    },
];
