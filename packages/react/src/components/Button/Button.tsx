import React from "react";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, children, ...props }, ref) => {
    const Component = asChild ? Slot : "button";

    return (
      <Component ref={ref} {...props}>
        {children}
      </Component>
    );
  },
);

export default Button;
