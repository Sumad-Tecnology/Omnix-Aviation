import { Box } from "lucide-react";
import RelatedServicesSidebar from "./RelatedServicesSidebar";

const ServiceOverviewWithSidebar = ({
  eyebrow = "Service Overview",
  title,
  paragraphs = [],
  image,
  imageAlt,
  relatedServices = [],
  activeService,
}) => {
  return (
    <section className="relative overflow-hidden bg-background py-20 text-foreground sm:py-24 lg:py-28">
      <div className="absolute inset-0 bg-omnix-grid opacity-20 dark:opacity-10" />
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute -right-40 top-40 h-96 w-96 rounded-full bg-accent/5 blur-[120px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
        {/* Main Content */}
        <div>
          <div className="flex items-center gap-3">
            <Box className="h-5 w-5 text-primary dark:text-accent" />
            <p className="text-sm font-semibold text-primary dark:text-accent">
              {eyebrow}
            </p>
          </div>

          <h2 className="mt-5 max-w-3xl font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {title}
          </h2>

          <div className="mt-6 max-w-3xl space-y-5">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-sm leading-8 text-muted-foreground sm:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {image && (
            <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-xl shadow-foreground/5">
              <img
                src={image}
                alt={imageAlt || title}
                className="h-[320px] w-full rounded-xl object-cover sm:h-[430px]"
              />
            </div>
          )}
        </div>

        {/* Sidebar */}
        <RelatedServicesSidebar
          services={relatedServices}
          activeService={activeService}
        />
      </div>
    </section>
  );
};

export default ServiceOverviewWithSidebar;