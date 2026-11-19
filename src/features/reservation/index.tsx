import { FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useReservationForm } from "@/hooks/useReservationForm-pre";
import { ROUTES } from "@/lib/constants";
import MainButton from "@/components/shared/form/MainButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PetDetails from "./components/sections/PetDetails";
import OwnerDetails from "./components/sections/OwnerDetails";
import Service from "./components/sections/ServiceDetails";
import Notes from "./components/sections/NotesDetails";
import BackButton from "@/components/shared/common/BackButton";

const Reservation = () => {
  const { t } = useTranslation(["reservation", "common"]);

  const { methods, onSubmit } = useReservationForm();
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  return (
    <div className="p-4">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Card className="ring-0">
            <CardHeader className="p-4 sm:p-8">
              <div className="mb-4">
                <BackButton
                  to={ROUTES.LANDING}
                  label={t("common:actions.back")}
                />
              </div>
              <CardTitle className="text-2xl font-semibold tracking-tight text-dark-brown sm:text-3xl">
                {t("title")}
              </CardTitle>
              <CardDescription className="mt-2 max-w-lg text-sm leading-relaxed text-dark-brown/55">
                {t("subtitle")}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-10 px-6">
              <PetDetails />
              <OwnerDetails />
              <Service />
              <Notes />
            </CardContent>

            <CardFooter className="border-t border-dark-brown/8 bg-cream/30 py-8 mb-2">
              <MainButton
                type="submit"
                disabled={isSubmitting}
                className="h-12 w-full rounded-xl"
              >
                {isSubmitting ? t("common:status.pleaseWait") : t("submit")}
              </MainButton>
            </CardFooter>
          </Card>
        </form>
      </FormProvider>
    </div>
  );
};

export default Reservation;
