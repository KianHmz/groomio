import type { RoutePath } from "@/lib/constants";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

interface ViewAllButtonProps {
  to: RoutePath;
}

const ViewAllButton = ({ to }: ViewAllButtonProps) => {
  return (
    <Link
      to={to}
      className="flex gap-2 items-center text-sm font-bold tracking-tight text-tan"
    >
      View All
      <ArrowRight size={20} />
    </Link>
  );
};

export default ViewAllButton;
