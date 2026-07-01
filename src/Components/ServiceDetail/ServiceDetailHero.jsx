import { ArrowRight } from "lucide-react";
import Header from "../Header";
import Button from "../Button";
import heroBg from "../../Assets/PageHeroBg.png";

const ServiceDetailHero = ({
  title,
  eyebrow,
  description,
  image,
}) => {
  return (
    <section className="relative overflow-hidden bg-primary pt-28 text-primary-foreground sm:pt-32 lg:pt-34">
      <Header />

      <img
        src={heroBg}
        alt="OMNIX Aviation background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-primary/85" />
      <div className="absolute inset-0 bg-omnix-grid opacity-10" />
      <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-background/10 blur-[110px]" />
      <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-accent/20 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        {/* Breadcrumb */}
        <div className="mb-8 flex flex-wrap items-center gap-2 text-sm font-semibold text-primary-foreground/70">
          <a href="/" className="transition hover:text-accent">
            Home
          </a>

          <ArrowRight className="h-4 w-4 text-primary-foreground/40" />

          <a href="/services" className="transition hover:text-accent">
            Services
          </a>

          <ArrowRight className="h-4 w-4 text-primary-foreground/40" />

          <span className="text-accent">{title || "Service Detail"}</span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          {/* Left Content */}
          <div>
            {eyebrow && (
              <p className="text-sm font-semibold text-accent">{eyebrow}</p>
            )}

            <h1 className="mt-4 max-w-4xl font-heading text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-[56px]">
              {title || "Service Detail"}
            </h1>

            {description && (
              <p className="mt-5 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                {description}
              </p>
            )}

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact" variant="secondary">
                Request This Service
              </Button>

              <Button href="/services" variant="glass">
                Explore Services
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl  bg-white/5 p-3 shadow-2xl shadow-primary/30 backdrop-blur-md">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={image || heroBg}
                  alt={title || "OMNIX Aviation service"}
                  className="h-[280px] w-full object-cover sm:h-[340px] lg:h-[390px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-8 bg-background [clip-path:ellipse(70%_100%_at_50%_100%)]" />
    </section>
  );
};

export default ServiceDetailHero;