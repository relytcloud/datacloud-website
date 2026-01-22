"use client";
import Image from "next/image";
import type { ReactElement } from "react";
import Background from "@/components/background";
import BenefitDesList from "@/components/benefit-des-list";
import Benefits from "@/components/benefits";
import Capabilities from "@/components/capabilities";
import FirstScreen from "@/components/first-screen";
import GradientNumberDes from "@/components/gradient-number-des";
import PainPoints, { type IPoint } from "@/components/pain-points";
import Solution from "@/components/solution";
import { AppRegistration } from "@/components/ui/icons/app-registration";
import { Clock } from "@/components/ui/icons/clock";
import { DatasetGrandient } from "@/components/ui/icons/dataset-grandient";
import { OverviewOutlined } from "@/components/ui/icons/overview-outlined";
import { SearchInsights } from "@/components/ui/icons/search-insights";

const capabilitiesContent: {
  icon: ReactElement;
  title: string;
  desc?: string | undefined;
}[] = [
  {
    icon: <OverviewOutlined />,
    title: "Real-time data management and analysis platform",
    desc: "",
  },
];

const pointList: IPoint[] = [
  {
    icon: (
      <SearchInsights className="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px]" />
    ),
    title: "Data integration challenges",
    des: "The company's data is dispersed across various systems and regions, leading to numerous data silos.",
  },
  {
    icon: <Clock className="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px]" />,
    title: "High real-time analytics demands",
    des: "Manufacturing processes require real-time monitoring and analysis to swiftly address production issues.",
  },
  {
    icon: (
      <AppRegistration className="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px]" />
    ),
    title: "Cost control pressure",
    des: "Traditional data warehouse solutions are costly and often lack the adaptability needed to handle business fluctuations.",
  },
  {
    icon: (
      <DatasetGrandient className="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px]" />
    ),
    title: "System agility needs",
    des: "There is a critical need for a flexible data analytics platform that can rapidly respond to market shifts and evolving business requirements.",
  },
];

export default function Intelligent() {
  const benefitsDesList = [
    {
      title: "Unified data view",
      des: "Consolidate scattered data for a comprehensive, single view.",
    },
    {
      title: "Real-time insights",
      des: "Monitor and analyze processes in real-time to boost efficiency.",
    },
    {
      title: "Cost efficiency",
      des: "Lower traditional data warehouse costs with scalable solutions.",
    },
    {
      title: "Agility and flexibility",
      des: "Adapt quickly with a flexible platform that grows with your needs.",
    },
  ];
  return (
    <div className="relative h-full min-h-full overflow-y-auto">
      <div className="bg-[url('/assets/use-case/bg-circle.svg')] bg-cover bg-top bg-no-repeat lg:bg-auto">
        <FirstScreen title="Smart Manufacturing" />
        <Background background="A manufacturing company, as it expands globally, faces challenges of rapidly growing data volumes and increasingly diverse analysis needs. To optimize production processes, inventory management, and market strategies, the company urgently needs a solution capable of processing vast amounts of data from factories, supply chains, and sales channels worldwide." />
      </div>
      <PainPoints pointList={pointList} />
      <Solution solution="The Relyt solution seamlessly integrates with the enterprise's transaction, data, and BI platforms, delivering a unified, real-time data management and analysis system.">
        <Image
          alt="intelligent solution"
          className="mx-auto mt-10 bg-contain lg:pt-10"
          height={663}
          src="/assets/use-case/intelligent-arch.svg"
          width={800}
        />
      </Solution>
      <div className="bg-[url('/assets/use-case/bg-circle.svg')] bg-auto bg-top-left bg-no-repeat">
        <Capabilities content={capabilitiesContent} />
        <Benefits>
          <div className="flex flex-1 flex-col gap-6 lg:gap-10">
            <p className="text-3xl-700 lg:text-4xl-700">Customer Benefits</p>
            <div className="flex flex-col justify-between gap-20 lg:flex-row">
              <BenefitDesList list={benefitsDesList} />
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-10 md:flex-row">
                  <GradientNumberDes
                    classname="whitespace-nowrap col-span-2 md:col-span-1"
                    des="data management and analytics"
                    title="Real-time"
                  />
                  <GradientNumberDes
                    classname="w-fit col-span-2 md:col-span-1"
                    des="deduction in TCO"
                    title="50%"
                  />
                </div>
                <div className="flex flex-row flex-wrap gap-10">
                  <GradientNumberDes
                    des="performance improvement"
                    title="1.3x"
                  />
                  <GradientNumberDes
                    classname="w-fit"
                    des="query success rate"
                    title="99.9%"
                  />
                </div>
              </div>
            </div>
          </div>
        </Benefits>
      </div>
    </div>
  );
}
