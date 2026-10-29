import { FullPageSpinner } from "@/components/shared/common/FullPageSpinner";
import { useAuth } from "@/hooks";
import { ROUTES } from "@/lib/constants";
import { Navigate, Outlet } from "react-router";

export const AdminGuard = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) return <FullPageSpinner />;

  if (!user) return <Navigate to={ROUTES.AUTH.LOGIN} replace />;

  //   if (!user?.isAdmin) return <Navigate to={ROUTES.LANDING} replace />;
  //   OR
  //   if (user.role !== "admin") return <Navigate to={ROUTES.LANDING} replace />;

  return <Outlet />;
};
