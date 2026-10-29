export const ROUTES = {
  LANDING: "/",

  RESERVATION: {
    FORM: "/reservation",
    CONFIRMATION: "/reservation/confirmation",
  },

  AUTH: {
    LOGIN: "/login",
  },

  ADMIN: {
    HOME: "/admin",
  },
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RoutePath = (typeof ROUTES)[RouteKey];
