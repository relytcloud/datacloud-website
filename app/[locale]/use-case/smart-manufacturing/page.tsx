"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
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

export default function Intelligent() {
  const t = useTranslations("useCases.intelligentManufacturing");
  const tShared = useTranslations("shared.benefits");

  const capabilitiesContent: {
    icon: ReactElement;
    title: string;
    desc?: string | undefined;
  }[] = [
    {
      icon: <OverviewOutlined />,
      title: t("capabilities.capability1.title"),
      desc: t("capabilities.capability1.desc"),
    },
  ];

  const pointList: IPoint[] = [
    {
      icon: (
        <SearchInsights className="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px]" />
      ),
      title: t("painPoints.point1.title"),
      des: t("painPoints.point1.des"),
    },
    {
      icon: <Clock className="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px]" />,
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
      title: t("benefits.des.view.title"),
      des: t("benefits.des.view.des"),
    },
    {
      title: t("benefits.des.insights.title"),
      des: t("benefits.des.insights.des"),
    },
    {
      title: t("benefits.des.efficiency.title"),
      des: t("benefits.des.efficiency.des"),
    },
    {
      title: t("benefits.des.flexibility.title"),
      des: t("benefits.des.flexibility.des"),
    },
  ];
  return (
    <div className="relative h-full min-h-full overflow-y-auto">
      <div className="bg-[url('/assets/use-case/bg-circle.svg')] bg-cover bg-top bg-no-repeat lg:bg-auto">
        <FirstScreen title={t("title")} />
        <Background background={t("background")} />
      </div>
      <PainPoints pointList={pointList} />
      <Solution solution={t("solution")}>
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
            <p className="text-3xl-700 lg:text-4xl-700">{tShared("title")}</p>
            <div className="flex flex-col justify-between gap-20 lg:flex-row">
              <BenefitDesList list={benefitsDesList} />
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-10 md:flex-row">
                  <GradientNumberDes
                    classname="whitespace-nowrap col-span-2 md:col-span-1"
                    des={t("benefits.numbers.real.des")}
                    title={t("benefits.numbers.real.title")}
                  />
                  <GradientNumberDes
                    classname="w-fit col-span-2 md:col-span-1"
                    des={t("benefits.numbers.tco.des")}
                    title={t("benefits.numbers.tco.title")}
                  />
                </div>
                <div className="flex flex-row flex-wrap gap-10">
                  <GradientNumberDes
                    des={t("benefits.numbers.improvement.des")}
                    title={t("benefits.numbers.improvement.title")}
                  />
                  <GradientNumberDes
                    classname="w-fit"
                    des={t("benefits.numbers.query.des")}
                    title={t("benefits.numbers.query.title")}
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
