import { ROUTES } from "@/lib/constants";
import Landing from "@/features/landing";
import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router";
import { FullPageSpinner } from "@/components/shared/common/FullPageSpinner";

const Reservation = lazy(() => import("@/features/reservation"));
const ReservationConfirmation = lazy(() => import("@/features/reservation/confirmation"));

export const router = createBrowserRouter([
  {
    path: ROUTES.LANDING,
    element: <Landing />,
  },
  {
    path: ROUTES.RESERVATION,
    element: (
      <Suspense fallback={<FullPageSpinner />}>
        <Reservation />
      </Suspense>
    ),
  },
  {
    path: ROUTES.RESERVATION_CONFIRMATION,
    element: (
      <Suspense fallback={<FullPageSpinner />}>
        <ReservationConfirmation />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: <Navigate to={ROUTES.LANDING} replace />,
  },
]);
