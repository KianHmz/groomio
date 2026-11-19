import { useTranslation } from "react-i18next";
import type { ReservationFormInput } from "@/lib/schema";
import { useFormContext } from "react-hook-form";
import Field from "@/components/shared/form/Field";
import Input from "@/components/shared/form/Input";

interface PetBreedProps {}

const PetBreed = (props: PetBreedProps) => {
  const { t } = useTranslation(["field"]);
  const {
    register,
    formState: { errors },
  } = useFormContext<ReservationFormInput>();

  return (
    <>
      <Field label={t("petDetails.breed")} error={errors.breed?.message}>
        <Input
          {...register("breed")}
        />
      </Field>
    </>
  );
};

export default PetBreed;
