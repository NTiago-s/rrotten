"use client";
import NavButton from "@/ui/nav-button";
import NavOptionsMenu from "@/ui/nav-menu-options";
import NavOptionsList from "@/ui/nav-options-list";
import { navOptions } from "@/utils/constants";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header({ fontClass }: { fontClass: string }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClick = (e: any) => {
      const target = e.target;
      if (target.closest("nav") || target.closest("#nav-button")) return;
      setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const mid = Math.ceil(navOptions.length / 2);

  return (
    <header className="z-10 sticky top-0">
      <nav
        className={`flex items-center text-sm justify-between md:justify-center px-8 py-2 gap-10 mx-auto bg-background text-primary-txt min-h-20 ${fontClass}`}
      >
        <NavOptionsList
          data={navOptions.slice(0, mid)}
          className="hidden md:flex gap-6"
        />

        <Link href="/" aria-label="Inicio" className="shrink-0">
          <img
            src="/logo-rrotten.jpeg"
            alt="Logo Rrotten"
            className="size-16 rounded-full active:scale-90 hover:contrast-50 transition cursor-pointer hover:shadow-2xl hover:shadow-primary/50"
          />
        </Link>

        <NavOptionsList
          data={navOptions.slice(mid)}
          className="hidden md:flex gap-6"
        />

        <div id="nav-button">
          <NavButton
            isOpen={isOpen}
            toggle={() => setIsOpen((prev) => !prev)}
          />
        </div>

        {isOpen && (
          <NavOptionsMenu data={navOptions} onSelect={() => setIsOpen(false)} />
        )}
      </nav>
    </header>
  );
}
