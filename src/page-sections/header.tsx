import { navOptions } from "@/utils/constants";
import Link from "next/link";

export default function Header({ fontClass }: { fontClass: string }) {
  return (
    <header className="z-10 sticky top-0">
      <nav
        className={`flex items-center text-sm justify-center px-8 py-2 gap-10 mx-auto bg-background text-primary-txt min-h-20 ${fontClass}`}
      >
        <div className="flex gap-6">
          {navOptions
            .slice(0, Math.ceil(navOptions.length / 2))
            .map((option) => (
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
        <Link href="/" aria-label="Inicio" className="shrink-0">
          <img
            src="/logo-rrotten.jpeg"
            alt="Logo Rrotten"
            className="size-16 rounded-full active:scale-90 hover:contrast-50 transition cursor-pointer hover:shadow-2xl hover:shadow-primary/50"
          />
        </Link>
        <div className="flex gap-6">
          {navOptions.slice(Math.ceil(navOptions.length / 2)).map((option) => (
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
      </nav>
    </header>
  );
}
