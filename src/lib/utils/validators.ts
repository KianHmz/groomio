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

export const isTodayOrFuture = (date: Date): boolean => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const picked = new Date(date);
  picked.setHours(0, 0, 0, 0);

  return picked >= today;
};

export const getMinBirthDate = (): Date => {
  const d = new Date();
  d.setFullYear(d.getFullYear() - 25);
  return d;
};

export const getMaxBirthDate = (): Date => {
  return new Date();
};
