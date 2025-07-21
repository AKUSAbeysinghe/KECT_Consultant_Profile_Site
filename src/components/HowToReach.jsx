import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import corporateBg from "../assets/contactUs1.webp";

const ContactSectionRainco = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24 sm:py-28 lg:py-32 px-4 sm:px-8 lg:px-28 font-sans overflow-visible text-gray-900 min-h-screen"
      style={{ backgroundImage: `url(${corporateBg})` }}
    >
      {/* Faded animated background heading */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 select-none pointer-events-none z-10 text-center">
      <motion.h1
  className="text-[clamp(3rem,6vw,5rem)] sm:text-[clamp(5rem,8vw,8rem)] lg:text-[clamp(7rem,9vw,10rem)] font-extrabold text-[#003B78] opacity-10 uppercase leading-none"
  animate="animate"
  aria-hidden="true"
>
  CORPORATE
</motion.h1>

      </div>

      {/* Main title */}
      <div className="relative max-w-4xl mx-auto z-20 mb-16 text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#003B78] mb-4 tracking-tight">
          Corporate Information
        </h1>
        <p className="text-base sm:text-lg text-gray-700 max-w-xl mx-auto leading-relaxed">
          We’d love to hear from you. Reach out anytime.
        </p>
      </div>

      {/* Contact Info with Semi-transparent Background */}
      <div className="relative max-w-4xl mx-auto z-20 px-2 sm:px-4">
        <div className="bg-white/50 p-6 sm:p-10 rounded-2xl shadow-2xl">
          <ContactLocation
            address={
              <>
                No. 110/1A, 
                Cotta Road, 
                Colombo 08
              </>
            }
            phones={[
              "011-268 6554 (Office)",
              "077 296 9370 / 070 533 9370 (Chairman)",
              "076 978 0984 (Director - Nalika Thilakarathne)",
            ]}
            emailMain="consultants@kectholdings.com"
            emailNalika="nalika@kectholdings.com"
          />
        </div>
      </div>
    </section>
  );
};

const ContactLocation = ({ address, phones, emailMain, emailNalika }) => (
  <div className="space-y-6 sm:space-y-8 text-gray-900 text-base sm:text-lg px-2 sm:px-0">
    <ContactItem icon={<MapPin size={26} className="text-[#003B78]" />} text={address} />

    {phones.map((phone, idx) => (
      <ContactItem
        key={idx}
        icon={<Phone size={26} className="text-[#003B78]" />}
        text={phone}
      />
    ))}

    <ContactItem
      icon={<Mail size={26} className="text-[#003B78]" />}
      text={
        <a
          href={`mailto:${emailMain}`}
          className="hover:underline text-[#003B78] font-semibold"
        >
          {emailMain}
        </a>
      }
    />

    <div className="flex items-start gap-4">
      <Mail size={26} className="text-[#003B78]" />
      <div>
        <p className="font-semibold text-gray-700 mb-1">
          Director - Nalika Thilakarathne
        </p>
        <a
          href={`mailto:${emailNalika}`}
          className="text-[#003B78] font-semibold hover:underline"
        >
          {emailNalika}
        </a>
      </div>
    </div>
  </div>
);

const ContactItem = ({ icon, text }) => (
  <div className="flex items-start gap-4">
    <div className="pt-1">{icon}</div>
    <div className="leading-relaxed">{text}</div>
  </div>
);

export default ContactSectionRainco;
