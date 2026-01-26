import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
	return clsx(inputs);
}

export function AndTransfer(str: string) {
	return (
		str?.replace(
			/&/g,
			'<span style="font-family: var(--font-inter), sans-serif;">&</span>',
		) || ""
	);
}

export function getFullAssetUrl(url: string, version?: string) {
	if (process.env.NEXT_PUBLIC_CDN_BASE_URL) {
		return `${process.env.NEXT_PUBLIC_CDN_BASE_URL}${url}${version ? `?v=${version}` : ""}`;
	}
	return url;
}
