import Image from "next/image";
import { getFullAssetUrl } from "@/lib/utils";

export default function SecurityImgs({
	className = "",
	width = 40,
	height = 40,
}: {
	width?: number;
	height?: number;
	className?: string;
}) {
	return (
		<div className={`flex items-center gap-2 ${className}`}>
			<Image
				alt="GDPR"
				height={height}
				src={getFullAssetUrl("/media/GDPR.svg")}
				width={width}
			/>
			<Image
				alt="AICPA"
				height={height}
				priority
				src={getFullAssetUrl("/media/AICPA.webp")}
				width={width}
			/>
			<Image
				alt="ISO"
				height={height}
				src={getFullAssetUrl("/media/ISO27001.svg")}
				width={width}
			/>
			<Image
				alt="ISO20000"
				height={height}
				src={getFullAssetUrl("/media/ISO20000.svg")}
				width={width}
			/>
		</div>
	);
}
