interface AppointmentItemProps {
  time: string;
  fullName: string;
  petName: string;
  breed: string;
  service: string[];
}

const AppointmentItem = ({ time, fullName, petName, breed, service }: AppointmentItemProps) => {
  return (
    <div className="flex items-center gap-8 w-full rounded-2xl bg-white/60 px-4 py-3 cursor-pointer">
      <div className="flex shrink-0 flex-col items-center justify-center rounded-xl bg-cream px-4 py-3 shadow-inner">
        <span className="font-extrabold text-dark-brown w-10 text-center">
          {time}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-0.5 min-w-0">
        <div className="flex items-center gap-1.5 font-bold text-dark-brown">
          <span className="truncate">{fullName}</span>
          <span className="text-dark-brown/40">·</span>
          <span className="truncate">{petName}</span>
        </div>
        <span className="text-sm font-medium text-dark-brown/70">{breed}</span>
      </div>

      <div className="mt-0.5 flex flex-wrap items-center gap-1.5 text-xs font-medium text-dark-brown/60">
        {service.map((key) => (
          <span key={key} className="rounded-md bg-tan/15 px-2 py-0.5">
            {key}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AppointmentItem;
