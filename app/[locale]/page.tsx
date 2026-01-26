"use client";

import { useTranslations } from "next-intl";
import { getFullAssetUrl } from "@/lib/utils";
import Hero from "../_components/hero";
import Section from "../_components/section";
import Statistics from "../_components/statistics";

export default function Home() {
	const t = useTranslations("home");

	const sections = [
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
			<Hero />
			{sections.map((section) => (
				<Section key={section.id} {...section} />
			))}
			<Statistics />
		</main>
	);
}
