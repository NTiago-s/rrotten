import { navOptions } from "@/utils/constants";
import Link from "next/link";

export default function Header() {
  return (
    <header className="z-10 sticky top-0">
      <nav className="flex mx-auto justify-between px-8 py-2 items-center  text-primary-txt max-w-4xl">
        <Link href="/" aria-label="Inicio">
          <img
            src="/logo-rrotten.jpeg"
            alt="Logo Rrotten"
            className="w-12 h-12 rounded-full active:scale-90 hover:contrast-50 transition cursor-pointer hover:shadow-2xl hover:shadow-primary/50"
          />
        </Link>

        <div className="flex gap-2">
          {navOptions.map((option) => (
            <a
              key={option.title}
              href={option.href}
              aria-label={option.title}
              className="text-primary-txt hover:shadow-inner hover:shadow-primary/50 hover:scale-110 p-2 rounded-xl transition"
            >
              {option.icon && <option.icon />}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
