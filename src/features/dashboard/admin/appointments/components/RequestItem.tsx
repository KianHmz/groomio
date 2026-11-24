import { useTranslation } from "react-i18next";
import ServiceBadges from "@/features/dashboard/components/ServiceBadges";
import type { AppointmentFormOutput } from "@/lib/schema";

type RequestItemProps = AppointmentFormOutput & {
  onClick?: () => void;
};

const RequestItem = ({
  fullName,
  name,
  breed,
  service,
  combinedOptions,
  onClick,
}: RequestItemProps) => {
  const { t } = useTranslation(["field"]);

  const services =
    service === "clipperCut"
      ? [t("service.clipperCut")]
      : combinedOptions.map((opt) => t(`service.combined.${opt}`));

  return (
    <div
      onClick={onClick}
      className="flex w-full items-center gap-4 rounded-2xl border-dark-brown/10 px-4 py-3 cursor-pointer"
    >
      <div className="flex min-w-0 flex-1 justify-between gap-1">
        <div className="flex flex-col gap-1.5 text-sm font-bold text-dark-brown">
          <span className="truncate">
            {fullName} - {name}
          </span>
          <span className="text-sm font-medium text-dark-brown/70">
            {breed}
          </span>
        </div>

        <ServiceBadges service={services} />
      </div>
    </div>
  );
};

export default RequestItem;
