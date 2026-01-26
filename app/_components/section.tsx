"use client";

import Image from "next/image";

interface SectionProps {
	id?: string;
	title: string;
	subtitle: string;
	description: string;
	buttonText?: string;
	buttonHref?: string;
	videoSource: string[];
	posterUrl?: string;
	className?: string;
	logo?: string;
}

export default function Section({
	id,
	title,
	subtitle,
	description,
	buttonText,
	buttonHref,
	videoSource,
	posterUrl,
	className,
	logo,
}: SectionProps) {
	return (
		<section
			className={`relative flex h-screen items-center justify-center overflow-hidden ${className}`}
			id={id}
		>
			<div className="absolute inset-0 z-0">
				<video
					autoPlay
					className="absolute inset-0 h-full w-full object-cover"
					loop
					muted
					playsInline
					poster={posterUrl}
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
			<div className="section-content absolute z-10 mx-auto max-w-2xl px-4">
				<div className="mb-1.5 flex items-center gap-2">
					{logo && (
						<Image
							alt={title}
							className="h-14 w-auto"
							height={48}
							src={logo}
							width={48}
						/>
					)}
					<h2 className="font-semibold text-3xl text-white md:text-4xl lg:text-5xl">
						{title}
					</h2>
				</div>
				<p className="mx-auto mb-2.5 max-w-2xl text-sm text-white/80 md:mb-7 md:text-base lg:text-lg">
					<span className="font-semibold text-white">{subtitle}</span>{" "}
					{description}
				</p>
				{buttonText && buttonHref && (
					<a
						className="group inline-flex h-[50px] items-center justify-center rounded-sm border border-white/35 px-5 text-white text-xs uppercase tracking-widest transition hover:bg-white hover:text-black"
						href={buttonHref}
						target="_blank"
					>
						{buttonText}
						{/* arrow right icon */}
						<svg
							aria-hidden="true"
							className="ml-1 text-sm transition-transform duration-300 group-hover:translate-x-2"
							fill="none"
							height="16"
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1"
							viewBox="0 0 24 24"
							width="16"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M5 12h14" />
							<path d="m12 5 7 7-7 7" />
						</svg>
					</a>
				)}
			</div>
		</section>
	);
}
