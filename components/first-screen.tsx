"use client";

import { useTranslations } from "next-intl";
import Container from "@/components/container";

export default function FirstScreen({ title, category }: { title: string, category?: string }) {
  const t = useTranslations("shared.firstScreen");
  
  return (
    <header className="relative pt-10 pb-20 text-center lg:pt-20 lg:pb-40 xl:pt-[120px]">
      <Container className="pl-6 sm:px-6 lg:px-9">
        <span className="bg-linear-to-r from-[#51A4F6] to-[#3867FF] bg-clip-text text-2xl-500 text-transparent">
          {category || t("category")}
        </span>
        <h1 className="mt-2 text-4xl-700 lg:text-6xl-700">{title}</h1>
      </Container>
    </header>
  );
}
