import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  reservationSchema,
  type AppointmentFormInput,
  type AppointmentFormOutput,
} from "@/lib/schema";
import { ROUTES } from "@/lib/constants";
import { supabase } from "@/lib/supabase/supabase";
import { formatDateTime } from "@/lib/utils";
import { toast } from "sonner";
import { DATABASE } from "@/lib/constants/database";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

export const useReservationForm = (
  defaultValues?: Partial<AppointmentFormInput>,
) => {
  const { t, i18n } = useTranslation(["common"]);
  const navigate = useNavigate();

  const methods = useForm<AppointmentFormInput, unknown, AppointmentFormOutput>(
    {
      // MOCK
      resolver: zodResolver(reservationSchema),
      mode: "onBlur",
      reValidateMode: "onChange",
      defaultValues: {
        name: "Ted",
        breed: "Poodle",
        birthDate: new Date(2013, 0, 5),
        gender: "female",
        size: "medium",
        weight: 4,
        fullName: "Shahla Mahla",
        phone: "9174458790",
        service: undefined,
        combinedOptions: [],
        coatCondition: "felted",
        notes: "My dog is cute asf",
        ...defaultValues,
      },
      //   resolver: zodResolver(schema),
      // mode: "onBlur",
      // reValidateMode: "onChange",
      // defaultValues: {
      //   name: "",
      //   breed: "",
      //   birthDate: undefined,
      //   gender: "",
      //   size: "",
      //   weight: undefined,
      //   fullName: "",
      //   phone: "",
      //   service: undefined,
      //   combinedOptions: [],
      //   coatCondition: "",
      //   notes: "",
      //   ...defaultValues,
      // },
    },
  );

  const onSubmit = async (data: AppointmentFormOutput) => {
    const { error } = await supabase.from("appointment").insert({
      data
    });

    if (error) {
      toast.error(t("appointment.failed"));
      throw new Error(DATABASE.CREATE_FAILED, { cause: error });
    }

    toast.success(t("appointment.submitted"));

    methods.reset();

    navigate(ROUTES.RESERVATION.CONFIRMATION, {
      state: {
        fullName: data.fullName,
        phone: data.phone,
        submittedAt: formatDateTime(new Date(), {
          style: "medium",
          hour12: true,
          locale: i18n.language,
        }),
      },
    });
  };

  return { methods, onSubmit };
};
