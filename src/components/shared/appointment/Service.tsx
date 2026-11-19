import { useTranslation } from "react-i18next";
import type { ReservationFormInput } from "@/lib/schema";
import { useFormContext, Controller } from "react-hook-form";
import Field from "@/components/shared/form/Field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useEffect } from "react";
import { COMBINED_OPTIONS } from "@/lib/constants";
import { Checkbox } from "@/components/ui/checkbox";

interface ServiceProps {
  clipperCutDescription?: string;
  combinedDescription?: string;
}

const Service = ({
  clipperCutDescription,
  combinedDescription,
}: ServiceProps) => {
  const { t } = useTranslation(["field"]);
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
    <>
      <Field label={t("service.service")} error={errors.service?.message}>
        <Controller
          name="service"
          control={control}
          render={({ field }) => (
            <RadioGroup
              value={field.value ?? ""}
              onValueChange={field.onChange}
              className="grid gap-2 sm:grid-cols-1"
            >
              <label className="group relative flex cursor-pointer items-start gap-3 rounded-2xl bg-white p-4 transition-all">
                <RadioGroupItem
                  value="clipperCut"
                  className="mt-0.5 text-tan"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm font-semibold text-dark-brown">
                      {t("service.clipperCut")}
                    </p>
                  </div>
                  <p className="mt-1 text-xs text-dark-brown/50">
                    {clipperCutDescription}
                  </p>
                </div>
              </label>

              <label className="flex cursor-pointer flex-col gap-3 rounded-2xl bg-white p-4 transition-all">
                <div className="flex items-start gap-3">
                  <RadioGroupItem
                    value="combined"
                    className="mt-0.5 text-tan"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-dark-brown">
                      {t("service.combined.combined")}
                    </p>
                    <p className="mt-1 text-xs text-dark-brown/50">
                      {combinedDescription}
                    </p>
                  </div>
                </div>

                {selectedService === "combined" && (
                  <Controller
                    name="combinedOptions"
                    control={control}
                    render={({ field }) => (
                      <div className="grid gap-2 pt-3 sm:grid-cols-3 ms-3">
                        {COMBINED_OPTIONS.map((option) => {
                          const checked = field.value?.includes(option);
                          return (
                            <label
                              key={option}
                              className="flex cursor-pointer items-center gap-2 rounded-lg text-xs text-dark-brown"
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
                                className=""
                              />
                              {t(`service.combined.${option}`)}
                            </label>
                          );
                        })}
                      </div>
                    )}
                  />
                )}

                {errors.combinedOptions?.message && (
                  <p className="mt-2 text-xs text-red-600">
                    {errors.combinedOptions.message}
                  </p>
                )}
              </label>
            </RadioGroup>
          )}
        />
      </Field>
    </>
  );
};

export default Service;
