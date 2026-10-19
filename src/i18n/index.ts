import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enCommon from "@/i18n/locales/en/common.json";
import enAuth from "@/i18n/locales/en/auth.json";
import enValidation from "@/i18n/locales/en/validation.json";
import enReservation from "@/i18n/locales/en/reservation.json";

export const defaultNS = "common" as const;

export const resources = {
  en: {
    common: enCommon,
    auth: enAuth,
    validation: enValidation,
    reservation: enReservation,
  },
  // fa: { ... }
} as const;

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  defaultNS,
  ns: ["common", "auth", "validation", "reservation"],
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
