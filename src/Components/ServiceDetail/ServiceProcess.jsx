import {
  ClipboardCheck,
  FileText,
  PlaneTakeoff,
  Search,
  Settings,
  ShieldCheck,
} from "lucide-react";

const defaultIcons = [
  FileText,
  Search,
  Settings,
  ClipboardCheck,
  PlaneTakeoff,
  ShieldCheck,
];

const ServiceProcess = ({
  eyebrow = "Our Work Process",
  title = "Our Proven Work Process",
  description,
  steps = [],
}) => {
  return (
    <section className="relative overflow-hidden bg-background py-20 text-foreground sm:py-24 lg:py-28">
      {/* Background */}
      <div className="absolute inset-0 bg-omnix-grid opacity-20 dark:opacity-10" />
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-accent/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-primary dark:text-accent">
            {eyebrow}
          </p>

          <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {title}
          </h2>

          {description && (
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              {description}
            </p>
          )}
        </div>

        {/* Desktop Process */}
        <div className="mt-16 hidden lg:grid lg:grid-cols-6 lg:items-start">
          {steps.map((step, index) => {
            const Icon = step.icon || defaultIcons[index % defaultIcons.length];
            const isLast = index === steps.length - 1;

            return (
              <div key={step.title} className="relative text-center">
                {/* Connector Line */}
                {!isLast && (
                  <div className="absolute left-[62%] top-10 h-px w-[76%] bg-border">
                    <div className="h-px w-full bg-primary/30 dark:bg-accent/30" />
                  </div>
                )}

                {/* Icon Circle */}
                <div className="relative z-10 mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl shadow-primary/20 dark:bg-accent dark:text-accent-foreground">
                  <Icon className="h-8 w-8" />

                  {/* Number Badge */}
                  <span className="absolute -right-2 top-1 flex h-8 w-8 items-center justify-center rounded-full border-4 border-background bg-card font-heading text-xs font-extrabold text-primary shadow-md dark:text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-7 font-heading text-xl font-semibold leading-tight text-foreground">
                  {step.title}
                </h3>

                <p className="mx-auto mt-3 max-w-[180px] text-sm leading-7 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mobile / Tablet Process */}
        <div className="mt-12 grid gap-4 lg:hidden">
          {steps.map((step, index) => {
            const Icon = step.icon || defaultIcons[index % defaultIcons.length];

            return (
              <article
                key={step.title}
                className="rounded-2xl border border-border bg-card p-5 shadow-lg shadow-foreground/5"
              >
                <div className="flex gap-4">
                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground dark:bg-accent dark:text-accent-foreground">
                    <Icon className="h-6 w-6" />

                    <span className="absolute -right-2 -top-1 flex h-7 w-7 items-center justify-center rounded-full border-4 border-card bg-background font-heading text-[10px] font-extrabold text-primary dark:text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading text-lg font-semibold text-card-foreground">
                      {step.title}
                    </h3>

                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcess;