import { Checkbox } from "@headlessui/react";
import { Fragment } from "react";
import { cn } from "@/lib/utils";
import { CheckBlankIcon } from "./icons/check-blank-icon";
import { CheckBoxFilled } from "./icons/check-box-filled";

interface ICheckBox {
  checked: boolean;
  disabled: boolean;
  iconClassname?: string;
}

export default function CheckBox({
  checked,
  disabled,
  iconClassname,
}: ICheckBox) {
  return (
    <Checkbox as={Fragment} checked disabled>
      {checked ? (
        <CheckBoxFilled
          className={cn(iconClassname, disabled && "disabled-select")}
          color="white"
          height={20}
          width={20}
        />
      ) : (
        <CheckBlankIcon
          className={cn(iconClassname, disabled && "disabled-select")}
          color="var(--contrast-secondary)"
          height={20}
          width={20}
        />
      )}
    </Checkbox>
  );
}
