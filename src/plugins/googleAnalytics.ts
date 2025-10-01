/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
    App, Plugin, 
} from 'vue';
import router from '@/router';
import { CONFIG } from '@/config/config';

function loadScript(src: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.async = true;
        s.src = src;
        s.onload = () => resolve();
        s.onerror = () => reject(new Error(`Failed to load script: ${src}`));
        document.head.appendChild(s);
    });
}

async function initGA() {
    const {
        GA_MEASUREMENT_ID, GA_SCRIPT_SRC, 
    } = CONFIG;

    if (typeof window === 'undefined') return;
    if ((window as any).gtag) return; // already initialized

    // Load gtag.js
    await loadScript(`${GA_SCRIPT_SRC}?id=${GA_MEASUREMENT_ID}`);

    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).gtag = (...args: any[]) => {
        (window as any).dataLayer.push(args);
    };

    (window as any).gtag('js', new Date());
    (window as any).gtag('config', GA_MEASUREMENT_ID);

    // Track SPA navigations
    router.afterEach((to) => {
        (window as any).gtag('config', GA_MEASUREMENT_ID, { page_path: to.fullPath });
    });
}

export const googleAnalyticsPlugin: Plugin = {
    install(_app: App) {
        const { GA_MEASUREMENT_ID } = CONFIG;
    
        // Skip in dev server
        if (import.meta.env.DEV) return;

        // Only initialize in production build
        if (GA_MEASUREMENT_ID) {
            initGA().catch((err) => {
                // Swallow errors to avoid breaking app
                console.warn('[GA] init failed:', err);
            });
        }
    },
};
