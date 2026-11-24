import { useTranslation } from "react-i18next";
import RequestItem from "./RequestItem";
import Badge from "./Badge";
import DetailModal from "./modal/DetailModal";
import { useState } from "react";
import type { AppointmentFormOutput } from "@/lib/schema";

interface PendingRequestsProps {}

const MOCK_REQUESTS: AppointmentFormOutput[] = [
  {
    date: undefined,
    time: undefined,
    name: "Sushi",
    breed: "shitzo",
    birthDate: new Date(2013, 0, 5),
    gender: "female",
    size: "small",
    weight: 2,
    fullName: "Sami",
    phone: "9121234567",
    service: "combined",
    combinedOptions: ["haircut", "bath", "deMatting"],
    coatCondition: "medium",
    notes: "Sensitive around ears — slow with clippers.",
  },
  {
    date: undefined,
    time: undefined,
    name: "Pooky",
    breed: "Pomer",
    birthDate: new Date(2013, 0, 5),
    gender: "male",
    size: "medium",
    weight: 6,
    fullName: "Alireza Khoo",
    phone: "9121234567",
    service: "clipperCut",
    combinedOptions: [],
    coatCondition: "medium",
    notes: "",
  },
  // ...
];

const PendingRequests = (props: PendingRequestsProps) => {
  const { t } = useTranslation(["adminDashboard", "database"]);

  const [modal, setModal] = useState<AppointmentFormOutput | null>(null);

  const [modalMode, setModalMode] = useState<
    "viewing" | "approving" | "editing"
  >("approving");

  const handleEdit = () => {
    setModalMode((m) =>
      m === "editing" || m === "approving" ? "viewing" : "editing",
    );
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between my-3">
        <h2 className="text-2xl text-dark-brown font-extrabold">
          {t("pendingRequests")}
        </h2>
        <Badge>{t("database:rows", { count: 5 })}</Badge>
      </div>

      <div className="flex flex-col gap-1">
        {MOCK_REQUESTS.map((appo) => (
          <RequestItem
            key={appo.name}
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
        onUpdate={() => {}}
      />
    </div>
  );
};

export default PendingRequests;
