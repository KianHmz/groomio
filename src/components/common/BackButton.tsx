import type { RoutePath } from "@/config/constants";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface BackButtonProps {
  to: RoutePath;
  label?: string;
  replace?: boolean;
  className?: string;
}

const BackButton = ({
  to,
  label,
  replace = false,
  className,
}: BackButtonProps) => {
  return (
    <Link
      to={to}
      replace={replace}
      className={`inline-flex items-center gap-1 text-sm text-dark-brown/60 hover:text-dark-brown transition-colors ${className}`}
      aria-label="Go back"
    >
      <ArrowLeft className="h-4 w-4" aria-hidden="true" />
      {label}
    </Link>
  );
};

export default BackButton;
