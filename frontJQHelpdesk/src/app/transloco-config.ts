import { TranslocoGlobalConfig } from '@jsverse/transloco-utils';

export enum availableLanguages {
    EN = 'en',
    ES = 'es',
}

export const AvailableLanguages = [
    availableLanguages.EN,
    availableLanguages.ES
];

const config: TranslocoGlobalConfig = {
    langs: AvailableLanguages,
    defaultLang: availableLanguages.ES,
    rootTranslationsPath: 'assets/i18n/',
};

export default config;