import { FullPageSpinner } from "@/components/shared/common/FullPageSpinner";
import { useAuth } from "@/hooks";
import { ROUTES } from "@/lib/constants";
import { Navigate, Outlet } from "react-router";

export const AdminGuard = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) return <FullPageSpinner />;

  if (!user || user.role !== "admin")
    return <Navigate to={ROUTES.AUTH} replace />;

  return <Outlet />;
};
