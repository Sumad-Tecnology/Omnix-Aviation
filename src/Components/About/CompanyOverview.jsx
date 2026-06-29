import {
  Building2,
  Globe2,
  Handshake,
  Plane,
  ShieldCheck,
  Users,
} from "lucide-react";

const overviewCards = [
  {
    title: "Africa & International Markets",
    description: "Supporting aviation operations across regional and global environments.",
    icon: Globe2,
  },
  {
    title: "Mission-Critical Aviation",
    description: "Built for cargo, charter, humanitarian, and special mission requirements.",
    icon: Plane,
  },
  {
    title: "Trusted Client Support",
    description: "Serving governments, NGOs, UN agencies, corporations, and private clients.",
    icon: Handshake,
  },
];

const clientTypes = [
  "Governments",
  "NGOs",
  "UN Agencies",
  "Corporations",
  "Logistics Providers",
  "Private Clients",
];

const CompanyOverview = () => {
  return (
    <section
      id="company-overview"
      className="relative overflow-hidden bg-background py-20 text-foreground sm:py-24 lg:py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-omnix-grid opacity-25 dark:opacity-15" />
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8">
        {/* Left Content */}
        <div>
          <p className="text-sm font-semibold text-primary dark:text-accent">
            Company Overview
          </p>

          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Aviation Support for Complex Missions
          </h2>

          <div className="mt-6 max-w-2xl space-y-5 text-sm leading-7 text-muted-foreground sm:text-base">
            <p>
              OMNIX Aviation Limited is a professional aviation and logistics
              company supporting air operations across Africa and international
              markets.
            </p>

            <p>
              We provide safe, efficient, and reliable solutions for air cargo,
              passenger charter, humanitarian support, aircraft management,
              aviation consultancy, and special mission operations.
            </p>

            <p>
              OMNIX serves governments, NGOs, UN agencies, corporations,
              logistics providers, and private clients who need dependable
              aviation support.
            </p>
          </div>

          {/* Client Types */}
          <div className="mt-8 flex flex-wrap gap-3">
            {clientTypes.map((client) => (
              <span
                key={client}
                className="rounded-full border border-border bg-card px-4 py-2 text-xs font-extrabold text-muted-foreground shadow-sm"
              >
                {client}
              </span>
            ))}
          </div>
        </div>

        {/* Right Premium Box */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-2xl shadow-foreground/5">
            <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-primary/10 blur-[80px]" />
            <div className="absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-accent/10 blur-[80px]" />

            {/* Top mini header */}
            <div className="relative z-10 flex items-center gap-4 rounded-xl bg-muted p-4 dark:bg-background/40">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <ShieldCheck className="h-6 w-6" />
              </div>

              <div>
                <p className="font-heading text-lg font-semibold text-card-foreground">
                  Safe. Efficient. Reliable.
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Professional aviation support for demanding operations.
                </p>
              </div>
            </div>

            {/* Cards */}
            <div className="relative z-10 mt-5 space-y-4">
              {overviewCards.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group flex gap-4 rounded-xl border border-border bg-background p-4 transition hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 dark:bg-card"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground dark:bg-accent/15 dark:text-accent dark:group-hover:bg-accent dark:group-hover:text-accent-foreground">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div>
                      <h3 className="font-heading text-base font-semibold text-card-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom stats */}
            <div className="relative z-10 mt-5 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-border bg-background p-4 text-center dark:bg-card">
                <Building2 className="mx-auto h-5 w-5 text-primary dark:text-accent" />
                <p className="mt-2 text-xl font-extrabold text-card-foreground">
                  Multi-Sector
                </p>
                <p className="mt-1 text-xs font-bold text-muted-foreground">
                  Client Support
                </p>
              </div>

              <div className="rounded-xl border border-border bg-background p-4 text-center dark:bg-card">
                <Users className="mx-auto h-5 w-5 text-primary dark:text-accent" />
                <p className="mt-2 text-xl font-extrabold text-card-foreground">
                  Mission-Led
                </p>
                <p className="mt-1 text-xs font-bold text-muted-foreground">
                  Aviation Delivery
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;