import type { ReactNode } from "react";

interface DetailProps {
  label: string;
  value?: ReactNode;
}

const Field = ({ label, value }: DetailProps) => {
  return (
    <div className="min-w-0 space-y-0.5">
      <p className="text-xs text-tan">{label}</p>
      <div className="wmrap-break-word text-sm font-medium text-dark-brown">
        {value || "-"}
      </div>
    </div>
  );
};

export default Field;
