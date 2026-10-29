import { ROUTES } from "@/lib/constants";
import Landing from "@/features/landing";
import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router";
import { adminRoutes } from "./adminRoutes";
import { userRoutes } from "./userRoutes";
import MainLayout from "@/components/shared/layout/MainLayout";

const Reservation = lazy(() => import("@/features/reservation"));
const ReservationConfirmation = lazy(
  () => import("@/features/reservation/confirmation"),
);

export const router = createBrowserRouter([
  {
    // public
    element: <MainLayout />,
    children: [
      {
        path: ROUTES.LANDING,
        element: <Landing />,
      },
      {
        path: ROUTES.RESERVATION.FORM,
        element: <Reservation />,
      },
      {
        path: ROUTES.RESERVATION.CONFIRMATION,
        element: <ReservationConfirmation />,
      },

      // admin
      ...adminRoutes,

      // user
      // ...userRoutes,

      // *
      {
        path: "*",
        element: <Navigate to={ROUTES.LANDING} replace />,
      },
    ],
  },
]);
