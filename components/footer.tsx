"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import SecurityImgs from "@/components/security-imgs";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const currentYear = new Date().getFullYear();

  const getLocalizedHref = (href: string) => {
    return `/${locale}${href}`;
  };

  return (
    <footer className="absolute right-0 bottom-0 left-0 z-20">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
        <SecurityImgs height={32} width={32} />
        <div className="flex gap-4">
          <Link
            className="border-grey-light text-xs hover:text-white"
            href={getLocalizedHref("/legal/privacy-notice/")}
          >
            {t("privacyNotice")}
          </Link>
          <Link
            className="border-grey-light text-xs hover:text-white"
            href={getLocalizedHref("/legal/terms-of-service/")}
          >
            {t("termsOfService")}
          </Link>
          <Link
            className="border-grey-light text-xs hover:text-white"
            href={getLocalizedHref("/legal/service-level-agreement/")}
          >
            {t("sla")}
          </Link>
        </div>
        <p className="py-2 pr-6 text-right text-xs md:py-6">
          {t("copyright", { year: currentYear })}
        </p>
      </div>
    </footer>
  );
}
