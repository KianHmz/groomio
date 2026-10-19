import { useTranslation } from "react-i18next";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CountrySelect } from "@/features/otp/components/CountrySelect";
import { PhoneInput } from "@/features/otp/components/PhoneInput";
import { usePhoneValidation } from "@/features/otp/hooks/usePhoneValidation";
import BackButton from "@/components/common/BackButton";
import { ROUTES } from "@/config/constants";
import { useNavigate } from "react-router-dom";

const PhoneVerify = () => {
  const { t } = useTranslation(["auth", "common"]);

  const navigate = useNavigate();

  const { phone, error, isValid, handleChange } = usePhoneValidation();

  const handleVerify = async (phone: string) => {
    // TODO: send to server e.g.
    // const ok = await sendOtp(phone);
    // if (ok) {
    //   navigate(ROUTES.OTP_VERIFY, { state: { phone } });
    // }
    navigate(ROUTES.OTP_VERIFY, { state: { phone: `+98${phone}` } });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-full max-w-sm">
        <BackButton to={ROUTES.LANDING} label={t("common:actions.back")} />
      </div>
      <Card className="mx-auto w-full max-w-sm rounded-2xl shadow-xl border-0 p-8">
        <CardHeader>
          <CardTitle className="font-bold">{t("phone.verifyTitle")}</CardTitle>
          <CardDescription>{t("phone.verifyDescription")}</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex gap-1 mb-2">
            <CountrySelect />
            <PhoneInput
              value={phone}
              onChange={(v) => handleChange(v, t("phone.required"))}
            />
          </div>
          <p className="ml-22 text-sm text-red-600">{error}</p>
        </CardContent>

        <CardFooter className="p-1 pb-8">
          <Button
            size="sm"
            className="w-full py-5 rounded-2xl bg-dark-brown hover:bg-tan"
            disabled={!isValid}
            onClick={() => handleVerify(phone)}
          >
            {t("otp.verify")}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PhoneVerify;
