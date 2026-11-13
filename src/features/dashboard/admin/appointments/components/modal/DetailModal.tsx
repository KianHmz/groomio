import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { ReservationFormOutput } from "@/lib/schema";
import { useTranslation } from "react-i18next";
import Field from "./Field";
import Section from "./Section";
import MainButton from "@/components/shared/form/MainButton";

export interface AppointmentData extends ReservationFormOutput {
  date: string;
  time: string;
}

interface DetailModalProps {
  open: boolean;
  onClose: () => void;
  appointment: AppointmentData | null;
  onEdit: () => void;
}

const DetailModal = ({
  open,
  onClose,
  appointment,
  onEdit,
}: DetailModalProps) => {
  const { t } = useTranslation(["reservation", "common"]);

  const services = appointment
    ? appointment.service === "clipperCut"
      ? [t("service.clipperCut.title")]
      : appointment.combinedOptions.map((opt) =>
          t(`service.combined.options.${opt}`),
        )
    : [];

  return (
    <Dialog
      open={open && !!appointment}
      onOpenChange={(isOpen) => {
        if (!isOpen) onClose();
      }}
    >
      <DialogContent className="flex flex-col gap-3 overflow-hidden p-1 text-dark-brown bg-cream max-w-lg!">
        {appointment && (
          <>
            <DialogHeader className="p-5">
              <DialogTitle className="text-xl font-bold">
                {appointment.fullName}&nbsp;·&nbsp;{appointment.name}
              </DialogTitle>
            </DialogHeader>

            <div className="overflow-y-auto px-3 flex flex-col gap-3">
              
              {/* Date & Time */}
              <Section>
                <Field label={t("date")} value={appointment.date} />
                <Field label={t("time")} value={appointment.time} />
              </Section>

              {/* Pet & Owner details */}
              <Section>
                <Field
                  label={t("petDetails.breed")}
                  value={appointment.breed}
                />
                <Field label={t("petDetails.age")} value={appointment.age} />
                <Field
                  label={t("petDetails.gender")}
                  value={appointment.gender}
                />
                <Field label={t("petDetails.size")} value={appointment.size} />
                <Field
                  label={t("petDetails.weight")}
                  value={`${appointment.weight} kg`}
                />
                <Field
                  label={t("ownerDetails.phone")}
                  value={appointment.phone}
                />
              </Section>

              {/* Coat condition & Service */}
              <Section>
                <div className="flex flex-col">
                  <Field label="Service" value=" " />
                  <div className="mt-0.5 flex flex-wrap items-center gap-1.5 text-xs font-medium text-dark-brown/90">
                    {services.map((key) => (
                      <span
                        key={key}
                        className="rounded-md bg-tan/15 px-2 py-0.5"
                      >
                        {key}
                      </span>
                    ))}
                  </div>
                </div>
                <Field
                  label="Coat condition"
                  value={appointment.coatCondition}
                />
              </Section>

              {/* Notes */}
              <Section gridColsNum={1}>
                <Field label="Note" value={appointment.notes} />
              </Section>
            </div>

            {/* Footer */}
            <div className="flex gap-3 m-3 mt-5">
              <MainButton className="flex-1" onClick={onEdit}>
                {t("common:actions.edit")}
              </MainButton>
              <DialogClose
                nativeButton={false}
                render={
                  <button className="flex-1 bg-transparent hover:bg-transparent hover:text-dark-brown/70 text-dark-brown">
                    {t("common:actions.close")}
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

export default DetailModal;
