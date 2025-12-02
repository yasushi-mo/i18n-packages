import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    ja: {
      translation: {
        welcome: "ようこそ",
        greeting: "こんにちは、{{name}}さん",
      },
    },
    en: {
      translation: {
        welcome: "Welcome",
        greeting: "Hello, {{name}}",
      },
    },
  },
  lng: "ja",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
