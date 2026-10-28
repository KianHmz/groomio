export const ROUTES = {
  LANDING: "/",
  RESERVATION: "/reservation",
  RESERVATION_CONFIRMATION: "/reservation/confirmation",

  LOGIN: "/login",

  ADMIN: "/admin",
  ADMIN_DASHBOARD: "/admin",
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RoutePath = (typeof ROUTES)[RouteKey];
