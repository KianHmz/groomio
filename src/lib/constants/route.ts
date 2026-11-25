export const ROUTES = {
  // LANDING: "/",
  // RESERVATION: {
  //   FORM: "/reservation",
  //   CONFIRMATION: "/reservation/confirmation",
  // },
  AUTH: "/auth",
  ADMIN: {
    INDEX: "/admin",
    HOME: "/admin/home",
    APPOINTMENTS: "/admin/appointments",
    CUSTOMERS: "/admin/customers",
  },
  USER: {
    INDEX: "/dashboard",
    HOME: "/dashboard/home",
  },
} as const;

export type RouteKey = keyof typeof ROUTES;

type DeepValues<T> = T extends string
  ? T
  : T extends object
    ? { [K in keyof T]: DeepValues<T[K]> }[keyof T]
    : never;

export type RoutePath = DeepValues<typeof ROUTES>;
