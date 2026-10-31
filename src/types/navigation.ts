import type { LucideIcon } from "lucide-react";

export type NavVariant = "admin" | "user";

export type NavItem = {
  key: string;
  icon: LucideIcon;
  to: string;
};
