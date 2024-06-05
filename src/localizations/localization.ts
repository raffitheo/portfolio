import Appsettings from '@config/appsettings';
import i18n, { Callback, TFunction } from 'i18next';
import { initReactI18next } from 'react-i18next';

import enUS from './en-us';
import frFR from './fr-fr';
import itIT from './it-it';

const userLanguage: string = navigator.language;
const languageWithoutRegionCode: string = userLanguage
    .toLowerCase()
    .split(/[_-]+/)[0];

let savedLanguage: string | null = localStorage.getItem(
    Appsettings.languageStorageKey,
);

if (!savedLanguage) {
    savedLanguage = languageWithoutRegionCode;
    localStorage.setItem(Appsettings.languageStorageKey, savedLanguage);
}

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: enUS },
        fr: { translation: frFR },
        it: { translation: itIT },
    },
    lng: savedLanguage,
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

const originalChangeLanguage: (
    lng?: string | undefined,
    callback?: Callback | undefined,
) => Promise<TFunction<'translation', undefined>> =
    i18n.changeLanguage.bind(i18n);

i18n.changeLanguage = (
    lng: string,
    callback?: (err: Error | null, t: TFunction) => void,
): Promise<TFunction> => {
    localStorage.setItem(Appsettings.languageStorageKey, lng);
    const changeLanguagePromise = originalChangeLanguage(lng, callback);
    i18n.reloadResources();
    return changeLanguagePromise;
};

export default i18n;
