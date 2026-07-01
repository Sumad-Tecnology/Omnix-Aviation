import {
  BadgeCheck,
  Clock,
  Headphones,
  Plane,
  Route,
  ShieldCheck,
} from "lucide-react";

const defaultIcons = [ShieldCheck, Clock, Plane, Route, Headphones, BadgeCheck];

const ServiceBenefits = ({
  eyebrow = "Key Benefits",
  title = "Designed for Safe, Reliable, and Efficient Aviation Support",
  description,
  benefits = [],
}) => {
  return (
    <section className="relative overflow-hidden bg-background py-16 text-foreground sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-omnix-grid opacity-20 dark:opacity-10" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-primary dark:text-accent">
            {eyebrow}
          </p>

          <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {title}
          </h2>

          {description && (
            <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              {description}
            </p>
          )}
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon || defaultIcons[index % defaultIcons.length];

            return (
              <article
                key={benefit.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-xl shadow-foreground/5 transition hover:-translate-y-1 hover:border-primary/20 hover:shadow-primary/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground dark:bg-accent dark:text-accent-foreground">
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mt-6 font-heading text-lg font-semibold text-card-foreground">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceBenefits;