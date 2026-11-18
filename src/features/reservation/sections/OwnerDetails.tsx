import { useTranslation } from "react-i18next";
import SectionHeader from "@/components/shared/form/SectionHeader";
import OwnerFullName from "@/components/shared/appointment/OwnerFullName";
import OwnerPhone from "@/components/shared/appointment/OwnerPhone";

interface OwnerDetailsProps {}

const OwnerDetails = (props: OwnerDetailsProps) => {
  const { t } = useTranslation("reservation");

  return (
    <section className="space-y-5">
      <SectionHeader
        number="02"
        title={t("ownerDetails.title")}
        description={t("ownerDetails.description")}
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <OwnerFullName />
        <OwnerPhone />
      </div>
      
    </section>
  );
};

export default OwnerDetails;
