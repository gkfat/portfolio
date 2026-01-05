/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseSeo } from '~/seo/base';
import { seoI18n } from '~/seo/i18n';
import { pageSeoMap } from '~/seo/pages';

interface SeoOptions {
  key?: string;
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  contentData?: any; // 從 markdown 或其他來源取得的內容資料
}

export function useSeo(options: SeoOptions = {}) {
    const route = useRoute();
    const locale = useState('locale', () => 'zh-TW');

    // 獲取 SEO key，支援動態路由
    const getSeoKey = (): string => {
        if (options.key) return options.key;
        
        // 靜態頁面路由對應
        const staticKey = pageSeoMap[route.path as keyof typeof pageSeoMap];
        if (staticKey) return staticKey;
        
        // 動態路由處理
        if (route.path.startsWith('/works/') && route.path !== '/works') {
            return 'work'; // 單一作品頁面
        }
        
        // 默認回 home
        return 'home';
    };

    const seoKey = getSeoKey();
    const dict = seoI18n[locale.value]?.[seoKey];

    // 支援模板字串替換的函數
    const replacePlaceholders = (template: string, data: any): string => {
        if (!data) return template;
        
        return template.replace(/\{(\w+)\}/g, (match, key) => {
            if (key === 'tech' && Array.isArray(data.tech)) {
                return data.tech.join(', ');
            }
            return data[key] || match;
        });
    };

    // 從內容資料或自訂選項中取得 SEO 資訊
    const getSeoData = () => {
        const contentData = options.contentData;
        
        // 如果有內容資料且包含 SEO 設定，優先使用
        if (contentData?.seo) {
            return {
                title: contentData.seo.title || contentData.title,
                description: contentData.seo.description || contentData.description,
                keywords: contentData.seo.keywords || (Array.isArray(contentData.tech) ? contentData.tech.join(', ') : ''),
                image: contentData.image || contentData.images?.[0],
            };
        }

        // 使用字典模板並替換佔位符
        if (dict) {
            return {
                title: replacePlaceholders(dict.title, contentData),
                description: replacePlaceholders(dict.description, contentData),
                keywords: replacePlaceholders(dict.keywords || '', contentData),
                image: contentData?.images?.[0],
            };
        }

        return null;
    };

    const seoData = getSeoData();
    
    // 最終的 SEO 內容
    const title = options.title ?? seoData?.title ?? baseSeo.siteName;
    const description = options.description ?? seoData?.description ?? '';
    const keywords = options.keywords ?? seoData?.keywords ?? '';
    const image = options.image ?? seoData?.image ?? baseSeo.defaultImage;
    
    // 確保圖片 URL 是完整的
    const fullImageUrl = image?.startsWith('http') ? image : `${baseSeo.domain}${image}`;

    useHead({
        title,
        meta: [
            // 基本 SEO
            {
                name: 'description', content: description, 
            },
            {
                name: 'keywords', content: keywords, 
            },
            
            // Open Graph
            {
                property: 'og:title', content: title, 
            },
            {
                property: 'og:description', content: description, 
            },
            {
                property: 'og:image', content: fullImageUrl, 
            },
            {
                property: 'og:url', content: `${baseSeo.domain}${route.path}`, 
            },
            {
                property: 'og:type', content: 'website', 
            },
            {
                property: 'og:site_name', content: baseSeo.siteName, 
            },
            
            // Twitter Card
            {
                name: 'twitter:card', content: 'summary_large_image', 
            },
            {
                name: 'twitter:title', content: title, 
            },
            {
                name: 'twitter:description', content: description, 
            },
            {
                name: 'twitter:image', content: fullImageUrl, 
            },
            
            // 額外 meta
            {
                name: 'author', content: baseSeo.siteName, 
            },
            {
                name: 'robots', content: 'index, follow', 
            },
        ],
        link: [
            {
                rel: 'canonical', href: `${baseSeo.domain}${route.path}`, 
            },
        ],
    });

    // 返回最終的 SEO 資料，方便調試
    return {
        title,
        description,
        keywords,
        image: fullImageUrl,
        seoKey,
        locale: locale.value,
    };
}
