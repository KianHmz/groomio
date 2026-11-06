import { useTranslation } from "react-i18next";
import RequestItem from "./RequestItem";
import Badge from "./Badge";

interface PendingRequestsProps {}

const PendingRequests = (props: PendingRequestsProps) => {
  const { t } = useTranslation(["adminDashboard", "database"]);

  return (
    <div className="flex flex-col">
      <div className="flex justify-between my-3">
        <h2 className="text-2xl text-dark-brown font-extrabold">
          {t("pendingRequests")}
        </h2>
        <Badge>{t("database:rows", { count: 5 })}</Badge>
      </div>
      <div className="flex flex-col">
        <RequestItem
          fullName="Kak Row"
          petName="Jacky"
          breed="Puddle"
          service={["De-matting", "Brush", "Haircut"]}
        />
        <RequestItem
          fullName="Paul Durov"
          petName="ShoomboolTla"
          breed="Huskey"
          service={["Bath", "Haircut"]}
        />
      </div>
    </div>
  );
};

export default PendingRequests;
