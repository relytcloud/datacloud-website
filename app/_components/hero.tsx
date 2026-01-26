"use client";

// import Image from "next/image";
import { useTranslations } from "next-intl";
import { cn, getFullAssetUrl } from "@/lib/utils";
import Trangle from "./trangle";

export default function Hero() {
	const videoSource = [
		getFullAssetUrl("/media/main.webm"),
		getFullAssetUrl("/media/main.mp4"),
	];

	const t = useTranslations("home");
	return (
		<section className="relative flex h-screen items-center justify-center overflow-hidden">
			<div className="absolute inset-0 z-0">
				<video
					autoPlay
					className="absolute inset-0 h-full w-full object-cover"
					loop
					muted
					playsInline
					poster={getFullAssetUrl("/media/main.webp")}
				>
					{videoSource.map((source) => (
						<source
							key={source}
							src={source}
							type={`video/${source.split(".").pop()}`}
						/>
					))}
				</video>
				<div className="absolute inset-0 bg-black/40" />
			</div>
			<div className="section-content absolute z-10 mx-auto max-w-2xl px-4 text-center">
				<div className="relative flex max-w-xl flex-col items-center gap-2">
					<Trangle />
					<div className="relative z-10 mt-[180px] flex max-w-[520px] flex-col items-center gap-2 backdrop-blur-[1px]">
						<h2
							className={cn(
								"mx-auto text-center font-semibold text-3xl text-white md:text-4xl lg:text-5xl",
							)}
						>
							{t("hero.title.line1")}
							<br />
							{t("hero.title.line2")}
						</h2>
						<p className="mx-auto mb-2.5 max-w-2xl text-sm text-white/80 md:mb-7 md:text-base lg:text-lg">
							<span className="font-semibold text-white">
								{t("hero.subtitle")}
							</span>{" "}
							{t("hero.description")}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
