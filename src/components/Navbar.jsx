import ThemeToggle from "./ThemeToggle"

export default function Navbar() {
  const links = ["About", "Skills", "Projects", "Contact"];

  return (
    <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur border-b border-white/5">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-heading font-semibold text-lg">
          Paul<span className="text-accent">.</span>
        </a>
        <ul className="hidden md:flex gap-8 text-sm text-muted">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="hover:text-text transition-colors">
                {link}
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  );
}