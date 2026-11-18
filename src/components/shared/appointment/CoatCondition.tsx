import { useTranslation } from "react-i18next";
import type { ReservationFormInput } from "@/lib/schema";
import { useFormContext, Controller } from "react-hook-form";
import Field from "@/components/shared/form/Field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface CoatConditionProps {}

const CoatCondition = (props: CoatConditionProps) => {
  const { t } = useTranslation("reservation");
  const {
    control,
    formState: { errors },
  } = useFormContext<ReservationFormInput>();

  return (
    <>
      <Field label={t("service.coatCondition.title")} error={errors.coatCondition?.message}>
        <Controller
          name="coatCondition"
          control={control}
          render={({ field }) => (
            <RadioGroup
              value={field.value ?? ""}
              onValueChange={field.onChange}
              className="grid gap-1 sm:grid-cols-2"
            >
              {(["none", "medium", "heavy", "felted"] as const).map(
                (condition) => (
                  <label
                    key={condition}
                    className="flex cursor-pointer items-center gap-2 rounded-xl border border-transparent px-3 py-2.5 text-sm text-dark-brown transition-colors"
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
      </Field>
    </>
  );
};

export default CoatCondition;
