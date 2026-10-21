import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Check } from "lucide-react";

import Field from "@/components/shared/form/Field";
import Input from "@/components/shared/form/Input";
import SectionHeader from "@/components/shared/form/SectionHeader";

import type { ReservationFormInput } from "../schema";

const OwnerDetailsSection = () => {
  const { t } = useTranslation("reservation");
  const {
    register,
    formState: { errors },
  } = useFormContext<ReservationFormInput>();

  return (
    <section className="space-y-5">
      <SectionHeader
        number="02"
        title={t("ownerDetails.title")}
        description={t("ownerDetails.description")}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label={t("ownerDetails.fullName")}
          error={errors.fullName?.message}
        >
          <Input
            placeholder={t("ownerDetails.fullNamePlaceholder")}
            {...register("fullName")}
          />
        </Field>

        <Field label={t("ownerDetails.phone")} error={errors.phone?.message}>
          <div className="relative">
            <Input
              disabled
              className="pr-11"
              {...register("phone")}
            />
            <span className="absolute right-3 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full bg-sage/20 text-sage">
              <Check className="h-3.5 w-3.5 text-sage" strokeWidth={3} />
            </span>
          </div>
        </Field>
      </div>
    </section>
  );
};

export default OwnerDetailsSection;
