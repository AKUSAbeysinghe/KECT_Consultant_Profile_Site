import React from 'react';
import logo from '../assets/CompanyLogo.jpg';
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaTimes,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#000] text-white font-[Arial] px-6 py-10">
      <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row justify-center text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-gray-700">

        {/* Logo and About */}
        <div className="md:w-1/3 px-4 pb-6 md:pb-0">
          <div
            className="flex justify-center md:justify-start items-center space-x-3 mb-4 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              const homeSection = document.getElementById('home');
              if (homeSection) {
                homeSection.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            <img src={logo} alt="KECT Logo" className="h-12 w-30" />
            <div>
              <div className="text-2xl font-bold">KECT Holdings</div>
            </div>
          </div>

          <p className="text-sm text-gray-300">
            Professional ISO certification and management consultancy services delivering excellence since 2009.
          </p>

          <Link to="/termspolicy" className="flex flex-row space-x-4 text-sm text-gray-400 mt-20 justify-center md:justify-start">
            <div className="hover:text-white transition-colors duration-200 cursor-pointer">
              Terms & Conditions
            </div>
            <div className="hover:text-white transition-colors duration-200 cursor-pointer">
              Privacy Policy
            </div>
          </Link>
        </div>

        {/* Services */}
        <div className="md:w-1/3 px-6 py-6 md:py-0">
          <h3 className="text-md font-semibold mb-3 text-center">Services</h3>
          <ul className="grid grid-cols-2 gap-x-4 text-sm text-gray-300">
            <li><Link to="/iso9001Main" className="hover:text-white">ISO 9001:2015 Certification</Link></li>
            <li><Link to="/iso1385Main" className="hover:text-white">ISO 13485:2016 Certification</Link></li>
            <li><Link to="/iso14001Main" className="hover:text-white">ISO 14001:2015 Certification</Link></li>
            <li><Link to="/iso15189Main" className="hover:text-white">ISO 15189:2012 Certification</Link></li>
            <li><Link to="/iso15378Main" className="hover:text-white">ISO 15378:2017 Certification</Link></li>
            <li><Link to="/iso17025Main" className="hover:text-white">ISO 17025:2017 Certification</Link></li>
            <li><Link to="/iso18404Main" className="hover:text-white">ISO 18404:2015 Certification</Link></li>
            <li><Link to="/iso19011Main" className="hover:text-white">ISO 19011:2018 Certification</Link></li>
            <li><Link to="/iso22000Main" className="hover:text-white">ISO 22000:2018 Certification</Link></li>
            <li><Link to="/iso22301Main" className="hover:text-white">ISO 22301:2019 Certification</Link></li>
            <li><Link to="/iso22716Main" className="hover:text-white">ISO 22716:2007 Certification</Link></li>
            <li><Link to="/iso27001Main" className="hover:text-white">ISO 27001:2022 Certification</Link></li>
            <li><Link to="/iso37001Main" className="hover:text-white">ISO 37001:2016 Certification</Link></li>
            <li><Link to="/iso45001Main" className="hover:text-white">ISO 45001:2018 Certification</Link></li>
            <li><Link to="/ceMain" className="hover:text-white">CE Certification</Link></li>
            <li><Link to="/hacpMain" className="hover:text-white">HACCP Certification</Link></li>
            <li><Link to="/gmpMain" className="hover:text-white">CGMP / GMP</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="md:w-1/3 px-4 pt-6 md:pt-0 flex flex-col items-center md:items-start">
          <h3 className="text-md font-semibold mb-3">Contact</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            No. 110/1A, Cotta Road<br />
            Colombo 08, Sri Lanka<br /><br />
            +94 76 978 0984 / +94 70 533 9370<br />
            kectgroup@gmail.com
          </p>
          {/* Social Icons */}
                    <div className="flex items-center mt-11 gap-1 sm:gap-3 md:gap-4 text-base sm:text-lg md:text-xl">
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
      </div>

      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-800 pt-4">
        © 2025 IDET (Private) Limited. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
