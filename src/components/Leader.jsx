import React from "react";
import { Briefcase, Users, DollarSign } from "lucide-react";
import aa from "../assets/images-Pica.webp"; // CEO image
import thiyagaraja from "../assets/thiyagaraja1.webp";
import nalika from "../assets/NalikaMiss.webp";
import chandani from "../assets/chandani.webp";
import fazil from "../assets/fazil.webp"; // Replace with correct Fazil image

const OurTeamSection = () => {
  return (
    <div className="relative min-h-screen bg-white pb-1 pt-24 sm:py-32 px-4 sm:px-8 lg:px-20 font-sans text-gray-900 overflow-visible">
      {/* Faded background heading */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 text-center select-none pointer-events-none z-0">
        <h2
          className="text-[3rem] sm:text-[5rem] lg:text-[7rem] font-extrabold text-[#003B78] opacity-10 uppercase leading-none"
          aria-hidden="true"
        >
          MEET OUR TEAM
        </h2>
      </div>

      {/* Section heading */}
      <div className="relative max-w-3xl mx-auto z-10 text-center mb-2 mt-0 px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#003B78] tracking-tight mb-4">
          Our Team
        </h2>
        <p className="text-base sm:text-lg text-gray-700 max-w-xl mx-auto leading-relaxed">
          Our leadership is driven by excellence, passion, and decades of global industry experience.
        </p>
      </div>

      {/* CEO Profile */}
      <div className="relative z-10 mb-20 text-center px-4">
        <img
          src={aa}
          alt="Chairman Vinod Kumar Khandelwal"
          className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full shadow-xl object-cover border-4 border-[#003B78] mx-auto transition-transform duration-300 hover:scale-105"
          onError={(e) => (e.target.src = "https://placehold.co/300x300?text=No+Image")}
        />
        <h3 className="mt-6 text-2xl sm:text-3xl font-bold text-gray-900">
          Vinod Kumar Khandelwal
        </h3>
        <p className="text-[#003B78] font-medium text-lg sm:text-xl mb-3">
          Chairman, KECT Group of Companies
        </p>
        <p className="text-gray-700 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Visionary leader with global project experience, committed to innovation and excellence in infrastructure development across multiple countries.
        </p>
      </div>

      {/* Team Members (4 Directors) */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mt-10 mb-20 px-4">
        <TeamMemberCard
          image={thiyagaraja}
          name="Mr. M. Thiyagaraja"
          title="Director"
          description="Attorney at Law, MBA, ACA, FCMA, AIB, AAAI, FIBM"
        />
        <TeamMemberCard
          image={nalika}
          name="Ms. Nalika Thilakarathne"
          title="Director"
          description="HNDC, HNDE - ISO"
        />
        <TeamMemberCard
          image={chandani}
          name="Ms. Chandani Ekanayake"
          title="Director"
          description="PQ HRM (CIPM), MPM (SLIDA)"
        />
        <TeamMemberCard
          image={fazil}
          name="Mr. Fazil Uwais"
          title="Director"
          description=" "
        />
      </div>

      {/* Role Cards */}
      <section className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 sm:px-6">
        <TeamCard icon={<Briefcase size={48} />} role="Directors" />
        <TeamCard icon={<Users size={48} />} role="Consultants" />
        <TeamCard icon={<DollarSign size={48} />} role="Managers" />
      </section>
    </div>
  );
};

const TeamCard = ({ icon, role }) => (
  <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-md border border-blue-100 hover:shadow-xl transition transform hover:-translate-y-1 text-center">
    <div className="text-[#003B78] mb-4">{icon}</div>
    <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{role}</h4>
    <p className="text-gray-600 text-sm sm:text-base">
      Dedicated professionals driving success across departments.
    </p>
  </div>
);

const TeamMemberCard = ({ image, name, title, description }) => (
  <div className="relative z-10 mb-12 text-center px-4 max-w-xs mx-auto">
    <img
      src={image}
      alt={name}
      className="w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 rounded-full shadow-xl object-cover border-4 border-[#003B78] mx-auto transition-transform duration-300 hover:scale-105"
      onError={(e) => (e.target.src = "https://placehold.co/300x300?text=No+Image")}
    />
    <h3 className="mt-6 text-2xl sm:text-3xl font-bold text-gray-900">{name}</h3>
    <p className="text-[#003B78] font-medium text-lg sm:text-xl mb-3">{title}</p>
    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">{description}</p>
  </div>
);

export default OurTeamSection;
