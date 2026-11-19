import enCommon from "./locales/en/common.json";
import enField from "./locales/en/field.json";
import enAuth from "./locales/en/auth.json";
import enValidation from "./locales/en/validation.json";
import enDatabase from "./locales/en/database.json";
import enAdminDashboard from "./locales/en/admin-dashboard.json";
import enAdminAppointment from "./locales/en/admin-appointment.json";
import enUserAppointment from "./locales/en/user-appointment.json";

export const defaultNS = "common" as const;

export const resources = {
  en: {
    common: enCommon,
    field: enField,
    auth: enAuth,
    validation: enValidation,
    database: enDatabase,

    adminDashboard: enAdminDashboard,
    adminAppointment: enAdminAppointment,

    userAppointment: enUserAppointment,
  },
  fa: {},
} as const;

export const namespaces = Object.keys(resources.en);
