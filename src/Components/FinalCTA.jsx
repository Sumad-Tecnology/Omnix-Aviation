import defaultCtaImage from "../Assets/CTAImg.png";
import Button from "./Button";

const FinalCTA = ({
  eyebrow = "Mission Ready Support",
  title = "Need reliable aviation support for your next mission?",
  description = "Connect with OMNIX Aviation for cargo, charter, humanitarian, logistics, and special mission aviation support.",
  image = defaultCtaImage,
  imageAlt = "OMNIX Aviation support",
  primaryButton = {
    label: "Request Aviation Support",
    href: "#quote",
  },
  secondaryButton = {
    label: "Contact Our Team",
    href: "#contact",
  },
  className = "",
}) => {
  return (
    <section
      id="final-cta"
      className={`bg-background py-10 text-foreground sm:py-12 lg:py-16 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Outer light wrapper */}
        <div className=" p-4  sm:p-5">
          {/* Main dark CTA box */}
          <div className="relative overflow-hidden rounded-2xl bg-primary p-4 shadow-2xl shadow-primary/15 sm:p-5">
            <div className="grid items-stretch gap-5 lg:grid-cols-2">
              {/* LEFT TEXT SIDE */}
              <div className="relative z-10 flex flex-col justify-center px-4 py-6 text-white sm:px-6 sm:py-7 lg:px-7 lg:py-8">
                {eyebrow && (
                  <p className="text-sm font-semibold text-accent">
                    {eyebrow}
                  </p>
                )}

                <h2 className="mt-3 max-w-lg font-heading text-2xl font-semibold leading-tight tracking-tight sm:text-3xl lg:text-[38px]">
                  {title}
                </h2>

                {description && (
                  <p className="mt-4 max-w-md text-sm leading-7 text-white/65">
                    {description}
                  </p>
                )}

                {(primaryButton || secondaryButton) && (
                  <div className="mt-7 flex flex-col gap-4 sm:flex-row">
                    {primaryButton && (
                      <Button
                        href={primaryButton.href}
                        variant={primaryButton.variant || "secondary"}
                        size={primaryButton.size || "md"}
                      >
                        {primaryButton.label}
                      </Button>
                    )}

                    {secondaryButton && (
                      <Button
                        href={secondaryButton.href}
                        variant={secondaryButton.variant || "glass"}
                        size={secondaryButton.size || "md"}
                      >
                        {secondaryButton.label}
                      </Button>
                    )}
                  </div>
                )}
              </div>

              {/* RIGHT IMAGE SIDE */}
              <div className="relative z-10 flex h-full">
                <div className="h-[260px] w-full overflow-hidden rounded-xl bg-muted dark:bg-card sm:h-[300px] lg:h-full lg:min-h-[320px]">
                  <img
                    src={image}
                    alt={imageAlt}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* soft decorative shape */}
            <div className="pointer-events-none absolute bottom-0 left-[42%] hidden h-40 w-40 rounded-full bg-white/10 blur-3xl lg:block" />
            <div className="pointer-events-none absolute bottom-[-60px] left-[42%] hidden h-40 w-40 rounded-full border-[35px] border-white/5 lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;