import { Outlet } from "react-router";

const NAV_ITEMS = {
  admin: [
    /* admin nav */
    'reserstion',
    'customers',
  ],
  user: [
    /* user nav */
  ],
};

const DashboardLayout = ({ variant }: { variant: "admin" | "user" }) => (
  <div className="min-h-screen">
    {/* <Sidebar items={NAV_ITEMS[variant]} /> */}
    <aside items={NAV_ITEMS[variant]} />
    <main className="flex-1">
      <Outlet />
    </main>
  </div>
);

export default DashboardLayout;
