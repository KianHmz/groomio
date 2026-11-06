// hooks/useDateObject.ts
import { useState } from "react";
import DateObject from "react-date-object";
import persian from "react-date-object/calendars/persian";
import persian_en from "react-date-object/locales/persian_en";

export const dateObjectSetting = { calendar: persian, locale: persian_en };

export function useDateObject(initial?: Date) {
  const [date, setDate] = useState<DateObject>(
    () => new DateObject({ ...dateObjectSetting, date: initial }),
  );

  return [date, setDate] as const;
}