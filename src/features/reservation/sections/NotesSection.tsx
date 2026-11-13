import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";

import Field from "@/components/shared/form/Field";
import SectionHeader from "@/components/shared/form/SectionHeader";
import TextareaInput from "@/components/shared/form/TextareaInput";

import type { ReservationFormInput } from "../../../lib/schema";

const NotesSection = () => {
  const { t } = useTranslation("reservation");
  const {
    register,
    formState: { errors },
  } = useFormContext<ReservationFormInput>();

  return (
    <section className="space-y-3">
      <SectionHeader
        number="04"
        title={t("notes.title")}
        description={t("notes.description")}
      />

      <Field label="" error={errors.notes?.message}>
        <TextareaInput
          placeholder={t("notes.placeholder")}
          className="min-h-28 resize-none px-4 py-3"
          {...register("notes")}
        />
      </Field>
    </section>
  );
};

export default NotesSection;
