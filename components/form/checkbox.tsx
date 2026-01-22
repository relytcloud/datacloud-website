"use client";

import { Checkbox, Description, Field, Label } from "@headlessui/react";
import { useFormContext } from "react-hook-form";
import { FormField } from "@/components/ui/form";
import { CheckBlankIcon } from "../ui/icons/check-blank-icon";
import { CheckedIcon } from "../ui/icons/checked-icon";

function NestedCheckbox({
  name,
  label,
  desc,
  onChange,
}: {
  name: string;
  label?: React.ReactNode;
  desc?: React.ReactNode;
  onChange?: (value: boolean) => void;
}) {
  const form = useFormContext();
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <Field className="flex flex-row items-center">
          <Checkbox
            checked={field.value}
            onChange={(checked) => {
              field.onChange(checked);
              onChange?.(checked);
            }}
          >
            {field.value ? (
              <CheckedIcon
                color="var(--color-contrast-secondary)"
                height={16}
                width={16}
              />
            ) : (
              <CheckBlankIcon
                color="var(--color-contrast-secondary"
                height={16}
                width={16}
              />
            )}
          </Checkbox>
          <div className="text-xs-400">
            <Label>{label}</Label>
            <Description>{desc}</Description>
          </div>
        </Field>
      )}
    />
  );
}

export default NestedCheckbox;
