import { Input as InputRoot } from "@headlessui/react";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }) => {
    return (
      <InputRoot
        className={cn(
          "flex h-9 w-full resize-none rounded-md border border-input bg-transparent px-3 py-2 text-sm-400 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        data-focus
        data-hover
        type={type}
        // ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
