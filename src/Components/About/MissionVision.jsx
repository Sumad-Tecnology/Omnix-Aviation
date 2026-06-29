import { Eye, Flag, ShieldCheck } from "lucide-react";
import missionVisionImage from "../../Assets/MissionVision.png";

const values = [
  "Safety",
  "Integrity",
  "Reliability",
  "Innovation",
  "Customer Focus",
  "Operational Excellence",
];

const MissionVision = () => {
  return (
    <section
      id="mission-vision"
      className="relative overflow-hidden bg-background py-20 text-foreground sm:py-24 lg:py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-omnix-grid opacity-20 dark:opacity-10" />
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold text-primary dark:text-accent">
              Mission, Vision & Values
            </p>

            <h2 className="mt-4 max-w-2xl font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Guided by Purpose, Driven by Excellence
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            OMNIX Aviation is built on professional service delivery, strong
            aviation standards, and a commitment to dependable support for every
            mission.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.25fr]">
          {/* Left Image */}
          <div className="overflow-hidden rounded-2xl bg-muted shadow-xl shadow-foreground/5 dark:bg-card">
            <img
              src={missionVisionImage}
              alt="OMNIX Aviation mission and vision"
              className="h-full min-h-[420px] w-full object-cover"
            />
          </div>

          {/* Right Cards */}
          <div className="grid gap-5">
            {/* Mission + Vision */}
            <div className="grid gap-5 sm:grid-cols-2">
              {/* Mission */}
              <div className="group rounded-2xl border border-border bg-card p-6 shadow-xl shadow-foreground/5 transition duration-300 hover:-translate-y-2 hover:border-primary/20 hover:shadow-primary/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground transition group-hover:bg-aviation-blue">
                  <Flag className="h-6 w-6" />
                </div>

                <h3 className="mt-6 font-heading text-2xl font-semibold text-card-foreground">
                  Our Mission
                </h3>

                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  To provide world-class aviation and logistics solutions that
                  meet international standards and support clients with safe,
                  responsive, and professional service delivery.
                </p>
              </div>

              {/* Vision */}
              <div className="group rounded-2xl border border-border bg-card p-6 shadow-xl shadow-foreground/5 transition duration-300 hover:-translate-y-2 hover:border-primary/20 hover:shadow-primary/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground transition group-hover:bg-aviation-blue">
                  <Eye className="h-6 w-6" />
                </div>

                <h3 className="mt-6 font-heading text-2xl font-semibold text-card-foreground">
                  Our Vision
                </h3>

                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  To become Africa’s leading aviation solutions provider,
                  recognized for operational excellence, reliability, and
                  customer-focused service.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-muted p-7 shadow-xl shadow-foreground/5 transition duration-300 hover:-translate-y-2 hover:border-primary/20 hover:shadow-primary/10 dark:bg-card">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-[80px]" />
              <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-accent/10 blur-[80px]" />

              <div className="relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground transition group-hover:bg-aviation-blue">
                  <ShieldCheck className="h-6 w-6" />
                </div>

                <h3 className="mt-6 font-heading text-2xl font-semibold text-foreground">
                  Our Core Values
                </h3>

                <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground sm:text-base">
                  Our work is guided by safety, integrity, reliability,
                  innovation, customer focus, and operational excellence,
                  ensuring every mission is handled with professionalism,
                  responsibility, and care.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {values.map((value) => (
                    <span
                      key={value}
                      className="rounded-full border border-border bg-background px-4 py-2 text-xs font-bold text-primary shadow-sm dark:bg-background/40 dark:text-accent"
                    >
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;