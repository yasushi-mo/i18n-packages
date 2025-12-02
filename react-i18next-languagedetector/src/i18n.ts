import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
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
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
