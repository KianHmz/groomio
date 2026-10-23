import { RouterProvider } from "react-router";
import { router } from "@/router";
import { Toaster } from "@/components/ui/sonner";
import { ToastCleanup } from "./components/shared/common/ToastCleanup";

const App = () => {
  return (
    <div className="min-h-screen bg-cream">
      <RouterProvider router={router} />
      <Toaster />
      <ToastCleanup />
    </div>
  );
};

export default App;
