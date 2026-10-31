import type { NavItem, NavVariant } from "@/types";
import { Calendar, Home, Users } from "lucide-react";
import { ROUTES } from "./routes";

export const NAV_ITEMS: Record<NavVariant, readonly NavItem[]> = {
  admin: [
    { key: "home", icon: Home, to: ROUTES.ADMIN.HOME },
    { key: "appointments", icon: Calendar, to: ROUTES.ADMIN.APPOINTMENTS },
    { key: "customers", icon: Users, to: ROUTES.ADMIN.CUSTOMERS },
  ],
  user: [],
};