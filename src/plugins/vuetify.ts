import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

import { useI18n } from 'vue-i18n';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n';

import { i18n } from './i18n';

export const vuetify = createVuetify({
    components: {
        ...components,
    },
    directives,
    locale: {
        adapter: createVueI18nAdapter({ i18n, useI18n }),
    },
    theme: {
        themes: {
            light: {
                dark: false,
                colors: {
                    primary: '#808873',
                    secondary: '#C6BAAC',
                    warning: '#975557',
                    background: '#FFFBFC',
                },
            },
            dark: {
                dark: true,
                colors: {
                    primary: '#C4CBDB',
                    secondary: '#FCECDF',
                    warning: '#975557',
                    background: '#212020',
                },
            },
        },
    },
});
