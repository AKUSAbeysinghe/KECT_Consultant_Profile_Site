import React from "react";
import { motion } from "framer-motion";

import thiyagaraja from "../assets/thiyagaraja.webp";
import nalika from "../assets/NalikaMiss.webp";
import chandani from "../assets/chandani.webp";

const teamMembers = [
  {
    name: "Mr. M. Thiyagaraja",
    title: "Director",
    qualifications: "Attorney at Law, MBA, ACA, FCMA, AIB, AAAI, FIBM",
    image: thiyagaraja,
  },
  {
    name: "Ms. Nalika Thilakarathne",
    title: "Director",
    qualifications: "HNDC, HNDE - ISO",
    image: nalika,
  },
  {
    name: "Ms. Chandani Ekanayake",
    title: "Director",
    qualifications: "PQ HRM (CIPM), MPM (SLIDA)",
    image: chandani,
  },
];

const headingVariants = {
  animate: {
    x: [0, 3, -3, 2, -2, 0],
    y: [0, -2, 2, -1, 1, 0],
    transition: { duration: 8, repeat: Infinity, ease: "easeInOut" },
  },
};

export default function OurTeamSection() {
  return (
    <section className="relative bg-white py-2 px-6 sm:px-12 md:px-20 lg:px-32 font-sans text-gray-900 overflow-visible">
      {/* Animated Background Headings */}
      <motion.h2
        className="absolute top-16 left-1/2 -translate-x-1/2 text-[12vw] sm:text-[10vw] font-extrabold text-[#003B78] opacity-10 uppercase select-none pointer-events-none z-0 leading-none whitespace-nowrap"
        variants={headingVariants}
        animate="animate"
        aria-hidden="true"
      >
        OUR
      </motion.h2>
      <motion.h2
        className="absolute top-[11rem] left-1/2 -translate-x-1/2 text-[11vw] sm:text-[9vw] font-extrabold text-[#003B78] opacity-15 uppercase select-none pointer-events-none z-0 leading-none whitespace-nowrap"
        variants={headingVariants}
        animate="animate"
        aria-hidden="true"
        style={{ animationDirection: "reverse" }}
      >
        TEAM
      </motion.h2>

      {/* Heading Content */}
      <div className="relative max-w-3xl mx-auto text-center z-10 mt-[18rem] mb-20 px-4">
        <h2 className="text-4xl sm:text-5xl font-bold text-[#003B78] tracking-tight">
          Executive Leadership Team
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mt-3 leading-relaxed max-w-xl mx-auto">
          The backbone of KECT—leaders who combine experience, passion, and vision to drive excellence.
        </p>
      </div>

      {/* Team Member Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {teamMembers.map(({ name, title, qualifications, image }, i) => (
          <article
            key={i}
            className="bg-white border border-[#003B78]/20 p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center flex flex-col items-center"
          >
            <img
              src={image}
              alt={name}
              className="w-28 h-28 rounded-full object-cover border-4 border-[#003B78]/30 shadow-md mb-4"
            />
            <h3 className="text-xl sm:text-2xl font-bold text-[#003B78]">{name}</h3>
            <p className="text-gray-800 font-medium mt-1">{title}</p>
            <p className="text-gray-600 text-sm sm:text-base mt-3 leading-relaxed">{qualifications}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
