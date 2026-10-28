import { RouterProvider } from "react-router";
import { router } from "@/router";
import { Toaster } from "@/components/ui/sonner";
import { ToastCleanup } from "./components/shared/common/ToastCleanup";
import MainLayout from "./components/shared/layout/MainLayout";

const App = () => {
  return (
    <MainLayout>
      <RouterProvider router={router} />
      <Toaster />
      <ToastCleanup />
    </MainLayout>
  );
};

export default App;
