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

function App (){
  return <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/gallery" element={<Gallery/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/airfreight" element={<AirFreight/>}/>
    <Route path="/terms" element={<TermsofContion/>}/>
    <Route path="/privacy" element={<PrivacyPolicy/>}/>


    {/* <Footer /> */}
  </Routes>
}
export default App;