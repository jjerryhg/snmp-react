import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import ch from './ch.json';
import zh from './zh.json';

const languageResources = {
    en: {translation: en},
    ch: {translation: ch},
    zh: {translation: zh}
}

i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: 'en',
    fallbackLng: 'en',
    resources: languageResources
});

export default i18next;