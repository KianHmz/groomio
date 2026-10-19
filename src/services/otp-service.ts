import type { VerifyServerResult, ResendServerResult } from "@/features/otp/types";

// TODO: replace with real Supabase calls
export const verifyOtpOnServer = async (
  code: string,
): Promise<VerifyServerResult> => {
  const isValid = code === "123456"; // mock
  return {
    valid: isValid,
    triesLeft: null,
    expiresAt: null,
    lockedUntil: null,
  };
};

export const resendOtpOnServer = async (): Promise<ResendServerResult> => {
  return { triesLeft: null, expiresAt: null, lockedUntil: null };
};
