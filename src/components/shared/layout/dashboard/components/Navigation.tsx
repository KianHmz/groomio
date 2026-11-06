import { NAV_ITEMS } from "@/lib/constants/navigation";
import type { NavVariant } from "@/types/navigation";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";

type NavigationProps = {
  variant: NavVariant;
};

const Navigation = ({ variant }: NavigationProps) => {
  const { t } = useTranslation(["adminDashboard"]);

  return (
    <nav className="fixed inset-x-0 bottom-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl flex justify-center gap-2 py-3 text-xs bg-white backdrop-blur">
      {NAV_ITEMS[variant].map(({ key, icon: Icon, to }) => (
        <NavLink
          to={to}
          key={key}
          className={({ isActive }) =>
            `${isActive ? "bg-dark-brown text-cream hover:bg-amber-950" : "bg-cream/50 text-dark-brown/80 hover:text-dark-brown"} flex flex-col items-center gap-1 rounded-2xl p-4 transition`
          }
        >
          <Icon size={20} />
          <span>{t(`nav.${key}` as any)}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
