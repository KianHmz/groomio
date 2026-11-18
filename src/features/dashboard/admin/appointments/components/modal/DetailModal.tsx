import type { ReservationFormOutput } from "@/lib/schema";
import { useReservationForm } from "@/hooks/useReservationForm";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Section from "./Section";
import Field from "@/components/shared/form/Field";
import MainButton from "@/components/shared/form/MainButton";
import ServiceBadges from "@/features/dashboard/components/ServiceBadges";
import Date from "@/components/shared/appointment/Date";
import Time from "@/components/shared/appointment/Time";
import { formatDate, formatTime } from "@/lib/utils";
import PetBreed from "@/components/shared/appointment/PetBreed";
import PetAge from "@/components/shared/appointment/PetAge";
import PetGender from "@/components/shared/appointment/PetGender";
import PetSize from "@/components/shared/appointment/PetSize";
import PetWeight from "@/components/shared/appointment/PetWeight";
import OwnerPhone from "@/components/shared/appointment/OwnerPhone";
import Service from "@/components/shared/appointment/Service";
import CoatCondition from "@/components/shared/appointment/CoatCondition";
import Notes from "@/components/shared/appointment/Notes";

interface DetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  appointment: ReservationFormOutput | null;
  mode?: "viewing" | "approving" | "editing";
  onEdit: () => void;
}

const DetailModal = ({
  open,
  onOpenChange,
  appointment,
  mode = "viewing",
  onEdit,
}: DetailModalProps) => {
  const { t } = useTranslation(["reservation", "common"]);

  const { methods, onSubmit } = useReservationForm();
  const { handleSubmit } = methods;

  const isViewing = mode === "viewing";
  const isEditing = mode === "editing";
  const isApproving = mode === "approving";

  const services = appointment
    ? appointment.service === "clipperCut"
      ? [t("service.clipperCut.title")]
      : appointment.combinedOptions.map((opt) =>
          t(`service.combined.options.${opt}`),
        )
    : [];

  return (
    <Dialog open={open && !!appointment} onOpenChange={onOpenChange}>
      <DialogContent className="flex flex-col gap-3 overflow-hidden p-1 text-dark-brown bg-cream max-w-lg! max-h-[90dvh] sm:max-h-[85dvh]">
        {appointment && (
          <>
            <DialogHeader className="pt-4 ps-4 shrink-0">
              <DialogTitle className="text-xl font-bold">
                {appointment.fullName}&nbsp;·&nbsp;{appointment.name}
              </DialogTitle>
            </DialogHeader>

            <div className="overflow-y-auto px-3 flex flex-col gap-3 min-h-0 flex-1">
              <FormProvider {...methods}>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <Section>
                    {/* Date */}
                    {isEditing || isApproving ? (
                      <Date />
                    ) : (
                      <Field label={t("DateTime.date")}>
                        {formatDate(appointment.date)}
                      </Field>
                    )}

                    {/* Time */}
                    {isEditing || isApproving ? (
                      <Time />
                    ) : (
                      <Field label={t("DateTime.time")}>
                        {formatTime(appointment.time)}
                      </Field>
                    )}
                  </Section>

                  {/* Pet & Owner details */}
                  <Section>
                    {isEditing ? (
                      <PetBreed />
                    ) : (
                      <Field label={t("petDetails.breed")}>
                        {appointment.breed}
                      </Field>
                    )}

                    {isEditing ? (
                      <PetAge />
                    ) : (
                      <Field label={t("petDetails.age")}>
                        {appointment.age}
                      </Field>
                    )}

                    {isEditing ? (
                      <PetGender />
                    ) : (
                      <Field label={t("petDetails.gender")}>
                        {appointment.gender}
                      </Field>
                    )}

                    {isEditing ? (
                      <PetSize />
                    ) : (
                      <Field label={t("petDetails.size")}>
                        {appointment.size}
                      </Field>
                    )}

                    {isEditing ? (
                      <PetWeight />
                    ) : (
                      <Field label={t("petDetails.weight")}>
                        {appointment.weight}
                      </Field>
                    )}

                    {isEditing ? (
                      <OwnerPhone />
                    ) : (
                      <Field label={t("ownerDetails.phone")}>
                        {appointment.phone}
                      </Field>
                    )}
                  </Section>

                  {/* Service & Coat condition */}
                  <Section gridColsNum={1}>
                    {isEditing ? (
                      <Service />
                    ) : (
                      <Field label={t("service.title")}>
                        <ServiceBadges service={services} />
                      </Field>
                    )}
                  </Section>

                  <Section gridColsNum={1}>
                    {isEditing ? (
                      <CoatCondition />
                    ) : (
                      <Field label={t("service.coatCondition.title")}>
                        {appointment.coatCondition}
                      </Field>
                    )}
                  </Section>

                  {/* Notes */}
                  <Section gridColsNum={1}>
                    {isEditing ? (
                      <Notes />
                    ) : (
                      <Field label={t("notes.title")}>
                        {appointment.notes}
                      </Field>
                    )}
                  </Section>
                </form>
              </FormProvider>
            </div>

            {/* Footer */}
            <div className="flex gap-3 m-3 shrink-0">
              <MainButton className="flex-1" onClick={onEdit}>
                {isViewing && t("common:actions.edit")}
                {isEditing && t("common:actions.update")}
                {isApproving && t("common:actions.approve")}
              </MainButton>
              <DialogClose
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
