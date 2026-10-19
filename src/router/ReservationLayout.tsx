import { FullPageSpinner } from "@/components/common/FullPageSpinner";
import { ReservationProvider } from "@/contexts/reservation/ReservationContext";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const ReservationLayout = () => {
  return (
    <ReservationProvider>
      <Suspense fallback={<FullPageSpinner />}>
        <Outlet />
      </Suspense>
    </ReservationProvider>
  );
};

export default ReservationLayout;
