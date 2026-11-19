import { useTranslation } from "react-i18next";
import type { ReservationFormInput } from "@/lib/schema";
import { useFormContext } from "react-hook-form";
import Field from "@/components/shared/form/Field";
import Input from "@/components/shared/form/Input";

interface PetWeightProps {}

const PetWeight = (props: PetWeightProps) => {
  const { t } = useTranslation(["field"]);
  const {
    register,
    formState: { errors },
  } = useFormContext<ReservationFormInput>();

  return (
    <>
      <Field label={t("petDetails.weight")} error={errors.weight?.message}>
        <div className="relative">
          <Input
            type="number"
            step="0.1"
            className="pr-12"
            {...register("weight")}
          />
          <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-dark-brown/60">
            {t("petDetails.weightUnit")}
          </span>
        </div>
      </Field>
    </>
  );
};

export default PetWeight;
