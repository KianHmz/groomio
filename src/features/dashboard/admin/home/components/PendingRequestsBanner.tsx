import { ROUTES } from "@/lib/constants";
import { ChevronRight, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

interface PendingRequestsBannerProps {
  count: number;
}

const PendingRequestsBanner = ({ count }: PendingRequestsBannerProps) => {
  const { t } = useTranslation(["adminDashboard"]);

  return (
    <Link
      to={ROUTES.ADMIN.APPOINTMENTS}
      className="bg-amber-300/40 hover:bg-amber-200/50 transition rounded-xl px-5 py-3 w-full border border-tan/15"
    >
      <div className="flex gap-4 items-center">
        <Clock size={22} className="text-tan mx-2" />
        <div className="text-dark-brown mx-2 flex-1">
          <p className="text-sm font-bold">
            {t("adminDashboard:PendingRequestsBanner.title")}
          </p>
          <p className="text-xs mt-1">
            {t("PendingRequestsBanner.description", { count})}
          </p>
        </div>
        <ChevronRight size={22} className="text-tan" />
      </div>
    </Link>
  );
};

export default PendingRequestsBanner;
