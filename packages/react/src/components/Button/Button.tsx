import {
  ButtonHTMLAttributes,
  ReactElement,
  ReactNode,
  cloneElement,
  forwardRef,
} from "react";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "../../utils";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  loadingIcon?: ReactElement;
  leadingIcon?: ReactElement;
  trailingIcon?: ReactElement;
}

const buttonVariants = cva(
  "flex items-center justify-center gap-2 rounded-md outline-none ",
  {
    // need to declare variants to make compound variants work
    variants: {
      intent: {
        primary: "",
        success: "",
        danger: "",
      },
      size: {
        medium: "h-9 px-4 py-2",
        large: "h-12 px-8 py-4",
      },
      variant: {
        solid: "text-white",
        outline: "border",
        ghost: "",
      },
    },
    compoundVariants: [
      {
        intent: "primary",
        variant: "solid",
        className:
          "bg-blue-40 hover:bg-blue-30 focus:bg-blue-20 active:bg-blue-10 disabled:bg-blue-70",
      },
      {
        intent: "primary",
        variant: "outline",
        className: "border-blue-40 disabled:border-blue-70",
      },
      {
        intent: "primary",
        variant: ["outline", "ghost"],
        className:
          "text-blue-40 hover:bg-blue-a6 focus:bg-blue-a12 active:bg-blue-a22 disabled:text-blue-70",
      },
      {
        intent: "success",
        variant: "solid",
        className:
          "bg-green-40 hover:bg-green-30 focus:bg-green-20 active:bg-green-10",
      },
      {
        intent: "success",
        variant: "outline",
        className: "border-green-40",
      },
      {
        intent: "success",
        variant: ["outline", "ghost"],
        className:
          "text-green-40 hover:bg-green-a6 focus:bg-green-a12 active:bg-green-a22",
      },
      {
        intent: "danger",
        variant: "solid",
        className: "bg-red-40 hover:bg-red-30 focus:bg-red-20 active:bg-red-10",
      },
      {
        intent: "danger",
        variant: "outline",
        className: "border-red-40",
      },
      {
        intent: "danger",
        variant: ["outline", "ghost"],
        className:
          "text-red-40 hover:bg-red-a6 focus:bg-red-a12 active:bg-red-a22",
      },
    ],
    defaultVariants: {
      intent: "primary",
      size: "medium",
      variant: "solid",
    },
  },
);

const styleIcons = (icon?: ReactElement) =>
  icon ? cloneElement(icon, { className: "h-4 w-4" }) : null;

const Loading = ({ loadingIcon }: { loadingIcon?: ReactElement }) => {
  return loadingIcon || "Loading";
};

const Content = ({
  children,
  leadingIcon,
  trailingIcon,
}: {
  children: ReactNode;
  leadingIcon?: ReactElement;
  trailingIcon?: ReactElement;
}) => (
  <>
    {styleIcons(leadingIcon)}
    {children}
    {styleIcons(trailingIcon)}
  </>
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild = false,
      children,
      className,
      intent,
      size,
      variant,
      loading,
      loadingIcon,
      leadingIcon,
      trailingIcon,
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot : "button";

    return (
      <Component
        ref={ref}
        className={cn(buttonVariants({ className, intent, size, variant }))}
        {...props}
      >
        {loading ? (
          <Loading loadingIcon={loadingIcon} />
        ) : (
          <Content leadingIcon={leadingIcon} trailingIcon={trailingIcon}>
            {children}
          </Content>
        )}
      </Component>
    );
  },
);
