import { Card } from "@/components/ui/card";
import type { PropsWithChildren } from "react";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <Card className="mx-auto w-full max-w-2xl px-8 rounded-2xl shadow-xl border-none bg-white">
        {children}
      </Card>
    </div>
  );
};

export default MainLayout;
