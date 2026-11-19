import type { ReservationFormInput } from "@/lib/schema";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Field from "@/components/shared/form/Field";
import Input from "@/components/shared/form/Input";
import DatePickerModule, { DateObject } from "react-multi-date-picker";
const DatePicker = (DatePickerModule as any).default ?? DatePickerModule;
import "react-multi-date-picker/styles/colors/teal.css";
import { dateObjectSetting } from "@/hooks";
import { getMaxBirthDate, getMinBirthDate } from "@/lib/utils";
import { useMemo } from "react";

interface PetBirthDateProps {}

const PetBirthDate = (props: PetBirthDateProps) => {
  const { t } = useTranslation(["field"]);
  const {
    control,
    formState: { errors },
  } = useFormContext<ReservationFormInput>();

  const minDate = useMemo(
    () => new DateObject({ ...dateObjectSetting, date: getMinBirthDate() }),
    [],
  );

  const maxDate = useMemo(
    () => new DateObject({ ...dateObjectSetting, date: getMaxBirthDate() }),
    [],
  );

  return (
    <Field label={t("petDetails.birthDate")} error={errors.birthDate?.message}>
      <Controller
        name="birthDate"
        control={control}
        render={({ field }) => (
          <DatePicker
            containerClassName="w-full"
            className="teal"
            minDate={minDate}
            maxDate={maxDate}
            value={field.value}
            onChange={field.onChange}
            render={
              <Input value={field.value ? String(field.value) : ""} readOnly />
            }
            {...dateObjectSetting}
          />
        )}
      />
    </Field>
  );
};

export default PetBirthDate;
