import type { Country } from "@/types";

export const COUNTRY_CODE_REGEX = /^\+\d{1,4}$/;

export const COUNTRIES: Country[] = [
  {
    name: "Iran",
    code: "+98",
    flag: "🇮🇷",
    iso: "IR",
    regex: /^9\d{9}$/,
  },
  {
    name: "United States",
    code: "+1",
    flag: "🇺🇸",
    iso: "US",
    regex: /^[2-9]\d{2}[2-9]\d{6}$/,
  },
] as const;
