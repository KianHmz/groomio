export const ROUTES = {
  LANDING: "/",
  RESERVATION: "/reservation",
  RESERVATION_CONFIRMATION: "/reservation/confirmation",
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RoutePath = (typeof ROUTES)[RouteKey];
