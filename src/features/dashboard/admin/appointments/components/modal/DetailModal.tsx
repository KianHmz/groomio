import { useEffect } from "react";
import type { AppointmentFormOutput } from "@/lib/schema";
import { toAppointmentFormInput } from "@/lib/mappers/appointment";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";
import { useAppointmentForm } from "@/hooks/useAppointmentForm";
import { useUpdateAppointment } from "@/hooks/useAppointment";
import Section from "./Section";
import Field from "@/components/shared/form/Field";
import MainButton from "@/components/shared/form/MainButton";
import GhostButton from "@/components/shared/form/GhostButton";
import ServiceBadges from "@/features/dashboard/components/ServiceBadges";
import Date from "@/components/shared/appointment/Date";
import Time from "@/components/shared/appointment/Time";
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
import Modal from "@/components/shared/common/Modal";
import { formatDate, formatTime } from "@/lib/utils";
import { DB_ERRORS } from "@/lib/constants";

interface DetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  appointment: (AppointmentFormOutput & { id: string }) | null;
  mode?: "viewing" | "approving" | "editing";
  onEdit: () => void;
  onUpdate: () => void;
  onCancel: () => void;
}

const DetailModal = ({
  open,
  onOpenChange,
  appointment,
  mode = "viewing",
  onEdit,
  onUpdate,
  onCancel,
}: DetailModalProps) => {
  const { t } = useTranslation(["field", "common", "database"]);

  const methods = useAppointmentForm();
  const { handleSubmit, reset } = methods;

  const { mutateAsync, isPending } = useUpdateAppointment();

  useEffect(() => {
    if (appointment && open) {
      reset(toAppointmentFormInput(appointment));
    }
  }, [appointment, open, reset]);

  const isViewing = mode === "viewing";
  const isEditing = mode === "editing";
  const isApproving = mode === "approving";

  const onSubmit = async (data: AppointmentFormOutput) => {
    if (!appointment) return;
    try {
      await mutateAsync({
        id: appointment.id,
        data,
      });
      toast.success(t("database:status.updated"));
      onUpdate();
    } catch (error) {
      toast.error(t("database:status.notUpdated"));
      throw new Error(DB_ERRORS.QUERY_FAILED, { cause: error });
    }
  };

  const services = appointment
    ? appointment.service === "clipperCut"
      ? [t("service.clipperCut")]
      : appointment.combinedOptions.map((option) =>
          t(`service.combined.${option}`),
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
            <form
              id="appointment-detail-form"
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* Date & Time */}
              <Section>
                {isEditing || isApproving ? (
                  <Date />
                ) : (
                  <Field label={t("dateTime.date")}>
                    {formatDate(appointment.date)}
                  </Field>
                )}

                {isEditing || isApproving ? (
                  <Time />
                ) : (
                  <Field label={t("dateTime.time")}>
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
                    {formatDate(appointment.birthDate)}
                  </Field>
                )}

                {isEditing ? (
                  <PetGender />
                ) : (
                  <Field label={t("petDetails.gender.gender")}>
                    {appointment.gender}
                  </Field>
                )}

                {isEditing ? (
                  <PetSize />
                ) : (
                  <Field label={t("petDetails.size.size")}>
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

              {/* Service */}
              <Section gridColsNum={1}>
                {isEditing ? (
                  <Service />
                ) : (
                  <Field label={t("service.service")}>
                    <ServiceBadges service={services} />
                  </Field>
                )}
              </Section>

              {/* Coat condition */}
              <Section gridColsNum={1}>
                {isEditing ? (
                  <CoatCondition />
                ) : (
                  <Field label={t("coatCondition.coatCondition")}>
                    {appointment.coatCondition}
                  </Field>
                )}
              </Section>

              {/* Notes */}
              <Section gridColsNum={1}>
                {isEditing ? (
                  <Notes />
                ) : (
                  <Field label={t("notes")}>{appointment.notes}</Field>
                )}
              </Section>
            </form>
          </FormProvider>
        )
      }
      footer={
        <div className="flex gap-3 w-full">
          {isViewing ? (
            <MainButton className="flex-1" type="button" onClick={onEdit}>
              {t("common:actions.edit")}
            </MainButton>
          ) : (
            <MainButton
              className="flex-1"
              type="submit"
              form="appointment-detail-form"
              disabled={isPending}
            >
              {isPending
                ? t("common:status.pleaseWait")
                : isApproving
                  ? t("common:actions.approve")
                  : t("common:actions.update")}
            </MainButton>
          )}

          {isApproving || isEditing ? (
            <GhostButton className="flex-1" onClick={onCancel}>
              {t("common:actions.cancel")}
            </GhostButton>
          ) : (
            ""
          )}

          {isViewing && (
            <AlertModal
              triggerBtn={
                <GhostButton
                  className="flex-1 text-red-600 hover:text-red-600/80"
                  disabled={isPending}
                >
                  {t("common:actions.delete")}
                </GhostButton>
              }
              actionBtnTitle={t("common:actions.delete")}
              cancelBtnTitle={t("common:status.cancel")}
              title={`${t("common:actions.delete")} ${appointment?.fullName} - ${appointment?.name}?`}
            />
          )}
        </div>
      }
    />
  );
};

export default DetailModal;
