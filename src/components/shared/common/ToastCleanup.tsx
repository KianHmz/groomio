import { useEffect, useState } from "react";
import { toast } from "sonner";
import { router } from "@/router";

export const ToastCleanup = () => {
  const [pathname, setPathname] = useState(router.state.location.pathname);

  useEffect(() => {
    return router.subscribe((state) => {
      setPathname(state.location.pathname);
    });
  }, []);

  useEffect(() => {
    toast.dismiss();
  }, [pathname]);

  return null;
};
