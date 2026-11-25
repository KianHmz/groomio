import { ROUTES } from "@/lib/constants";
import { lazy } from "react";
import AuthGuard from "./guards/AuthGuard";

const Auth = lazy(() => import("@/features/auth"));

export const authRoutes = [
  {
    path: ROUTES.AUTH,
    element: <AuthGuard />,

    children: [
      {
        index: true,
        element: <Auth />,
      },
    ],
  },
];
