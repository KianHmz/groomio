import { useTranslation } from "react-i18next";
import type { ReservationFormInput } from "@/lib/schema";
import { useFormContext } from "react-hook-form";
import Field from "@/components/shared/form/Field";
import Input from "@/components/shared/form/Input";

interface PetAgeProps {}

const PetAge = (props: PetAgeProps) => {
  const { t } = useTranslation("reservation");
  const {
    register,
    formState: { errors },
  } = useFormContext<ReservationFormInput>();

  return (
    <>
      <Field
        label={t("petDetails.age")}
        error={errors.age?.message}
      >
        <Input
          placeholder={t("petDetails.agePlaceholder")}
          {...register("age")}
        />
      </Field>
    </>
  );
};

export default PetAge;
