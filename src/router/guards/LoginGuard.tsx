import { FullPageSpinner } from "@/components/shared/common/FullPageSpinner";
import { useAuth } from "@/hooks";
import { ROUTES } from "@/lib/constants";
import { Navigate, Outlet } from "react-router";

export const LoginGuard = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) return <FullPageSpinner />;

  if (!isAuthenticated) return <Navigate to={ROUTES.LOGIN} replace />;

  return <Outlet />;
};
