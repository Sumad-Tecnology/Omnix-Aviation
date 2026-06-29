import {
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const services = [
  "Air Cargo Operations",
  "Passenger Charter Services",
  "Humanitarian & Relief Flights",
  "Aircraft Leasing & Management",
  "Aviation Consultancy",
  "Flight Operations Support",
  "Logistics Coordination",
  "Special Mission Operations",
];

const socialLinks = [
  { label: "Facebook", href: "#", icon: FaFacebookF },
  { label: "Instagram", href: "#", icon: FaInstagram },
  { label: "LinkedIn", href: "#", icon: FaLinkedinIn },
  { label: "YouTube", href: "#", icon: FaYoutube },
];

const ContactBody = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-background py-20 text-foreground sm:py-24 lg:py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-omnix-grid opacity-20 dark:opacity-10" />
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Contact Layout */}
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.35fr] lg:gap-12">
          {/* Left Info Card */}
          <aside className="relative overflow-hidden rounded-2xl bg-primary p-7 text-primary-foreground shadow-2xl shadow-primary/15 sm:p-8">
            <div className="absolute inset-0 bg-omnix-grid opacity-10" />
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-[90px]" />
            <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-background/10 blur-[90px]" />

            <div className="relative z-10 space-y-10">
              {/* Address */}
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-foreground/10 text-accent">
                  <MapPin className="h-5 w-5" />
                </div>

                <h3 className="mt-4 font-heading text-2xl font-semibold text-white">
                  Address
                </h3>

                <p className="mt-3 text-sm leading-7 text-primary-foreground/65">
                  Mogadishu, Somalia
                  <br />
                  OMNIX Aviation Limited
                </p>
              </div>

              {/* Contact */}
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-foreground/10 text-accent">
                  <Phone className="h-5 w-5" />
                </div>

                <h3 className="mt-4 font-heading text-2xl font-semibold text-white">
                  Contact
                </h3>

                <div className="mt-3 space-y-2 text-sm text-primary-foreground/65">
                  <a
                    href="tel:+252XXXXXXXXX"
                    className="flex items-center gap-2 transition hover:text-accent"
                  >
                    <Phone className="h-4 w-4" />
                    +252 XXX XXX XXX
                  </a>

                  <a
                    href="mailto:info@omnixaviation.com"
                    className="flex items-center gap-2 transition hover:text-accent"
                  >
                    <Mail className="h-4 w-4" />
                    info@omnixaviation.com
                  </a>
                </div>
              </div>

              {/* Open Time */}
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-foreground/10 text-accent">
                  <Clock className="h-5 w-5" />
                </div>

                <h3 className="mt-4 font-heading text-2xl font-semibold text-white">
                  Open Time
                </h3>

                <p className="mt-3 text-sm leading-7 text-primary-foreground/65">
                  Monday - Friday
                  <br />
                  9:00 AM - 6:00 PM
                </p>
              </div>

              {/* Social */}
              <div>
                <h3 className="font-heading text-2xl font-semibold text-white">
                  Stay Connected
                </h3>

                <div className="mt-5 flex items-center gap-3">
                  {socialLinks.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        aria-label={item.label}
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground transition hover:bg-accent hover:text-accent-foreground"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </aside>

          {/* Right Form */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-xl shadow-foreground/5 sm:p-8">
            <div>
              <p className="text-sm font-semibold text-primary dark:text-accent">
                Contact Us
              </p>

              <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Get Your{" "}
                <span className="text-primary dark:text-accent">
                  Free Quote
                </span>{" "}
                Today!
              </h2>
            </div>

            <form className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-foreground">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Ex. John Doe"
                    className="mt-2 h-12 w-full rounded-xl border border-border bg-muted px-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-primary focus:bg-background dark:bg-background/40"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-foreground">
                    Email *
                  </label>
                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="mt-2 h-12 w-full rounded-xl border border-border bg-muted px-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-primary focus:bg-background dark:bg-background/40"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-foreground">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter Phone Number"
                    className="mt-2 h-12 w-full rounded-xl border border-border bg-muted px-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-primary focus:bg-background dark:bg-background/40"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-foreground">
                    Service *
                  </label>
                  <select className="mt-2 h-12 w-full rounded-xl border border-border bg-muted px-4 text-sm text-foreground outline-none transition focus:border-primary focus:bg-background dark:bg-background/40 dark:text-foreground dark:[color-scheme:dark]">
                    <option value="" className="bg-background text-foreground dark:bg-card dark:text-foreground">
                        Select Service
                    </option>

                    {services.map((service) => (
                        <option
                        key={service}
                        value={service}
                        className="bg-background text-foreground dark:bg-card dark:text-foreground"
                        >
                        {service}
                        </option>
                    ))}
                    </select>
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-foreground">
                  Your Message *
                </label>
                <textarea
                  placeholder="Enter here..."
                  rows="7"
                  className="mt-2 w-full resize-none rounded-xl border border-border bg-muted px-4 py-4 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-primary focus:bg-background dark:bg-background/40"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-extrabold text-primary-foreground transition hover:bg-aviation-blue"
              >
                Send Message
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-muted shadow-xl shadow-foreground/5 dark:bg-card">
          <div className="relative h-[360px] w-full sm:h-[430px]">
            {/* Simple map iframe */}
            <iframe
              title="OMNIX Aviation Location"
              src="https://www.google.com/maps?q=Mogadishu%20Somalia&output=embed"
              className="h-full w-full"
              loading="lazy"
            />

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBody;