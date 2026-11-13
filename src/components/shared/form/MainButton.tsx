import { Button } from "@/components/ui/button";
import type { ComponentProps } from "react";

type MainButtonProps = ComponentProps<typeof Button>;

const MainButton = ({ className, ...props }: MainButtonProps) => {
  return (
    <Button
      {...props}
      className={`text-cream transition-all bg-dark-brown py-5 hover:bg-dark-brown/10 hover:text-dark-brown ${className}`}
    >
      {props.children}
    </Button>
  );
};

export default MainButton;
