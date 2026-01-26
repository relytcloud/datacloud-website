"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Banner() {
	const t = useTranslations("aboutUs.banner");

	return (
		<div className="relative pt-20 lg:pt-0">
			<div className="relative h-[174px] lg:h-[278px] xl:h-[348px]">
				<Image
					alt={"about-us"}
					fill
					objectFit="contain"
					src="/assets/about-us/about-us-banner.webp"
				/>
			</div>
			<div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-4xl-700 text-white lg:text-6xl-700">
				{t("title")}
			</div>
		</div>
	);
}
