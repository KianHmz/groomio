import { useTranslation } from "react-i18next";
import AppointmentItem from "./AppointmentItem";
import Badge from "./Badge";
import DateNavigator from "./DateNavigator";

interface DayAppointmentsProps {}

const DayAppointments = (props: DayAppointmentsProps) => {
  const { t } = useTranslation(["adminDashboard", "database"]);
  return (
    <div className="flex flex-col gap-2">
      <DateNavigator />
      <Badge className="self-end">{t("database:rows", { count: 3 })}</Badge>
      <div className="flex flex-col">
        <AppointmentItem
          time="09:30"
          fullName="John Dow"
          petName="Bella"
          breed="Golden Retriever"
          service={["De-matting", "Brush", "Haircut"]}
        />
        <AppointmentItem
          time="09:30"
          fullName="John Dow"
          petName="Bella"
          breed="Golden Retriever"
          service={["De-matting", "Brush", "Haircut"]}
        />
        <AppointmentItem
          time="09:30"
          fullName="John Dow"
          petName="Bella"
          breed="Golden Retriever"
          service={["De-matting", "Brush", "Haircut"]}
        />
      </div>
    </div>
  );
};

export default DayAppointments;
