import { useTranslation } from "react-i18next";
import SectionHeader from "@/components/shared/form/SectionHeader";
import Notes from "@/components/shared/appointment/Notes";

interface NotesDetailsProps {}

const NotesDetails = (props: NotesDetailsProps) => {
  const { t } = useTranslation("reservation");

  return (
    <section className="space-y-3">
      <SectionHeader
        number="04"
        title={t("notes.title")}
        description={t("notes.description")}
      />
      
      <Notes />
    </section>
  );
};

export default NotesDetails;
