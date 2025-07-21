import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  DollarSign,
  Clock,
  Users,
  Award,
  Globe,
  CreditCard,
} from 'lucide-react';

import aboutBg from "../assets/about-bg.jpg"; // Replace with your light-friendly image

const points = [
  { text: "Best Price Guaranteed — Competitive & transparent pricing.", icon: <DollarSign size={28} className="text-indigo-600" /> },
  { text: "Flexible Payment Plans — Easy installments to suit your budget.", icon: <CreditCard size={28} className="text-indigo-600" /> },
  { text: "100% Success Rate Guaranteed — We deliver certified results, no exceptions.", icon: <CheckCircle size={28} className="text-indigo-600" /> },
  { text: "Fast-Track Your Certification — Get certified in record time.", icon: <Clock size={28} className="text-indigo-600" /> },
  { text: "35+ reputed clients across Sri Lanka and internationally.", icon: <Users size={28} className="text-indigo-600" /> },
  { text: "10+ country coordinators — Germany, Japan, KSA, Bahrain, Cyprus & more.", icon: <Globe size={28} className="text-indigo-600" /> },
  { text: "Certified Leadership with 30+ successful ISO consultancy projects.", icon: <Award size={28} className="text-indigo-600" /> },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export default function AboutOurCompanySection() {
  return (
   <section
  className="relative bg-white bg-cover bg-center py-24 px-4 sm:px-6 lg:px-24 overflow-x-hidden"
  style={{ backgroundImage: `url(${aboutBg})` }}
>
  <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 z-10">


        {/* Left Box */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <div className="bg-white/60 backdrop-blur-sm p-8 sm:p-10 rounded-xl shadow-lg border border-gray-200">
            <div className="inline-flex items-center mb-6 justify-center md:justify-start">
              <span className="w-1 h-10 bg-indigo-600 rounded-full mr-4"></span>
              <h2 className="uppercase tracking-widest text-indigo-700 font-semibold text-sm md:text-base">
                About Our Company
              </h2>
            </div>
            <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight mb-6">
              <span className="block text-indigo-700 mb-2">KECT Consultants</span>
              <span className="block text-xl sm:text-2xl md:text-3xl font-light text-gray-700">
                Always Dedicated & <br /> Devoted to Your Success
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              Expert ISO certification consulting with guaranteed success, flexible pricing,
              and fast-track services to help your business comply with international standards
              seamlessly.
            </p>
          </div>
        </div>

        {/* Right Box */}
        <motion.div
          className="bg-white/60 backdrop-blur-sm p-8 sm:p-10 rounded-xl shadow-lg border border-gray-200"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.ul className="relative border-l-4 border-indigo-200 pl-4 sm:pl-6">
            {points.map(({ text, icon }, i) => (
              <motion.li
                key={i}
                className="mb-10 pl-6 relative flex items-start"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className="flex-shrink-0 mt-1 mr-4 rounded-full bg-indigo-100 text-indigo-600 w-12 h-12 flex items-center justify-center shadow-md"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.15, type: 'spring', stiffness: 260 }}
                >
                  {icon}
                </motion.div>
                <p className="text-base sm:text-lg font-medium leading-snug text-gray-800">
                  {text}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      {/* Decorative Blobs */}
      <div className="absolute -top-40 -left-40 w-64 h-64 bg-indigo-200 rounded-full opacity-20 blur-md animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 -right-40 w-64 h-64 bg-indigo-300 rounded-full opacity-20 blur-2xl animate-blob animation-delay-4000"></div>

      {/* Blob animation keyframes */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.1); }
          66% { transform: translate(-20px, 30px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}
