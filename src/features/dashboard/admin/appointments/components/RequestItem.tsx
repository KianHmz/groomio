import type { AppointmentData } from "./modal/DetailModal";
import { useTranslation } from "react-i18next";
import ServiceBadges from "@/features/dashboard/components/ServiceBadges";

type RequestItemProps = AppointmentData & {
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
  const { t } = useTranslation(["reservation", "common"]);

  const services =
    service === "clipperCut"
      ? [t("service.clipperCut.title")]
      : combinedOptions.map((opt) => t(`service.combined.options.${opt}`));

  return (
    <div
      onClick={onClick}
      className="flex w-full items-center gap-4 rounded-2xl border-dark-brown/10 px-4 py-3 cursor-pointer"
    >
      <div className="flex min-w-0 flex-1 justify-between gap-1">
        <div className="flex flex-col gap-1.5 text-sm font-bold text-dark-brown">
          <span className="truncate">
            {fullName}&nbsp;·&nbsp;{name}
          </span>
          <span className="text-sm font-medium text-dark-brown/70">
            {breed}
          </span>
        </div>

        <ServiceBadges service={services} />
      </div>

      {/* <button
        onClick={(e) => {
          e.stopPropagation();
          onApprove(e);
        }}
        aria-label={`Approve request for ${name}`}
        className="shrink-0 cursor-pointer rounded-xl bg-sage px-3 py-2 text-xs font-bold text-dark-brown transition-colors hover:bg-sage/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-dark-brown/30 active:scale-[0.98]"
      >
        {t("common:actions.approve")}
      </button> */}
    </div>
  );
};

export default RequestItem;
