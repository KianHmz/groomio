import { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useTranslation } from "react-i18next";
import MainButton from "@/components/shared/form/MainButton";
import type { AppointmentData } from "./DetailModal";

interface ApproveModalProps {
  open: boolean;
  onClose: () => void;
  appointment: AppointmentData | null;
  onConfirm: (date: string, time: string) => void;
}

const ApproveModal = ({
  open,
  onClose,
  appointment,
  onConfirm,
}: ApproveModalProps) => {
  const { t } = useTranslation(["reservation", "common"]);

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    if (open && appointment) {
      setDate(appointment.date);
      setTime(appointment.time);
    }
  }, [open, appointment]);

  const canConfirm = date.trim() !== "" && time.trim() !== "";

  const handleConfirm = () => {
    if (!canConfirm) return;
    onConfirm(date, time);
    onClose();
  };

  return (
    <Dialog
      open={open && !!appointment}
      onOpenChange={(isOpen) => {
        if (!isOpen) onClose();
      }}
    >
      <DialogContent className="flex flex-col gap-4 overflow-hidden p-0 text-dark-brown bg-cream max-w-md!">
        {appointment && (
          <>
            <DialogHeader className="p-5 pb-0">
              <DialogTitle className="text-xl font-bold">
                {t("approveRequest.title")}
              </DialogTitle>
              <p className="text-sm text-dark-brown/70">
                {t("approveRequest.description")}
              </p>
            </DialogHeader>

            <div className="px-5 flex flex-col gap-4">
              <label className="flex flex-col gap-1 text-sm font-medium">
                <span>{t("date")}</span>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="rounded-xl border border-dark-brown/15 bg-white/60 px-3 py-2 text-dark-brown outline-none focus:ring-2 focus:ring-dark-brown/20"
                />
              </label>

              <label className="flex flex-col gap-1 text-sm font-medium">
                <span>{t("time")}</span>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="rounded-xl border border-dark-brown/15 bg-white/60 px-3 py-2 text-dark-brown outline-none focus:ring-2 focus:ring-dark-brown/20"
                />
              </label>
            </div>

            <div className="flex gap-3 m-5 mt-2">
              <MainButton
                className="flex-1"
                onClick={handleConfirm}
                disabled={!canConfirm}
              >
                {t("common:actions.confirm", "Confirm")}
              </MainButton>
              <DialogClose
                nativeButton={false}
                render={
                  <button className="flex-1 bg-transparent hover:bg-transparent hover:text-dark-brown/70 text-dark-brown">
                    {t("common:actions.cancel", "Cancel")}
                  </button>
                }
              />
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ApproveModal;
