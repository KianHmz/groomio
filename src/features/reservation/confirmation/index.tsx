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
import { Link, useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import { ROUTES } from "@/lib/constants";

// const name = "Someone";
// const phone = "+989178898878";
// const date = "1405/05/12";
// const time = "18:24";

const ReservationConfirmation = () => {
  // this line is just for test. incompleted
  const { state } = useLocation();

  const navigate = useNavigate();

  // middleware
  // useEffect(() => {
  //   if (!state?.userInfo) {
  //     navigate(ROUTES.RESERVATION, { replace: true });
  //   }
  // }, [state, navigate]);

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
              Thank you, {state.userInfo.fullName}
            </div>
          </CardTitle>
          <CardDescription className="text-dark-brown/70 text-base mt-2 max-w-sm text-center mx-auto">
            Your reservation request has been received. We&apos;ll call you
            shortly to confirm the details.
          </CardDescription>
        </CardHeader>

        <CardContent className="px-8 pb-4">
          <Separator className="bg-sage/40 my-6" />

          {/* Summary */}
          <dl className="space-y-4">
            <Row icon={<Phone />} label="We'll call">
              {state.userInfo.phone}
            </Row>

            <Row icon={<Calendar />} label="Requested">
              {state.userInfo.submittedAt}
            </Row>
          </dl>

          {/* Actions */}
          <div className="mt-16 flex flex-col gap-3">
            <Link
              to={ROUTES.RESERVATION}
              // here... isnt it messy to pass phone again???
              state={{ phone: state.userInfo.phone }}
            >
              <Button
                variant="ghost"
                className="w-full text-dark-brown hover:bg-sage/20 hover:text-dark-brown h-11"
              >
                <ArrowLeft className="h-4 w-4" />
                Make another reservation
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default ReservationConfirmation;
