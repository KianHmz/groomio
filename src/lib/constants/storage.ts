export const STORAGE = {
  OTP_STATE: "groomio_otp_verify_state",
  USER: "groomio_user",
  TOKEN: "groomio_token",
  THEME: "groomio_theme",
  RESERVATION_PHONE: "groomio_reservation_phone",
} as const;

export type StorageKey = (typeof STORAGE)[keyof typeof STORAGE];
