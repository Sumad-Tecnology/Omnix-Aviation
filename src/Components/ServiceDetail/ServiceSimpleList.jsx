import { ArrowRight, CheckCircle2, UsersRound } from "lucide-react";

const iconMap = {
  check: CheckCircle2,
  arrow: ArrowRight,
  users: UsersRound,
};

const ServiceSimpleList = ({
  eyebrow,
  title,
  description,
  items = [],
  image,
  imageAlt,
  icon = "check",
  reverse = false,
}) => {
  const Icon = iconMap[icon] || CheckCircle2;

  return (
    <section className="bg-background py-16 text-foreground sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`grid gap-10 lg:grid-cols-2 lg:items-center ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Content */}
          <div>
            {eyebrow && (
              <p className="text-sm font-semibold text-primary dark:text-accent">
                {eyebrow}
              </p>
            )}

            <h2 className="mt-4 max-w-2xl font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {title}
            </h2>

            {description && (
              <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
                {description}
              </p>
            )}

            <div className="mt-8 space-y-3">
              {items.map((item) => (
                <div
                  key={item}
                  className="flex items-center justify-between gap-4 rounded-xl border border-border bg-card px-5 py-4 shadow-sm shadow-foreground/5 transition hover:border-primary/20 hover:bg-muted"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent">
                      <Icon className="h-4 w-4" />
                    </span>

                    <p className="text-sm font-semibold leading-6 text-card-foreground">
                      {item}
                    </p>
                  </div>

                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          {image && (
            <div className="overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-xl shadow-foreground/5">
              <img
                src={image}
                alt={imageAlt || title}
                className="h-[320px] w-full rounded-xl object-cover sm:h-[420px]"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceSimpleList;