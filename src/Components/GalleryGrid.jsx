import { ArrowUpRight } from "lucide-react";
import { galleryItems } from "./GalleryData";

const GalleryGrid = () => {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-background py-20 text-foreground sm:py-24 lg:py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-omnix-grid opacity-20 dark:opacity-10" />
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-accent/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold text-primary dark:text-accent">
            Project Gallery
          </p>

          <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Aviation Work, Missions & Client Support
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <article
              key={index}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-foreground/5 transition duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-primary/10"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[280px] w-full object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Title Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent p-5">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-heading text-lg font-semibold leading-tight text-white">
                      {item.title}
                    </h3>

                    {/* <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition group-hover:bg-accent group-hover:text-accent-foreground">
                      <ArrowUpRight className="h-4 w-4" />
                    </span> */}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryGrid;