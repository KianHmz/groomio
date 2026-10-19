import type { ReactNode } from "react";

interface SectionHeaderProps {
  number: number|string;
  title: ReactNode;
  description?: ReactNode;
}

const SectionHeader = ({ number, title, description }:SectionHeaderProps) => (
  <div className="flex items-start gap-3">
    <div className="flex h-9 w-7 shrink-0 items-center justify-center border-tan border-r-2 mr-1 text-xs font-bold text-tan">
      {number}
    </div>

    <div>
      <h2 className="text-sm font-semibold text-dark-brown">{title}</h2>

      {description && (
        <p className="mt-0.5 text-xs text-dark-brown/50">{description}</p>
      )}
    </div>
  </div>
);

export default SectionHeader;
