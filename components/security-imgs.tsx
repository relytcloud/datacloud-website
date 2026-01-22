import Image from "next/image";

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
        src="/assets/components/GDPR.svg"
        width={width}
      />
      <Image
        alt="AICPA"
        height={height}
        priority
        src="/assets/components/AICPA.webp"
        width={width}
      />
      <Image
        alt="ISO"
        height={height}
        src="/assets/components/ISO27001.svg"
        width={width}
      />
      <Image
        alt="ISO20000"
        height={height}
        src="/assets/components/ISO20000.svg"
        width={width}
      />
    </div>
  );
}
