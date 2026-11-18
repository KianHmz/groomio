import { useTranslation } from "react-i18next";
import SectionHeader from "@/features/reservation/components/SectionHeader";
import Service from "@/components/shared/appointment/Service";
import CoatCondition from "@/components/shared/appointment/CoatCondition";

interface ServiceDetailsProps {}

const ServiceDetails = (props: ServiceDetailsProps) => {
  const { t } = useTranslation("reservation");

  return (
    <section className="space-y-5">
      <SectionHeader
        number="03"
        title={t("service.title")}
        description={t("service.description")}
      />

      <Service />

      <div className="space-y-3 pt-2">
        <CoatCondition />
      </div>
    </section>
  );
};

export default ServiceDetails;
