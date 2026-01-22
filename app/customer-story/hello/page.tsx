"use client";
import Image from "next/image";
import Link from "next/link";
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

const pointList: IPoint[] = [
  {
    icon: (
      <SearchInsights className="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px]" />
    ),
    title: "Data skill gap among regional managers",
    des: "Regional managers often lack the data skills needed for data-driven operations, hindering their ability to make informed decisions and drive performance improvements.",
  },
  {
    icon: (
      <FullStackedBarChart
        className="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px]"
        color="#4585FB"
      />
    ),
    title: "Fragmented data hinders use",
    des: "The overwhelming number of metrics spread across fragmented platforms, along with complex BI reports, makes data difficult to utilize effectively.",
  },
  {
    icon: (
      <AppRegistration className="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px]" />
    ),
    title: "Insights don't drive action",
    des: "Insights don't always lead to actionable steps, and decisions often rely more on experience and intuition than on data.",
  },
  {
    icon: (
      <DatasetGrandient className="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px]" />
    ),
    title: "Market share hard to expand",
    des: "Given the complexity of data and reliance on experience over insights, expanding market share becomes increasingly difficult.",
  },
];

export default function Hello() {
  const benefitsDesList = [
    {
      title: "Simplified decision-making",
      des: "Enable easy, personalized queries that allow for quicker and more informed decisions across teams.",
    },
    {
      title: "Enhanced usage",
      des: "Amplify metrics with AI-driven data services, significantly boosting data usage and engagement by 100x.",
    },
    {
      title: "Stable strategies",
      des: "Equip regional managers with over 20 proven operational strategies designed to drive consistent performance and success.",
    },
    {
      title: "Efficient growth",
      des: "Balance team members efficiency with the steady and sustainable growth of Monthly Membership Cards for long-term success.",
    },
  ];

  const solutionList = {
    title:
      "Data Cloud Powerdrill's AI-driven operations solution addresses Hello's challenges with a comprehensive approach:",
    list: [
      "Establishes an ETL pipeline to export regional dispatch data (daily, weekly, and monthly) into Powerdrill.",
      "Integrates strategic factors, such as correlations with monthly membership subscriptions, to enhance data insights.",
      "Supports the development of operations strategies through a structured process: gathering strategies, executing and analyzing, optimizing and adjusting, and promoting operations.",
    ],
  };

  return (
    <div className={"relative h-full min-h-full overflow-y-auto"}>
      <div className="bg-[url('/assets/use-case/bg-circle.svg')] bg-cover bg-top bg-no-repeat lg:bg-auto">
        <FirstScreen category="Customer Story" title="AI-driven Operations" />
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
                href="https://www.hello-inc.com/"
                target="_blank"
              >
                Hello
              </Link>{" "}
              is a popular bike-sharing service operating in multiple cities,
              providing users with the convenience of renting bicycles via a
              mobile app. To ensure smooth operations, Hello hires thousands of
              regional operations managers who are responsible for optimizing
              vehicle distribution and dispatch in tens of thousands of grids,
              driving growth in orders and market share, and increasing the
              monthly membership subscriptions. In addition, these managers
              oversee local vehicle orders and work to improve the efficiency of
              personnel, ensuring that the service runs seamlessly and meets the
              demands of users.
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
            <p className="text-3xl-700 lg:text-4xl-700">Customer Benefits</p>
            <div className="flex flex-col gap-20 lg:flex-row">
              <BenefitDesList list={benefitsDesList} />
            </div>
          </div>
        </Benefits>
      </div>
    </div>
  );
}
