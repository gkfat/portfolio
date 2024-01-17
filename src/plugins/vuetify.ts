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
                    primary: colors.teal.darken1,
                    secondary: colors.teal.darken4,
                    warning: colors.amber.base,
                },
            },
            dark: {
                dark: true,
                colors: {
                    primary: colors.amber.base,
                    secondary: colors.amber.darken4,
                    warning: colors.teal.base,
                },
            },
        },
    },
});
