import { Input as BaseInput } from "@/components/ui/input";
import type { ComponentProps } from "react";

type InputProps = ComponentProps<typeof BaseInput>;

const Input = ({ className, ...props }: InputProps) => {
    return (
        <BaseInput
            {...props}
            className={`${className} rounded-xl border-dark-brown/10 bg-cream/40 text-black placeholder:text-dark-brown/30 transition-all focus-visible:border-tan focus-visible:ring-2 focus-visible:ring-tan/15`}
        />
    );
};

export default Input;