import "i18next";
import jaTranslation from "./locales/ja/translation.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: {
      translation: typeof jaTranslation;
    };
  }
}
