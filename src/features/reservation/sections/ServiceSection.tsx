import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

import SectionHeader from "@/components/forms/SectionHeader";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import type { ReservationFormInput } from "../schema";
import { useEffect } from "react";

const ServiceSection = () => {
  const { t } = useTranslation("reservation");
  const {
    control,
    watch,
    trigger,
    formState: { errors },
  } = useFormContext<ReservationFormInput>();

  const selectedService = watch("service");

  useEffect(() => {
    void trigger("combinedOptions");
  }, [selectedService, trigger]);

  return (
    <section className="space-y-5">
      <SectionHeader
        number="03"
        title={t("service.title")}
        description={t("service.description")}
      />

      <Controller
        name="service"
        control={control}
        render={({ field }) => (
          <RadioGroup
            value={field.value ?? ""}
            onValueChange={field.onChange}
            className="grid gap-3"
          >
            <label className="group relative flex cursor-pointer items-start gap-3 rounded-2xl border border-dark-brown/10 bg-white p-4 transition-all hover:border-tan/40 hover:bg-tan/2.5 has-checked:border-tan has-checked:bg-tan/6">
              <RadioGroupItem
                value="haircutOnly"
                className="mt-0.5 border-dark-brown/20 text-tan"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-semibold text-dark-brown">
                    {t("service.haircutOnly.title")}
                  </p>
                </div>
                <p className="mt-1 text-xs leading-relaxed text-red-800/50">
                  {t("service.haircutOnly.note")}
                </p>
              </div>
            </label>

            <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-dark-brown/10 bg-white p-4 transition-all hover:border-tan/40 hover:bg-tan/2.5 has-checked:border-tan has-checked:bg-tan/6">
              <RadioGroupItem
                value="combined"
                className="mt-0.5 border-dark-brown/20 text-tan"
              />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-dark-brown">
                  {t("service.combined.title")}
                </p>
                <p className="mt-1 text-xs text-dark-brown/50">
                  {t("service.combined.description")}
                </p>

                {selectedService === "combined" && (
                  <Controller
                    name="combinedOptions"
                    control={control}
                    render={({ field }) => (
                      <div className="mt-4 grid gap-2 sm:grid-cols-3">
                        {(["haircut", "bath", "deMatting"] as const).map(
                          (option) => {
                            const checked = field.value?.includes(option);
                            return (
                              <label
                                key={option}
                                className="flex cursor-pointer items-center gap-2 rounded-lg bg-cream/60 px-3 py-2 text-xs text-dark-brown"
                              >
                                <Checkbox
                                  checked={checked}
                                  onCheckedChange={(isChecked) => {
                                    const next = isChecked
                                      ? [...(field.value ?? []), option]
                                      : (field.value ?? []).filter(
                                          (v) => v !== option,
                                        );
                                    field.onChange(next);
                                  }}
                                  className="border-dark-brown/15 data-[state=checked]:border-tan data-[state=checked]:bg-tan"
                                />
                                {t(`service.combined.options.${option}`)}
                              </label>
                            );
                          },
                        )}
                      </div>
                    )}
                  />
                )}

                {errors.combinedOptions?.message && (
                  <p className="mt-2 text-xs text-red-600">
                    {errors.combinedOptions.message}
                  </p>
                )}
              </div>
            </label>
          </RadioGroup>
        )}
      />

      {errors.service?.message && (
        <p className="text-xs text-red-600">{errors.service.message}</p>
      )}

      <div className="space-y-3 pt-2">
        <Label className="text-sm font-medium text-dark-brown">
          {t("service.coatCondition.label")}
        </Label>

        <Controller
          name="coatCondition"
          control={control}
          render={({ field }) => (
            <RadioGroup
              value={field.value ?? ""}
              onValueChange={field.onChange}
              className="grid gap-2 sm:grid-cols-2"
            >
              {(["none", "medium", "heavy", "felted"] as const).map(
                (condition) => (
                  <label
                    key={condition}
                    className="flex cursor-pointer items-center gap-2 rounded-xl border border-transparent px-3 py-2.5 text-sm text-dark-brown transition-colors hover:bg-cream/70 has-checked:border-sage/30 has-checked:bg-sage/10"
                  >
                    <RadioGroupItem
                      value={condition}
                      className="border-dark-brown/20 text-sage"
                    />
                    {t(`service.coatCondition.${condition}`)}
                  </label>
                ),
              )}
            </RadioGroup>
          )}
        />

        {errors.coatCondition?.message && (
          <p className="text-xs text-red-600">{errors.coatCondition.message}</p>
        )}
      </div>
    </section>
  );
};

export default ServiceSection;
