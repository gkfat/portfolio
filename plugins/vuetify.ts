import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import {
    aliases, mdi, 
} from 'vuetify/iconsets/mdi';

export default defineNuxtPlugin({
    name: 'vuetify',
    setup(nuxtApp) {
        // SSR 無 viewport 資訊：依 UA 推估初始寬度，降低 hydration mismatch
        const userAgent = import.meta.server
            ? useRequestHeaders(['user-agent'])['user-agent'] ?? ''
            : '';
        const ssrClientWidth = /Mobi|Android|iPhone|iPad/i.test(userAgent) ? 390 : 1280;

        const vuetify = createVuetify({
            components,
            directives,
        
            // 字體配置
            defaults: { global: { style: 'font-family: "Inter", "Noto Sans TC", sans-serif;' } },
    
            // 主題配置
            theme: {
                defaultTheme: 'dark',
                themes: {
                    // 莫蘭迪配色：低飽和、偏暖灰；token 語意——
                    // primary = 主文字、secondary = 唯一強調色（灰藍）、lightgrey = 次要文字、
                    // dark = 稍亮的底（區塊/chip）、white = 前景色
                    light: {
                        dark: false,
                        colors: {
                            white: '#3B3835',
                            primary: '#3B3835',
                            secondary: '#5F7A8C',
                            dark: '#E2DCD3',
                            lightgrey: '#7A756D',
                            warning: '#A87068',
                            background: '#EDE8E1',
                            surface: '#F6F3EE',
                            success: '#6F8A6C',
                        },
                    },
                    dark: {
                        dark: true,
                        colors: {
                            white: '#E8E2D8',
                            primary: '#E8E2D8',
                            secondary: '#8FA7B8',
                            dark: '#34322E',
                            lightgrey: '#A39E93',
                            warning: '#C4968F',
                            background: '#22211F',
                            surface: '#2B2A27',
                            success: '#9DB39A',
                        },
                    },
                },
            },
    
            // 圖標配置
            icons: {
                defaultSet: 'mdi',
                aliases,
                sets: { mdi },
            },
    
            // 顯示選項
            display: {
                mobileBreakpoint: 'sm',
                thresholds: {
                    xs: 0,
                    sm: 600,
                    md: 960,
                    lg: 1280,
                    xl: 1920,
                },
            },
            // SSR 配置
            ssr: import.meta.server ? { clientWidth: ssrClientWidth } : true,
        });

        nuxtApp.vueApp.use(vuetify);
    },
});