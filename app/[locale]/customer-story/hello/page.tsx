"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Background from "@/components/background";
import BenefitDesList from "@/components/benefit-des-list";
import Benefits from "@/components/benefits";
import FirstScreen from "@/components/first-screen";
import type { IPoint } from "@/components/pain-points";
import PainPoints from "@/components/pain-points";
import Solution from "@/components/solution";
import { AppRegistration } from "@/components/ui/icons/app-registration";
import { DatasetGrandient } from "@/components/ui/icons/dataset-grandient";
import { FullStackedBarChart } from "@/components/ui/icons/full-stacked-bar-chart";
import { SearchInsights } from "@/components/ui/icons/search-insights";

export default function Hello() {
  const t = useTranslations("customerStory.hello");

  const pointList: IPoint[] = [
    {
      icon: (
        <SearchInsights className="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px]" />
      ),
      title: t("painPoints.point1.title"),
      des: t("painPoints.point1.des"),
    },
    {
      icon: (
        <FullStackedBarChart
          className="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px]"
          color="#4585FB"
        />
      ),
      title: t("painPoints.point2.title"),
      des: t("painPoints.point2.des"),
    },
    {
      icon: (
        <AppRegistration className="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px]" />
      ),
      title: t("painPoints.point3.title"),
      des: t("painPoints.point3.des"),
    },
    {
      icon: (
        <DatasetGrandient className="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px]" />
      ),
      title: t("painPoints.point4.title"),
      des: t("painPoints.point4.des"),
    },
  ];

  const benefitsDesList = [
    {
      title: t("benefits.list.item1.title"),
      des: t("benefits.list.item1.des"),
    },
    {
      title: t("benefits.list.item2.title"),
      des: t("benefits.list.item2.des"),
    },
    {
      title: t("benefits.list.item3.title"),
      des: t("benefits.list.item3.des"),
    },
    {
      title: t("benefits.list.item4.title"),
      des: t("benefits.list.item4.des"),
    },
  ];

  const solutionList = {
    title: t("solution.title"),
    list: [
      t("solution.list.item1"),
      t("solution.list.item2"),
      t("solution.list.item3"),
    ],
  };

  return (
    <div className={"relative h-full min-h-full overflow-y-auto"}>
      <div className="bg-[url('/assets/use-case/bg-circle.svg')] bg-cover bg-top bg-no-repeat lg:bg-auto">
        <FirstScreen category={t("category")} title={t("title")} />
        <Image
          alt="hello logo"
          className="mx-auto my-6 h-[40px] w-[85.7px] lg:h-[64px] lg:w-[137.2px]"
          height={0}
          src="/assets/customer-story/hello-logo-1.svg"
          width={0}
        />
        <Background
          background={
            <>
              <Link
                className="cursor-pointer text-primary-blue hover:underline hover:underline-offset-2"
                href={t("background.companyUrl")}
                target="_blank"
              >
                {t("background.company")}
              </Link>{" "}
              {t("background.description")}
            </>
          }
        />
      </div>
      <PainPoints pointList={pointList} />
      <Solution
        solution={
          <div className="mx-auto max-w-[820px] text-base-400 text-grey-400 lg:mb-10">
            {solutionList.title}
            <ul className="unorderList-gradient">
              {solutionList.list.map((item) => (
                <li className="list-inside list-disc pt-2" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        }
      >
        <div className="mt-10 flex flex-col items-center justify-center gap-20 md:gap-10 lg:flex-row">
          <div className="relative hidden h-[505px] w-[450px] md:block xl:h-[568px] xl:w-[506px]">
            <Image
              alt="hello solution flow"
              fill
              objectFit="fill"
              src="/assets/customer-story/hello-1-1-1.svg"
            />
          </div>
          <Image
            alt="hello solution flow"
            className="block md:hidden"
            height={0}
            sizes="100vw"
            src="/assets/customer-story/hello-1-2-1.svg"
            style={{ width: "100%", height: "auto" }}
            width={0}
          />
          <Image
            alt="hello solution flow"
            className="hidden h-[409px] w-[491px] md:block xl:h-[451px] xl:w-[552px]"
            height={0}
            sizes="100vw"
            src="/assets/customer-story/hello-2.svg"
            width={0}
          />
          <div className="flex w-full flex-col justify-center gap-6 md:hidden">
            <Image
              alt="senario"
              className="w-full md:w-[231px] xl:w-[260px]"
              height={0}
              sizes="100vw"
              // style={{ width: "100%", height: "auto" }}
              src="/assets/customer-story/hello-2-1.svg"
              width={0}
            />
            <Image
              alt="solution"
              className="w-full"
              height={0}
              sizes="100vw"
              // style={{ width: "100%", height: "auto" }}
              src="/assets/customer-story/hello-2-2.svg"
              width={0}
            />
            <Image
              alt="business value"
              className="w-full"
              height={0}
              sizes="100vw"
              // style={{ width: "100%", height: "auto" }}
              src="/assets/customer-story/hello-2-3.svg"
              width={0}
            />
          </div>
        </div>
      </Solution>
      <div className="bg-[url('/assets/use-case/bg-circle.svg')] bg-auto bg-center bg-no-repeat">
        <Benefits>
          <div className="flex flex-col gap-6 lg:gap-10">
            <p className="text-3xl-700 lg:text-4xl-700">{t("benefits.title")}</p>
            <div className="flex flex-col gap-20 lg:flex-row">
              <BenefitDesList list={benefitsDesList} />
            </div>
          </div>
        </Benefits>
      </div>
    </div>
  );
}
