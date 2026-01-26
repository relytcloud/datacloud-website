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
import type { IPoint } from "@/components/pain-points";
import PainPoints from "@/components/pain-points";
import Solution from "@/components/solution";
import { Clock } from "@/components/ui/icons/clock";
import { CostGrandient } from "@/components/ui/icons/cost-grandient";
import { OverviewOutlined } from "@/components/ui/icons/overview-outlined";
import { ReadinessScore } from "@/components/ui/icons/readiness-score";
import { SearchInsights } from "@/components/ui/icons/search-insights";
import { SearchOutlined } from "@/components/ui/icons/search-outlined";

export default function Aigc() {
  const t = useTranslations("useCases.aigc");
  const tShared = useTranslations("shared.benefits");

  const capabilitiesContent: {
    icon: ReactElement;
    title: string;
    desc?: string | undefined;
  }[] = [
    {
      icon: <SearchOutlined />,
      title: t("capabilities.capability1.title"),
      desc: t("capabilities.capability1.desc"),
    },
    {
      icon: <OverviewOutlined />,
      title: t("capabilities.capability2.title"),
      desc: t("capabilities.capability2.desc"),
    },
  ];

  const pointList: IPoint[] = [
    {
      icon: (
        <CostGrandient className="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px]" />
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
        <SearchInsights className="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px]" />
      ),
      title: t("painPoints.point3.title"),
      des: t("painPoints.point3.des"),
    },
    {
      icon: (
        <ReadinessScore className="h-[24px] w-[24px] lg:h-[32px] lg:w-[32px]" />
      ),
      title: t("painPoints.point4.title"),
      des: t("painPoints.point4.des"),
    },
  ];

  const benefitsDesList = [
    {
      title: t("benefits.des.scale.title"),
      des: t("benefits.des.scale.des"),
    },
    {
      title: t("benefits.des.performance.title"),
      des: t("benefits.des.performance.des"),
    },
    {
      title: t("benefits.des.search.title"),
      des: t("benefits.des.search.des"),
    },
    {
      title: t("benefits.des.management.title"),
      des: t("benefits.des.management.des"),
    },
    {
      title: t("benefits.des.optimization.title"),
      des: t("benefits.des.optimization.des"),
    },
    {
      title: t("benefits.des.compliant.title"),
      des: t("benefits.des.compliant.des"),
    },
  ];

  return (
    <div className={"relative h-full min-h-full overflow-y-auto"}>
      <div className="bg-[url('/assets/use-case/bg-circle.svg')] bg-cover bg-top bg-no-repeat lg:bg-auto">
        <FirstScreen title={t("title")} />
        <Background background={t("background")} />
      </div>
      <PainPoints pointList={pointList} />
      <Solution solution={t("solution")}>
        <Image
          alt="aigc solution"
          className="mx-auto mt-10 bg-contain lg:pt-10"
          height={352}
          src="/assets/use-case/aigc-arch.svg"
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
              <div className="flex flex-col items-start gap-10 lg:items-end">
                <div className="flex flex-row gap-10">
                  <GradientNumberDes
                    des={t("benefits.numbers.chats.des")}
                    title={t("benefits.numbers.chats.title")}
                  />
                  <GradientNumberDes
                    des={t("benefits.numbers.files.des")}
                    title={t("benefits.numbers.files.title")}
                  />
                </div>
                <GradientNumberDes
                  title={t("benefits.numbers.updates.title")}
                  titleClassname="md:whitespace-nowrap"
                />
                <GradientNumberDes
                  title={t("benefits.numbers.index.title")}
                  titleClassname="md:whitespace-nowrap"
                />
                <GradientNumberDes
                  des={t("benefits.numbers.cto.des")}
                  title={t("benefits.numbers.cto.title")}
                />
              </div>
            </div>
          </div>
        </Benefits>
      </div>
    </div>
  );
}
