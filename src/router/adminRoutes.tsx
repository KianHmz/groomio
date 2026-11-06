import { ROUTES } from "@/lib/constants";
import { AdminGuard } from "./guards/AdminGuard";
import { lazy } from "react";
import DashboardLayout from "@/components/shared/layout/dashboard/DashboardLayout";
import AdminAppointments from "@/features/dashboard/admin/appointments";

const AdminHome = lazy(() => import("@/features/dashboard/admin/home"));

export const adminRoutes = [
  {
    path: ROUTES.ADMIN.INDEX,
    element: <AdminGuard />,
    children: [
      {
        element: <DashboardLayout variant="admin" />,
        children: [
          { path: ROUTES.ADMIN.HOME, element: <AdminHome /> },
          { path: ROUTES.ADMIN.APPOINTMENTS, element: <AdminAppointments /> },
        ],
      },
    ],
  },
];
