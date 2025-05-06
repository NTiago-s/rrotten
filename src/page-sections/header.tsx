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
    <header className="z-10 sticky top-0 bg-background border-b-2 border-gray-600">
      <nav
        className={`relative grid grid-cols-3 items-center  text-sm py-2 gap-4 max-w-6xl mx-auto text-primary-txt min-h-20 ${fontClass}`}
      >
        <div className="hidden md:flex justify-end">
          <NavOptionsList data={navOptions.slice(0, mid)} />
        </div>

        <div className="flex justify-center">
          <Link href="/" aria-label="Inicio" className="shrink-0">
            <img
              src="/logo-rrotten.jpeg"
              alt="Logo Rrotten"
              className="size-16 rounded-full active:scale-90 hover:contrast-50 transition cursor-pointer hover:shadow-2xl hover:shadow-primary/50"
            />
          </Link>
        </div>

        <div className="hidden md:flex justify-start gap-4">
          <NavOptionsList data={navOptions.slice(mid)} />
        </div>

        <div id="nav-button" className="absolute right-4 md:hidden">
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
