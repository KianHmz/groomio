import { useState } from "react";
import { useTranslation } from "react-i18next";
import Badge from "./Badge";
import DateNavigator from "./DateNavigator";
import AppointmentItem from "./AppointmentItem";
import DetailModal from "./modal/DetailModal";
import type { ReservationFormOutput } from "@/lib/schema";

interface DayAppointmentsProps {}

const MOCK_APPOINTMENTS: ReservationFormOutput[] = [
  {
    date: new Date(2025, 0, 3),       
    time: new Date(2025, 0, 3, 11, 0),
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
    date: new Date(2025, 0, 3),
    time: new Date(2025, 0, 3, 17, 30),
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

const DayAppointments = (props: DayAppointmentsProps) => {
  const { t } = useTranslation(["adminDashboard", "database", "reservation"]);

  const [modal, setModal] = useState<ReservationFormOutput | null>(null);

  const [modalMode, setModalMode] = useState<
    "viewing" | "approving" | "editing"
  >("viewing");

  const handleEdit = () => {
    setModalMode((m) =>
      m === "viewing" ? "editing" : "viewing",
    );
  };

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
            onClick={() => setModal(appo)}
          />
        ))}
      </div>

      <DetailModal
        open={!!modal}
        onOpenChange={(v) => !v && setModal(null)}
        appointment={modal}
        mode={modalMode}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default DayAppointments;
