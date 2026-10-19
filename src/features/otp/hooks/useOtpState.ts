import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { OTP } from "@/config/constants";
import { getLocalStorage, setLocalStorage } from "@/lib/utils/storage";
import { verifyOtpOnServer, resendOtpOnServer } from "@/services/otp-service";
import type { OtpState, Message } from "@/features/otp/types";

const createDefaultOtpState = (): OtpState => ({
  triesLeft: OTP.MAX_TRIES,
  expiresAt: Date.now() + OTP.RESEND_COOLDOWN_SECONDS * 1000,
  lockedUntil: null,
});

const loadOtpState = (): OtpState => {
  const stored = getLocalStorage(
    OTP.STORAGE_KEY,
    createDefaultOtpState(),
  ) as OtpState;
  if (stored.lockedUntil && stored.lockedUntil <= Date.now()) {
    return createDefaultOtpState();
  }
  return stored;
};

const saveOtpState = (state: OtpState): void =>
  setLocalStorage(OTP.STORAGE_KEY, state);

const getSecondsLeft = (ts: number) =>
  Math.max(0, Math.ceil((ts - Date.now()) / 1000));
const getMinutesLeft = (ts: number) =>
  Math.max(1, Math.ceil((ts - Date.now()) / 60000));

export const useOtpState = () => {
  const { t } = useTranslation(["auth"]);
  const [otpState, setOtpState] = useState<OtpState>(loadOtpState);
  const [msg, setMsg] = useState<Message>({
    type: "info",
    message: t("auth:otp.sent"),
  });
  const [isVerifying, setIsVerifying] = useState(false);

  const { triesLeft, expiresAt, lockedUntil } = otpState;
  const isLocked = Boolean(lockedUntil);

  const [secondsLeft, setSecondsLeft] = useState(() =>
    getSecondsLeft(expiresAt),
  );
  const [minutesLockedLeft, setMinutesLockedLeft] = useState(() =>
    lockedUntil ? getMinutesLeft(lockedUntil) : 0,
  );
  const isExpired = secondsLeft === 0;

  useEffect(() => {
    const target = lockedUntil || expiresAt;
    if (!target) return undefined;

    const tick = () => {
      const now = Date.now();
      if (lockedUntil) {
        if (now >= lockedUntil) {
          const fresh = createDefaultOtpState();
          setOtpState(fresh);
          saveOtpState(fresh);
          setSecondsLeft(getSecondsLeft(fresh.expiresAt));
          setMinutesLockedLeft(0);
          setMsg({ type: "info", message: t("auth:otp.sent") });
          return;
        }
        setMinutesLockedLeft(getMinutesLeft(lockedUntil));
        return;
      }
      setSecondsLeft(getSecondsLeft(expiresAt));
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [expiresAt, lockedUntil, t]);

  const clearErrorMsg = useCallback(() => {
    setMsg((prev) =>
      prev.type === "error" ? { type: "info", message: "" } : prev,
    );
  }, []);

  const handleResend = useCallback(async () => {
    if (triesLeft <= 0 || !isExpired) return;
    try {
      const result = await resendOtpOnServer();
      const triesRemaining = result.triesLeft ?? triesLeft - 1;
      const now = Date.now();

      const newState: OtpState =
        triesRemaining <= 0
          ? {
              triesLeft: 0,
              expiresAt: now,
              lockedUntil:
                result.lockedUntil ?? now + OTP.LOCKOUT_MINUTES * 60 * 1000,
            }
          : {
              triesLeft: triesRemaining,
              expiresAt:
                result.expiresAt ?? now + OTP.RESEND_COOLDOWN_SECONDS * 1000,
              lockedUntil: null,
            };

      setOtpState(newState);
      saveOtpState(newState);
      setSecondsLeft(getSecondsLeft(newState.expiresAt));
      setMinutesLockedLeft(
        newState.lockedUntil ? getMinutesLeft(newState.lockedUntil) : 0,
      );
      setMsg({ type: "success", message: t("auth:otp.resendSuccess") });
      return true;
    } catch {
      setMsg({ type: "error", message: t("auth:otp.resendFailed") });
      return false;
    }
  }, [isExpired, triesLeft, t]);

  const verify = useCallback(
    async (code: string) => {
      setIsVerifying(true);
      try {
        const result = await verifyOtpOnServer(code);
        if (result.valid) {
          setMsg({ type: "success", message: t("auth:success.verified") });
          return { success: true };
        }

        const newTries = result.triesLeft ?? triesLeft - 1;
        const now = Date.now();

        if (newTries <= 0) {
          const newState: OtpState = {
            triesLeft: 0,
            expiresAt: now,
            lockedUntil:
              result.lockedUntil ?? now + OTP.LOCKOUT_MINUTES * 60 * 1000,
          };
          setOtpState(newState);
          saveOtpState(newState);
          setMinutesLockedLeft(getMinutesLeft(newState.lockedUntil!));
          setMsg({
            type: "error",
            message: t("auth:otp.tooManyAttempts", {
              minutes: OTP.LOCKOUT_MINUTES,
            }),
          });
        } else {
          const newState: OtpState = { ...otpState, triesLeft: newTries };
          setOtpState(newState);
          saveOtpState(newState);
          setMsg({ type: "error", message: t("auth:otp.invalid") });
        }
        return { success: false };
      } catch {
        setMsg({ type: "error", message: t("auth:error.generic") });
        return { success: false };
      } finally {
        setIsVerifying(false);
      }
    },
    [otpState, triesLeft, t],
  );

  return {
    msg,
    setMsg,
    clearErrorMsg,
    isVerifying,
    isLocked,
    isExpired,
    secondsLeft,
    minutesLockedLeft,
    triesLeft,
    handleResend,
    verify,
  };
};
