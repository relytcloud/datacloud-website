import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function AndTransfer(str: string) {
  return (
    str?.replace(
      /&/g,
      '<span style="font-family: var(--font-inter), sans-serif;">&</span>'
    ) || ""
  );
}
