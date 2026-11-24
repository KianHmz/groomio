import { RouterProvider } from "react-router";
import { router } from "@/router";
import { Toaster } from "@/components/ui/sonner";
import { ToastCleanup } from "./components/shared/common/ToastCleanup";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/tanstack";

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster />
        <ToastCleanup />
      </QueryClientProvider>
    </>
  );
};

export default App;
