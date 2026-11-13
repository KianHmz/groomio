import Header from "./components/Header";
import PendingRequests from "./components/PendingRequests";
import DayAppointments from "./components/DayAppointments";

interface AdminAppointmentsProps {}

const AdminAppointments = (props: AdminAppointmentsProps) => {

  return (
    <div className="flex flex-col flex-1 gap-8">
      <Header />
      <DayAppointments />
      <PendingRequests />
    </div>
  );
};

export default AdminAppointments;
