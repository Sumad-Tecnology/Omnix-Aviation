import {
  Globe2,
  PackageCheck,
  Plane,
  ShieldCheck,
} from "lucide-react";
import aboutAirplane from "../Assets/Airplane.png";
import Button from "./Button";

const trustCards = [
  {
    title: "Air Cargo Operations",
    icon: PackageCheck,
    position:
      "left-4 top-[45%] md:left-[10%] md:top-[50%] lg:left-[13%] lg:top-[52%]",
  },
  {
    title: "Passenger Charter",
    icon: Plane,
    position:
      "left-8 top-[20%] md:left-[17%] md:top-[28%] lg:left-[20%] lg:top-[30%]",
  },
  {
    title: "Africa-Focused Reach",
    icon: Globe2,
    position:
      "right-8 top-[20%] md:right-[17%] md:top-[28%] lg:right-[20%] lg:top-[30%]",
  },
  {
    title: "Safety-Driven Support",
    icon: ShieldCheck,
    position:
      "right-4 top-[45%] md:right-[10%] md:top-[50%] lg:right-[13%] lg:top-[52%]",
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-muted py-20 text-foreground dark:bg-background dark:text-foreground sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-70 dark:opacity-30">
        <div className="absolute left-1/2 top-[54%] h-[660px] w-[660px] -translate-x-1/2 rounded-full border border-primary/10 dark:border-white/10" />
        <div className="absolute left-1/2 top-[62%] h-[500px] w-[500px] -translate-x-1/2 rounded-full border border-primary/10 dark:border-white/10" />
        <div className="absolute left-1/2 top-[70%] h-[340px] w-[340px] -translate-x-1/2 rounded-full border border-primary/10 dark:border-white/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Content */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-primary dark:text-accent">
            About Us
          </p>

          <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Elevating Aviation Support with Safe, Reliable & Professional
            Solutions
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            OMNIX Aviation Limited provides world-class aviation and logistics
            solutions for cargo, passenger charter, humanitarian support,
            aircraft management, consultancy, and special mission operations
            across Africa and international markets.
          </p>

          <div className="mt-7">
            <Button href="#services" variant="secondary" size="lg">
              Explore Services
            </Button>
          </div>
        </div>

        {/* Airplane Visual Area */}
        <div className="relative mx-auto mt-8 min-h-[340px] max-w-6xl sm:min-h-[430px] lg:min-h-[470px]">
          {/* Trust Cards */}
          {trustCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className={`absolute z-20 hidden items-center gap-3 rounded-xl bg-card px-5 py-4 shadow-xl shadow-primary/5 ring-1 ring-primary/5 dark:shadow-black/20 dark:ring-white/10 sm:flex ${card.position}`}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-accent/15 dark:text-accent">
                  <Icon className="h-5 w-5" />
                </span>

                <p className="max-w-[170px] text-sm font-bold leading-5 text-card-foreground">
                  {card.title}
                </p>
              </div>
            );
          })}

          {/* Mobile trust grid */}
          <div className="mb-6 grid grid-cols-2 gap-3 sm:hidden">
            {trustCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="rounded-2xl bg-card p-4 shadow-lg ring-1 ring-primary/5 dark:ring-white/10"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-accent/15 dark:text-accent">
                    <Icon className="h-5 w-5" />
                  </span>

                  <p className="mt-3 text-sm font-bold leading-5 text-card-foreground">
                    {card.title}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Center airplane */}
          <div className="absolute bottom-0 left-1/2 z-10 w-full max-w-[930px] -translate-x-1/2">
            <img
              src={aboutAirplane}
              alt="OMNIX Aviation aircraft"
              className="mx-auto w-full object-contain drop-shadow-[0_35px_55px_rgba(0,24,64,0.18)] dark:drop-shadow-[0_35px_60px_rgba(0,0,0,0.45)]"
            />
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 z-0 h-24 bg-gradient-to-t from-muted to-transparent dark:from-background" />

          {/* Small floating dot */}
          <div className="absolute right-8 top-1/2 hidden h-4 w-4 rounded-full border-2 border-danger bg-card lg:block" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;