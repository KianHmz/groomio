import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import InlineMessage from "@/components/common/feedback/InlineMessage";
import MainButton from "@/components/forms/MainButton";
import { formatTime } from "@/lib/helpers/formatters";
import {
  OtpInputGroup,
  createEmptyOtp,
} from "@/features/otp/components/OtpInputGroup";
import { useOtpState } from "@/features/otp/hooks/useOtpState";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import BackButton from "@/components/common/BackButton";
import { ROUTES } from "@/config/constants";

const OtpVerify = () => {
  const { t } = useTranslation(["auth", "common"]);

  const navigate = useNavigate();
  const { state } = useLocation() as { state?: { phone: string } };

  // middleware
  // useEffect(() => {
  //   if (!state?.phone) {
  //     navigate(ROUTES.PHONE_VERIFY, { replace: true });
  //   }
  // }, [state, navigate]);

  const [otp, setOtp] = useState<string[]>(createEmptyOtp);

  const {
    msg,
    clearErrorMsg,
    isVerifying,
    isLocked,
    isExpired,
    secondsLeft,
    minutesLockedLeft,
    triesLeft,
    handleResend,
    verify,
  } = useOtpState();

  const isComplete = otp.every(Boolean);
  const inputsDisabled = isLocked || isExpired || isVerifying;

  const onVerifyClick = async () => {
    if (!isComplete || isLocked || isExpired || isVerifying) return;
    const result = await verify(otp.join(""));
    if (!result.success) setOtp(createEmptyOtp());
  };

  const onResendClick = async () => {
    const ok = await handleResend();
    if (ok) setOtp(createEmptyOtp());
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-full max-w-sm">
        <BackButton
          to={ROUTES.PHONE_VERIFY}
          label={t("common:actions.back")}
          replace={true}
        />
      </div>
      <Card
        className={`mx-auto w-full max-w-sm rounded-2xl shadow-xl border-0 p-8 ${isLocked ? "cursor-not-allowed" : ""}`}
      >
        <CardHeader>
          <CardTitle className="font-bold">{t("auth:otp.enterCode")}</CardTitle>
          <CardDescription>
            {t("auth:otp.sentTo", { phone: state?.phone })}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <OtpInputGroup
            value={otp}
            onChange={setOtp}
            disabled={inputsDisabled}
            onEdited={clearErrorMsg}
          />

          <div className="flex flex-col items-center justify-center text-[0.8rem]">
            <div className="" aria-live="polite">
              <InlineMessage
                type={msg?.type}
                className="mb-1 min-h-4"
                message={msg?.message}
              />
            </div>
            <p className="">
              {!isLocked && !isExpired && (
                <span>
                  <span className="text-muted-foreground">
                    {t("auth:otp.resendIn")}
                  </span>
                  <span className="text-tan">{formatTime(secondsLeft)}</span>
                </span>
              )}
              {!isLocked && isExpired && triesLeft > 0 && (
                <button
                  type="button"
                  onClick={onResendClick}
                  className="text-dark-brown cursor-pointer"
                >
                  {t("auth:otp.resendCode")}
                </button>
              )}
              {isLocked && (
                <span className="text-muted-foreground">
                  {t("auth:otp.tryAgainIn", { minutes: minutesLockedLeft })}
                </span>
              )}
            </p>
          </div>
        </CardContent>

        <CardFooter className="p-1 pb-8">
          <MainButton
            className="w-full rounded-2xl"
            disabled={!isComplete || isLocked || isVerifying}
            onClick={onVerifyClick}
          >
            {isVerifying ? t("auth:otp.verifying") : t("auth:otp.verify")}
          </MainButton>
          {/* --------- TEST BTN */}
          <MainButton
            onClick={() =>
              navigate(ROUTES.RESERVATION, {
                state: { phone: state?.phone },
                replace: true,
              })
            }
          >
            VERIFY
          </MainButton>
          {/* ------------ TEST BTN */}
        </CardFooter>
      </Card>
    </div>
  );
};

export default OtpVerify;
