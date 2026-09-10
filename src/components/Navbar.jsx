import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["About", "Skills", "Projects", "Contact"];

  return (
    <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur border-b border-border">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-heading font-semibold text-lg">
          Paul<span className="text-accent">.</span>
        </a>

        <ul className="hidden md:flex gap-8 text-sm text-muted">
          {links.map((link) => (
            <li key={link} className="relative group">
              <a href={`#${link.toLowerCase()}`} className="hover:text-text transition-colors">
                {link}
              </a>
              <span className="absolute left-0 -bottom-1 w-0 h-px bg-accent transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="/resume pauljoshuagrandebassig.pdf"
            download
            className="text-sm px-4 py-2 rounded-md border border-accent/40 text-accent hover:bg-accent/10 hover:shadow-[0_0_15px_rgba(94,234,212,0.25)] transition-all cursor-pointer"
          >
  Resume
</a>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden p-2 text-text cursor-pointer"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 bg-bg border-t border-border">
          {links.map((link) => (
            <a 
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-muted hover:text-text transition-colors py-2"
            >
              {link}
            </a>
          ))}
          <div className="flex items-center justify-between pt-2">
            <ThemeToggle />
          <a
            href="/resume pauljoshuagrandebassig.pdf"
            download
            className="text-sm px-4 py-2 rounded-md border border-accent/40 text-accent hover:bg-accent/10 hover:shadow-[0_0_15px_rgba(94,234,212,0.25)] transition-all cursor-pointer"
          >
  Resume
</a>
          </div>
        </div>
      )}
    </header>
  );
}