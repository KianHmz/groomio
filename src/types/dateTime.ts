export type DateInput = Date | number | string | null | undefined;

export type CalendarSystem = "persian" | "gregory";

export type DateFormatStyle = "numeric" | "short" | "medium" | "long" | "full";

export const STYLE_OPTIONS: Record<
  DateFormatStyle,
  Intl.DateTimeFormatOptions
> = {
  numeric: { year: "numeric", month: "2-digit", day: "2-digit" },
  short: { year: "numeric", month: "short", day: "numeric" },
  medium: { year: "numeric", month: "long", day: "numeric" },
  long: {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  },
  full: {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  },
};
