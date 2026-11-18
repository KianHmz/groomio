import { Textarea as BaseTextarea } from "@/components/ui/textarea";
import type { ComponentProps } from "react";

type TextareaProps = ComponentProps<typeof BaseTextarea>;

const Textarea = ({ className, ...props }: TextareaProps) => {
  return (
    <BaseTextarea
      {...props}
      className={`${className} rounded-xl border-dark-brown/10 bg-cream/40 text-black placeholder:text-dark-brown/30 transition-all focus-visible:border-tan focus-visible:ring-2 focus-visible:ring-tan/15`}
    />
  );
};

export default Textarea;
