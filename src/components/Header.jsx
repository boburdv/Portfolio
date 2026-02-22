"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 1);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed left-0 top-0 z-50 w-full bg-white transition-all ${scrolled ? "border-b border-gray-200" : "border-b-transparent"}`}>
      <div className="mx-auto flex max-w-5xl items-center justify-between p-5">
        <Link href="/" className="text-[26px] font-bold text-[#162232]">
          Boburbek
        </Link>

        <nav className="hidden md:flex gap-8 text-lg text-gray-500">
          <Link href="/" className="hover:text-[#162232] transition">
            Home
          </Link>
          <Link href="/projects" className="hover:text-[#162232] transition">
            Projects
          </Link>
          <Link href="/about" className="hover:text-[#162232] transition">
            About
          </Link>
        </nav>

        <button onClick={() => setOpen(!open)} className="relative h-6 w-6 md:hidden">
          <span className={`absolute left-0 top-1/2 h-[2px] w-full bg-[#162232] transition-all duration-300 ${open ? "rotate-45" : "-translate-y-2"}`} />
          <span className={`absolute left-0 top-1/2 h-[2px] w-full bg-[#162232] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`absolute left-0 top-1/2 h-[2px] w-full bg-[#162232] transition-all duration-300 ${open ? "-rotate-45" : "translate-y-2"}`} />
        </button>
      </div>

      <div className={`overflow-hidden transition-all duration-300 md:hidden ${open ? "max-h-60 shadow-sm" : "max-h-0"}`}>
        <nav className="flex flex-col gap-6 p-5 text-lg text-gray-500">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link href="/projects" onClick={() => setOpen(false)}>
            Projects
          </Link>
          <Link href="/about" onClick={() => setOpen(false)}>
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
