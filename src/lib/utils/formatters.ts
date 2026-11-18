import {
  STYLE_OPTIONS,
  type CalendarSystem,
  type DateFormatStyle,
  type DateInput,
} from "@/types/dateTime";
import { APP } from "@/lib/constants";

export interface FormatDateOptions {
  calendar?: CalendarSystem;
  timeZone?: string;
  withTime?: boolean;
  hour12?: boolean;
  style?: DateFormatStyle;
}

const toValidDate = (date: DateInput): Date | null => {
  if (date == null) return null;

  const d = date instanceof Date ? date : new Date(date);

  if (Number.isNaN(d.getTime())) {
    return null;
  }

  return d;
};

const resolveCalendar = (calendar?: CalendarSystem): CalendarSystem =>
  calendar ??
  (Intl.DateTimeFormat().resolvedOptions().calendar === "persian"
    ? "persian"
    : "gregory");

const resolveTimeZone = (timeZone?: string): string =>
  timeZone ?? Intl.DateTimeFormat().resolvedOptions().timeZone;

const buildFormatter = (
  options: FormatDateOptions,
  extra: Intl.DateTimeFormatOptions = {},
): Intl.DateTimeFormat => {
  const {
    calendar,
    timeZone,
    withTime = false,
    hour12 = false,
    style = "medium",
  } = options;

  return new Intl.DateTimeFormat(APP.DEFAULT_LOCALE, {
    calendar: resolveCalendar(calendar),
    timeZone: resolveTimeZone(timeZone),
    ...STYLE_OPTIONS[style],
    ...(withTime ? { hour: "2-digit", minute: "2-digit", hour12 } : {}),
    ...extra,
  });
};

export const formatDate = (
  date: DateInput = new Date(),
  options: FormatDateOptions = {},
): string => {
  const d = toValidDate(date);
  if (!d) return "";

  return buildFormatter(options).format(d);
};

export const formatDateTime = (
  date: DateInput = new Date(),
  options: Omit<FormatDateOptions, "withTime"> & {
    separator?: string;
  } = {},
): string => {
  if (date == null) return "";

  const { separator = " · ", ...rest } = options;

  const dateStr = formatDate(date, rest);
  const timeStr = formatTime(date, rest);

  if (!dateStr || !timeStr) return "";

  return `${dateStr}${separator}${timeStr}`;
};

export const formatTime = (
  date: DateInput = new Date(),
  options: Pick<FormatDateOptions, "calendar" | "timeZone" | "hour12"> = {},
): string => {
  const d = toValidDate(date);
  if (!d) return "";

  return new Intl.DateTimeFormat(APP.DEFAULT_LOCALE, {
    calendar: resolveCalendar(options.calendar),
    timeZone: resolveTimeZone(options.timeZone),
    hour: "2-digit",
    minute: "2-digit",
    hour12: options.hour12 ?? false,
  }).format(d);
};

export const formatRelativeTime = (
  date: DateInput,
  baseDate: DateInput = new Date(),
): string => {
  const target = toValidDate(date);
  const base = toValidDate(baseDate);

  if (!target || !base) return "";

  const diffMs = target.getTime() - base.getTime();
  const diffSec = Math.round(diffMs / 1000);

  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  const thresholds: Array<[Intl.RelativeTimeFormatUnit, number]> = [
    ["year", 60 * 60 * 24 * 365],
    ["month", 60 * 60 * 24 * 30],
    ["day", 60 * 60 * 24],
    ["hour", 60 * 60],
    ["minute", 60],
    ["second", 1],
  ];

  for (const [unit, secondsInUnit] of thresholds) {
    if (Math.abs(diffSec) >= secondsInUnit || unit === "second") {
      return rtf.format(Math.round(diffSec / secondsInUnit), unit);
    }
  }

  return "now";
};
