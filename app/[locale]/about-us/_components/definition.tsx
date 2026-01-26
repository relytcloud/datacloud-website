"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { CheckOutlined } from "@/components/ui/icons/check-outlined";

export default function Definition() {
  const t = useTranslations("aboutUs.definition");

  return (
    <>
      <div className="flex flex-col-reverse items-center gap-10 px-6 py-10 lg:flex-row lg:items-start lg:justify-between lg:gap-20 lg:py-[100px] xl:gap-0 xl:p-20">
        <p className="text-base-400 text-white lg:flex-1 xl:w-[640px] xl:flex-none">
          {t("whoWeAre")}
        </p>
        <div className="relative hidden h-[52px] w-[275px] lg:block">
          <Image alt="Who" fill src="/assets/about-us/who-we-are.svg" />
        </div>
        <div className="relative block h-[38px] w-[183.634px] lg:hidden">
          <Image
            alt="who-we-are"
            fill
            src="/assets/about-us/who-we-are-small.svg"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-10 px-6 py-10 lg:flex-row lg:items-start lg:justify-between lg:gap-20 lg:py-[100px] xl:p-20">
        <div className="relative hidden h-[104px] w-[175px] lg:block">
          <Image
            alt="our-mission"
            fill
            src="/assets/about-us/our-mission.svg"
          />
        </div>
        <div className="relative block h-[38px] w-[183.634px] lg:hidden">
          <Image
            alt="our-mission"
            fill
            src="/assets/about-us/our-mission-small.svg"
          />
        </div>
        <div className="flex flex-col gap-2 lg:flex-1 xl:flex-none">
          <p className="text-base-400 text-white xl:w-[640px]">
            {t("ourMission.description")}
          </p>
          <div className="flex flex-row gap-1 text-base-400 text-white xl:w-[640px]">
            <CheckOutlined className="my-0.5" height={20} width={20} />
            <p>{t("ourMission.empower1")}</p>
          </div>
          <div className="flex flex-row gap-1 text-base-400 text-white xl:w-[640px]">
            <CheckOutlined className="my-0.5" height={20} width={20} />
            <p>{t("ourMission.empower2")}</p>
          </div>
        </div>
      </div>
    </>
  );
}
