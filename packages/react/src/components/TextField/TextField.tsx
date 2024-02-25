import { ReactElement } from "react";
import { VariantProps, cva } from "class-variance-authority";
import * as Label from "@radix-ui/react-label";

import { cn } from "../../utils";

export interface TextFieldProps
  extends VariantProps<typeof inputVariants | typeof labelVariants> {
  name: string;
  label: string;
  errors?: boolean;
  required?: boolean;
  leadingIcon?: ReactElement;
  trailingIcon?: ReactElement;
}

const inputVariants = cva(
  "peer w-full appearance-none focus:outline-none focus:ring-0",
  {
    variants: {
      variant: {
        filled: [
          "rounded-t-md border-b-2 ",
          "px-3 pb-2 pt-4",
          "border-gray-70 text-gray-900",
          "hover:bg-blue-a6 focus:border-blue-20 focus:bg-blue-a12",
        ],
        outlined: [
          "rounded-md border-2",
          "px-[0.66rem] py-3",
          "bg-transparent text-gray-900",
          "focus:border-blue-20",
        ],
      },
      errors: {
        true: "border-red-40 focus:border-red-20",
      },
    },
    compoundVariants: [],
    defaultVariants: {},
  },
);

const labelVariants = cva(
  "absolute z-10 origin-[0] -translate-y-4 scale-75 transform duration-300 peer-placeholder-shown:scale-100 peer-focus:scale-75",
  {
    variants: {
      variant: {
        filled:
          "start-2.5 top-3 translate-x-0.5 text-gray-60 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-4 peer-focus:text-blue-20",
        outlined:
          "start-1 top-2 translate-x-0.5 bg-white px-2 text-gray-500 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-20",
      },
      errors: {
        true: "text-red-40 peer-focus:text-red-20",
      },
      leadIcon: {
        true: "",
      },
      trailIcon: {
        true: "",
      },
    },
  },
);

export function TextField({
  name,
  label,
  errors = false,
  required = false,
  variant = "filled",
  leadingIcon,
  trailingIcon,
}: TextFieldProps) {
  return (
    <div>
      <div className="relative">
        <input
          className={cn(inputVariants({ errors, variant }))}
          id={name}
          name={name}
          placeholder=""
        />
        <Label.Root
          className={cn(
            labelVariants({
              errors,
              variant,
              leadIcon: Boolean(leadingIcon),
              trailIcon: Boolean(trailingIcon),
            }),
          )}
          htmlFor={name}
        >
          {required ? `${label} *` : label}
        </Label.Root>
      </div>
    </div>
  );
}
