import { ROUTES } from "@/lib/constants";
import { AdminGuard } from "./guards/AdminGuard";
import { Navigate } from "react-router";
import { lazy } from "react";

const AdminHome = lazy(() => import("@/features/admin"));

export const adminRoutes = [
  {
    path: ROUTES.ADMIN,
    element: <AdminGuard />,
    children: [
      {
        index: true,
        element: <Navigate to={ROUTES.ADMIN_DASHBOARD} replace />,
      },
      { path: ROUTES.ADMIN_DASHBOARD, element: <AdminHome /> },
    ],
  },
];
