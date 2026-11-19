import { useTranslation } from "react-i18next";
import type { ReservationFormInput } from "@/lib/schema";
import { useFormContext, Controller } from "react-hook-form";
import Field from "@/components/shared/form/Field";
import Select from "@/components/shared/form/Select";
import {
  Select as BaseSelect,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { SIZES } from "@/lib/constants";

interface PetSizeProps {}

const PetSize = (props: PetSizeProps) => {
  const { t } = useTranslation(["field"]);
  const {
    control,
    formState: { errors },
  } = useFormContext<ReservationFormInput>();

  return (
    <>
      <Field label={t("petDetails.size.size")} error={errors.size?.message}>
        <Controller
          name="size"
          control={control}
          render={({ field }) => (
            <BaseSelect
              value={field.value ?? ""}
              onValueChange={field.onChange}
            >
              <Select>
                <SelectValue placeholder={t("petDetails.size.size")} />
              </Select>

              <SelectContent>
                {SIZES.map((size) => (
                  <SelectItem value={size}>
                    {t(`petDetails.size.${size}`)}
                  </SelectItem>
                ))}
              </SelectContent>
            </BaseSelect>
          )}
        />
      </Field>
    </>
  );
};

export default PetSize;
