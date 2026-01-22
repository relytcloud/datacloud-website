import { Button as ButtonRoot } from "@headlessui/react";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary-main text-white hover:bg-primary-dark",
        gradient: "bg-primary text-white hover:bg-primary-hover",
        outline: "border border-grey-500 bg-background hover:bg-contrast-hover",
        ghost:
          "text-contrast-secondary hover:bg-contrast-hover hover:text-white",
        link: "text-text-tertiary hover:text-text-primary",
        linkBlack: "text-contrast-secondary hover:text-white",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        // link: "text-text-tertiary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-8 px-3 text-sm-500 lg:h-12 lg:px-6 lg:py-3 lg:text-base-500", // default 在md以下时降级为sm
        sm: "h-8 px-3 text-sm-500",
        lg: "h-10 px-3 py-2 text-base-500",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <ButtonRoot
        className={cn(buttonVariants({ size, variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
