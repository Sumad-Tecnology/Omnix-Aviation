import BrandPromise from "../Components/About/BrandPromise";
import CompanyOverview from "../Components/About/CompanyOverview";
import MissionVision from "../Components/About/MissionVision";
import AboutSection from "../Components/AboutSection";
import PageHero from "../Components/PageHero";

function About (){
    return <div>
        <PageHero title="About Us"/>
        {/* <CompanyOverview /> */}
        <AboutSection />
        <MissionVision />
        <BrandPromise />
    </div>
}
export default About;