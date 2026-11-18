import { useTranslation } from "react-i18next";
import type { ReservationFormInput } from "@/lib/schema";
import { useFormContext } from "react-hook-form";
import Field from "@/components/shared/form/Field";
import Textarea from "@/components/shared/form/Textarea";

interface NotesProps {}

const Notes = (props: NotesProps) => {
  const { t } = useTranslation("reservation");
  const {
    register,
    formState: { errors },
  } = useFormContext<ReservationFormInput>();

  return (
    <>
      <Field label={t("notes.title")} error={errors.notes?.message}>
        <Textarea
          placeholder={t("notes.placeholder")}
          className="p-2 text-sm"
          {...register("notes")}
        />
      </Field>
    </>
  );
};

export default Notes;
