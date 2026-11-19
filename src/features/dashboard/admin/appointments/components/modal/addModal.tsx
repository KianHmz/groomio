import { useReservationForm } from "@/hooks/useReservationForm-pre";
import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Section from "./Section";
import MainButton from "@/components/shared/form/MainButton";
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
import Modal from "@/components/shared/common/Modal";
import PetName from "@/components/shared/appointment/PetName";
import OwnerFullName from "@/components/shared/appointment/OwnerFullName";
import GhostButton from "@/components/shared/form/GhostButton";

interface AddModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AddModal = ({ open, onOpenChange }: AddModalProps) => {
  const { t } = useTranslation(["common", "adminAppointment", "field"]);

  const { methods, onSubmit } = useReservationForm();
  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;

  return (
    <Modal
      size="2xl"
      open={open}
      onOpenChange={onOpenChange}
      title={t("adminAppointment:newAppointment")}
      body={
        <FormProvider {...methods}>
          <form id="add-appointment-form" onSubmit={handleSubmit(onSubmit)}>
            <Section>
              {/* Date & Time */}
              <Date />
              <Time />
            </Section>

            {/* Pet details */}
            <Section>
              <PetName />
              <PetBreed />
              <PetBirthDate />
              <PetGender />
              <PetSize />
              <PetWeight />
            </Section>

            {/* Owner details */}
            <Section>
              <OwnerFullName />
              <OwnerPhone />
            </Section>

            {/* Service */}
            <Section>
              <Service />
            </Section>

            {/* Coat condition */}
            <Section>
              <CoatCondition />
            </Section>

            {/* Notes */}
            <Section gridColsNum={1}>
              <Notes />
            </Section>
          </form>
        </FormProvider>
      }
      footer={
        <div className="flex gap-3 w-full">
          <MainButton
            type="submit"
            form="add-appointment-form"
            className="flex-1"
            disabled={isSubmitting}
          >
            {isSubmitting ? t("status.pleaseWait") : t("actions.add")}
          </MainButton>
          <GhostButton className="flex-1 " onClick={() => reset()}>
            {t("actions.clear")}
          </GhostButton>
        </div>
      }
    />
  );
};

export default AddModal;
