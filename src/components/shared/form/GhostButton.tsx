import { Button } from "@/components/ui/button";
import type { ComponentProps } from "react";

type GhostButtonProps = ComponentProps<typeof Button>;

const GhostButton = ({ className, ...props }: GhostButtonProps) => {
  return (
    <Button
      {...props}
      className={`text-dark-brown transition-all bg-transparent hover:bg-transparent py-5 hover:text-dark-brown/50 ${className}`}
    >
      {props.children}
    </Button>
  );
};

export default GhostButton;
