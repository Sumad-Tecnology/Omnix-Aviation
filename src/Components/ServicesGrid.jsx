import { ServiceData } from "./ServiceData";
import ServiceCard from "./ServiceCard";

const ServicesGrid = () => {
  return (
    <section
      id="services-grid"
      className="relative overflow-hidden bg-background py-20 text-foreground sm:py-24 lg:py-28"
    >
      <div className="absolute inset-0 bg-omnix-grid opacity-25 dark:opacity-15" />
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-primary dark:text-accent">
            Our Services
          </p>

          <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Complete Aviation Support Solutions
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            Explore OMNIX Aviation’s professional services designed for cargo,
            passenger, humanitarian, logistics, leasing, consultancy, and
            special mission operations.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ServiceData.map((service, index) => (
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

export default ServicesGrid;