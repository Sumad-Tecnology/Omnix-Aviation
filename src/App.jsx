import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import AirFreight from "./Pages/ServiceDetails/AirFreight";
import TermsofContion from "./Pages/TermsofCondtion";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import AircraftLeasing from "./Pages/ServiceDetails/AircraftLeasing";
import AviationConsultancy from "./Pages/ServiceDetails/AviationConsultancy";
import FlightSupport from "./Pages/ServiceDetails/FlightSupport";
import HumanitarianFlights from "./Pages/ServiceDetails/HumanitarianFlights";
import LogisticsCoordination from "./Pages/ServiceDetails/LogisticsCoordination";
import PassengerCharter from "./Pages/ServiceDetails/PassengerCharter";
import SpecialMissions from "./Pages/ServiceDetails/SpecialMissions";

function App (){
  return <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/gallery" element={<Gallery/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/airfreight" element={<AirFreight/>}/>
    <Route path="/aircraft" element={<AircraftLeasing/>}/>
    <Route path="/aviationconsultant" element={<AviationConsultancy/>}/>
    <Route path="/flightsupport" element={<FlightSupport/>}/>
    <Route path="/humanflight" element={<HumanitarianFlights/>}/>
    <Route path="/logistics" element={<LogisticsCoordination/>}/>
    <Route path="/passenger" element={<PassengerCharter/>}/>
    <Route path="/specialmission" element={<SpecialMissions/>}/>
    

    <Route path="/terms" element={<TermsofContion/>}/>
    <Route path="/privacy" element={<PrivacyPolicy/>}/>


    {/* <Footer /> */}
  </Routes>
}
export default App;