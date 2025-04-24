import { ReactNode } from "react";

interface TitleProps {
  children: ReactNode;
}
export default function Title({ children }: TitleProps) {
  return (
    <h1 className="text-4xl text-balance font-semibold underline">
      {children}
    </h1>
  );
}
