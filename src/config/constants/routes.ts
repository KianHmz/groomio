export const ROUTES = {
  LANDING: "/",
  PHONE_VERIFY: "/verify-phone",
  OTP_VERIFY: "/verify-otp",
  RESERVATION: "/reservation",
  RESERVATION_CONFIRMATION: "/reservation/confirmation",
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RoutePath = (typeof ROUTES)[RouteKey];
