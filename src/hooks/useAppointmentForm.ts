import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  appointmentSchema,
  type AppointmentFormInput,
  type AppointmentFormOutput,
} from "@/lib/schema";

interface UseAppointmentFormOptions {
  defaultValues?: Partial<AppointmentFormInput>;
}

export const useAppointmentForm = ({
  defaultValues,
}: UseAppointmentFormOptions = {}) => {
  const methods = useForm<AppointmentFormInput, unknown, AppointmentFormOutput>(
    {
      resolver: zodResolver(appointmentSchema),
      mode: "onBlur",
      reValidateMode: "onChange",
      defaultValues: {
        name: "",
        breed: "",
        birthDate: undefined,
        gender: undefined,
        size: undefined,
        weight: undefined,
        fullName: "",
        phone: "",
        service: undefined,
        combinedOptions: [],
        coatCondition: undefined,
        notes: "",
        ...defaultValues,
      },
    },
  );

  return methods;
};
