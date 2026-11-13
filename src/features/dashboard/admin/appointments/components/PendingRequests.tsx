import { useTranslation } from "react-i18next";
import RequestItem from "./RequestItem";
import Badge from "./Badge";
import DetailModal, { type AppointmentData } from "./modal/DetailModal";
import { useState } from "react";
import ApproveModal from "./modal/ApproveModal";

interface PendingRequestsProps {}

const MOCK_REQUESTS: AppointmentData[] = [
  {
    date: "",
    time: "",
    name: "Sushi",
    breed: "shitzo",
    age: "4 months",
    gender: "female",
    size: "small",
    weight: 2,
    fullName: "Sami",
    phone: "+989121234567",
    service: "combined",
    combinedOptions: ["haircut", "bath", "deMatting"],
    coatCondition: "medium",
    notes: "Sensitive around ears — slow with clippers.",
  },
  {
    date: "",
    time: "",
    name: "Pooky",
    breed: "Pomer",
    age: "2 years",
    gender: "male",
    size: "medium",
    weight: 6,
    fullName: "Alireza Khoo",
    phone: "+989121234567",
    service: "clipperCut",
    combinedOptions: [],
    coatCondition: "medium",
    notes: "",
  },
  // ...
];

const PendingRequests = (props: PendingRequestsProps) => {
  const { t } = useTranslation(["adminDashboard", "database"]);

  const [detailTarget, setDetailTarget] = useState<AppointmentData | null>(
    null,
  );
  const [approveTarget, setApproveTarget] = useState<AppointmentData | null>(
    null,
  );

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
            onClick={() => setDetailTarget(appo)}
            onApprove={(e) => {
              e.stopPropagation();
              setApproveTarget(appo);
            }}
          />
        ))}
      </div>

      <DetailModal
        open={!!detailTarget}
        onClose={() => setDetailTarget(null)}
        appointment={detailTarget}
        onEdit={() => {
          // e.g. open an EditModal with detailTarget, or reuse ApproveModal
        }}
      />

      <ApproveModal
        open={!!approveTarget}
        onClose={() => setApproveTarget(null)}
        appointment={approveTarget}
        onConfirm={(date, time) => {
          // call your API / mutate the list here
          console.log("approved", approveTarget?.name, date, time);
        }}
      />
    </div>
  );
};

export default PendingRequests;
