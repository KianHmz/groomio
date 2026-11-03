import { Calendar, DollarSign, FileQuestion, Users } from "lucide-react";
import PendingRequestsBanner from "@/features/dashboard/admin/components/PendingRequestsBanner";
import TodaysAppointment from "./components/TodaysAppointment";
import StatCard from "./components/StatCard";
import ViewAllButton from "@/components/shared/common/ViewAllButton";
import { ROUTES } from "@/lib/constants";
import CurrentDateTimeCard from "./components/CurrentDateTimeCard";

const AdminHome = () => {
  return (
    <div>
      <div className="flex flex-col gap-6">
        
        <CurrentDateTimeCard />

        <div className="grid grid-cols-2 gap-3">
          <StatCard label="Today's appointments" value={10} icon={Calendar} />
          <StatCard label="Budget" value="$234" icon={DollarSign} />
          <StatCard label="Total customers" value={1012} icon={Users} />
          <StatCard label="I don't know" value="^^" icon={FileQuestion} />
        </div>

        <PendingRequestsBanner count={5} />

        <div className="flex flex-col mt-5 gap-3">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl text-dark-brown font-extrabold">
              Upcoming Appointments
            </h2>
            <ViewAllButton to={ROUTES.ADMIN.APPOINTMENTS} />
          </div>

          <div className="flex flex-col shadow-md py-3 rounded-md">
            <TodaysAppointment
              time="09:30"
              fullName="John Dow"
              petName="Bella"
              breed="Golden Retriever"
              service={["De-matting", "Brush", "Haircut"]}
            />
            <TodaysAppointment
              time="11:00"
              fullName="Naqi Taqi"
              petName="Farhad"
              breed="Pomerian"
              service={["Bath", "Haircut"]}
            />
            <TodaysAppointment
              time="13:00"
              fullName="Amy Lee"
              petName="Mochi"
              breed="Golden Retriever"
              service={["Haircut"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
