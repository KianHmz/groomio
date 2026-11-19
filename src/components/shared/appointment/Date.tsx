import type { ReservationFormInput } from "@/lib/schema";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Field from "@/components/shared/form/Field";
import Input from "@/components/shared/form/Input";
import DatePickerModule, { DateObject } from "react-multi-date-picker";
const DatePicker = (DatePickerModule as any).default ?? DatePickerModule;
import "react-multi-date-picker/styles/colors/teal.css";
import { dateObjectSetting } from "@/hooks";
import { useMemo } from "react";

interface DateProps {}

const Date = (props: DateProps) => {
  const { t } = useTranslation("reservation");
  const {
    control,
    formState: { errors },
  } = useFormContext<ReservationFormInput>();

  const now = useMemo(() => new DateObject({ ...dateObjectSetting }), []);

  return (
    <Field label={t("DateTime.date")} error={errors.date?.message}>
      <Controller
        name="date"
        control={control}
        render={({ field }) => (
          <DatePicker
            className="teal"
            minDate={now}
            value={field.value}
            onChange={field.onChange}
            render={
              <Input
                placeholder={t("DateTime.datePlaceholder")}
                value={field.value ? String(field.value) : ""}
                readOnly
              />
            }
            {...dateObjectSetting}
          />
        )}
      />
    </Field>
  );
};

export default Date;
