import { FullPageSpinner } from "@/components/shared/common/FullPageSpinner";
import { useAuth } from "@/hooks";
import { ROUTES } from "@/lib/constants";
import { Navigate, Outlet } from "react-router";

const GuestGuard = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) return <FullPageSpinner />;

  if (user) {
    return (
      <Navigate
        to={user.role === "admin" ? ROUTES.ADMIN.HOME : ROUTES.USER.HOME}
        replace
      />
    );
  }

  return <Outlet />;
};

export default GuestGuard;
