import { useState } from "react";
import { extractDigits, isValidPhoneNumber } from "@/lib/helpers";

export function usePhoneValidation() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const isValid = phone.length > 0 && isValidPhoneNumber(phone) && !error;

  const handleChange = (raw: string, requiredMsg: string) => {
    const digits = extractDigits(raw);
    setPhone(digits);

    if (digits.length === 0 || !isValidPhoneNumber(digits)) {
      setError(requiredMsg);
      return;
    }
    setError("");
  };

  return { phone, error, isValid, handleChange };
}
