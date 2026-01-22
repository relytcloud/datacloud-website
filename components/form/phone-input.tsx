"use client";

import { Field } from "@headlessui/react";
import type React from "react";
import { useFormContext } from "react-hook-form";
import { FormField, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

function NestedPhoneInput({ label }: { label?: React.ReactNode }) {
  const form = useFormContext();
  const { trigger } = form;

  return (
    <div>
      <span className={"mb-2 block text-sm-500"}>{label}</span>
      <div className="relative flex flex-1 flex-row">
        <FormField
          control={form?.control}
          name={"intlDialCode"}
          render={({ field }) => (
            <Field className="w-[68px]">
              <div className="relative flex w-fit flex-row">
                <Input
                  autoComplete="off"
                  className="input-focus-gradient-blue w-[68px] rounded-e-none border border-grey-500 border-r-0 py-2 pr-3 pl-[20.75px]"
                  placeholder="1"
                  {...field}
                  onBlur={() => {
                    field.onBlur();
                    trigger("intlDialCode");
                  }}
                />
                <span className="absolute top-1/2 left-3 -translate-y-1/2 text-sm-400 text-white">
                  +
                </span>
              </div>
              <FormMessage className="whitespace-nowrap" />
            </Field>
          )}
        />
        <FormField
          control={form?.control}
          name={"phone"}
          render={({ field }) => (
            <Field className="w-full">
              <Input
                autoComplete="off"
                className="input-focus-gradient-blue rounded-s-none border border-grey-500"
                {...field}
                onBlur={() => {
                  field.onBlur();
                  trigger("phone");
                }}
              />
              <FormMessage />
            </Field>
          )}
        />
      </div>
    </div>
  );
}

export default NestedPhoneInput;
