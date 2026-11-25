import { FullPageSpinner } from "@/components/shared/common/FullPageSpinner";
import { useAuth } from "@/hooks";
import { ROUTES } from "@/lib/constants";
import { Navigate, Outlet } from "react-router";

const AuthGuard = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) return <FullPageSpinner />;

  if (!user)
    return <Navigate to={ROUTES.AUTH} state={{ from: location }} replace />;

  return <Outlet />;
};

export default AuthGuard;
