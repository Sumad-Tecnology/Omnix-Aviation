import AboutSection from "../Components/AboutSection";
import FinalCTA from "../Components/FinalCTA";
import FleetSection from "../Components/FleetSection";
import Header from "../Components/Header";
import HeroSection from "../Components/HeroSection";
import HumanitarianSection from "../Components/HumanitarianSection";
import ProcessSection from "../Components/ProcessSection";
import ServicesSection from "../Components/ServicesSection";
import WhyChooseSection from "../Components/WhyChooseSection";

function Home (){
    return <div>
        {/* <Header /> */}
        <HeroSection  />
        <AboutSection />
        <ServicesSection />
        <FleetSection />
        <HumanitarianSection />
        <WhyChooseSection />
        <ProcessSection />
        <FinalCTA />
    </div>
}
export default Home;