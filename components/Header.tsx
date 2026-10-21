"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { DemoButton } from "./DemoButton";
import { LoginButton } from "./LoginButton";

const LINKS = [
  { href: "/#problema", label: "El problema" },
  { href: "/#producto", label: "Producto" },
  { href: "/#para-quien", label: "Para quién" },
  { href: "/#contacto", label: "Contacto" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-2">
        <a href="/" aria-label="PRISMA — inicio">
          <Logo />
        </a>

        <nav className="ml-auto hidden items-center gap-1 md:flex" aria-label="Principal">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-ink"
            >
              {l.label}
            </a>
          ))}
          <LoginButton className="ml-2" />
          <DemoButton className="ml-1" />
        </nav>

        <button
          className="ml-auto rounded-md p-2 text-slate-600 hover:bg-slate-100 md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X size={20} strokeWidth={1.6} /> : <Menu size={20} strokeWidth={1.6} />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-slate-100 bg-white px-4 pb-4 pt-2 md:hidden"
          aria-label="Principal móvil"
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-100"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-2 flex flex-col gap-2 px-3">
            <LoginButton className="w-full justify-center border border-slate-200" />
            <DemoButton className="w-full justify-center" />
          </div>
        </nav>
      )}
    </header>
  );
}
