import { ROUTES } from "@/config/constants";
import Landing from "@/features/landing";
import { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import ReservationLayout from "@/router/ReservationLayout";

const PhoneVerify = lazy(() => import("@/features/otp/PhoneVerify"));
const OtpVerify = lazy(() => import("@/features/otp/OtpVerify"));
const Reservation = lazy(() => import("@/features/reservation"));
const ReservationConfirmation = lazy(() => import("@/features/reservation/confirmation"),
);

export const router = createBrowserRouter([
  {
    path: ROUTES.LANDING,
    element: <Landing />,
  },
  {
    element: <ReservationLayout />,
    children: [
      {
        path: ROUTES.PHONE_VERIFY,
        element: <PhoneVerify />,
      },
      {
        path: ROUTES.OTP_VERIFY,
        element: <OtpVerify />,
      },
      {
        path: ROUTES.RESERVATION,
        element: <Reservation />,
      },
      {
        path: ROUTES.RESERVATION_CONFIRMATION,
        element: <ReservationConfirmation />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to={ROUTES.LANDING} replace />,
  },
]);
