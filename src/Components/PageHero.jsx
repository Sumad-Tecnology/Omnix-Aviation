import { ArrowRight } from "lucide-react";
import Header from "../Components/Header";
import heroBg from "../Assets/PageHeroBg.png";

const PageHero = ({
  title,
  currentPage,
}) => {
  return (
    <section className="relative overflow-hidden bg-primary pt-32 text-primary-foreground sm:pt-36 lg:pt-40">
      <Header />

      {/* Background Image */}
      <img
        src={heroBg}
        alt="OMNIX Aviation background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-primary/80" />

      {/* Background Effects */}
      <div className="absolute inset-0 bg-omnix-grid opacity-10" />
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-background/10 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />

      {/* Soft aviation line */}
      <div className="absolute left-1/2 top-1/2 hidden h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary-foreground/15 to-transparent lg:block" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 sm:px-6 sm:pb-24 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-5xl text-center">
          {/* Breadcrumb */}
          <div className="mx-auto flex items-center justify-center gap-2 text-sm font-semibold text-primary-foreground/70">
            <a href="/" className="transition hover:text-accent">
              Home
            </a>

            <ArrowRight className="h-4 w-4 text-primary-foreground/45" />

            <span className="text-accent">{currentPage || title}</span>
          </div>

          {/* Huge Title */}
          <h1 className="mx-auto mt-8 max-w-5xl font-heading text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-[82px]">
            {title}
          </h1>
        </div>
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-background [clip-path:ellipse(70%_100%_at_50%_100%)]" />
    </section>
  );
};

export default PageHero;