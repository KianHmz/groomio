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
import { useCreateAppointment } from "@/hooks/useAppointment";
import type { AppointmentFormOutput } from "@/lib/schema";
import { toast } from "sonner";
import { DB_ERRORS } from "@/lib/constants";
import { useAppointmentForm } from "@/hooks/useAppointmentForm";

interface AddModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AddModal = ({ open, onOpenChange }: AddModalProps) => {
  const { t } = useTranslation([
    "common",
    "adminAppointment",
    "field",
    "database",
  ]);

  const methods = useAppointmentForm();

  const { handleSubmit, reset } = methods;

  const { mutateAsync, isPending } = useCreateAppointment();

  const onSubmit = async (data: AppointmentFormOutput) => {
    try {
      await mutateAsync(data);
      toast.success(t("database:status.created"));
      reset();
    } catch (error) {
      toast.error(t("database:status.notCreated"));
      throw new Error(DB_ERRORS.QUERY_FAILED, { cause: error });
    }
  };

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
              <Date />
              <Time />
            </Section>

            <Section>
              <PetName />
              <PetBreed />
              <PetBirthDate />
              <PetGender />
              <PetSize />
              <PetWeight />
            </Section>

            <Section>
              <OwnerFullName />
              <OwnerPhone />
            </Section>

            <Section gridColsNum={1}>
              <Service />
            </Section>

            <Section gridColsNum={1}>
              <CoatCondition />
            </Section>

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
            disabled={isPending}
          >
            {isPending ? t("status.pleaseWait") : t("actions.add")}
          </MainButton>

          <GhostButton
            className="flex-1"
            disabled={isPending}
            onClick={() => reset()}
          >
            {t("actions.clear")}
          </GhostButton>
        </div>
      }
    />
  );
};

export default AddModal;
