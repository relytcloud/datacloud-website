import Image from "next/image";
import NewsItem from "./news-item";

export default function News() {
  return (
    <div className="px-6 py-10 lg:py-[100px] xl:p-20">
      <p className="mb-10 text-3xl-700 text-white lg:text-center lg:text-4xl-700">
        Our News
      </p>
      <div className="flex flex-row justify-between lg:gap-auto">
        <div className="relative flex h-fit w-[240px] flex-col gap-10 overflow-auto py-[20px] lg:h-[300px] lg:flex-1 lg:flex-row lg:justify-evenly lg:gap-0 lg:py-0 lg:pl-[120px]">
          <div className="timeline-bar absolute top-0 left-[5.5px] h-full w-px lg:inset-y-1/2 lg:left-0 lg:h-px lg:w-full lg:-translate-y-1/2" />
          <NewsItem
            content="DataCloud Becomes Full Member of TPC Committee"
            title="2022-10"
          />
          <NewsItem
            content="Excited to Announce Our ISO 9001, 14001, 20000, 27001, and 45001 Certifications"
            reverse
            title="2024-03"
          />
          <NewsItem
            content="Relyt Officially Joins AWS Marketplace"
            title="2024-05"
          />
          <NewsItem
            content="Powerdrill AI Hits 1 Million Users: Celebrating a Major Milestone"
            reverse
            title="2024-07"
          />
          <NewsItem
            content="Powerdrill AI Ranks #1 spot on the QuALITY Benchmark"
            title="2024-09"
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
