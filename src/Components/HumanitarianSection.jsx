import { Check } from "lucide-react";
import { motion } from "framer-motion";
import humanitarianAirplane from "../Assets/HumanterianAirplane.png";
import Button from "./Button";

const humanitarianCapabilities = [
  "Emergency Airlift",
  "Remote-Area Access",
  "Relief Cargo",
  "Medical Evacuation Coordination",
];

const HumanitarianSection = () => {
  return (
    <section
      id="humanitarian"
      className="relative overflow-hidden bg-background py-20 text-foreground sm:py-24 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Left Image Area */}
        <div className="relative min-h-[360px] sm:min-h-[440px] lg:min-h-[500px]">
          {/* Soft background box */}
          <div className="absolute left-0 top-1/2 h-[300px] w-[82%] -translate-y-1/2 rounded-[32px] bg-muted dark:bg-card sm:h-[370px] lg:h-[430px]" />

          {/* Decorative dot */}
          <span className="absolute right-[8%] top-1/2 hidden h-3 w-3 -translate-y-1/2 rounded-full bg-primary/30 sm:block" />

          {/* Airplane image with soft animation */}
          <motion.img
            src={humanitarianAirplane}
            alt="OMNIX humanitarian aviation support"
            className="absolute left-1/2 top-1/2 z-10 w-[115%] max-w-[760px] -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_35px_55px_rgba(0,24,64,0.18)] dark:drop-shadow-[0_35px_60px_rgba(0,0,0,0.45)]"
            animate={{
              y: [0, -10, 0],
              x: [0, 6, 0],
              rotate: [0, 1.2, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Right Content */}
        <div className="lg:pl-4">
          <p className="text-sm font-semibold text-primary dark:text-accent">
            Humanitarian Support
          </p>

          <h2 className="mt-4 max-w-2xl font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Rapid Aviation Support for Humanitarian & Emergency Operations
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            OMNIX Aviation supports NGOs, UN agencies, governments, and relief
            organizations with rapid deployment, emergency airlift, remote-area
            access, relief cargo movement, and medical evacuation coordination.
          </p>

          {/* Checklist */}
          <div className="mt-9 grid gap-x-10 gap-y-5 sm:grid-cols-2">
            {humanitarianCapabilities.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <Check className="h-5 w-5 shrink-0 text-primary stroke-[3] dark:text-accent" />

                <p className="text-sm font-semibold text-muted-foreground">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Button href="#quote" variant="primary" size="md">
              Request Emergency Support
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HumanitarianSection;