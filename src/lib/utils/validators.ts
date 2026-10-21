import type { Country } from "@/types";
import { ERRORS } from "@/lib/constants";

export const extractDigits = (value: string): string => {
  return value.replace(/\D/g, "");
};

export const isValidPhone = (phone: string, country: Country): boolean => {
  return country.regex.test(phone);
};

export const phoneToE164 = (phone: string, country: Country): string => {
  if (!isValidPhone(phone, country)) {
    throw new Error(`${ERRORS.INVALID_PHONE}: ${country.regex}`);
  }
  return `${country.code}${phone}`;
};
