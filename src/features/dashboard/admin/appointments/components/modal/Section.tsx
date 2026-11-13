import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  gridColsNum?: number;
}

const Section = ({ children, gridColsNum = 2 }: SectionProps) => {
  return (
    <div
      className={`grid grid-cols-${gridColsNum} gap-y-5 gap-x-18 bg-white rounded-lg p-3`}
    >
      {children}
    </div>
  );
};

export default Section;
