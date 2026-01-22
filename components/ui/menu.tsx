/** biome-ignore-all lint/style/noExportedImports: ignore */
import {
  Menu,
  MenuButton as MenuButtonRoot,
  MenuItem as MenuItemRoot,
  MenuItems as MenuItemsRoot,
  type MenuItemsProps as MenuItemsRootProps,
} from "@headlessui/react";
import { cva, type VariantProps } from "class-variance-authority";
import React, { Fragment, type RefAttributes } from "react";
import { cn } from "@/lib/utils";
import { Button, type ButtonProps } from "./button";
import { ExpandMoreIcon } from "./icons/expand-more-icon";

// TODO：https://github.com/tailwindlabs/headlessui/issues/239

const menuItemVariants = cva("!justify-start w-full");

export interface MenuItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof menuItemVariants> {
  variant?: ButtonProps["variant"];
  size?: ButtonProps["size"];
}

const MenuItem = React.forwardRef<HTMLButtonElement, MenuItemProps>(
  ({ className, variant = "ghost", size = "sm", ...props }, ref) => {
    return (
      <MenuItemRoot ref={ref}>
        <Button
          className={cn(menuItemVariants({ className }))}
          size={size}
          variant={variant}
          {...props}
        />
      </MenuItemRoot>
    );
  }
);
MenuItem.displayName = "MenuItem";

const MenuButton = React.forwardRef<HTMLButtonElement, MenuItemProps>(
  ({ className, variant = "ghost", size = "sm", ...props }, ref) => {
    return (
      <MenuButtonRoot as={Fragment}>
        <Button
          className={cn(
            "outline-none focus:outline-none data-open:bg-contrast-hover",
            className
          )}
          ref={ref}
          size={size}
          variant={variant}
          {...props}
        >
          {props.children}
          <ExpandMoreIcon className="ml-1.5 h-4 w-4" />
        </Button>
      </MenuButtonRoot>
    );
  }
);
MenuButton.displayName = "MenuButton";

const menuItemsVariants = cva(
  "absolute top-14 z-10 w-[240px] rounded-xl border transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0",
  {
    variants: {
      variant: {
        // 有别的颜色可以放这里
        default: "border-text-tertiary bg-black text-white",
      },
      origin: {
        default: "origin-top-left",
        topLeft: "origin-top-left",
        topRight: "origin-top-right",
        bottomLeft: "origin-bottom-left",
        bottomRight: "origin-bottom-right",
      },
      size: {
        default: "p-1",
        sm: "p-1",
        lg: "p-2",
      },
    },
    defaultVariants: {
      variant: "default",
      origin: "default",
      size: "default",
    },
  }
);

export interface MenuItemsProps
  extends MenuItemsRootProps,
    RefAttributes<HTMLDivElement>,
    VariantProps<typeof menuItemsVariants> {
  className?: string;
}

const MenuItems = React.forwardRef<HTMLDivElement, MenuItemsProps>(
  ({ className, variant, size, origin, ...props }, ref) => {
    return (
      <MenuItemsRoot
        className={cn(menuItemsVariants({ size, variant, origin, className }))}
        // anchor={{
        //   to: "bottom start",
        //   gap: 16,
        // }}
        ref={ref}
        transition
        {...props}
      />
    );
  }
);
MenuItems.displayName = "MenuItems";

export { Menu, MenuItem, MenuButton, MenuItems };
