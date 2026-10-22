import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  reservationSchema,
  type ReservationFormInput,
  type ReservationFormOutput,
} from "./schema";
import { useNavigate } from "react-router";
import { ERRORS, ROUTES } from "@/lib/constants";
import { supabase } from "@/lib/supabase";
import { formatDateTime } from "@/lib/utils/formatters";

export const useReservationForm = (
  defaultValues?: Partial<ReservationFormInput>,
) => {
  const methods = useForm<ReservationFormInput, unknown, ReservationFormOutput>(
    {
      resolver: zodResolver(reservationSchema),
      mode: "onBlur",
      reValidateMode: "onChange",
      // defaultValues: {
      //   name: "",
      //   breed: "",
      //   age: "",
      //   gender: undefined,
      //   size: undefined,
      //   weight: undefined,
      //   fullName: "",
      //   phone: "",
      //   service: undefined,
      //   combinedOptions: [],
      //   coatCondition: undefined,
      //   notes: "",
      //   ...defaultValues,
      // },
      defaultValues: {
        name: "Ted",
        breed: "Poodle",
        age: "2 years",
        gender: "female",
        size: "medium",
        weight: "4",
        fullName: "Shahla Mahla",
        phone: "9174458790",
        service: undefined,
        combinedOptions: [],
        coatCondition: "felted",
        notes: "My dog is cute asf",
        ...defaultValues,
      },
    },
  );

  const navigate = useNavigate();

  const onSubmit = async (data: ReservationFormOutput) => {
    console.log("Form data:", data);
    const { error } = await supabase.from("reservations").insert({
      pet_name: data.name,
      breed: data.breed,
      age: data.age,
      gender: data.gender,
      size: data.size,
      weight: data.weight,
      full_name: data.fullName,
      phone: data.phone,
      service: data.service,
      combined_options: data.combinedOptions ?? [],
      coat_condition: data.coatCondition,
      notes: data.notes,
    });
    if (error) throw new Error(ERRORS.DB_INSERT_FAILED, { cause: error });
    // TODO: show a toast: error/success to the user
    methods.reset();
    navigate(ROUTES.RESERVATION_CONFIRMATION, {
      state: {
        fullName: data.fullName,
        phone: data.phone,
        submittedAt: formatDateTime(new Date(), { calendar: "persian" }), // 'calenar' should chnage automatically based on lang-switch (en/fa)
      },
    });
  };

  return { methods, onSubmit };
};
