import { Card } from "@/components/ui/card";
import { Suspense } from "react";
import { Outlet } from "react-router";
import { FullPageSpinner } from "@/components/shared/common/FullPageSpinner";

const MainLayout = () => {
  return (
    <Suspense fallback={<FullPageSpinner />}>
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <Card className="mx-auto w-full max-w-2xl px-8 rounded-2xl shadow-xl border-none bg-white">
          <Outlet />
        </Card>
      </div>
    </Suspense>
  );
};

export default MainLayout;
