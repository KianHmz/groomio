import "i18next";
import common from "@/i18n/locales/en/common.json";
import auth from "@/i18n/locales/en/auth.json";
import validation from "@/i18n/locales/en/validation.json";
import reservation from "@/i18n/locales/en/reservation.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: {
      common: typeof common;
      auth: typeof auth;
      validation: typeof validation;
      reservation: typeof reservation;
    };
  }
}