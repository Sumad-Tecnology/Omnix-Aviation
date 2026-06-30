import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

import logo from "../Assets/OmnixAviation-Logo.png";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzZWimoU4QL7ot5pJascNoNDz_bBa6NZVDEXfRmDvD9HA18O1CNY_mjBP2xRsQnvb4W_g/exec";

const footerColumns = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Why Choose OMNIX", href: "#why-choose" },
      { label: "Working Process", href: "#process" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Air Cargo Operations", href: "#services" },
      { label: "Passenger Charter", href: "#services" },
      { label: "Humanitarian Flights", href: "#humanitarian" },
      { label: "Aircraft Leasing", href: "#services" },
    ],
  },
  {
    title: "Operations",
    links: [
      { label: "Flight Support", href: "#services" },
      { label: "Logistics Coordination", href: "#services" },
      { label: "Special Missions", href: "#services" },
      { label: "Aviation Consultancy", href: "#services" },
    ],
  },
];

const socialLinks = [
  { label: "Facebook", href: "#", icon: FaFacebookF },
  { label: "Instagram", href: "#", icon: FaInstagram },
  { label: "LinkedIn", href: "#", icon: FaLinkedinIn },
  { label: "YouTube", href: "#", icon: FaYoutube },
];

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState("");
  const [isNewsletterLoading, setIsNewsletterLoading] = useState(false);

  const handleNewsletterSubmit = async (event) => {
    event.preventDefault();

    if (!newsletterEmail.trim()) {
      setNewsletterStatus("Please enter your email address.");
      return;
    }

    setIsNewsletterLoading(true);
    setNewsletterStatus("");

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: newsletterEmail,
          source: "Website Footer",
        }),
      });

      setNewsletterStatus("Thank you. Your email has been saved.");
      setNewsletterEmail("");
    } catch (error) {
      console.error("Newsletter Error:", error);
      setNewsletterStatus("Something went wrong. Please try again.");
    } finally {
      setIsNewsletterLoading(false);
    }
  };

  return (
    <footer className="w-full bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-md border border-primary-foreground/10 bg-primary">
          {/* Main Footer */}
          <div className="grid gap-10 px-2 py-8 sm:px-4 lg:grid-cols-[1.35fr_2.65fr] lg:py-10">
            {/* Brand */}
            <div>
              <a href="#" className="inline-flex items-center gap-4">
                <span className="flex h-16 w-16 items-center justify-center rounded-xl bg-background">
                  <img
                    src={logo}
                    alt="OMNIX Aviation"
                    className="h-12 w-12 object-contain"
                  />
                </span>

                <span className="font-heading text-2xl font-extrabold tracking-tight text-primary-foreground">
                  OMNIX Aviation
                </span>
              </a>

              <p className="mt-5 max-w-sm text-sm leading-7 text-primary-foreground/60">
                Professional aviation and logistics support for cargo operations,
                passenger charter, humanitarian flights, aircraft solutions, and
                special mission operations.
              </p>

              {/* Social Icons */}
              <div className="mt-6 flex items-center gap-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      aria-label={item.label}
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 text-primary-foreground/60 transition hover:border-accent/40 hover:bg-accent hover:text-accent-foreground"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Link Columns */}
            <div className="grid gap-8 sm:grid-cols-3">
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <h3 className="text-sm font-extrabold text-primary-foreground">
                    {column.title}
                  </h3>

                  <ul className="mt-5 space-y-3">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-sm font-medium text-primary-foreground/55 transition hover:text-accent"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter / Contact Row */}
          <div className="border-t border-primary-foreground/10 px-2 py-6 sm:px-4">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              {/* Contact Info */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="mailto:info@omnixaviation.com"
                  className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 px-4 py-2 text-xs font-bold text-primary-foreground/65 transition hover:text-accent"
                >
                  <Mail className="h-4 w-4 text-accent" />
                  info@omnixaviation.com
                </a>

                <a
                  href="tel:+252XXXXXXXXX"
                  className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 px-4 py-2 text-xs font-bold text-primary-foreground/65 transition hover:text-accent"
                >
                  <Phone className="h-4 w-4 text-accent" />
                  +252 XXX XXX XXX
                </a>

                <span className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 px-4 py-2 text-xs font-bold text-primary-foreground/65">
                  <MapPin className="h-4 w-4 text-accent" />
                  Mogadishu, Somalia
                </span>
              </div>

              {/* Subscribe */}
              <div className="w-full max-w-md">
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="flex w-full flex-col gap-3 sm:flex-row"
                >
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-primary-foreground/35" />

                    <input
                      type="email"
                      value={newsletterEmail}
                      onChange={(event) =>
                        setNewsletterEmail(event.target.value)
                      }
                      placeholder="Get aviation updates..."
                      required
                      className="h-12 w-full rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 pl-11 pr-4 text-sm font-medium text-primary-foreground outline-none transition placeholder:text-primary-foreground/35 focus:border-accent/50 focus:bg-primary-foreground/10"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isNewsletterLoading}
                    className="h-12 rounded-lg bg-accent px-6 text-sm font-extrabold text-accent-foreground transition hover:bg-background hover:text-primary disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isNewsletterLoading ? "Saving..." : "Subscribe"}
                  </button>
                </form>

                {newsletterStatus && (
                  <p className="mt-3 text-sm font-medium text-primary-foreground/70">
                    {newsletterStatus}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-primary-foreground/10 px-2 py-5 sm:px-4">
            <div className="flex flex-col gap-4 text-xs font-medium text-primary-foreground/45 lg:flex-row lg:items-center lg:justify-between">
              <p>
                © 2026 OMNIX Aviation. All rights reserved. | Developed by{" "}
                <a
                  href="https://sumadtech.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition text-white hover:text-accent"
                >
                  Sumad Technology
                </a>
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a href="/privacy" className="transition hover:text-accent">
                  Privacy Policy
                </a>
                <span>•</span>
                <a href="/terms" className="transition hover:text-accent">
                  Terms of Condtion
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;