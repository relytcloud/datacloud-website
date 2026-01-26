"use client";

import { useTranslations } from "next-intl";
import { getFullAssetUrl } from "@/lib/utils";

export default function Statistics() {
	const t = useTranslations("statistics");

	return (
		<section
			className={
				"relative flex h-screen items-center justify-center overflow-hidden"
			}
		>
			<div className="absolute inset-0 z-0">
				<video
					autoPlay
					className="absolute inset-0 h-full w-full object-cover"
					loop
					muted
					playsInline
					poster={getFullAssetUrl("/media/statistics.webp")}
				>
					<source
						src={getFullAssetUrl("/media/statistics.webm")}
						type="video/webm"
					/>
					<source
						src={getFullAssetUrl("/media/statistics.mp4")}
						type="video/mp4"
					/>
				</video>
				<div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgb(0_0_0/0.4)_0%,rgb(0_0_0)_100%)]" />
			</div>
			<div className="section-content absolute z-10 mx-auto max-w-6xl px-4">
				<div className="relative grid grid-cols-1 gap-8 md:grid-cols-3">
					{/* Vertical divider between column 1 and 2 */}
					<div className="vertical-bar absolute top-0 left-1/3 hidden h-full w-px -translate-x-1/2 md:block" />
					{/* Vertical divider between column 2 and 3 */}
					<div className="vertical-bar absolute top-0 left-2/3 hidden h-full w-px -translate-x-1/2 md:block" />
					{/* Column 1: Active Users */}
					<div className="flex flex-col items-center text-center">
						<div className="mb-2 font-bold text-4xl text-white md:text-6xl lg:text-7xl">
							{t("activeUsers.number")}
						</div>
						<h3 className="mb-2 font-semibold text-white text-xl md:text-2xl lg:text-3xl">
							{t("activeUsers.title")}
						</h3>
						<p className="text-gray-200 text-sm md:text-lg lg:text-xl">
							{t("activeUsers.description")}
						</p>
					</div>

					{/* Column 2: Questions Answered */}
					<div className="flex flex-col items-center text-center">
						<div className="mb-2 font-bold text-4xl text-white md:text-6xl lg:text-7xl">
							{t("questionsAnswered.number")}
						</div>
						<h3 className="mb-2 font-semibold text-white text-xl md:text-2xl lg:text-3xl">
							{t("questionsAnswered.title")}
						</h3>
						<p className="text-gray-200 text-sm md:text-lg lg:text-xl">
							{t("questionsAnswered.description")}
						</p>
					</div>

					{/* Column 3: Files Processed */}
					<div className="flex flex-col items-center text-center">
						<div className="mb-2 font-bold text-4xl text-white md:text-6xl lg:text-7xl">
							{t("filesProcessed.number")}
						</div>
						<h3 className="mb-2 font-semibold text-white text-xl md:text-2xl lg:text-3xl">
							{t("filesProcessed.title")}
						</h3>
						<p className="text-gray-200 text-sm md:text-lg lg:text-xl">
							{t("filesProcessed.description")}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
