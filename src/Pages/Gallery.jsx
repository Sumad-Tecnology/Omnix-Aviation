import PageHero from "../Components/PageHero";
import GalleryGrid from "../Components/GalleryGrid";
import FinalCTA from "../Components/FinalCTA";
import ctaImage from "../Assets/CTAImg.png";


function Gallery() {
  return (
    <main>
      <PageHero title="Our Gallery" currentPage="Gallery" />
      <GalleryGrid />
      <FinalCTA
        eyebrow="Mission Ready Support"
        title="Need aviation support for your next mission?"
        description="Share your requirements with OMNIX Aviation and our team will help you plan the right aviation solution."
        image={ctaImage}
        imageAlt="OMNIX Aviation support"
        primaryButton={{
          label: "Request Aviation Support",
          href: "/contact",
        }}
        secondaryButton={{
          label: "Explore Services",
          href: "/services",
        }}
      />
    </main>
  );
}

export default Gallery;