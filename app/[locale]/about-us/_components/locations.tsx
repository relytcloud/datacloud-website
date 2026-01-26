"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import LocationItem from "./location-item";

export default function Locations() {
  const t = useTranslations("aboutUs.locations");

  return (
    <div className="px-6 py-10 lg:py-[100px] xl:px-20">
      <p className="mb-10 text-center text-3xl-700 text-white lg:text-4xl-700">
        {t("title")}
      </p>
      <div className="hidden md:block">
        <div className="flex flex-row justify-center gap-6">
          <LocationItem
            city={t("cities.beijing.city")}
            classname="flex-1 h-[120px] md:h-[160px] lg:h-[240px]"
            country={t("cities.beijing.country")}
            imgAlt="Beijing"
            imgSrc="/assets/about-us/beijing.webp"
          />
          <LocationItem
            city={t("cities.hangzhou.city")}
            classname="flex-1 h-[120px] md:h-[160px] lg:h-[240px]"
            country={t("cities.hangzhou.country")}
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
                {t("cities.singapore.city")}{" "}
                <span className="timeline-title text-sm-500 lg:text-base-500">
                  {t("headquarters")}
                </span>
              </p>
              <div className="flex flex-row gap-3">
                <div className="flex flex-col gap-2">
                  <p className="text-grey-400 text-xs-400 lg:text-base-500">
                    {t("contactUs")}
                  </p>
                  <p className="text-grey-400 text-xs-400 lg:text-base-500">
                    {t("address")}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-grey-400 text-xs-400 lg:text-base-500">
                    {t("contactEmail")}
                  </p>
                  <p className="w-[134px] text-grey-400 text-xs-400 lg:text-base-500">
                    {t("addressText")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-row justify-center gap-6">
          <LocationItem
            city={t("cities.hongkong.city")}
            classname="flex-1 h-[120px] md:h-[160px] lg:h-[240px]"
            country={t("cities.hongkong.country")}
            imgAlt="HongKong"
            imgSrc="/assets/about-us/hongkong.webp"
          />
          <LocationItem
            city={t("cities.shenzhen.city")}
            classname="flex-1 h-[120px] md:h-[160px] lg:h-[240px]"
            country={t("cities.shenzhen.country")}
            imgAlt="Shenzhen"
            imgSrc="/assets/about-us/shenzhen.webp"
          />
          <LocationItem
            city={t("cities.virginia.city")}
            classname="flex-1 h-[120px] md:h-[160px] lg:h-[240px]"
            country={t("cities.virginia.country")}
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
                {t("cities.singapore.city")}{" "}
                <span className="timeline-title text-sm-500">{t("headquarters")}</span>
              </p>
              <div className="flex flex-row gap-3">
                <div className="flex flex-col gap-2">
                  <p className="text-grey-200 text-xs-400">{t("contactUs")}</p>
                  <p className="text-grey-200 text-xs-400">{t("address")}</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-grey-200 text-xs-400">
                    {t("contactEmail")}
                  </p>
                  <p className="w-[134px] text-grey-200 text-xs-400">
                    {t("addressText")}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <LocationItem
            city={t("cities.beijing.city")}
            classname="w-auto h-[120px]"
            country={t("cities.beijing.country")}
            imgAlt="Beijing"
            imgSrc="/assets/about-us/beijing.webp"
          />
          <LocationItem
            city={t("cities.hangzhou.city")}
            classname="w-auto h-[120px]"
            country={t("cities.hangzhou.country")}
            imgAlt="Hangzhou"
            imgSrc="/assets/about-us/hangzhou.webp"
          />
          <LocationItem
            city={t("cities.hongkong.city")}
            classname="w-auto h-[120px]"
            country={t("cities.hongkong.country")}
            imgAlt="HongKong"
            imgSrc="/assets/about-us/hongkong.webp"
          />
          <LocationItem
            city={t("cities.shenzhen.city")}
            classname="w-auto h-[120px]"
            country={t("cities.shenzhen.country")}
            imgAlt="Shenzhen"
            imgSrc="/assets/about-us/shenzhen.webp"
          />
          <LocationItem
            city={t("cities.virginia.city")}
            classname="w-auto h-[120px]"
            country={t("cities.virginia.country")}
            imgAlt="Virginia"
            imgSrc="/assets/about-us/virginia.webp"
          />
        </div>
      </div>
    </div>
  );
}
