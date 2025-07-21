import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDropdown } from "react-icons/io";

import bgImage from "../assets/Homebg1.webp";

import About from "../components/About";
import Contact from "../components/HowToReach";

const ourServices = [
  {
    title: "ISO Services",
    route: "/all-iso",
  },
  {
    title: "GMP Service",
    route: "/gmpMain",
  },
  {
    title: "HACCP Service",
    route: "/hacpMain",
  },
  {
    title: "CE Marking",
    route: "/ceMain",
  },
];

export default function HomePage() {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const hideTimeoutRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const showDropdownMenu = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
    setShowDropdown(true);
  };

  const hideDropdownMenu = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
    }, 200);
  };

  return (
    <div className="relative min-h-screen bg-gray-900 text-white font-sans overflow-hidden">
      <div className="relative h-[92vh] w-full">
        {/* Slide 1 */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === 0 ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
        >
          <div
            className="h-full w-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-gray-800 to-gray-900 opacity-40 z-0" />
            {currentSlide === 0 && (
              <div key={currentSlide}>
                <div className="absolute top-0 bottom-0 right-0 w-1/3 bg-[#1b1e81] bg-opacity-40 animate-slide1 z-10" />
                <div className="absolute top-0 bottom-0 right-0 w-1/4 bg-[#252aad] bg-opacity-40 animate-slide2 z-10" />
                <div className="absolute top-0 bottom-0 right-0 w-1/6 bg-[#444af4] bg-opacity-40 animate-slide3 z-10" />
              </div>
            )}
            <SharedText position="left" />
          </div>
        </div>

        {/* Slide 2 */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            currentSlide === 1 ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
        >
          <div
            className="h-full w-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-gray-900 to-gray-800 opacity-40 z-0" />
            <SharedText position="center" />
          </div>
        </div>

        {/* Our Services Button with Dropdown */}
        <div
          className="absolute bottom-16 left-10 z-50"
          onMouseEnter={showDropdownMenu}
          onMouseLeave={hideDropdownMenu}
        >
          <div className="relative rounded-lg px-8 py-3 cursor-pointer select-none bg-blue-900 bg-opacity-90 hover:bg-opacity-100 shadow-lg transition-all duration-300 flex items-center gap-2 font-semibold text-lg sm:text-xl tracking-wide">
            <span>Our Services</span>
            <IoIosArrowDropdown
              size={22}
              className={`transition-transform duration-300 ${
                showDropdown ? "rotate-180" : "rotate-0"
              }`}
            />
            {showDropdown && (
              <div
                className="absolute bottom-full left-0 mb-3 w-72 bg-gray-800 bg-opacity-95 rounded-2xl shadow-2xl p-5 z-50"
                onMouseEnter={showDropdownMenu}
                onMouseLeave={hideDropdownMenu}
              >
                <div className="mb-3 font-bold text-lg border-b border-gray-600 pb-2 text-blue-300 select-none">
                  Our Services
                </div>
                {ourServices.map((service, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setShowDropdown(false);
                      navigate(service.route);
                    }}
                    className="py-2 px-3 cursor-pointer hover:bg-blue-700 rounded-lg transition-colors duration-300 select-none"
                  >
                    {service.title}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Additional Sections */}
      <About />
      <Contact />

      {/* Styles & Animations */}
      <style>
        {`
          @keyframes slideIn1 {
            0% { transform: translateX(100%); opacity: 0.2; }
            100% { transform: translateX(30%); opacity: 0.4; }
          }
          @keyframes slideIn2 {
            0% { transform: translateX(100%); opacity: 0.15; }
            100% { transform: translateX(50%); opacity: 0.3; }
          }
          @keyframes slideIn3 {
            0% { transform: translateX(100%); opacity: 0.1; }
            100% { transform: translateX(70%); opacity: 0.25; }
          }

          .animate-slide1 { animation: slideIn1 5s ease-in-out forwards; }
          .animate-slide2 { animation: slideIn2 6s ease-in-out forwards; }
          .animate-slide3 { animation: slideIn3 7s ease-in-out forwards; }

          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .animate-fade-in-delay1 { animation: fadeInUp 0.8s ease-out forwards; animation-delay: 0.5s; }
          .animate-fade-in-delay2 { animation: fadeInUp 0.8s ease-out forwards; animation-delay: 1s; }
          .animate-fade-in-delay3 { animation: fadeInUp 0.8s ease-out forwards; animation-delay: 1.5s; }
          .animate-fade-in-delay4 { animation: fadeInUp 0.8s ease-out forwards; animation-delay: 2s; }
        `}
      </style>
    </div>
  );

  function SharedText({ position }) {
    if (position === "center") {
      return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-30 w-full max-w-4xl px-4 space-y-6">
          <div className="bg-[#1f2d3d]/70 backdrop-blur-sm w-[90%] mx-auto px-6 py-10 rounded shadow-lg text-white text-4xl sm:text-5xl font-extrabold animate-fade-in-delay1 relative z-10">
            KECT Consultants
          </div>
          <div className="bg-[#2b7a78]/70 backdrop-blur-sm w-[80%] mx-auto px-6 py-10 rounded shadow-2xl text-white space-y-3 animate-fade-in-delay2 -mt-10 relative z-20">
            <div className="text-2xl sm:text-3xl font-semibold">
              ISO & Management Consultancy Excellence
            </div>
            <div className="text-xl sm:text-2xl font-medium">
              Professional Business Consultancy Services
            </div>
          </div>
        </div>
      );
    }

    // Centered layout for Slide 1 (previously left-aligned)
    return (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-30 w-full max-w-4xl px-4 space-y-6">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-wide drop-shadow-lg opacity-0 animate-fade-in-delay1">
          KECT Consultants
        </h1>
        <div className="text-xl sm:text-3xl font-semibold text-[#151556] drop-shadow-md opacity-0 animate-fade-in-delay2">
          ISO & Management Consultancy Excellence
        </div>
        <h2 className="text-2xl sm:text-4xl font-semibold text-yellow-400 drop-shadow-md opacity-0 animate-fade-in-delay3">
          Professional Business Consultancy Services
        </h2>
        <p className="text-lg sm:text-xl leading-relaxed tracking-wide drop-shadow-md opacity-0 animate-fade-in-delay4 px-4">
          KECT Consultants delivers world-class ISO certification and management
          consultancy services to help organizations achieve operational excellence and
          regulatory compliance.
        </p>
      </div>
    );
  }
}
