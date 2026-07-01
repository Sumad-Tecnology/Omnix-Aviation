import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

function ServiceCard({ service, index, className = "" }) {
  const Icon = service.icon;

  return (
    <motion.a
      href={service.href}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className={`group relative flex min-h-[300px] flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-lg shadow-foreground/5 transition duration-300 hover:border-primary/25 hover:shadow-xl hover:shadow-primary/10 ${className}`}
    >
      {/* Top Area */}
      <div className="flex items-start justify-between gap-5">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition group-hover:bg-aviation-blue">
          <Icon className="h-7 w-7" />
        </div>

        <span className="font-heading text-4xl font-extrabold leading-none text-primary/10 transition group-hover:text-primary/20 dark:text-accent/10 dark:group-hover:text-accent/20">
          0{index + 1}
        </span>
      </div>

      {/* Content */}
      <div className="mt-8 flex-1">
        <h3 className="font-heading text-xl font-semibold leading-tight text-card-foreground">
          {service.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-muted-foreground">
          {service.description}
        </p>
      </div>

      {/* Bottom Link Style */}
      <div className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-extrabold text-primary transition group-hover:text-aviation-blue dark:text-accent">
        Learn More
        <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>

      {/* Clean bottom line only */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full dark:bg-accent" />
    </motion.a>
  );
}

export default ServiceCard;