import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from './resources';
const INIT_LANGUAGE = localStorage.getItem('LANGUAGE') || 'en';

i18n.use(initReactI18next).init({
  resources,
  lng: INIT_LANGUAGE,
  fallbackLng: INIT_LANGUAGE,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

i18n.off("languageChanged");

export default i18n;
