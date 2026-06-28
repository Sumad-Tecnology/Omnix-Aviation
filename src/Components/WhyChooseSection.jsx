import {
  Handshake,
  Headphones,
  MapPinned,
  Plane,
  RefreshCw,
  ShieldCheck,
} from "lucide-react";
import whyChooseAirplane from "../Assets/WhyChoseAirplane.png";

const whyChooseItems = [
  {
    title: "Professional Aviation Support",
    description:
      "Reliable aviation solutions for cargo, charter, humanitarian, and special mission needs.",
    icon: Plane,
  },
  {
    title: "Flexible Operating Model",
    description:
      "Aircraft support through lease, ACMI, ownership, and mission-specific arrangements.",
    icon: RefreshCw,
  },
  {
    title: "Africa Market Focus",
    description:
      "Strong operational focus for Africa-based markets and international client needs.",
    icon: MapPinned,
  },
  {
    title: "Humanitarian Readiness",
    description:
      "Prepared to support emergency, remote, and relief operations when timing matters.",
    icon: Headphones,
  },
  {
    title: "Safety-Driven Culture",
    description:
      "Safety, compliance, and operational improvement guide every aviation mission.",
    icon: ShieldCheck,
  },
  {
    title: "Customer-Centered Delivery",
    description:
      "Solutions designed around client goals, mission profiles, and operational realities.",
    icon: Handshake,
  },
];

const WhyChooseSection = () => {
  return (
    <section
      id="why-choose"
      className="relative overflow-hidden bg-background py-20 text-foreground sm:py-24 lg:py-28"
    >
      {/* Soft background */}
      <div className="absolute inset-0 bg-omnix-grid opacity-30 dark:opacity-15" />
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[90px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-primary dark:text-accent">
            Why Choose OMNIX
          </p>

          <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Trusted Aviation Support for Complex Missions
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            OMNIX Aviation combines safety, flexibility, market knowledge, and
            professional coordination to support clients across Africa and
            international aviation operations.
          </p>
        </div>

        {/* Airplane visual */}
        <div className="pointer-events-none relative mx-auto mt-10 max-w-5xl">
          <img
            src={whyChooseAirplane}
            alt="OMNIX Aviation aircraft"
            className="mx-auto w-full object-contain opacity-90 drop-shadow-[0_30px_55px_rgba(0,24,64,0.16)] dark:opacity-80 dark:drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
          />
        </div>

        {/* Cards */}
        <div className="relative z-20 mx-auto -mt-8 grid max-w-6xl gap-4 sm:grid-cols-2 lg:-mt-14 lg:grid-cols-3">
          {whyChooseItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-[28px] border border-border bg-card p-6 shadow-xl shadow-foreground/5 transition duration-300 hover:-translate-y-2 hover:border-primary/20 hover:shadow-primary/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground dark:bg-accent/15 dark:text-accent dark:group-hover:bg-accent dark:group-hover:text-accent-foreground">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-5 font-heading text-lg font-semibold leading-tight text-card-foreground">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;