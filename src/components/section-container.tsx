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
      className="bg-glass backdrop-blur-md rounded-xl p-6 flex flex-col items-center gap-6"
    >
      {children}
    </section>
  );
}
