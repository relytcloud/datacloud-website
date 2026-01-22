/** biome-ignore-all lint/suspicious/noEmptyBlockStatements: ignore */
import {
  Description,
  DialogPanel,
  DialogTitle,
  Dialog as RootDialog,
} from "@headlessui/react";
import type React from "react";
import { Button } from "./button";

export default function Dialog({
  isOpen,
  onConfirm,
  title,
  desc,
  confirm,
  children,
  footer,
  className,
}: {
  isOpen: boolean;
  onConfirm?: () => void;
  title: string | React.ReactNode;
  desc: string | React.ReactNode;
  confirm?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}) {
  return (
    <RootDialog className="relative z-50" onClose={() => {}} open={isOpen}>
      <div className="fixed inset-0 flex w-screen items-center justify-center bg-backdrop-dialog p-6 text-white">
        <DialogPanel className="dialog-border max-h-[600px] max-w-lg overflow-hidden rounded-md border-2 bg-grey-900 p-6 text-center shadow-dialog">
          <DialogTitle className="text-base-500">{title}</DialogTitle>
          <div className={`overflow-y-auto ${className}`}>
            <Description className={"mt-2 mb-4 text-sm-400"}>
              {desc}
            </Description>
            {children}
          </div>
          {footer ? (
            footer
          ) : (
            <Button
              className="mt-6 block w-full"
              onClick={onConfirm}
              size={"sm"}
              variant="gradient"
            >
              {confirm}
            </Button>
          )}
        </DialogPanel>
      </div>
    </RootDialog>
  );
}
