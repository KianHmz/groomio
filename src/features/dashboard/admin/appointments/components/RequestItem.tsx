interface RequestItemProps {
  fullName: string;
  petName: string;
  breed: string;
  service: string[];
  onApprove?: () => void;
}

const RequestItem = ({
  fullName,
  petName,
  breed,
  service,
  onApprove,
}: RequestItemProps) => {
  return (
    <div className="flex w-full items-center gap-4 rounded-2xl border-dark-brown/10 px-4 py-3 cursor-pointer">
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <div className="flex items-center gap-1.5 text-sm font-bold text-dark-brown">
          <span className="truncate">{fullName}</span>
          <span className="text-dark-brown/40">·</span>
          <span className="truncate">{petName}</span>
        </div>
        <span className="text-xs font-medium text-dark-brown/70">{breed}</span>

        <div className="mt-0.5 flex flex-wrap items-center gap-1.5 text-xs font-medium text-dark-brown/60">
          {service.map((key) => (
            <span key={key} className="rounded-md bg-tan/15 px-2 py-0.5">
              {key}
            </span>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={onApprove}
        aria-label={`Approve request for ${petName}`}
        className="shrink-0 cursor-pointer rounded-xl bg-sage px-4 py-2 text-sm font-bold text-dark-brown transition-colors hover:bg-sage/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-dark-brown/30 active:scale-[0.98]"
      >
        Approve
      </button>
    </div>
  );
};

export default RequestItem;
