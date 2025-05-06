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
      className="bg-glass backdrop-blur-md rounded-xl  flex flex-col items-center justify-center "
    >
      {children}
    </section>
  );
}
