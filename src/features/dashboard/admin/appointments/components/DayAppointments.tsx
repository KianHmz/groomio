import { useState } from "react";
import { useTranslation } from "react-i18next";
import Badge from "./Badge";
import DateNavigator from "./DateNavigator";
import AppointmentItem from "./AppointmentItem";
import DetailModal from "./modal/DetailModal";
import type { AppointmentFormOutput } from "@/lib/schema";

interface DayAppointmentsProps {}

const MOCK_APPOINTMENTS: (AppointmentFormOutput & { id: string })[] = [
  {
    id: "1",
    date: new Date(2025, 0, 3),
    time: new Date(2025, 0, 3, 11, 0),
    name: "Bella",
    breed: "Golden Retriever",
    birthDate: new Date(2017, 0, 3),
    gender: "female",
    size: "large",
    weight: 28,
    fullName: "John Dow",
    phone: "9121234567",
    service: "combined",
    combinedOptions: ["haircut", "bath", "deMatting"],
    coatCondition: "medium",
    notes: "Sensitive around ears — slow with clippers.",
  },
  {
    id: "2",
    date: new Date(2025, 0, 3),
    time: new Date(2025, 0, 3, 17, 30),
    name: "Pinky",
    breed: "Husky",
    birthDate: new Date(2013, 0, 5),
    gender: "male",
    size: "large",
    weight: 28,
    fullName: "Showoreoe",
    phone: "9121234567",
    service: "clipperCut",
    combinedOptions: [],
    coatCondition: "medium",
    notes: "",
  },
];

const DayAppointments = (props: DayAppointmentsProps) => {
  const { t } = useTranslation(["database"]);

  const [modal, setModal] = useState<
    (AppointmentFormOutput & { id: string }) | null
  >(null);

  const [modalMode, setModalMode] = useState<
    "viewing" | "approving" | "editing"
  >("viewing");

  const handleEdit = () => {
    setModalMode((m) => (m === "viewing" ? "editing" : "viewing"));
  };

  const handleUpdate = () => {
    setModal(null);
    setModalMode("viewing");
  };

  return (
    <div className="flex flex-col gap-2">
      <DateNavigator />
      <Badge className="self-end">
        {t("rows", { count: MOCK_APPOINTMENTS.length })}
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
        onUpdate={handleUpdate}
        onCancel={() => setModalMode("viewing")}
      />
    </div>
  );
};

export default DayAppointments;
