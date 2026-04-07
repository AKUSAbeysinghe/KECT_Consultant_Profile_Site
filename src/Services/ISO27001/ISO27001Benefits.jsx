import React from "react";
import { motion } from "framer-motion";
import Logo from "../../assets/ISO27001-Logo.webp";
import {
  FaCheckCircle, FaShieldAlt, FaSyncAlt, FaBalanceScale,
  FaHandshake, FaTrophy, FaLock
} from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa6";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const ISO27001Benefits = () => {
  const renderCard = (title, description, IconComponent, number) => (
    <motion.div
      key={number}
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full sm:w-[48%] mb-6"
    >
      <motion.div
        whileHover="hover"
        initial="rest"
        animate="rest"
        variants={{ rest: {}, hover: {} }}
        className="relative w-full h-auto sm:h-[275px]"
      >
        <motion.div className="relative w-full h-full bg-white shadow-md rounded-lg overflow-hidden pt-10">
          {/* Overlay */}
          <motion.div
            variants={{
              rest: { width: "60px", height: "60px", top: 0, right: 0 },
              hover: { width: "100%", height: "100%", top: 0, right: 0 }
            }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 right-0 bg-blue-700/95 z-10 rounded-bl-[80px]"
          />

          {/* Icon */}
          <motion.div
            variants={{
              rest: { color: "#1976d2", backgroundColor: "#b9e4f8" },
              hover: { color: "#FFD700", backgroundColor: "#041391" }
            }}
            transition={{ duration: 0.4 }}
            className="absolute top-2 left-5 w-12 h-12 rounded-lg flex items-center justify-center text-[1.8rem] z-20"
          >
            <IconComponent />
          </motion.div>

          {/* Number Badge */}
          <motion.div
            variants={{
              rest: { color: "#8b8e8f", backgroundColor: "#b9e4f8" },
              hover: { color: "#FFD700", backgroundColor: "#041391" }
            }}
            transition={{ duration: 0.4 }}
            className="absolute top-2 right-6 text-sm font-bold px-2 py-1 rounded-lg min-w-[28px] text-center z-20"
          >
            {number}
          </motion.div>

          <div className="relative z-20 px-6 pt-8">
            {/* Title */}
            <motion.h3
              variants={{
                rest: { color: "#224141" },
                hover: { color: "#FFFFFF" }
              }}
              transition={{ duration: 0.4 }}
              className="text-lg font-bold mb-2"
            >
              {title}
            </motion.h3>

            {/* Description */}
            <motion.p
              variants={{
                rest: { color: "#505050" },
                hover: { color: "#FFFFFF" }
              }}
              transition={{ duration: 0.4 }}
              className="text-sm"
            >
              {description}
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );

  return (
    <div className="w-full bg-[#F0F3FA] py-28 px-16">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl font-bold text-center text-[#0e2b44] mb-3">
            Rewards You Will Get After ISO/IEC 27001 <br /> Certification
          </h2>
          <hr className="w-[15%] h-[4px] bg-blue-900 border-none mx-auto my-5" />
        </motion.div>

        {/* Logo */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.img
            src={Logo}
            alt="ISO 27001 Logo"
            className="mx-auto max-w-xs w-full rounded-full"
            whileHover={{ opacity: 1, scale: 1.05 }}
            transition={{ duration: 0.8 }}
          />
          <p className="text-center mt-6 text-[1.2rem] text-gray-600 font-[Helvetica]">
            Strengthen data protection and resilience with ISO 27001:2022 — the international standard that helps organizations implement effective information security controls to safeguard sensitive data, manage risks,
            <br />
            and ensure trust in a connected world.
          </p>
        </motion.div>

        {/* Cards */}
        

          <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: { xs: "20px", sm: "30px", md: "40px" },
            mt: 5,
          }}
        >
          {renderCard(
            "Improved Information Security",
            "ISO 27001 helps organizations identify, manage, and reduce information security risks by implementing comprehensive security controls and processes to protect sensitive data.",
            FaCheckCircle,
            "01"
          )}
          {renderCard(
            "Increased Trust and Reputation",
            "Achieving ISO 27001 certification demonstrates an organization’s commitment to information security, which can build trust with customers, partners, and stakeholders.",
            FaHandshake,
            "02"
          )}
          {renderCard(
            "Regulatory Compliance",
            "ISO 27001 assists organizations in complying with legal, regulatory, and contractual requirements regarding information security.",
            FaBalanceScale,
            "03"
          )}
          {renderCard(
            "Enhanced Customer Confidence",
            "Customers are more likely to trust an organization with their data if it is ISO 27001 certified, leading to stronger relationships.",
            FaThumbsUp,
            "04"
          )}
          {renderCard(
            "Protection from Cyber Threats",
            "Helps defend against cyber threats like breaches and attacks by implementing strong security policies and procedures.",
            FaShieldAlt,
            "05"
          )}
          {renderCard(
            "Business Continuity",
            "ISO 27001 helps maintain business continuity plans, ensuring data remains protected and accessible during disruptions.",
            FaSyncAlt,
            "06"
          )}
          {renderCard(
            "Risk Management",
            "Provides a systematic approach to identifying and mitigating information security risks across your organization.",
            FaLock,
            "07"
          )}
          {renderCard(
            "Competitive Advantage",
            "Certification demonstrates strong security practices and attracts clients that demand high data protection standards.",
            FaTrophy,
            "08"
          )}

          </Box>
        </div>
      </div>

  );
};

export default ISO27001Benefits;
