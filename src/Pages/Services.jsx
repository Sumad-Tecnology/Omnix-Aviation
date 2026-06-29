import PageHero from "../Components/PageHero";
import ServicesGrid from "../Components/ServicesGrid";
import FinalCTA from "../Components/FinalCTA"
import ServiceSelectionGuide from "../Components/ServiceSelectionGuide";
import ctaImage from "../Assets/CTAImg.png";


function Services (){
    return <div>
        <PageHero title="Our Services" />
        <ServicesGrid />
        <ServiceSelectionGuide />
         <FinalCTA
        eyebrow="Mission Ready Support"
        title="Need reliable aviation support for your next mission?"
        description="Connect with OMNIX Aviation for cargo, charter, humanitarian, logistics, and special mission aviation support."
        image={ctaImage}
        imageAlt="OMNIX Aviation mission support"
        primaryButton={{
          label: "Request Aviation Support",
          href: "#quote",
        }}
        secondaryButton={{
          label: "Contact Our Team",
          href: "#contact",
        }}
      />
    </div>
}
export default Services;