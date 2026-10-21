import { Textarea } from "@/components/ui/textarea";
import type { ComponentProps } from "react";

type TextareaInputProps = ComponentProps<typeof Textarea>;

const TextareaInput = ({ className, ...props }: TextareaInputProps) => {
  return (
    <Textarea
      {...props}
      className={`${className} rounded-xl border-dark-brown/10 bg-cream/40 text-black placeholder:text-dark-brown/30 transition-all focus-visible:border-tan focus-visible:ring-2 focus-visible:ring-tan/15`}
    />
  );
};

export default TextareaInput;
