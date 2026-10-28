import { ROUTES } from "@/lib/constants";
import Landing from "@/features/landing";
import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate, Outlet } from "react-router";
import { FullPageSpinner } from "@/components/shared/common/FullPageSpinner";
import { adminRoutes } from "./adminRoutes";
import { userRoutes } from "./userRoutes";

const Reservation = lazy(() => import("@/features/reservation"));
const ReservationConfirmation = lazy(
  () => import("@/features/reservation/confirmation"),
);

const RootLayout = () => (
  <Suspense fallback={<FullPageSpinner />}>
    <Outlet />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    // public
    element: <RootLayout />,
    children: [
      {
        path: ROUTES.LANDING,
        element: <Landing />,
      },
      {
        path: ROUTES.RESERVATION,
        element: <Reservation />,
      },
      {
        path: ROUTES.RESERVATION_CONFIRMATION,
        element: <ReservationConfirmation />,
      },

      // admin
      ...adminRoutes,

      // user
      ...userRoutes,

      // *
      {
        path: "*",
        element: <Navigate to={ROUTES.LANDING} replace />,
      },
    ],
  },
]);
