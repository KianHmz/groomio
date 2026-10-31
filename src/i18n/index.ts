import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources, defaultNS, namespaces } from "@/i18n/config";

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  defaultNS,
  ns: namespaces as unknown as string[],
  interpolation: { escapeValue: false },
});

export default i18n;