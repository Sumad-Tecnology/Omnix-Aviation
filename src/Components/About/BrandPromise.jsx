import { BadgeCheck, Quote, ShieldCheck } from "lucide-react";
import brandPromiseImage from "../../Assets/BrandPromise.png";

const BrandPromise = () => {
  return (
    <section
      id="brand-promise"
      className="relative overflow-hidden bg-muted py-20 text-foreground dark:bg-background sm:py-24 lg:py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-omnix-grid opacity-20 dark:opacity-10" />
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:gap-16 lg:px-8">
        {/* Left Content */}
        <div>
          <p className="text-sm font-semibold text-primary dark:text-accent">
            Brand Promise
          </p>

          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Beyond Boundaries, Above Expectations.
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            At OMNIX Aviation, we go beyond standard aviation support by
            delivering flexible, reliable, and mission-focused solutions for
            clients operating across complex environments.
          </p>

          {/* Corporate Statement Card */}
          <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-xl shadow-foreground/5">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Quote className="h-6 w-6" />
              </div>

              <div>
                <p className="text-sm font-semibold text-primary dark:text-accent">
                  Corporate Statement
                </p>

                <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                  OMNIX Aviation Limited is committed to delivering safe,
                  efficient, and reliable aviation solutions through
                  professionalism, operational excellence, and customer-focused
                  service delivery.
                </p>
              </div>
            </div>
          </div>

          {/* Mini Points */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-sm">
              <BadgeCheck className="h-5 w-5 text-primary dark:text-accent" />
              <p className="text-sm font-bold text-card-foreground">
                Flexible Mission Support
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 shadow-sm">
              <ShieldCheck className="h-5 w-5 text-primary dark:text-accent" />
              <p className="text-sm font-bold text-card-foreground">
                Safe & Reliable Delivery
              </p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src={brandPromiseImage}
            alt="OMNIX Aviation brand promise"
            className="h-[420px] w-full rounded-2xl object-cover shadow-2xl shadow-foreground/10 sm:h-[500px] lg:h-[560px]"
          />
        </div>
      </div>
    </section>
  );
};

export default BrandPromise;