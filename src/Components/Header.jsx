import { useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import logo from "../Assets/OmnixAviation-Logo.png";
import Button from "./Button";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
  };

  const handleThemeToggle = () => {
    setIsDark((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="absolute left-0 right-0 top-0 z-50 px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full bg-background/95 px-5 py-2.5 text-foreground shadow-xl shadow-foreground/10 backdrop-blur-xl lg:px-6">
        {/* Logo */}
        <a href="/" className="flex shrink-0 items-center">
          <img
            src={logo}
            alt="OMNIX Aviation"
            className="h-10 w-auto object-contain sm:h-11 lg:h-12"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 text-sm font-semibold text-foreground/80 lg:flex">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 lg:flex">
          <Button href="#quote" variant="primary" size="sm">
            Request Quote
          </Button>

          <button
            type="button"
            onClick={handleThemeToggle}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/10 bg-muted text-primary transition hover:bg-primary hover:text-primary-foreground"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={handleThemeToggle}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/10 bg-muted text-primary"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          <button
            type="button"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground"
            aria-label="Open menu"
          >
            {isMobileOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="mx-auto mt-3 max-w-6xl rounded-3xl border border-background/20 bg-background/95 p-4 text-foreground shadow-2xl shadow-foreground/10 backdrop-blur-xl lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMobileMenu}
                className="rounded-2xl px-4 py-3 text-sm font-bold transition hover:bg-muted hover:text-primary"
              >
                {item.label}
              </a>
            ))}

            <div className="mt-3 border-t border-primary/10 pt-4">
              <Button
                href="#quote"
                variant="primary"
                size="md"
                className="w-full"
              >
                Request Quote
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;