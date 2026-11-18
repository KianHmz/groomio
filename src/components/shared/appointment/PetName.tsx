import { useTranslation } from "react-i18next";
import type { ReservationFormInput } from "@/lib/schema";
import { useFormContext } from "react-hook-form";
import Field from "@/components/shared/form/Field";
import Input from "@/components/shared/form/Input";

interface PetNameProps {}

const PetName = (props: PetNameProps) => {
  const { t } = useTranslation("reservation");
  const {
    register,
    formState: { errors },
  } = useFormContext<ReservationFormInput>();

  return (
    <>
      <Field label={t("petDetails.name")} error={errors.name?.message}>
        <Input
          placeholder={t("petDetails.namePlaceholder")}
          {...register("name")}
        />
      </Field>
    </>
  );
};

export default PetName;
