import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

const Badge = ({ children, className = "" }: BadgeProps) => {
  return (
    <span
      className={`text-[0.7rem] font-bold bg-amber-100 text-amber-800 rounded-full px-3 py-2 w-fit ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
