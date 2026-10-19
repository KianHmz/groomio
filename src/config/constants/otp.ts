import { STORAGE } from "./storage";

export const COUNTRIES = [
  { name: "Iran", flag: "🇮🇷", code: "+98" },
] as const;

export type Country = (typeof COUNTRIES)[number];

export const PHONE = {
    MIN_LENGTH: 10,
    MAX_LENGTH: 15,
} as const;

export const OTP = {
  LENGTH: 6,
  MAX_TRIES: 5,
  RESEND_COOLDOWN_SECONDS: 60,
  LOCKOUT_MINUTES: 15,
  STORAGE_KEY: STORAGE.OTP_STATE,
} as const;