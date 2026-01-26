import Container from "@/components/container";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full min-h-screen flex-col overflow-y-auto bg-black from-bg-black to-[#242424] text-text-primary">
      <Container className="flex-1 pb-24">{children}</Container>
    </div>
  );
}
