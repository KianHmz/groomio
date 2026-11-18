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

interface PetSizeProps {}

const PetSize = (props: PetSizeProps) => {
  const { t } = useTranslation("reservation");
  const {
    control,
    formState: { errors },
  } = useFormContext<ReservationFormInput>();

  return (
    <>
      <Field label={t("petDetails.size")} error={errors.size?.message}>
        <Controller
          name="size"
          control={control}
          render={({ field }) => (
            <BaseSelect
              value={field.value ?? ""}
              onValueChange={field.onChange}
            >
              <Select>
                <SelectValue placeholder={t("petDetails.sizePlaceholder")} />
              </Select>

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
            </BaseSelect>
          )}
        />
      </Field>
    </>
  );
};

export default PetSize;
