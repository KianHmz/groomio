import type { ReactNode } from "react";

const Row = ({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) => {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage/20 text-tan [&>svg]:h-4 [&>svg]:w-4">
        {icon}
      </div>
      <div className="flex flex-col">
        <dt className="text-xs uppercase tracking-wide text-dark-brown/50">
          {label}
        </dt>
        <dd className="text-sm font-medium text-dark-brown">{children}</dd>
      </div>
    </div>
  );
};

export default Row;