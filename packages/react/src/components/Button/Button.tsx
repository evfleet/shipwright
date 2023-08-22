import { FunctionComponent } from "react";
import { Slot } from "@radix-ui/react-slot";

interface ButtonProps {
  asChild?: boolean;
}

const Button: FunctionComponent<ButtonProps> = ({ asChild = false }) => {
  const Component = asChild ? Slot : "button";

  return <Component className="text-xl">Shipwright</Component>;
};

export default Button;
