import { formatDate, formatTime } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface CurrentDateTimeCardProps {}

const CurrentDateTimeCard = (props: CurrentDateTimeCardProps) => {
  const { t } = useTranslation(["adminDashboard"]);

  const [now, setNow] = useState(new Date());

  const greeting = (() => {
    const h = now.getHours();
    if (h < 12) return t("adminDashboard:greeting.morning");
    if (h < 18) return t("adminDashboard:greeting.afternoon");
    return t("adminDashboard:greeting.evening");
  })();

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="flex flex-col gap-3 font-medium text-tan m-3">
      <p className="uppercase">{greeting}</p>
      <p className="sm:text-5xl text-4xl font-extrabold text-dark-brown">
        {formatTime(now)}
      </p>
      <p>{formatDate(now, { style: "long" })}</p>
    </div>
  );
};

export default CurrentDateTimeCard;
