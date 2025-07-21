import React from 'react';
import { motion } from 'framer-motion';
import Process from '../components/Process.jsx';
// import Together from '../components/Together.jsx'; // Uncomment if needed

// Background image
import clientsBg from "../assets/OurClient.webp"; // Replace with your actual background image path

// Logos imports
import Deepani from "../assets/depani.webp";
import Dream from "../assets/DreamFactory.webp";
import AdamCarbons from "../assets/AdamCarbons.webp";
import CenterFolean from "../assets/centerfolean_logo.webp";
import Sanoda from "../assets/Sanoda.webp";
import Kolega from "../assets/Kolega.webp";
import TropicalTea from "../assets/TropicalCeylonTea.webp";
import Haycolor from "../assets/haycolour_logo.webp";
import Pandora from "../assets/Panora.webp";
import mmnoorbhoy from "../assets/MMN.webp";
import Titan from "../assets/titan-logo-rgb.webp";
import Ondera from "../assets/Ovendra.webp";
import NB from "../assets/NB.webp";
import Ema from "../assets/EmaPharma.webp";
import Rugby from "../assets/Rugby.webp";
import Gmedi from "../assets/GlobalMedi.webp";
import Nuwani from "../assets/Nuwani.webp";
import Sasra from "../assets/Sasra.webp";
import VisionL from "../assets/Vision Lanka.webp";
import LHC from "../assets/lhc-logo.png";
import DTT from "../assets/DT.webp";
import Udayanga from "../assets/Udayanga.webp";
import LS from "../assets/LS.webp";
import NF from "../assets/Nouris.webp";
import SA from "../assets/Siyarata.webp";

const clientLogos = [
  { src: Deepani, alt: 'Deepani Enterprises', name: 'Deepani Enterprises' },
  { src: Dream, alt: 'Dream Factory', name: 'Dream Factory' },
  { src: AdamCarbons, alt: 'Adam Carbons', name: 'Adam Carbons' },
  { src: CenterFolean, alt: 'Center For Lean Excellence', name: 'Center For Lean Excellence' },
  { src: Sanoda, alt: 'Sanoda Ayurveda', name: 'Sanoda Ayurveda' },
  { src: Kolega, alt: 'Kolega Engineering', name: 'Kolega Engineering' },
  { src: TropicalTea, alt: 'Tropical Ceylon Tea', name: 'Tropical Ceylon Tea' },
  { src: Haycolor, alt: 'Haycolor', name: 'Haycolor' },
  { src: Pandora, alt: 'Panora', name: 'Panora Eye Hospital' },
  { src: mmnoorbhoy, alt: 'MMN Noorbhoy', name: 'MMN Noorbhoy' },
  { src: Titan, alt: 'Tiran Tyres', name: 'Tiran Tyres' },
  { src: Ondera, alt: 'Ovendra Natural Foods', name: 'Ovendra Natural Foods' },
  { src: Rugby, alt: 'Ceylonese Rugby', name: 'Ceylonese Rugby & Football Club' },
  { src: Gmedi, alt: 'Global Medicare', name: 'Global Medicare & Laboratories' },
  { src: Ema, alt: 'Ema Pharma', name: 'Ema Pharma' },
  { src: NB, alt: 'NB Products', name: 'NB Products' },
  { src: LHC, alt: 'LH Consortium', name: 'LH Consortium' },
  { src: VisionL, alt: 'Vision Lanka', name: 'Vision Lanka Engineering' },
  { src: Sasra, alt: 'Sahasra Holdings', name: 'Sahasra Holdings' },
  { src: Nuwani, alt: 'Nuwani Constructions', name: 'Nuwani Constructions' },
  { src: SA, alt: 'Siyarata Ayurveda', name: 'Siyarata Ayurveda' },
  { src: DTT, alt: 'Dynamic Technologies', name: 'Dynamic Technologies & Transport Division' },
  { src: Udayanga, alt: 'Udaya Industries', name: 'Udaya Industries' },
  { src: LS, alt: 'LS Trading', name: 'LS Trading' },
  { src: NF, alt: 'Nourishing Foods', name: 'Nourishing Foods' },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, type: 'spring', bounce: 0.3 }
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 6px 25px rgba(0, 59, 120, 0.3)",
    transition: { duration: 0.3 }
  },
};

const ClientsWeAreProudOf = () => {
  return (
    <>
      {/* Section with background image and overlay */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-20 px-4 sm:px-8 md:px-12 lg:px-20 font-sans min-h-screen"
        style={{ backgroundImage: `url(${clientsBg})` }}
      >

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm z-0"></div>

        {/* Content */}
        <div className="relative z-10">
          {/* Title */}
          <div className="text-center mb-14">
            <h1
              aria-hidden="true"
              className="absolute inset-0 flex justify-center items-center text-[7rem] sm:text-[10rem] font-extrabold text-[#003B78] opacity-10 -z-10 leading-none"
            >
              Clients
            </h1>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#003B78] drop-shadow-md relative">
              We Are Proud Of
            </h2>
            <p className="mt-4 text-gray-800 text-base sm:text-lg max-w-2xl mx-auto relative backdrop-blur-md">
              We’ve collaborated with leading businesses across sectors to deliver impactful certification and consultancy solutions.
            </p>
          </div>

          {/* Logo Grid */}
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 max-w-7xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {clientLogos.map((logo, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover="hover"
                className="bg-white/30 backdrop-blur-sm rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center text-center shadow transition-transform border border-gray-200 hover:border-blue-300"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-24 sm:h-28 object-contain mb-3"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://placehold.co/200x100/cccccc/000000?text=Logo+Error";
                  }}
                />
                <p className="text-sm sm:text-base font-semibold text-[#003B78]">{logo.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process outside the section - no background or overlay */}
      <div className="my-1 px-4 sm:px-8 md:px-12 lg:px-20 font-sans">
        
        {/* <Process /> */}
        {/* <Together /> */}
      </div>
    </>
  );
};

export default ClientsWeAreProudOf;
