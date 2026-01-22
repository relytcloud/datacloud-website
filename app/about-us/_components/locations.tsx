import Image from "next/image";
import LocationItem from "./location-item";

export default function Locations() {
  return (
    <div className="px-6 py-10 lg:py-[100px] xl:px-20">
      <p className="mb-10 text-center text-3xl-700 text-white lg:text-4xl-700">
        Our Locations
      </p>
      <div className="hidden md:block">
        <div className="flex flex-row justify-center gap-6">
          <LocationItem
            city="Beijing"
            classname="flex-1 h-[120px] md:h-[160px] lg:h-[240px]"
            country="China"
            imgAlt="Beijing"
            imgSrc="/assets/about-us/beijing.webp"
          />
          <LocationItem
            city="Hangzhou"
            classname="flex-1 h-[120px] md:h-[160px] lg:h-[240px]"
            country="China"
            imgAlt="Hangzhou"
            imgSrc="/assets/about-us/hangzhou.webp"
          />
        </div>
        <div className="mt-6 flex">
          <div className="relative mx-auto h-[200px] flex-1 overflow-hidden rounded-2xl border border-gradient-card-gradient-mental shadow-[0_0_24px_0_rgba(255,255,255,0.40)] lg:h-[300px]">
            <div className="loaction-img-mask-vertical" />
            <Image
              alt={"Singapore"}
              className="h-full w-auto"
              height={300}
              src="/assets/about-us/singapore.webp"
              width={932}
            />
            <div className="absolute top-1/2 z-10 -translate-y-1/2 md:right-6 lg:right-10 xl:right-[120px]">
              <p className="mb-4 text-base-500 text-white lg:text-2xl-500">
                Singapore{" "}
                <span className="timeline-title text-sm-500 lg:text-base-500">
                  Headquarters
                </span>
              </p>
              <div className="flex flex-row gap-3">
                <div className="flex flex-col gap-2">
                  <p className="text-grey-400 text-xs-400 lg:text-base-500">
                    Contact Us
                  </p>
                  <p className="text-grey-400 text-xs-400 lg:text-base-500">
                    Address
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-grey-400 text-xs-400 lg:text-base-500">
                    contact@data.cloud
                  </p>
                  <p className="w-[134px] text-grey-400 text-xs-400 lg:text-base-500">
                    71 Ayer Rajah Crescent, Singapore 139951
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-row justify-center gap-6">
          <LocationItem
            city="Hong Kong"
            classname="flex-1 h-[120px] md:h-[160px] lg:h-[240px]"
            country="China"
            imgAlt="HongKong"
            imgSrc="/assets/about-us/hongkong.webp"
          />
          <LocationItem
            city="Shenzhen"
            classname="flex-1 h-[120px] md:h-[160px] lg:h-[240px]"
            country="China"
            imgAlt="Shenzhen"
            imgSrc="/assets/about-us/shenzhen.webp"
          />
          <LocationItem
            city="Virginia"
            classname="flex-1 h-[120px] md:h-[160px] lg:h-[240px]"
            country="United States"
            imgAlt="Virginia"
            imgSrc="/assets/about-us/virginia.webp"
          />
        </div>
      </div>
      {/* 竖版 */}
      <div className="block md:hidden">
        <div className="flex flex-col gap-6">
          <div className="relative h-[200px] w-auto overflow-hidden rounded-2xl border border-gradient-card-gradient-mental shadow-[0_0_24px_0_rgba(255,255,255,0.40)]">
            <div className="loaction-img-mask-horizon" />
            <Image
              alt={"Singapore"}
              fill
              src="/assets/about-us/singapore.webp"
            />
            <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <p className="mb-4 text-base-500 text-white">
                Singapore{" "}
                <span className="timeline-title text-sm-500">Headquarters</span>
              </p>
              <div className="flex flex-row gap-3">
                <div className="flex flex-col gap-2">
                  <p className="text-grey-200 text-xs-400">Contact Us</p>
                  <p className="text-grey-200 text-xs-400">Address</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-grey-200 text-xs-400">
                    contact@data.cloud
                  </p>
                  <p className="w-[134px] text-grey-200 text-xs-400">
                    71 Ayer Rajah Crescent, Singapore 139951
                  </p>
                </div>
              </div>
            </div>
          </div>
          <LocationItem
            city="Beijing"
            classname="w-auto h-[120px]"
            country="China"
            imgAlt="Beijing"
            imgSrc="/assets/about-us/beijing.webp"
          />
          <LocationItem
            city="Hangzhou"
            classname="w-auto h-[120px]"
            country="China"
            imgAlt="Hangzhou"
            imgSrc="/assets/about-us/hangzhou.webp"
          />
          <LocationItem
            city="Hong Kong"
            classname="w-auto h-[120px]"
            country="China"
            imgAlt="HongKong"
            imgSrc="/assets/about-us/hongkong.webp"
          />
          <LocationItem
            city="Shenzhen"
            classname="w-auto h-[120px]"
            country="China"
            imgAlt="Shenzhen"
            imgSrc="/assets/about-us/shenzhen.webp"
          />
          <LocationItem
            city="Virginia"
            classname="w-auto h-[120px]"
            country="United States"
            imgAlt="Virginia"
            imgSrc="/assets/about-us/virginia.webp"
          />
        </div>
      </div>
    </div>
  );
}
