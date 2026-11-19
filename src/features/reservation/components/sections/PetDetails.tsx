import { useTranslation } from "react-i18next";
import SectionHeader from "@/features/reservation/components/SectionHeader";
import PetName from "@/components/shared/appointment/PetName";
import PetBreed from "@/components/shared/appointment/PetBreed";
import PetAge from "@/components/shared/appointment/PetBirthDate";
import PetGender from "@/components/shared/appointment/PetGender";
import PetSize from "@/components/shared/appointment/PetSize";
import PetWeight from "@/components/shared/appointment/PetWeight";

interface PetDetailsProps {}

const PetDetails = (props: PetDetailsProps) => {
  const { t } = useTranslation("reservation");

  return (
    <section className="space-y-5">
      <SectionHeader
        number="01"
        title={t("petDetails.title")}
        description={t("petDetails.description")}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <PetName />
        <PetBreed />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <PetAge />
        <PetGender />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <PetSize />
        <PetWeight />
      </div>
    </section>
  );
};

export default PetDetails;
