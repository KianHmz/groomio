import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  label?: string;
  value?: string | number;
  icon?: LucideIcon;
}

const StatCard = ({ label, value, icon: Icon }: StatCardProps) => {
  return (
    <div className="w-full shrink rounded-xl bg-white p-4 shadow-sm">
      <div className="relative flex items-center gap-3">
        {Icon && (
          <div className="flex shrink-0 items-center justify-center rounded-lg bg-sage/70 p-2.5 text-dark-brown">
            <Icon size={18} strokeWidth={2.25} />
          </div>
        )}
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex items-baseline gap-1.5">
            <span className="text-2xl font-bold text-dark-brown">{value}</span>
          </div>
          <p className="mt-1 truncate text-xs font-medium text-dark-brown/60">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
