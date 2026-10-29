import { RouterProvider } from "react-router";
import { router } from "@/router";
import { Toaster } from "@/components/ui/sonner";
import { ToastCleanup } from "./components/shared/common/ToastCleanup";

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
      <ToastCleanup />
    </>
  );
};

export default App;
