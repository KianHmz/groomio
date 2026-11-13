import { useState } from "react";
import { useTranslation } from "react-i18next";
import Badge from "./Badge";
import DateNavigator from "./DateNavigator";
import AppointmentItem from "./AppointmentItem";
import DetailModal, { type AppointmentData } from "./modal/DetailModal";

const MOCK_APPOINTMENTS: AppointmentData[] = [
  {
    date: "Panjshanbeh, 21 Aban",
    time: "09:30",
    name: "Bella",
    breed: "Golden Retriever",
    age: "3 years",
    gender: "female",
    size: "large",
    weight: 28,
    fullName: "John Dow",
    phone: "+989121234567",
    service: "combined",
    combinedOptions: ["haircut", "bath", "deMatting"],
    coatCondition: "medium",
    notes: "Sensitive around ears — slow with clippers.",
  },
  {
    date: "Panjshanbeh, 21 Aban",
    time: "10:30",
    name: "Pinky",
    breed: "Husky",
    age: "1 month",
    gender: "male",
    size: "large",
    weight: 28,
    fullName: "Showoreoe",
    phone: "+989121234567",
    service: "clipperCut",
    combinedOptions: [],
    coatCondition: "medium",
    notes: "nnnnn.",
  },
];

const DayAppointments = () => {
  const { t } = useTranslation(["adminDashboard", "database", "reservation"]);
  const [detailTarget, setDetailTarget] = useState<AppointmentData | null>(
    null,
  );

  return (
    <div className="flex flex-col gap-2">
      <DateNavigator />
      <Badge className="self-end">
        {t("database:rows", { count: MOCK_APPOINTMENTS.length })}
      </Badge>
      <div className="flex flex-col gap-1">
        {MOCK_APPOINTMENTS.map((appo) => (
          <AppointmentItem
            key={`${appo.date}-${appo.time}-${appo.name}`}
            {...appo}
            onClick={() => setDetailTarget(appo)}
          />
        ))}
      </div>

      <DetailModal
        open={!!detailTarget}
        onClose={() => setDetailTarget(null)}
        appointment={detailTarget}
        onEdit={() => {
          // open an edit modal with detailTarget, or reuse ApproveModal
        }}
      />
    </div>
  );
};

export default DayAppointments;
