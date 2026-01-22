/** biome-ignore-all lint/suspicious/noExplicitAny: <any is used for type inference> */
/** biome-ignore-all lint/a11y/useKeyWithClickEvents: ignore */
/** biome-ignore-all lint/a11y/noNoninteractiveElementInteractions: ignore */
/** biome-ignore-all lint/complexity/useLiteralKeys: ignore */
"use client";

import { Description, Field, Label } from "@headlessui/react";
import type React from "react";
import { useEffect, useState } from "react";
import {
  type ControllerRenderProps,
  type FieldValues,
  useFormContext,
} from "react-hook-form";
import CheckBox from "@/components/ui/checkbox";
import { FormField, FormMessage } from "@/components/ui/form";
import { ExpandMoreIcon } from "@/components/ui/icons/expand-more-icon";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

function NestedMultiSelectInput({
  options,
  name,
  label,
  max = 1,
  desc,
  placeholder,
  showCheckbox = true,
}: {
  options: { id: string; key: string; value: string }[];
  name: string;
  label?: React.ReactNode;
  max?: number;
  desc?: React.ReactNode;
  placeholder?: string;
  showCheckbox?: boolean;
}) {
  const form = useFormContext();

  const { trigger } = form;
  const [selectOpen, setSelectOpen] = useState(false);
  const [selectedVals, setSelectedVals] = useState<any>({});
  const [otherValue, setOtherValue] = useState("");

  const handleClickItem = (
    opt: { key: string; value: string },
    field: ControllerRenderProps<FieldValues, string>
  ) => {
    if (max > 1 && selectedVals[opt.key]) {
      const tempObj = selectedVals;
      delete tempObj[opt.key];

      setSelectedVals(tempObj);
      field.onChange(
        Object.keys(tempObj).map((key) => selectedVals[key].value)
      );
    } else {
      if (max > 1 && Object.keys(selectedVals).length >= max) {
        return;
      }

      if (max === 1) {
        const tempObj = {
          [opt.key]: opt,
        };
        setSelectedVals(tempObj);
        field.onChange([opt.value]);
      } else {
        const tempObj = selectedVals;
        tempObj[opt.key] = opt;
        setSelectedVals(tempObj);
        field.onChange(
          Object.keys(tempObj).map((key) => selectedVals[key].value)
        );
      }
    }
  };

  useEffect(() => {
    const handleClick = (event: any) => {
      if (
        !(
          event.target?.closest("#NestedSelectInput") ||
          event.target?.closest(".NestedSelectInput-select")
        ) &&
        selectOpen
      ) {
        trigger(name);
        setSelectOpen(false);
      }
    };
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [name, selectOpen, trigger]);

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <Field className="relative">
          <Label className={"mb-2 block text-sm-500"}>{label}</Label>
          <Input
            autoComplete="off"
            className="input-focus-gradient-blue cursor-pointer border border-grey-500 pr-7"
            data-active={selectOpen}
            id="NestedSelectInput"
            onClick={() => {
              setSelectOpen(!selectOpen);
            }}
            placeholder={placeholder}
            readOnly
            value={field?.value.join(",")}
          />
          <ExpandMoreIcon
            className={cn(
              "expandmore absolute top-[38px] right-[12px] transition-all"
            )}
            data-active={selectOpen}
            height={16}
            width={16}
          />

          {selectOpen && (
            <div className="absolute z-20 max-h-56 w-full overflow-scroll rounded-md border border-grey-500 bg-black">
              {options.map((option) => (
                <p
                  className={cn(
                    "group NestedSelectInput-select flex cursor-pointer select-none items-center gap-2 rounded-md px-3 py-2 hover:bg-white/16 data-selected:bg-white/24",
                    selectedVals[option.key] && "bg-[#FFFFFF3D]",
                    max > 1 &&
                      Object.keys(selectedVals).length === max &&
                      !selectedVals[option.key] &&
                      "disabled-select"
                  )}
                  key={option.id}
                  onClick={() => handleClickItem(option, field)}
                >
                  {showCheckbox && (
                    <CheckBox
                      checked={selectedVals[option.key]}
                      disabled={
                        Object.keys(selectedVals).length === max &&
                        !selectedVals[option.key]
                      }
                      iconClassname="NestedSelectInput-select"
                    />
                  )}

                  <span className="text-sm-400 text-white">{option.value}</span>
                </p>
              ))}
              <p
                className={cn(
                  "group NestedSelectInput-select flex cursor-pointer select-none items-center gap-2 rounded-md px-3 py-2 hover:bg-white/16 data-selected:bg-white/24",
                  selectedVals["Other"] && "bg-[#FFFFFF3D]",
                  max > 1 &&
                    Object.keys(selectedVals).length === max &&
                    !selectedVals["Other"] &&
                    "disabled-select"
                )}
                key="Other"
                onClick={() => {
                  handleClickItem({ key: "Other", value: otherValue }, field);
                }}
              >
                {showCheckbox && (
                  <CheckBox
                    checked={selectedVals["Other"]}
                    disabled={
                      Object.keys(selectedVals).length === max &&
                      !selectedVals["Other"]
                    }
                    iconClassname="NestedSelectInput-select"
                  />
                )}
                <Input
                  autoComplete="off"
                  className="input-focus-gradient-blue h-6! border border-grey-500"
                  disabled={
                    max > 1 &&
                    Object.keys(selectedVals).length === max &&
                    !selectedVals["Other"]
                  }
                  onBlur={() => {
                    // blur再修改值
                    const opt = { key: "Other", value: otherValue || "Other" };
                    const tempObj = selectedVals;
                    tempObj[opt.key] = opt;

                    setSelectedVals(tempObj);
                    field.onChange(
                      Object.keys(tempObj).map((key) => selectedVals[key].value)
                    );
                    field.onBlur();
                    trigger(name);
                  }}
                  onChange={(e) => {
                    setOtherValue(e.target.value);
                  }}
                  onClick={(e) => {
                    if (!selectedVals["Other"]) {
                      // 占位, 不修改field值;
                      if (max === 1) {
                        setSelectedVals({
                          Other: {
                            key: "Other",
                            value: "Other",
                          },
                        });
                        field.onChange(["Other"]);
                      } else {
                        setSelectedVals({
                          ...selectedVals,
                          Other: {
                            key: "Other",
                            value: "Other",
                          },
                        });
                        field.onChange([...field.value, "Other"]);
                      }
                    }
                    e.stopPropagation();
                    return false;
                  }}
                  placeholder="Other"
                  value={otherValue}
                />
              </p>
            </div>
          )}
          <Description>{desc}</Description>
          <FormMessage />
        </Field>
      )}
    />
  );
}

export default NestedMultiSelectInput;
