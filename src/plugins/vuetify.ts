import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

import { useI18n } from 'vue-i18n';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import colors from 'vuetify/lib/util/colors.mjs';
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n';

import { i18n } from './i18n';

export const vuetify = createVuetify({
    components: { ...components },
    defaults: { VBtn: { class: 'text-none' } },
    directives,
    locale: {
        adapter: createVueI18nAdapter({
            i18n, useI18n, 
        }), 
    },
    theme: {
        themes: {
            light: {
                dark: false,
                colors: {
                    white: colors.shades.white,
                    primary: '#808873',
                    dark: '#41453c',
                    lightgrey: colors.grey.lighten1,
                    secondary: '#C6BAAC',
                    warning: '#975557',
                    background: '#FFFBFC',
                },
            },
            dark: {
                dark: true,
                colors: {
                    white: colors.grey.darken3,
                    primary: '#C4CBDB',
                    dark: '#4f5563',
                    lightgrey: colors.grey.darken1,
                    secondary: '#FCECDF',
                    warning: '#a05d5d',
                    background: '#212020',
                },
            },
        },
    },
});
