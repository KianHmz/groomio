import type { ReservationFormInput } from "@/lib/schema";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Field from "@/components/shared/form/Field";
import Input from "@/components/shared/form/Input";
import DatePickerModule from "react-multi-date-picker";
const DatePicker = (DatePickerModule as any).default ?? DatePickerModule;
import TimePickerModule from "react-multi-date-picker/plugins/time_picker";
const TimePicker = (TimePickerModule as any).default ?? TimePickerModule;
import "react-multi-date-picker/styles/colors/teal.css";
import { dateObjectSetting } from "@/hooks";

interface TimeProps {}

const Time = (props: TimeProps) => {
  const { t } = useTranslation("reservation");
  const {
    control,
    formState: { errors },
  } = useFormContext<ReservationFormInput>();

  return (
    <Field label={t("DateTime.time")} error={errors.time?.message}>
      <Controller
        name="time"
        control={control}
        render={({ field }) => (
          <DatePicker
            disableDayPicker
            className="teal"
            format="HH:mm"
            plugins={[<TimePicker hideSeconds />]}
            value={field.value}
            onChange={field.onChange}
            render={
              <Input
                placeholder={t("DateTime.timePlaceholder")}
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

export default Time;
