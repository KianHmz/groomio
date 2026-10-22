import { CheckCircle2, Phone, Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Row from "./components/Row";
import { Link, useLocation } from "react-router";
import { ROUTES } from "@/lib/constants";
import { useTranslation } from "react-i18next";

const ReservationConfirmation = () => {
  const { t } = useTranslation(["reservation"]);
  const { state } = useLocation();

  return (
    <main className="min-h-screen bg-cream flex items-center justify-center overflow-hidden">
      <Card className="mx-auto w-full max-w-lg px-8 rounded-2xl shadow-xl border-0 bg-white">
        {/* Icon + heading */}
        <CardHeader className="items-center text-center pt-10">
          <CardTitle className="text-3xl font-serif text-dark-brown tracking-tight">
            <div className="flex flex-col gap-4 justify-center items-center">
              <CheckCircle2
                className="h-12 w-12 rounded-full text-tan"
                strokeWidth={1.75}
              />
              {t("confirmation.thankYou", { name: state.fullName })}
            </div>
          </CardTitle>
          <CardDescription className="text-dark-brown/70 text-base mt-2 max-w-sm text-center mx-auto">
            {t("confirmation.description")}
          </CardDescription>
        </CardHeader>

        <CardContent className="px-8 pb-4">
          <Separator className="bg-sage/40 my-6" />

          {/* Summary */}
          <dl className="space-y-4">
            <Row icon={<Phone />} label="We'll call">
              {state.phone}
            </Row>

            <Row icon={<Calendar />} label="Requested">
              {state.submittedAt}
            </Row>
          </dl>

          {/* Actions */}
          <div className="mt-16 flex flex-col gap-3">
            <Link to={ROUTES.RESERVATION} replace>
              <Button
                variant="ghost"
                className="w-full text-dark-brown hover:bg-sage/20 hover:text-dark-brown h-11"
              >
                <ArrowLeft className="h-4 w-4" />
                {t("confirmation.makeAnother")}
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default ReservationConfirmation;
