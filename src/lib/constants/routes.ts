export const ROUTES = {
  LANDING: "/",
  RESERVATION: {
    FORM: "/reservation",
    CONFIRMATION: "/reservation/confirmation",
  },
  AUTH: { LOGIN: "/login" },
  ADMIN: {
    INDEX: "/admin",
    HOME: "/admin/home",
    APPOINTMENTS: "/admin/appointments",
    CUSTOMERS: "/admin/customers",
  },
} as const;

export type RouteKey = keyof typeof ROUTES;

export type RoutePath = {
  [K in RouteKey]: (typeof ROUTES)[K] extends string
    ? (typeof ROUTES)[K]
    : RoutePathFromObject<(typeof ROUTES)[K]>;
}[RouteKey];

type RoutePathFromObject<T> = {
  [K in keyof T]: T[K] extends string ? T[K] : RoutePathFromObject<T[K]>;
}[keyof T];
