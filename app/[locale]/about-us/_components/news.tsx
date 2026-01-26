"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import NewsItem from "./news-item";

export default function News() {
  const t = useTranslations("aboutUs.news");

  return (
    <div className="px-6 py-10 lg:py-[100px] xl:p-20">
      <p className="mb-10 text-3xl-700 text-white lg:text-center lg:text-4xl-700">
        {t("title")}
      </p>
      <div className="flex flex-row justify-between lg:gap-auto">
        <div className="relative flex h-fit w-[240px] flex-col gap-10 overflow-auto py-[20px] lg:h-[300px] lg:flex-1 lg:flex-row lg:justify-evenly lg:gap-0 lg:py-0 lg:pl-[120px]">
          <div className="timeline-bar absolute top-0 left-[5.5px] h-full w-px lg:inset-y-1/2 lg:left-0 lg:h-px lg:w-full lg:-translate-y-1/2" />
          <NewsItem
            content={t("items.item1.content")}
            title={t("items.item1.date")}
          />
          <NewsItem
            content={t("items.item2.content")}
            reverse
            title={t("items.item2.date")}
          />
          <NewsItem
            content={t("items.item3.content")}
            title={t("items.item3.date")}
          />
          <NewsItem
            content={t("items.item4.content")}
            reverse
            title={t("items.item4.date")}
          />
          <NewsItem
            content={t("items.item5.content")}
            title={t("items.item5.date")}
          />
        </div>
        <div className="relative hidden md:max-lg:block md:max-lg:h-auto md:max-lg:w-[223px]">
          <Image
            alt="news"
            fill
            objectFit="fill"
            src="/assets/about-us/news.webp"
          />
        </div>
      </div>
    </div>
  );
}
