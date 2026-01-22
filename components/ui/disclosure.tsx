/** biome-ignore-all lint/style/noExportedImports: ignore */
import {
  Disclosure,
  DisclosureButton as DisclosureButtonRoot,
  DisclosurePanel,
} from "@headlessui/react";
import { cva, type VariantProps } from "class-variance-authority";
import React, { useState } from "react";
import { ExpandMoreIcon } from "@/components/ui/icons/expand-more-icon";
import { cn } from "@/lib/utils";

const disclosureButtonVariants = cva(
  "group flex w-full items-center justify-between",
  {
    variants: {
      size: {
        default: "h-8 text-sm-500 lg:h-12 lg:px-6 lg:py-3 lg:text-base-500", // default 在md以下时降级为sm
        sm: "h-8 text-sm-500",
        lg: "h-10 py-2 text-base-500",
        icon: "h-10 w-10",
      },
    },
  }
);

export interface DisclosureButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof disclosureButtonVariants> {}

const DisclosureButton = React.forwardRef<
  HTMLButtonElement,
  DisclosureButtonProps
>(({ className, children, size = "sm", ...props }, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <DisclosureButtonRoot
      className={cn(disclosureButtonVariants({ size, className }))}
      onClick={handleToggle}
      ref={ref}
      {...props}
    >
      {children as React.ReactNode}
      <ExpandMoreIcon
        className={`ml-1.5 h-4 w-4 transform transition-transform duration-300 ${
          isOpen ? "rotate-180" : "rotate-0"
        }`}
      />
    </DisclosureButtonRoot>
  );
});

DisclosureButton.displayName = "DisclosureButton";

export { DisclosureButton, Disclosure, DisclosurePanel };
