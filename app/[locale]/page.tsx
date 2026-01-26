"use client";

import { useLocale, useTranslations } from "next-intl";
import { cn, getFullAssetUrl } from "@/lib/utils";
import Section from "../_components/section";
import Statistics from "../_components/statistics";

export default function Home() {
	const locale = useLocale();
	const t = useTranslations("home");
	const isZh = locale === "zh";

	console.log(locale);

	const sections = [
		{
			id: "hero",
			className: cn(
				"[&>.section-content]:text-center",
				"[&_.section-content_h2]:mx-auto",
				isZh
					? "[&_.section-content_h2]:w-[55%]"
					: "[&_.section-content_h2]:w-[70%]",
			),
			title: t("hero.title"),
			subtitle: t("hero.subtitle"),
			description: t("hero.description"),
			videoSource: [
				getFullAssetUrl("/media/main.webm"),
				getFullAssetUrl("/media/main.mp4"),
			],
			posterUrl: getFullAssetUrl("/media/main.webp"),
			logo: "",
		},
		{
			id: "powerdrill",
			className:
				"[&>.section-content]:top-[20%] [&>.section-content]:left-[10%]",
			title: t("powerdrill.title"),
			subtitle: t("powerdrill.subtitle"),
			description: t("powerdrill.description"),
			buttonText: t("powerdrill.buttonText"),
			buttonHref: "https://powerdrill.ai/",
			videoSource: [
				getFullAssetUrl("/media/pd.webm"),
				getFullAssetUrl("/media/pd.mp4"),
			],
			posterUrl: getFullAssetUrl("/media/pd.webp"),
			logo: getFullAssetUrl("/media/powerdrill.svg"),
		},
		{
			id: "memory-lake",
			className:
				"[&>.section-content]:top-[20%] [&>.section-content]:right-[10%]",
			title: t("memorylake.title"),
			subtitle: t("memorylake.subtitle"),
			description: t("memorylake.description"),
			buttonText: t("memorylake.buttonText"),
			buttonHref: "https://memorylake.ai/",
			videoSource: [
				getFullAssetUrl("/media/memorylake.webm"),
				getFullAssetUrl("/media/memorylake.mp4"),
			],
			posterUrl: getFullAssetUrl("/media/memorylake.webp"),
			logo: getFullAssetUrl("/media/memorylake.svg"),
		},
		{
			id: "relyt",
			className:
				"[&>.section-content]:top-[20%] [&>.section-content]:left-[10%]",
			title: t("relyt.title"),
			subtitle: t("relyt.subtitle"),
			description: t("relyt.description"),
			buttonText: t("relyt.buttonText"),
			buttonHref: "https://data.cloud/relytone",
			videoSource: [
				getFullAssetUrl("/media/relyt.webm"),
				getFullAssetUrl("/media/relyt.mp4"),
			],
			posterUrl: getFullAssetUrl("/media/relyt.webp"),
			logo: getFullAssetUrl("/media/relyt.svg"),
		},
	];

	return (
		<main>
			{sections.map((section) => (
				<Section key={section.id} {...section} />
			))}
			<Statistics />
		</main>
	);
}
