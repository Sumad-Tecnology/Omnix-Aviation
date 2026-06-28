import {
  CheckCircle2,
  ClipboardCheck,
  FileText,
  Plane,
  Radar,
  Rocket,
} from "lucide-react";
import Button from "./Button";

const processSteps = [
  {
    number: "01",
    title: "Submit Your Mission Request",
    description:
      "Share your flight, cargo, passenger, route, timing, or mission requirements with the OMNIX team.",
    icon: FileText,
  },
  {
    number: "02",
    title: "Requirement Review",
    description:
      "We review your operational needs, urgency, destination, safety requirements, and mission profile.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Aircraft / Solution Planning",
    description:
      "Our team identifies the most suitable aircraft, charter solution, cargo support, or operational plan.",
    icon: Plane,
  },
  {
    number: "04",
    title: "Route & Operations Coordination",
    description:
      "We coordinate routing, handling, ground support, logistics, and flight preparation details.",
    icon: Radar,
  },
  {
    number: "05",
    title: "Confirmation & Execution",
    description:
      "After confirmation, the mission is executed with a strong focus on safety, timing, and reliability.",
    icon: Rocket,
  },
  {
    number: "06",
    title: "Mission Follow-Up",
    description:
      "We follow up after completion to confirm service quality, documentation, and client satisfaction.",
    icon: CheckCircle2,
  },
];

const ProcessSection = () => {
  return (
    <section
      id="process"
      className="relative overflow-visible bg-background py-20 text-foreground sm:py-24 lg:py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-omnix-grid opacity-25 dark:opacity-15" />
        <div className="absolute left-1/2 top-20 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-8">
        {/* Left Sticky Content */}
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <p className="text-sm font-semibold text-primary dark:text-accent">
            Working Process
          </p>

          <h2 className="mt-4 max-w-xl font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            From Request to Mission Completion
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            OMNIX Aviation follows a clear mission workflow to make every
            operation organized, safe, and professionally coordinated from the
            first request to final follow-up.
          </p>

          <div className="mt-8">
            <Button href="#quote" variant="primary" size="lg">
              Start Your Mission
            </Button>
          </div>
        </div>

        {/* Right Scrolling Process Cards */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-6 hidden h-[calc(100%-48px)] w-px bg-border sm:block" />

          <div className="space-y-5">
            {processSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group relative grid gap-4 overflow-hidden rounded-[30px] border border-border bg-card p-5 shadow-xl shadow-foreground/5 transition duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-primary/10 sm:grid-cols-[56px_1fr]"
                >
                  {/* Icon */}
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition group-hover:bg-aviation-blue">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-muted px-3 py-1 text-xs font-bold text-primary">
                        STEP {step.number}
                      </span>

                      {step.number === "01" && (
                        <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent">
                          Start
                        </span>
                      )}

                      {step.number === "06" && (
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          Complete
                        </span>
                      )}
                    </div>

                    <h3 className="mt-4 font-heading text-xl font-semibold leading-tight text-card-foreground">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>

                  {/* Large number */}
                  <div className="pointer-events-none absolute right-6 top-5 text-6xl font-bold text-primary/5 transition group-hover:text-primary/10">
                    {step.number}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;