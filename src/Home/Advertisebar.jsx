import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaTimes,
} from "react-icons/fa";

const Advertisebar = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="w-full bg-blue-600 text-white px-2 sm:px-4 md:px-6 py-1 sm:py-2 md:py-0 min-h-[30px] sm:min-h-[48px] md:min-h-14 flex items-center overflow-x-auto sm:overflow-hidden relative z-[60] text-xs sm:text-sm md:text-base">
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-1 sm:gap-2 md:gap-0 flex-wrap">
        {/* Animated content */}
        <div className="w-full md:w-auto animate-scrollLTR whitespace-nowrap flex items-center gap-2 sm:gap-3 md:gap-6 font-semibold justify-center md:justify-start overflow-x-auto min-w-max">
          <span className="flex items-center gap-1 sm:gap-2 px-2 md:px-4 pr-8">
            Have any question? Call us now
            <FaPhoneAlt className="text-white text-sm sm:text-base md:text-xl ml-1" />
            <span>+94 76 978 0984</span>
          </span>

          {/* Social Icons */}
          <div className="flex items-center gap-1 sm:gap-3 md:gap-4 text-base sm:text-lg md:text-xl">
            <a href="https://www.facebook.com/share/19NT317H9M/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="cursor-pointer hover:text-gray-200" />
            </a>
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="cursor-pointer hover:text-gray-200" />
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="cursor-pointer hover:text-gray-200" />
            </a>
            <a href="https://www.linkedin.com/company/kect-consultants-pvt-ltd/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="cursor-pointer hover:text-gray-200" />
            </a>
            <a href="https://wa.me/+94769780984" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="cursor-pointer hover:text-gray-200" />
            </a>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setVisible(false)}
          className="text-white hover:text-gray-300 focus:outline-none mt-1 sm:mt-0 
                     absolute right-2 top-1 sm:static sm:right-auto sm:top-auto"
          aria-label="Close advertise bar"
        >
          <FaTimes size={16} className="sm:size-4 md:size-5" />
        </button>
      </div>
    </div>
  );
};

export default Advertisebar;
