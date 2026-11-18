import { useTranslation } from "react-i18next";
import type { ReservationFormInput } from "@/lib/schema";
import { useFormContext } from "react-hook-form";
import Field from "@/components/shared/form/Field";
import Input from "@/components/shared/form/Input";

interface OwnerPhoneProps {}

const OwnerPhone = (props: OwnerPhoneProps) => {
  const { t } = useTranslation("reservation");
  const {
    register,
    formState: { errors },
  } = useFormContext<ReservationFormInput>();

  return (
    <>
      <Field label={t("ownerDetails.phone")} error={errors.phone?.message}>
        <div className="relative">
          <Input className="pr-11" {...register("phone")} />
        </div>
      </Field>
    </>
  );
};

export default OwnerPhone;
