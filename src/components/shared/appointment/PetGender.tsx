import { useTranslation } from "react-i18next";
import type { ReservationFormInput } from "@/lib/schema";
import { useFormContext, Controller } from "react-hook-form";
import Field from "@/components/shared/form/Field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface PetGenderProps {}

const PetGender = (props: PetGenderProps) => {
  const { t } = useTranslation(["field"]);
  const {
    control,
    formState: { errors },
  } = useFormContext<ReservationFormInput>();

  return (
    <>
      <Field
        label={t("petDetails.gender.gender")}
        error={errors.gender?.message}
      >
        <Controller
          name="gender"
          control={control}
          render={({ field }) => (
            <RadioGroup
              value={field.value ?? ""}
              onValueChange={field.onChange}
              className="flex h-11 items-center gap-5"
            >
              <label className="flex cursor-pointer items-center gap-2 text-sm text-dark-brown">
                <RadioGroupItem
                  value="male"
                  className="border-dark-brown/20 text-tan"
                />
                {t("petDetails.gender.male")}
              </label>

              <label className="flex cursor-pointer items-center gap-2 text-sm text-dark-brown">
                <RadioGroupItem
                  value="female"
                  className="border-dark-brown/20 text-tan"
                />
                {t("petDetails.gender.female")}
              </label>
            </RadioGroup>
          )}
        />
      </Field>
    </>
  );
};

export default PetGender;
