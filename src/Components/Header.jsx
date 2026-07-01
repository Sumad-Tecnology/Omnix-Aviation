import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, Moon, Sun, X } from "lucide-react";
import logo from "../Assets/Omnix Aviation.png";
import whiteLogo from "../Assets/Omnix Aviation Logo White.png";
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

const serviceDetailRoutes = [
  "/airfreight",
  "/aircraft",
  "/aviationconsultant",
  "/flightsupport",
  "/humanflight",
  "/logistics",
  "/passenger",
  "/specialmission",
];

const Header = () => {
  const location = useLocation();

  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const lastScrollY = useRef(0);

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
  };

  const handleThemeToggle = () => {
    const nextTheme = !isDark;

    setIsDark(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme);
  };

  const isActiveLink = (href) => {
    if (href === "/") {
      return location.pathname === "/";
    }

    if (href === "/services" && serviceDetailRoutes.includes(location.pathname)) {
      return true;
    }

    return location.pathname === href;
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (isMobileOpen) {
        setIsHeaderVisible(true);
        return;
      }

      if (currentScrollY < 80) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsHeaderVisible(false);
      } else {
        setIsHeaderVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobileOpen]);

  useEffect(() => {
    setIsHeaderVisible(true);
    setIsMobileOpen(false);
    lastScrollY.current = window.scrollY;
  }, [location.pathname]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 px-4 py-4 transition-transform duration-500 sm:px-6 lg:px-8 ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full bg-background/95 px-5 py-2.5 text-foreground shadow-xl shadow-foreground/10 backdrop-blur-xl lg:px-6">
        {/* Logo */}
        <a href="/" className="flex shrink-0 items-center">
          <img
            src={isDark ? whiteLogo : logo}
            alt="OMNIX Aviation"
            className="h-9 w-auto object-contain sm:h-10"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 text-sm font-semibold text-foreground/80 lg:flex">
          {navLinks.map((item) => {
            const isActive = isActiveLink(item.href);

            return (
              <a
                key={item.label}
                href={item.href}
                className={`relative transition ${
                  isActive
                    ? "text-primary dark:text-accent"
                    : "hover:text-primary dark:hover:text-accent"
                }`}
              >
                {item.label}

                {isActive && (
                  <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary dark:bg-accent" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 lg:flex">
          <Button href="/contact" variant="primary" size="sm">
            Request Quote
          </Button>

          <button
            type="button"
            onClick={handleThemeToggle}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/10 bg-muted text-primary transition hover:bg-primary hover:text-primary-foreground dark:border-accent/40 dark:bg-white/10 dark:text-accent dark:hover:bg-accent dark:hover:text-primary"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="h-4 w-4 stroke-[2.8]" />
            ) : (
              <Moon className="h-4 w-4 stroke-[2.8]" />
            )}
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={handleThemeToggle}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-primary/10 bg-muted text-primary transition hover:bg-primary hover:text-primary-foreground dark:border-accent/40 dark:bg-white/10 dark:text-accent dark:hover:bg-accent dark:hover:text-primary"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <Sun className="h-4 w-4 stroke-[2.8]" />
            ) : (
              <Moon className="h-4 w-4 stroke-[2.8]" />
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
            {navLinks.map((item) => {
              const isActive = isActiveLink(item.href);

              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`rounded-2xl px-4 py-3 text-sm font-bold transition ${
                    isActive
                      ? "bg-primary/5 text-primary dark:bg-accent/10 dark:text-accent"
                      : "hover:bg-muted hover:text-primary dark:hover:text-accent"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}

            <div className="mt-3 border-t border-primary/10 pt-4">
              <Button
                href="/contact"
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