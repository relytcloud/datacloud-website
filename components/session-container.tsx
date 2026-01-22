import Container from "@/components/container";

interface SessionContainerProps {
  children: React.ReactNode;
  title?: string | React.ReactNode;
  className?: string;
  containerClassName?: string;
  titleClassName?: string;
}

export default function SessionContainer({
  children,
  title,
  className = "",
  containerClassName = "",
  titleClassName = "",
}: SessionContainerProps) {
  return (
    <section className={`py-10 lg:py-[100px] ${className}`}>
      <Container className={`px-6 xl:px-20 ${containerClassName}`}>
        {title &&
          (typeof title === "string" ? (
            <h2
              className={`mb-10 text-center text-3xl-700 lg:text-4xl-700 ${titleClassName}`}
            >
              {title}
            </h2>
          ) : (
            title
          ))}
        {children}
      </Container>
    </section>
  );
}
