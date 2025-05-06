interface AboutParagraphProps {
  children: React.ReactNode;
  className?: string;
}

export default function AboutParagraph({
  children,
  className,
}: AboutParagraphProps) {
  return (
    <p className={`text-gray-400 text-lg leading-relaxed ${className}`}>
      {children}
    </p>
  );
}
