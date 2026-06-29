import { ServiceData } from "./ServiceData";
import ServiceCard from "./ServiceCard";
import Button from "./Button"

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-background py-20 text-foreground sm:py-24 lg:py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-omnix-grid opacity-30 dark:opacity-20" />
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-primary dark:text-accent">
              Services Preview
            </p>

            <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Aviation Solutions Built for Complex Missions
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
              OMNIX Aviation provides reliable cargo, charter, humanitarian,
              aircraft management, consultancy, logistics, and special mission
              support for Africa-focused and international operations.
            </p>
          </div>

          <Button href="/services" variant="primary" size="md"> View All Services </Button>
        </div>

        {/* Static Services Cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ServiceData.slice(0, 3).map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              className="w-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;