interface ServiceBadgesProps {
  service: string[];
}

const ServiceBadges = ({ service }: ServiceBadgesProps) => {
  return (
    <div className="mt-0.5 flex flex-wrap items-center gap-1.5 text-xs font-medium text-dark-brown/60">
      {service.map((key) => (
        <span key={key} className="rounded-md bg-tan/15 px-2 py-0.5">
          {key}
        </span>
      ))}
    </div>
  );
};

export default ServiceBadges;
