import { Label } from "@/components/ui/label";
import type { ReactNode } from "react";
import InlineMessage from "@/components/shared/common/feedback/InlineMessage";

interface FieldProps {
  label: string;
  children: ReactNode;
  hint?: string;
  error?: string;
}

const Field = ({ label, children, hint, error }: FieldProps) => (
  <div className="space-y-0.5">
    <Label className="text-xs font-bold text-tan">{label}</Label>

    {children}

    {error ? (
      <InlineMessage type="error" message={error} className="text-xs" />
    ) : (
      hint && <InlineMessage type="info" message={hint} className="text-xs" />
    )}
  </div>
);

export default Field;
