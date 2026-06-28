import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ClipboardCheck,
  HeartPulse,
  PackageCheck,
  Plane,
  RadioTower,
  Route,
  Settings2,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    title: "Air Cargo Operations",
    description:
      "Secure cargo movement for commercial, humanitarian, urgent, and special cargo requirements.",
    href: "#air-cargo",
    icon: PackageCheck,
  },
  {
    title: "Passenger Charter Services",
    description:
      "Flexible aircraft charter solutions for private, corporate, government, and mission-critical travel.",
    href: "#passenger-charter",
    icon: Plane,
  },
  {
    title: "Humanitarian & Relief Flights",
    description:
      "Rapid-response aviation support for aid organizations, emergency programs, and relief cargo.",
    href: "#humanitarian",
    icon: HeartPulse,
  },
  {
    title: "Aircraft Leasing & Management",
    description:
      "Aircraft solutions through ownership, lease, ACMI, and professional management arrangements.",
    href: "#aircraft-leasing",
    icon: Settings2,
  },
  {
    title: "Aviation Consultancy",
    description:
      "Professional support on aviation planning, compliance, safety, and operational strategy.",
    href: "#consultancy",
    icon: ClipboardCheck,
  },
  {
    title: "Flight Operations Support",
    description:
      "Coordination for smooth flight planning, handling, route support, and mission execution.",
    href: "#flight-support",
    icon: RadioTower,
  },
  {
    title: "Logistics Coordination",
    description:
      "Air logistics planning for cargo, people, operational resources, and ground movement.",
    href: "#logistics",
    icon: Route,
  },
  {
    title: "Special Mission Operations",
    description:
      "Tailored aviation support for urgent, remote, sensitive, or high-priority assignments.",
    href: "#special-mission",
    icon: ShieldCheck,
  },
];

const ServicesSection = () => {
  const carouselRef = useRef(null);
  const [dragWidth, setDragWidth] = useState(0);

  useEffect(() => {
    const updateDragWidth = () => {
      if (!carouselRef.current) return;

      setDragWidth(
        carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
      );
    };

    updateDragWidth();

    window.addEventListener("resize", updateDragWidth);

    return () => window.removeEventListener("resize", updateDragWidth);
  }, []);

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

          <a
            href="#quote"
            className="inline-flex w-fit items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-extrabold text-primary-foreground transition hover:bg-aviation-blue"
          >
            Request Support
          </a>
        </div>

        {/* Draggable Services */}
        <motion.div
          ref={carouselRef}
          className="mt-14 cursor-grab overflow-hidden active:cursor-grabbing"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -dragWidth }}
            initial={{ x: 260, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 1,
              duration: 0.9,
              ease: "easeOut",
            }}
            className="flex gap-5"
          >
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="group relative min-h-[330px] min-w-[86%] overflow-hidden rounded-[30px] border border-border bg-card p-6 shadow-xl shadow-foreground/5 sm:min-w-[48%] lg:min-w-[31.5%] xl:min-w-[24%]"
                >
                  {/* Top number */}
                  <div className="absolute right-5 top-5 rounded-full bg-muted px-4 py-2 text-xs font-extrabold text-muted-foreground transition group-hover:bg-primary group-hover:text-primary-foreground">
                    0{index + 1}
                  </div>

                  {/* Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition group-hover:bg-accent group-hover:text-accent-foreground">
                    <Icon className="h-7 w-7" />
                  </div>

                  {/* Content */}
                  <div className="mt-10">
                    <h3 className="font-heading text-xl font-semibold leading-tight text-card-foreground">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                      {service.description}
                    </p>
                  </div>

                  {/* Learn more */}
                  <a
                    href={service.href}
                    className="absolute bottom-6 left-6 inline-flex items-center gap-2 text-sm font-extrabold text-primary transition group-hover:text-aviation-blue dark:text-accent"
                  >
                    Learn More
                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>

                  {/* Hover decoration */}
                  <div className="pointer-events-none absolute -bottom-20 -right-20 h-44 w-44 rounded-full bg-primary/5 transition group-hover:bg-accent/10" />
                  <div className="pointer-events-none absolute -right-10 top-1/2 h-24 w-24 rounded-full border border-primary/10 transition group-hover:border-accent/40" />
                </motion.article>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;