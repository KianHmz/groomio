import { useTranslation } from "react-i18next";
import ServiceBadges from "@/features/dashboard/components/ServiceBadges";
import type { AppointmentFormOutput } from "@/lib/schema";
import { formatTime } from "@/lib/utils";

type AppointmentItemProps = AppointmentFormOutput & {
  onClick?: () => void;
};

const AppointmentItem = ({
  time,
  fullName,
  name,
  breed,
  service,
  combinedOptions,
  onClick,
}: AppointmentItemProps) => {
  const { t } = useTranslation(["field"]);

  const services =
    service === "clipperCut"
      ? [t("service.clipperCut")]
      : combinedOptions.map((option) => t(`service.combined.${option}`));

  return (
    <div
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
      className="flex items-center gap-8 w-full rounded-2xl bg-white/60 px-4 py-3 cursor-pointer"
    >
      <div className="flex shrink-0 flex-col items-center justify-center rounded-xl bg-cream px-4 py-3 shadow-inner">
        <span className="font-extrabold text-dark-brown w-10 text-center">
          {formatTime(time)}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-0.5 min-w-0">
        <div className="flex items-center gap-1.5 font-bold text-dark-brown text-sm">
          <span className="text-dark-brown">
            {fullName} - {name}
          </span>
        </div>
        <span className="text-sm font-medium text-dark-brown/70">{breed}</span>
      </div>

      <ServiceBadges service={services} />
    </div>
  );
};

export default AppointmentItem;
