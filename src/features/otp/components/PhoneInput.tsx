import { type ChangeEvent } from "react";
import { Phone } from "lucide-react";

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const PhoneInput = ({ value, onChange }: PhoneInputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    onChange(e.target.value);

  return (
    <div className="flex-1 flex items-center relative">
      <Phone size={16} className="absolute left-2.5 text-gray-500" />
      <input
        type="tel"
        inputMode="numeric"
        value={value}
        onChange={handleChange}
        className="w-full border-2 p-2 pl-8 rounded-md text-sm focus:outline-none focus:ring-1 tracking-wider"
        placeholder="9123334455"
      />
    </div>
  );
};