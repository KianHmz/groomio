import type { ReservationFormOutput } from "@/lib/schema";
import { useReservationForm } from "@/hooks/useReservationForm";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Section from "./Section";
import Field from "@/components/shared/form/Field";
import MainButton from "@/components/shared/form/MainButton";
import ServiceBadges from "@/features/dashboard/components/ServiceBadges";
import Date from "@/components/shared/appointment/Date";
import Time from "@/components/shared/appointment/Time";
import { formatDate, formatTime } from "@/lib/utils";
import PetBreed from "@/components/shared/appointment/PetBreed";
import PetBirthDate from "@/components/shared/appointment/PetBirthDate";
import PetGender from "@/components/shared/appointment/PetGender";
import PetSize from "@/components/shared/appointment/PetSize";
import PetWeight from "@/components/shared/appointment/PetWeight";
import OwnerPhone from "@/components/shared/appointment/OwnerPhone";
import Service from "@/components/shared/appointment/Service";
import CoatCondition from "@/components/shared/appointment/CoatCondition";
import Notes from "@/components/shared/appointment/Notes";
import AlertModal from "@/components/shared/common/AlertModal";
import { Button } from "@/components/ui/button";
import Modal from "@/components/shared/common/Modal";

interface DetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  appointment: ReservationFormOutput | null;
  mode?: "viewing" | "approving" | "editing";
  onEdit: () => void;
  onUpdate: () => void;
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
    <Modal
      open={open && !!appointment}
      onOpenChange={onOpenChange}
      title={`${appointment?.fullName} - ${appointment?.name}`}
      body={
        appointment && (
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
                  <PetBirthDate />
                ) : (
                  <Field label={t("petDetails.birthDate")}>
                    {" "}
                    {formatDate(appointment.birthDate)}
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
                  <Field label={t("petDetails.size")}>{appointment.size}</Field>
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
                  <Field label={t("notes.title")}>{appointment.notes}</Field>
                )}
              </Section>
            </form>
          </FormProvider>
        )
      }
      footer={
        <div className="flex gap-3 w-full">
          <MainButton className="flex-1" onClick={onEdit}>
            {isViewing && t("common:actions.edit")}
            {isEditing && t("common:actions.update")}
            {isApproving && t("common:actions.approve")}
          </MainButton>

          <AlertModal
            triggerBtn={
              <Button
                className="flex-1 text-red-600 bg-transparent hover:bg-transparent hover:text-red-600/80"
                onClick={() => {}}
              >
                {t("common:actions.delete")}
              </Button>
            }
            actionBtnTitle={t("common:actions.delete")}
            cancelBtnTitle={t("common:status.cancel")}
            title={`${t("common:actions.delete")} ${appointment?.fullName} - ${appointment?.name}?`}
          />
        </div>
      }
    />
  );
};

export default DetailModal;
