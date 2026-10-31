import enCommon from "@/i18n/locales/en/common.json";
import enAuth from "@/i18n/locales/en/auth.json";
import enValidation from "@/i18n/locales/en/validation.json";
import enReservation from "@/i18n/locales/en/reservation.json";
import enAdminDashboard from "@/i18n/locales/en/admin-dashboard.json";
import type { Resource } from "i18next";

export const defaultNS = "common" as const;
export const namespaces = [
  "common",
  "auth",
  "validation",
  "reservation",
  "adminDashboard",
] as const;

export const resources: Resource = {
  en: {
    common: enCommon,
    auth: enAuth,
    validation: enValidation,
    reservation: enReservation,
    adminDashboard: enAdminDashboard,
  },
};