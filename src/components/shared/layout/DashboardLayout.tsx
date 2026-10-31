import Header from "@/features/dashboard/components/Header";
import Navigation from "@/features/dashboard/components/Navigation";
import type { NavVariant } from "@/types";
import { Outlet } from "react-router";

const DashboardLayout = ({ variant }: { variant: NavVariant }) => (
  <div className="min-h-screen">
    <Header />
    <main className="flex-1 mb-20">
      <Outlet />
    </main>
    <Navigation variant={variant} />
  </div>
);

export default DashboardLayout;
