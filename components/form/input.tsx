"use client";

import { Description, Field, Label } from "@headlessui/react";
import type React from "react";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { FormField, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function NestedInput({
  name,
  label,
  desc,
  rows,
  placeholder = "",
}: {
  name: string;
  label?: React.ReactNode;
  desc?: React.ReactNode;
  placeholder?: string;
  rows?: number;
}) {
  const form = useFormContext();
  const { trigger, getFieldState, formState } = form;
  const { isTouched } = getFieldState(name, formState);

  useEffect(() => {
    if (isTouched) {
      trigger(name, { shouldFocus: true });
    }
  }, [isTouched, trigger, name]);

  return (
    <FormField
      control={form?.control}
      name={name}
      render={({ field }) => (
        <Field>
          <Label className={"mb-2 block text-sm-500"}>{label}</Label>
          {rows ? (
            <Textarea
              className="input-focus-gradient-blue border-grey-500"
              placeholder={placeholder}
              {...field}
              onBlur={() => {
                field.onBlur();
                trigger(name);
              }}
            />
          ) : (
            <Input
              autoComplete="off"
              className="input-focus-gradient-blue border border-grey-500"
              placeholder={placeholder}
              {...field}
              onBlur={() => {
                field.onBlur();
                trigger(name);
              }}
            />
          )}
          <Description>{desc}</Description>
          <FormMessage />
        </Field>
      )}
    />
  );
}

export default NestedInput;
