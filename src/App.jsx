import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Home/NavBar";
import Footer from "./Home/Footer";
import HomePage from './Home/HomePage.jsx';
import Advertisebar from './Home/Advertisebar.jsx';
import About from './components/About.jsx';
import Leader from './components/Leader.jsx';
import HowToReach from './components/HowToReach.jsx';
import Credential from './components/Credential.jsx';
import TermsPolicy from "./Home/Terms&Policy";
import ScrollToTop from './components/ScrollToTop.jsx';
import { FaWhatsapp } from "react-icons/fa";
//import WhoWeare from './components/WhoWeare.jsx';
import Hightlight from './components/Highlight.jsx';



import Services from './Services/Services.jsx';
import AllISO from './Services/AllISOServices.jsx';
import ISO9001Main from './Services/ISO9001Main.jsx';
import ISO1385Main from './Services/ISO1385Main.jsx';
import ISO14001Main from './Services/ISO14001Main.jsx';
import ISO15189Main from './Services/ISO15189Main.jsx';
import ISO15378Main from './Services/ISO15378Main.jsx';
import ISO17025Main from './Services/ISO17025Main.jsx';
import ISO18404Main from './Services/ISO18404Main.jsx';
import ISO19011Main from './Services/ISO19011Main.jsx';
import ISO22000Main from './Services/ISO22000Main.jsx';
import FSSC22000Main from './Services/FSSC22000Main.jsx';
import ISO22301Main from './Services/ISO22301Main.jsx';
import ISO22716Main from './Services/ISO22716Main.jsx';
import ISO27001Main from './Services/ISO27001Main.jsx';
import ISO37001Main from './Services/ISO37001Main.jsx';
import ISO45001Main from './Services/ISO45001Main.jsx';
import CEMain from './Services/CEMain.jsx';
import HACPMain from './Services/HACPMain.jsx';
import GMPMain from './Services/GMPMain.jsx';


export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
     <Advertisebar/>
    {/*  */}
     <NavBar />
     
      <Routes>
        <Route path="/" element={<HomePage />} />     
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Leader />} />
        <Route path="/contact" element={<HowToReach />} />
        <Route path="/credential" element={<Credential />} />
        <Route path="/termspolicy" element={<TermsPolicy />} /> {/**/}

        <Route path="/all-iso" element={<AllISO />} />
        <Route path="/iso9001Main" element={<ISO9001Main />} />
        <Route path="/iso1385Main" element={<ISO1385Main />} />
        <Route path="/iso14001Main" element={<ISO14001Main />} />
        <Route path="/iso15189Main" element={<ISO15189Main />} />
        <Route path="/iso15378Main" element={<ISO15378Main />} />
        <Route path="/iso17025Main" element={<ISO17025Main />} />
        <Route path="/iso18404Main" element={<ISO18404Main />} />
        <Route path="/iso19011Main" element={<ISO19011Main />} />
        <Route path="/iso22000Main" element={<ISO22000Main />} />
        <Route path="/fssc22000Main" element={<FSSC22000Main />} />
        <Route path="/iso22301Main" element={<ISO22301Main />} />
        <Route path="/iso22716Main" element={<ISO22716Main />} />
        <Route path="/iso27001Main" element={<ISO27001Main />} />
        <Route path="/iso37001Main" element={<ISO37001Main />} />
        <Route path="/iso45001Main" element={<ISO45001Main />} />
        <Route path="/ceMain" element={<CEMain />} />
        <Route path="/hacpMain" element={<HACPMain />} />
        <Route path="/gmpMain" element={<GMPMain />} />
  
      </Routes>
        <div className="fixed bottom-5 right-5 z-50">
        <a
         href="https://wa.me/+94769780984"
          target="_blank"
        rel="noopener noreferrer"
       className="flex items-center gap-2 bg-green-500 text-white py-3 px-4 md:px-5 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
        title="Chat with us on WhatsApp"
  >
    <FaWhatsapp size={24} />
    <span className="font-medium text-sm md:text-base hidden md:inline">Chat with us</span>
  </a>
</div>


   <Footer />
    </BrowserRouter>
  );
}
