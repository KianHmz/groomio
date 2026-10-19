import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

import Field from "@/components/forms/Field";
import Input from "@/components/forms/Input";
import SectionHeader from "@/components/forms/SectionHeader";
import SelectInput from "@/components/forms/SelectInput";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

import type { ReservationFormInput } from "../schema";

const PetDetailsSection = () => {
  const { t } = useTranslation("reservation");
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<ReservationFormInput>();

  return (
    <section className="space-y-5">
      <SectionHeader
        number="01"
        title={t("petDetails.title")}
        description={t("petDetails.description")}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t("petDetails.name")} error={errors.name?.message}>
          <Input
            placeholder={t("petDetails.namePlaceholder")}
            {...register("name")}
          />
        </Field>

        <Field label={t("petDetails.breed")} error={errors.breed?.message}>
          <Input
            placeholder={t("petDetails.breedPlaceholder")}
            {...register("breed")}
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          label={t("petDetails.age")}
          hint={t("petDetails.ageHint")}
          error={errors.age?.message}
        >
          <Input
            placeholder={t("petDetails.agePlaceholder")}
            {...register("age")}
          />
        </Field>

        <Field label={t("petDetails.gender")} error={errors.gender?.message}>
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
                  {t("petDetails.male")}
                </label>

                <label className="flex cursor-pointer items-center gap-2 text-sm text-dark-brown">
                  <RadioGroupItem
                    value="female"
                    className="border-dark-brown/20 text-tan"
                  />
                  {t("petDetails.female")}
                </label>
              </RadioGroup>
            )}
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={t("petDetails.size")} error={errors.size?.message}>
          <Controller
            name="size"
            control={control}
            render={({ field }) => (
              <Select value={field.value ?? ""} onValueChange={field.onChange}>
                <SelectInput>
                  <SelectValue placeholder={t("petDetails.sizePlaceholder")} />
                </SelectInput>

                <SelectContent>
                  <SelectItem value="small">
                    {t("petDetails.sizes.small")}
                  </SelectItem>
                  <SelectItem value="medium">
                    {t("petDetails.sizes.medium")}
                  </SelectItem>
                  <SelectItem value="large">
                    {t("petDetails.sizes.large")}
                  </SelectItem>
                </SelectContent>
              </Select>
            )}
          />
        </Field>

        <Field label={t("petDetails.weight")} error={errors.weight?.message}>
          <div className="relative">
            <Input
              type="number"
              step="0.1"
              placeholder={t("petDetails.weightPlaceholder")}
              className="pr-12"
              {...register("weight")}
            />
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-dark-brown/60">
              {t("petDetails.weightUnit")}
            </span>
          </div>
        </Field>
      </div>
    </section>
  );
};

export default PetDetailsSection;
