// 網站基本資訊
export const siteConfig = {
    siteName: 'Gk Wang',
    domain: 'https://portfolio-cbf.pages.dev',
    defaultImage: '/og-image.png',
} as const;

// 聯絡資訊
export const contactInfo = {
    email: 'gkgkdesign@gmail.com',
  
    // 社群媒體
    socialLinks: {
        github: {
            icon: 'mdi-github',
            name: 'GitHub',
            url: 'https://github.com/gkfat',
        },
        linkedin: {
            icon: 'mdi-linkedin',
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/gkgkwang',
        },
    },
} as const;

// 多語系支援
export const localeConfig = {
    defaultLocale: 'zh-TW',
    supportedLocales: ['zh-TW', 'en'],
    localeNames: {
        'zh-TW': '繁體中文',
        'en': 'English',
    },
} as const;

// 內容路径配置
export const contentPaths = {
    works: {
        'zh-TW': '/zh-TW/works',
        'en': '/en/works',
        default: '/works',
    },
} as const;
