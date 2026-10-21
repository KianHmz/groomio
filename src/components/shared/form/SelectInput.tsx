import { SelectTrigger } from "@/components/ui/select";
import type { ComponentProps } from "react";

type SelectInputProps = ComponentProps<typeof SelectTrigger>;

const SelectInput = ({ className, children, ...props }: SelectInputProps) => {
    return (
        <SelectTrigger
            {...props}
            className={`${className} rounded-xl border-dark-brown/10 bg-cream/40 text-black placeholder:text-dark-brown/30 transition-all focus-visible:border-tan focus-visible:ring-2 focus-visible:ring-tan/15 w-full`}
        >
            {children}
        </SelectTrigger>
    );
};

export default SelectInput;