import type { Metadata } from "next";
import Container from "@/components/container";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex h-full min-h-screen flex-col overflow-y-auto bg-black text-grey-400"
      id="legal-layout"
    >
      <Container className="flex-1 pb-24">
        <div className="h-auto px-6 md:px-12">{children}</div>
      </Container>
    </div>
  );
}
