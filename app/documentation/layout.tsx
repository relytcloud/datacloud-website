import type { Metadata } from "next";
import Container from "@/components/container";

export const metadata: Metadata = {
  title: "Documentation | DataCloud",
  description:
    "Access DataCloud's documentation resources for Relyt, Powerdrill, and other products.",
};

export default function DocumentationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={
        "flex h-full min-h-screen flex-col overflow-x-hidden bg-black font-archivo text-white"
      }
    >
      <Container className="flex-1 pb-24">{children}</Container>
    </div>
  );
}
