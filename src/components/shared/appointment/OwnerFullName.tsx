import { useTranslation } from "react-i18next";
import type { ReservationFormInput } from "@/lib/schema";
import { useFormContext } from "react-hook-form";
import Field from "@/components/shared/form/Field";
import Input from "@/components/shared/form/Input";

interface OwnerFullNameProps {}

const OwnerFullName = (props: OwnerFullNameProps) => {
  const { t } = useTranslation(["field"]);
  const {
    register,
    formState: { errors },
  } = useFormContext<ReservationFormInput>();

  return (
    <>
      <Field
        label={t("ownerDetails.fullName")}
        error={errors.fullName?.message}
      >
        <Input
          {...register("fullName")}
        />
      </Field>
    </>
  );
};

export default OwnerFullName;
