import React from 'react';
import Group from "../assets/KGroup.jpeg";
import GroupK from "../assets/KGroup2.jpeg";
import KCGroup from "../assets/KGroup3.jpeg";

function App() {
  const bulletPoints = [
    "Food Industry: MMN Noorbhoy – Achieved ISO 22000 & HACCP certification for tomato processing in 3 months with our customized gap analysis.",
    "Healthcare: Panora Eye Hospital – Certified ISO 9001:2015 with zero non-conformities during audit.",
    "Construction: Nuwani Constructions – Implemented integrated ISO 9001, 14001, and 45001 systems simultaneously.",
  ];

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col lg:flex-row items-center justify-center p-6 sm:p-10 overflow-hidden">
      {/* Left Side: Image Collage */}
      <div className="relative w-full lg:w-1/2 flex justify-center items-center mb-12 lg:mb-0 lg:pr-12">
        <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl h-72 sm:h-[400px] lg:h-[500px]">
          <img
            src={Group}
            alt="Group"
            className="absolute top-0 left-0 w-1/2 h-1/3 object-cover rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `https://placehold.co/200x150/CCCCCC/000000?text=Error`;
            }}
          />
          <img
            src={GroupK}
            alt="GroupK"
            className="absolute top-1/4 right-0 w-3/4 h-1/2 object-cover rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `https://placehold.co/300x200/CCCCCC/000000?text=Error`;
            }}
          />
          <img
            src={KCGroup}
            alt="KCGroup"
            className="absolute bottom-0 left-0 w-2/3 h-2/5 object-cover rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `https://placehold.co/250x180/CCCCCC/000000?text=Error`;
            }}
          />
        </div>
      </div>

      {/* Right Side: Text Content */}
      <div className="w-full lg:w-1/2 max-w-xl mx-auto p-4 sm:p-6 text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#003B78] mb-6 leading-tight">
          Industry-Specific Wins
        </h1>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Discover how our tailored solutions helped clients across key sectors achieve excellence.
        </p>

        {/* Bullet Points */}
        <ul className="space-y-6 text-left">
          {bulletPoints.map((point, index) => (
            <li key={index} className="flex items-start">
              <svg
                className="w-6 h-6 text-[#003B78] mr-3 flex-shrink-0 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-base text-gray-800 leading-relaxed">{point}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
