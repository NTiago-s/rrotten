import { ReactNode } from "react";

interface SectionContainerProps {
  id: string;
  children: ReactNode;
}

export default function SectionContainer({
  children,
  id,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className="bg-glass backdrop-blur-md rounded-xl border border-primary-txt/10 p-6 flex flex-col items-center gap-6 shadow-secondary/10 shadow-lg"
    >
      {children}
    </section>
  );
}
