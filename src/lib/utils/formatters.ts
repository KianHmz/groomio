export const formatDateTime = (
  date: Date | number | string = new Date(),
  options: {
    calendar?: "persian" | "gregory";
    timeZone?: string;
    withTime?: boolean;
  } = {},
): string => {
  const { calendar, withTime = true, timeZone } = options;

  const d = date instanceof Date ? date : new Date(date);
  if (Number.isNaN(d.getTime())) {
    throw new Error("Invalid date provided to formatDateTime");
  }
  const tz = timeZone ?? Intl.DateTimeFormat().resolvedOptions().timeZone;
  const ca = calendar ?? Intl.DateTimeFormat().resolvedOptions().calendar;

  const locale = "en-US-u-nu-latn";

  const parts = new Intl.DateTimeFormat(locale, {
    timeZone: tz,
    calendar: ca,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    ...(withTime
      ? {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }
      : {}),
  }).formatToParts(d);

  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((p) => p.type === type)?.value ?? "";

  const year = get("year");
  const month = get("month");
  const day = get("day");

  const datePart = `${year}/${month}/${day}`;

  if (!withTime) return datePart;

  let hour = get("hour");
  if (hour === "24") hour = "00";

  const minute = get("minute");

  return `${datePart} - ${hour}:${minute}`;
};
