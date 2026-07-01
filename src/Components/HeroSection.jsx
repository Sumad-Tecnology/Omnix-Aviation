import { CircleDot } from "lucide-react";
import Header from "./Header";
import Button from "./Button";
import HeroImg from "../Assets/Home/HeroImage.webp"

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage: `url(${HeroImg})`,
      }}
    >
      {/* Soft overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-[#001840]/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#001840]/15 via-transparent to-[#001840]/10" />

      {/* Header */}
      <div className="relative z-30">
        <Header />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 pb-16 pt-32 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-bold text-[#001840] shadow-lg sm:text-sm">
          <CircleDot className="h-4 w-4 text-[#D6B35A]" />
          Where Every Journey Takes You Higher
        </div>

       <h1 className="max-w-3xl font-heading text-3xl font-bold leading-tight tracking-tight text-white drop-shadow-2xl sm:text-4xl md:text-5xl lg:text-[54px]">
        Beyond Boundaries,
        <span className="block">Above Expectations</span>
        </h1>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="#quote" variant="secondary" size="lg">
            Request a Quote
          </Button>

          <Button href="#services" variant="glass" size="lg">
            Explore Services
          </Button>
        </div>
    
      </div>
    </section>
  );
};

export default HeroSection;