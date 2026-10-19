import { Button } from "@/components/ui/button";
import type { ComponentProps } from "react";

type MainButtonProps = ComponentProps<typeof Button>;

const MainButton = ({ className, ...props}:MainButtonProps) => {
    return (
        <Button
            {...props}
            className={`text-cream shadow-sm transition-all bg-dark-brown py-5 hover:bg-tan ${className}`}
        >
            {props.children}
        </Button>
    );
}

export default MainButton; 