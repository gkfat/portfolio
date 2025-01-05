import 'vue-easy-lightbox/external-css/vue-easy-lightbox.css';

import type { App } from 'vue';

import VueEasyLightbox from 'vue-easy-lightbox';

import router from '@/router';

import { i18n } from './i18n';
import { pinia } from './pinia';
import { vuetify } from './vuetify';

export const registerPlugins = (app: App) => {
    app
        .use(i18n)
        .use(vuetify)
        .use(VueEasyLightbox)
        .use(pinia)
        .use(router);
};
