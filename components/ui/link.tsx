import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  id: string;
  children: React.ReactNode | string;
  className?: string;
}

export function TextLink({ id = "", children, className }: Props) {
  return (
    <Link
      className={cn(
        "text-primary-blue hover:underline hover:underline-offset-2",
        className
      )}
      href={id}
    >
      {children}
    </Link>
  );
}

export function AnchorLink({ id = "", children, className }: Props) {
  // Ensure href starts with # for anchor links
  const href = id.startsWith("#") ? id : `#${id}`;
  
  return (
    <Link
      className={cn(
        "text-primary-blue hover:underline hover:underline-offset-2",
        className
      )}
      href={href}
      scroll={true}
    >
      {children}
    </Link>
  );
}
