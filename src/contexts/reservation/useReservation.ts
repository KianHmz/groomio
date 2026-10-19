import { useContext } from "react";
import { ReservationContext } from "@/contexts/reservation/ReservationContext";

export const useReservation = () => {
  const context = useContext(ReservationContext);
  if (!context)
    throw new Error("useReservation must be used within ReservationProvider");
  return context;
};
