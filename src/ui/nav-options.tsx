interface NavOption {
  title: string;
  href: string;
}

interface NavOptionsProps {
  data: NavOption[];
}

export default function NavOptions({ data }: NavOptionsProps) {
  return (
    <div className="hidden gap-6">
      {data.slice(0, Math.ceil(data.length / 2)).map((option) => (
        <a
          key={option.title}
          href={option.href}
          aria-label={option.title}
          className="text-primary-txt hover:shadow-inner hover:shadow-primary/50 hover:scale-110 p-2 rounded-xl transition"
        >
          {option.title}
        </a>
      ))}
    </div>
  );
}
