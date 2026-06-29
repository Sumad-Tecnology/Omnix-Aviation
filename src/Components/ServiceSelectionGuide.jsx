import { ArrowRight } from "lucide-react";

const guideItems = [
  {
    need: "Urgent shipment",
    service: "Air Cargo Operations",
  },
  {
    need: "Executive or corporate travel",
    service: "Passenger Charter Services",
  },
  {
    need: "NGO, UN, or relief mission",
    service: "Humanitarian & Relief Flights",
  },
  {
    need: "Aircraft availability or leasing",
    service: "Aircraft Leasing & Management",
  },
  {
    need: "Aviation planning or compliance support",
    service: "Aviation Consultancy",
  },
  {
    need: "Flight planning and coordination",
    service: "Flight Operations Support",
  },
  {
    need: "Cargo and people movement",
    service: "Logistics Coordination",
  },
  {
    need: "Remote or high-priority mission",
    service: "Special Mission Operations",
  },
];

const ServiceSelectionGuide = () => {
  return (
    <section
      id="service-selection-guide"
      className="relative overflow-hidden bg-background py-20 text-foreground sm:py-24 lg:py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-omnix-grid opacity-20 dark:opacity-10" />
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-accent/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-primary dark:text-accent">
            Service Selection Guide
          </p>

          <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Find the Right Aviation Solution for Your Mission
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            Every mission has different requirements. Use this simple guide to
            match your need with the right OMNIX Aviation service.
          </p>
        </div>

        {/* Clean Table */}
        <div className="mx-auto mt-14 max-w-5xl overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-foreground/5">
          {/* Table Head */}
          <div className="hidden grid-cols-[1fr_64px_1fr] border-b border-border bg-muted px-6 py-4 md:grid">
            <p className="text-sm font-semibold text-muted-foreground">
              Your Need
            </p>

            <span />

            <p className="text-sm font-semibold text-muted-foreground">
              Recommended Service
            </p>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-border">
            {guideItems.map((item) => (
              <div
                key={item.need}
                className="grid gap-3 px-5 py-5 transition hover:bg-muted/60 md:grid-cols-[1fr_64px_1fr] md:items-center md:px-6"
              >
                {/* Need */}
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground/60 md:hidden">
                    Your Need
                  </p>

                  <p className="mt-1 text-sm font-medium leading-6 text-foreground md:mt-0 sm:text-base">
                    {item.need}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex items-center md:justify-center">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>

                {/* Service */}
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground/60 md:hidden">
                    Recommended Service
                  </p>

                  <p className="mt-1 text-sm font-semibold leading-6 text-primary dark:text-accent md:mt-0 sm:text-base">
                    {item.service}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Simple note */}
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-7 text-muted-foreground">
          Not sure which option fits your mission?{" "}
          <a
            href="/contact"
            className="font-semibold text-primary transition hover:text-aviation-blue dark:text-accent"
          >
            Contact our team
          </a>{" "}
          and we’ll help you choose the right aviation solution.
        </p>
      </div>
    </section>
  );
};

export default ServiceSelectionGuide;