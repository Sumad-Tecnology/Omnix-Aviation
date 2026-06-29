import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";

function App (){
  return <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/gallery" element={<Gallery/>}/>
    <Route path="/contact" element={<Contact/>}/>

    {/* <Footer /> */}
  </Routes>
}
export default App;