"use client";

import {
  Checkbox,
  Description,
  Field,
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import type React from "react";
import { useFormContext } from "react-hook-form";
import { FormField, FormMessage } from "@/components/ui/form";
import { CheckBlankIcon } from "@/components/ui/icons/check-blank-icon";
import { CheckBoxFilled } from "@/components/ui/icons/check-box-filled";
import { ExpandMoreIcon } from "@/components/ui/icons/expand-more-icon";
import { cn } from "@/lib/utils";

function NestedMultiSelect({
  options,
  name,
  label,
  desc,
  max,
}: {
  options: { id: string; key: string; value: string }[];
  name: string;
  max?: number;
  label?: React.ReactNode;
  desc?: React.ReactNode;
  onChange?: (value: boolean) => void;
}) {
  const form = useFormContext();
  const { trigger } = form;

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <Field>
          <Label className={"mb-2 block text-sm-500"}>{label}</Label>
          <Listbox
            multiple
            onChange={(e) => {
              if (max && e.length > max) {
                return;
              }
              field.onChange(e);
            }}
            value={field.value}
          >
            <ListboxButton
              className={cn(
                "item-center space-between data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 input-focus-gradient-blue z-50 flex h-9 max-h-40 w-full min-w-32 overflow-hidden rounded-md border border-grey-500 bg-popover px-3 py-2 text-popover-foreground data-[state=closed]:animate-out data-[state=open]:animate-in"
              )}
              onBlur={() => {
                field.onBlur();
                trigger(name);
              }}
            >
              <p className="flex-1 truncate text-start text-sm-400">
                {field?.value
                  .map((person: string | number) => person)
                  .join(", ") || ""}
              </p>
              <ExpandMoreIcon
                className={cn("transition-all data-[state=open]:rotate-180")}
                height={16}
                width={16}
              />
            </ListboxButton>
            <ListboxOptions
              anchor="bottom"
              className={
                "max-h-56! w-(--button-width) rounded-md! border border-grey-500 border-px bg-black p-1 transition duration-100 ease-in [--anchor-gap:var(--spacing-1)] focus:outline-none data-leave:data-closed:opacity-0"
              }
            >
              {options.map((option) => (
                <ListboxOption
                  className={cn(
                    "group flex cursor-pointer select-none items-center gap-2 rounded-md px-3 py-2 hover:bg-white/16 data-selected:bg-white/24",
                    field.value.includes(option.key) ? "bg-[#011A3F0A]" : ""
                  )}
                  key={option.id}
                  value={option.key}
                >
                  <Checkbox
                    checked={field.value.includes(option.key)}
                    onChange={() => {
                      if (field.value.includes(option.key)) {
                        field.onChange(
                          field.value.filter(
                            (x: string | number) => x !== option.key
                          )
                        );
                      } else {
                        if (max && field.value?.length >= max) {
                          return;
                        }
                        field.onChange([...field.value, option.key]);
                      }
                    }}
                  >
                    {field.value.includes(option.key) ? (
                      <CheckBoxFilled color="white" height={20} width={20} />
                    ) : (
                      <CheckBlankIcon
                        color="var(--color-contrast-secondary)"
                        height={20}
                        width={20}
                      />
                    )}
                  </Checkbox>
                  <span className="text-sm-400 text-white">{option.value}</span>
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Listbox>
          <Description>{desc}</Description>
          <FormMessage />
        </Field>
      )}
    />
  );
}

export default NestedMultiSelect;
