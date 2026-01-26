"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface Props {
	className?: string;
}

export default function LocaleSwitcher({ className }: Props) {
	const pathname = usePathname();

	// Get the path without locale prefix
	const getPathWithoutLocale = () => {
		if (!pathname) {
			return "/";
		}
		const segments = pathname.split("/");
		// Remove the locale segment if it exists
		if (segments[1] && (segments[1] === "en" || segments[1] === "zh")) {
			const path = `/${segments.slice(2).join("/")}`;
			return path || "/";
		}
		return pathname;
	};

	const pathWithoutLocale = getPathWithoutLocale();

	// Determine current locale
	const getCurrentLocale = () => {
		if (!pathname) {
			return "zh";
		}
		const segments = pathname.split("/");
		if (segments[1] === "en") {
			return "en";
		}
		return "zh";
	};

	const currentLocale = getCurrentLocale();
	const zhHref = `/zh${pathWithoutLocale}`;
	const enHref = `/en${pathWithoutLocale}`;

	return (
		<div className={cn("flex items-center gap-2", className)}>
			<Link
				className={cn(
					"font-medium text-sm uppercase transition-colors",
					currentLocale === "en" ? "text-white" : "text-gray-400",
				)}
				href={enHref}
			>
				EN
			</Link>
			<span className="h-4 w-px bg-gray-400" />
			<Link
				className={cn(
					"font-medium text-sm uppercase transition-colors",
					currentLocale === "zh" ? "text-white" : "text-gray-400",
				)}
				href={zhHref}
			>
				CN
			</Link>
		</div>
	);
}
