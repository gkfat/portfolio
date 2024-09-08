import { EnumProficiency } from '@/enums/proficiency';
import { Types } from '@/types/types';

export const Proficiencys: Types.Proficiency[] = [
    {
        category: EnumProficiency.SystemAnalysis,
        items: [
            '編寫清楚的系統分析文件',
            '滾動重構程式碼，提升擴充性',
            '流程整理與優化（協作／備份／版更）',
            '需求分析成開發任務，節省 PM＆RD 溝通障礙',
            '基於 OOP＆UML，設計可複用架構',
        ],
    },
    {
        category: EnumProficiency.FullStackDevelopment,
        items: [
            '無論有無設計稿，都能交付美感一流的切版',
            'API 串接與資料呈現',
            'DB／API server／前端切版與串接，一手包辦',
            '清楚明瞭的 API 說明文件',
            '繁瑣人工作業，就該用自動化工具取代',
            '釐清流程，去除重複操作',
        ],
    },
    {
        category: EnumProficiency.CopyWriting,
        items: [
            '基於文案寫作經驗，文件可大幅提升協作效率',
            '聽說讀寫溝通無礙的英文能力',
        ],
    },
];
