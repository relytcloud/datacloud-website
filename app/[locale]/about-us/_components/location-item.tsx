import Image from "next/image";
import { cn } from "@/lib/utils";

interface ILocationItem {
  city: string;
  country: string;
  imgSrc: string;
  imgAlt: string;
  classname?: string;
  imgClassname?: string;
  cityClassname?: string;
  countryClassname?: string;
}

export default function LoactionItem({
  city,
  country,
  imgSrc,
  imgAlt,
  classname,
  imgClassname = "object-cover",
  cityClassname,
  countryClassname,
}: ILocationItem) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-gradient-card-outlineBorder",
        classname
      )}
    >
      <div className="loaction-img-mask bg-linear-to-b from-black to-transparent" />
      <Image alt={imgAlt} className={imgClassname} fill={true} src={imgSrc} />
      <div className="absolute z-10 flex h-full w-full flex-col items-center justify-center">
        <p
          className={cn(
            "text-base-500 text-white lg:text-2xl-500",
            cityClassname
          )}
        >
          {city}
        </p>
        <p
          className={cn(
            "text-grey-200 text-sm-500 lg:text-base-500",
            countryClassname
          )}
        >
          {country}
        </p>
      </div>
    </div>
  );
}
