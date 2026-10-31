import { ROUTES } from "@/lib/constants";
import { AdminGuard } from "./guards/AdminGuard";
import { lazy } from "react";
import DashboardLayout from "@/components/shared/layout/DashboardLayout";

const AdminHome = lazy(() => import("@/features/dashboard/admin"));

export const adminRoutes = [
  {
    path: ROUTES.ADMIN.HOME,
    element: <AdminGuard />,
    children: [
      {
        element: <DashboardLayout variant="admin" />,
        children: [
          { index: true, element: <AdminHome /> },
          // { path: ROUTES.ADMIN.what, element: <what /> },
        ],
      },
    ],
  },
];
