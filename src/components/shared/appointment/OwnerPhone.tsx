import { useTranslation } from "react-i18next";
import type { AppointmentFormInput } from "@/lib/schema";
import { useFormContext } from "react-hook-form";
import Field from "@/components/shared/form/Field";
import Input from "@/components/shared/form/Input";
import { IRAN } from "@/lib/constants";

interface OwnerPhoneProps {}

const OwnerPhone = (props: OwnerPhoneProps) => {
  const { t } = useTranslation(["field"]);
  const {
    register,
    formState: { errors },
  } = useFormContext<AppointmentFormInput>();

  return (
    <>
      <Field label={t("ownerDetails.phone")} error={errors.phone?.message}>
        <div className="relative">
          <Input
            pattern={`${IRAN.regex}`}
            className="pr-11"
            {...register("phone")}
          />
        </div>
      </Field>
    </>
  );
};

export default OwnerPhone;
