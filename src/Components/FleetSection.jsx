import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Plane, Route, Settings2 } from "lucide-react";

import turbopropImg from "../Assets/Home/Turbo.webp";
import jetImg from "../Assets/Home/Jet.webp";
import acmiImg from "../Assets/Home/ACMI.webp";

const fleetItems = [
  {
    title: "Turboprop Aircraft",
    description:
      "Best for regional operations, remote-area access, short-runway missions, and humanitarian support.",
    image: turbopropImg,
    icon: Route,
  },
  {
    title: "Jet Aircraft",
    description:
      "Best for longer-range passenger, executive, and time-sensitive operations.",
    image: jetImg,
    icon: Plane,
  },
  {
    title: "ACMI / Lease Options",
    description:
      "Best for flexible aircraft availability based on client demand and mission needs.",
    image: acmiImg,
    icon: Settings2,
  },
];

const FleetSection = () => {
  const carouselRef = useRef(null);
  const [dragWidth, setDragWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (carouselRef.current) {
        setDragWidth(
          carouselRef.current.scrollWidth - carouselRef.current.offsetWidth
        );
      }
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="fleet"
      className="relative overflow-hidden bg-background py-20 text-foreground dark:bg-background sm:py-24 lg:py-28"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-omnix-grid opacity-40 dark:opacity-20" />
      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-primary/10 blur-[110px]" />
      <div className="absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-accent/10 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-primary dark:text-accent">
            Fleet Capability
          </p>

          <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Flexible Aircraft Solutions for Every Mission
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            OMNIX Aviation is positioned to support cargo, passenger transport,
            humanitarian missions, executive charter operations, and flexible
            aircraft solutions through lease or ACMI arrangements.
          </p>
        </div>

        {/* Draggable Cards */}
        <motion.div
          ref={carouselRef}
          className="mt-14 cursor-grab overflow-hidden active:cursor-grabbing"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -dragWidth }}
            initial={{ x: 220, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 1,
              duration: 0.9,
              ease: "easeOut",
            }}
            className="flex gap-6"
          >
            {[...fleetItems, ...fleetItems].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={`${item.title}-${index}`}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="group relative h-[420px] min-w-[82%] overflow-hidden rounded-[28px] bg-card shadow-xl shadow-foreground/10 ring-1 ring-border sm:min-w-[48%] lg:min-w-[31.5%]"
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    draggable="false"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/15 to-primary/90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Icon */}
                  <div className="absolute left-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-background/90 text-primary shadow-lg backdrop-blur-md">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Number */}
                  <div className="absolute right-6 top-6 rounded-2xl bg-background/90 px-4 py-2 text-sm font-extrabold text-primary shadow-lg backdrop-blur-md">
                    0{(index % fleetItems.length) + 1}
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="mb-3 inline-flex rounded-full bg-background/15 px-4 py-2 text-xs font-bold text-white backdrop-blur-md">
                      Aircraft Capability
                    </p>

                    <h3 className="font-heading text-2xl font-semibold leading-tight text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-white/80">
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FleetSection;