import { useRef } from "react";
import DatePickerModule from "react-multi-date-picker";
const DatePicker = (DatePickerModule as any).default ?? DatePickerModule;
import "react-multi-date-picker/styles/layouts/mobile.css";
import "react-multi-date-picker/styles/colors/yellow.css";
import { useTranslation } from "react-i18next";
import DateObject from "react-date-object";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { dateObjectSetting, useDateObject } from "@/hooks";

interface DateNavigatorProps {}

const DateNavigator = (props: DateNavigatorProps) => {
  const { t } = useTranslation(["common", "adminDashboard"]);

  const datePickerRef = useRef<any>(null);

  const [date, setDate] = useDateObject(new Date());
  const today = new DateObject(dateObjectSetting);
  const isToday =
    date.year === today.year &&
    date.month.number === today.month.number &&
    date.day === today.day;

  const openCalendar = () => {
    datePickerRef.current?.openCalendar();
  };

  const updateDate = (amount: number) => {
    const newDate = new DateObject(date);
    newDate.add(amount, "days");
    setDate(newDate);
  };

  const goToToday = () => {
    setDate(
      new DateObject({
        ...dateObjectSetting,
        date: new Date(),
      }),
    );
  };

  return (
    <div className="flex flex-col">
      <div className="flex gap-5 text-lg justify-between mt-3">
        <button
          onClick={() => updateDate(-1)}
          className="bg-cream rounded-lg px-3"
          aria-label="Previous day"
        >
          <ChevronLeft size={16} />
        </button>
        <DatePicker
          className="rmdp-mobile yellow"
          ref={datePickerRef}
          value={date}
          onChange={setDate}
          render={
            <h2
              onClick={openCalendar}
              className="cursor-pointer text-2xl text-dark-brown font-extrabold"
            >
              {`${date.weekDay.name}, ${date.day} ${date.month.name}`}
            </h2>
          }
          mobileLabels={{
            OK: t("status.ok"),
            CANCEL: t("status.cancel"),
          }}
          {...dateObjectSetting}
        />
        <button
          onClick={() => updateDate(1)}
          className="bg-cream rounded-lg px-3"
          aria-label="Next day"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      <div
        className={`text-tan font-semibold text-xs self-center ${isToday ? "invisible" : ""}`}
      >
        <button onClick={goToToday}>{t("adminDashboard:goToToday")}</button>
      </div>
    </div>
  );
};

export default DateNavigator;
