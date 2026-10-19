import { STORAGE } from "@/config/constants";
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage,
} from "@/lib/utils";
import { createContext, useState, type ReactNode } from "react";

interface ReservationType {
  phone: string;
  setPhone: (p: string) => void;
  reset: () => void;
}

export const ReservationContext = createContext<ReservationType | undefined>(
  undefined,
);

export const ReservationProvider = ({ children }: { children: ReactNode }) => {
  const [phone, setPhoneState] = useState<string>(() => {
    return getLocalStorage(STORAGE.RESERVATION_PHONE, "");
  });

  const setPhone = (phone: string) => {
    setLocalStorage(STORAGE.RESERVATION_PHONE, phone);
    setPhoneState(phone);
  };

  const reset = () => {
    removeLocalStorage(STORAGE.RESERVATION_PHONE);
    setPhone("");
  };

  return (
    <ReservationContext value={{ phone, setPhone, reset }}>
      {children}
    </ReservationContext>
  );
};
