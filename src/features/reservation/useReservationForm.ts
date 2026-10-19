import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  reservationSchema,
  type ReservationFormInput,
  type ReservationFormOutput,
} from "./schema";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/config/constants";

export const useReservationForm = (
  defaultValues?: Partial<ReservationFormInput>,
) => {
  const methods = useForm<ReservationFormInput, unknown, ReservationFormOutput>(
    {
      resolver: zodResolver(reservationSchema),
      mode: "onBlur",
      reValidateMode: "onChange",
      defaultValues: {
        name: "",
        breed: "",
        age: "",
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

  // i did aome shits here
  // userInfo is shit. jhave to fix it. its just or test
  const navigate = useNavigate();
  const onSubmit = async (data: ReservationFormOutput) => {
    console.log("Form data:", data);
    // TODO: call API
    // methods.reset();
    const userInfo = {
      fullName: data.fullName,
      phone: data.phone,
      submittedAt: new Date().toISOString(),
    };
    navigate(ROUTES.RESERVATION_CONFIRMATION, { state: { userInfo } });
  };

  return { methods, onSubmit };
};
