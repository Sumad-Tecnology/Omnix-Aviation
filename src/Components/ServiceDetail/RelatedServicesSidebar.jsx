import { ArrowRight, Phone } from "lucide-react";

const RelatedServicesSidebar = ({
  services = [],
  activeService,
  phone = "+252611276129 / +252611276129",
}) => {
  return (
    <aside className="lg:sticky lg:top-28 lg:h-fit">
      <div className="rounded-2xl border border-border bg-card p-5 shadow-xl shadow-foreground/5">
        <h3 className="font-heading text-lg font-semibold text-card-foreground">
          Related Services
        </h3>

        <div className="mt-5 space-y-3">
          {services.map((service) => {
            const isActive = service.title === activeService;

            return (
              <a
                key={service.title}
                href={service.href}
                className={`flex items-center justify-between gap-4 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  isActive
                    ? "bg-primary text-primary-foreground dark:bg-accent dark:text-accent-foreground"
                    : "bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground dark:hover:bg-accent dark:hover:text-accent-foreground"
                }`}
              >
                <span>{service.title}</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-border bg-card p-5 shadow-xl shadow-foreground/5">
        <h3 className="font-heading text-lg font-semibold leading-tight text-card-foreground">
          Need help choosing the right service?
        </h3>

        <p className="mt-3 text-sm leading-7 text-muted-foreground">
          Contact OMNIX Aviation and our team will guide you to the right
          aviation solution.
        </p>

        <a
          href={`tel:${phone.replace(/\s/g, "")}`}
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-aviation-blue dark:bg-accent dark:text-accent-foreground"
        >
          <Phone className="h-4 w-4" />
          {phone}
        </a>
      </div>
    </aside>
  );
};

export default RelatedServicesSidebar;