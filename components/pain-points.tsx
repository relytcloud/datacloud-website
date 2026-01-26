"use client";

import { useTranslations } from "next-intl";
import type { ReactNode } from "react";
import SessionContainer from "@/components/session-container";

export interface IPoint {
  icon: ReactNode;
  title: string;
  des: string;
}

export default function PainPoints({ pointList }: { pointList: IPoint[] }) {
  const t = useTranslations("shared.painPoints");

  return (
    <SessionContainer title={t("title")} titleClassName="md:!text-left">
      <div className="grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-2">
        {pointList.map(({ icon, title, des }) => (
          <div className="flex flex-col gap-3" key={title}>
            <p>{icon}</p>
            <p className="text-base-500 text-grey-100 lg:text-2xl-500">
              {title}
            </p>
            <p className="text-base-400 text-grey-400">{des}</p>
          </div>
        ))}
      </div>
    </SessionContainer>
  );
}
