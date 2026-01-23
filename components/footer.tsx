import Link from "next/link";
import SecurityImgs from "@/components/security-imgs";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="absolute right-0 bottom-0 left-0 z-20">
      <div className="container mx-auto flex items-center justify-between">
        <SecurityImgs height={32} width={32} />
        <div className="flex gap-4">
          <Link
            className="border-grey-light text-xs hover:text-white"
            href={"/legal/privacy-notice/"}
          >
            Privacy Notice
          </Link>
          <Link
            className="border-grey-light text-xs hover:text-white"
            href={"/legal/terms-of-service/"}
          >
            Terms of Service
          </Link>
          <Link
            className="border-grey-light text-xs hover:text-white"
            href={"/legal/service-level-agreement/"}
          >
            SLA
          </Link>
        </div>
        <p className="py-6 pr-6 text-right text-xs">
          © {currentYear} DATACLOUD.
        </p>
      </div>
    </footer>
  );
}
