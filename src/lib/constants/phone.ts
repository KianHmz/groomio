import type { Country } from "@/types";

export const IRAN: Country = {
  name: "Iran",
  code: "+98",
  flag: "🇮🇷",
  iso: "IR",
  regex: /^9\d{9}$/,
} as const;
