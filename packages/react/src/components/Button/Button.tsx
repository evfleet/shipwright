import React from "react";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, asChild = false, ...props }, ref) => {
		const Component = asChild ? Slot : "button";

		return <Component ref={ref} {...props} />;
	},
);

export default Button;
