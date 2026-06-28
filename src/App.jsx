import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";

function App (){
  return <Routes>
    <Route path="/" element={<Home/>}/>
    {/* <Footer /> */}
  </Routes>
}
export default App;