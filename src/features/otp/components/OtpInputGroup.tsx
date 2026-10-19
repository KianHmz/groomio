import { useCallback, useRef } from "react";
import { extractDigits } from "@/lib/helpers/validators";
import { OTP } from "@/config/constants";

interface OtpInputGroupProps {
  value: string[];
  onChange: (next: string[]) => void;
  disabled?: boolean;
  onEdited?: () => void;
}

const createEmptyOtp = (): string[] => Array(OTP.LENGTH).fill("");

export const OtpInputGroup = ({
  value,
  onChange,
  disabled,
  onEdited,
}: OtpInputGroupProps) => {
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const focus = (i: number) => inputRefs.current[i]?.focus();

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
      const digit = extractDigits(e.target.value).slice(-1);
      const next = [...value];
      next[index] = digit;
      onChange(next);
      onEdited?.();
      if (digit && index < OTP.LENGTH - 1) focus(index + 1);
    },
    [value, onChange, onEdited],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
      if (e.key === "Backspace" && !value[index] && index > 0) {
        e.preventDefault();
        const next = [...value];
        next[index - 1] = "";
        onChange(next);
        focus(index - 1);
        return;
      }
      if (e.key === "ArrowRight" && index < OTP.LENGTH - 1) {
        e.preventDefault();
        focus(index + 1);
        return;
      }
      if (e.key === "ArrowLeft" && index > 0) {
        e.preventDefault();
        focus(index - 1);
      }
    },
    [value, onChange],
  );

  const handlePaste = useCallback(
    (e: React.ClipboardEvent<HTMLInputElement>) => {
      const pasted = extractDigits(e.clipboardData.getData("text")).slice(
        0,
        OTP.LENGTH,
      );
      if (!pasted) return;
      e.preventDefault();
      const next = createEmptyOtp();
      for (let i = 0; i < pasted.length; i += 1) next[i] = pasted[i];
      onChange(next);
      onEdited?.();
      focus(Math.min(pasted.length, OTP.LENGTH - 1));
    },
    [onChange, onEdited],
  );

  return (
    <div className="mb-3 flex gap-2">
      {value.map((digit, index) => (
        <input
          key={index}
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
          value={digit}
          type="text"
          inputMode="numeric"
          autoComplete="one-time-code"
          maxLength={1}
          disabled={disabled}
          onChange={(e) => handleInputChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          aria-label={`OTP digit ${index + 1}`}
          className="h-12 w-10 rounded-xl border-2 bg-sage/20 text-center text-lg focus:outline-none focus:ring-1"
        />
      ))}
    </div>
  );
};

export { createEmptyOtp };
