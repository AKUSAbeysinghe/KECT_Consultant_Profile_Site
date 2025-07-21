import React from "react";
import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import credentialsBg from "../assets/credentials1.webp"; // Background image

// Animation variant for fade in
const fadeUpDownVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Credential = () => {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${credentialsBg})`,
        backgroundAttachment: "fixed",
      }}
    >
      <section
        id="credentials"
        className="relative z-10 scroll-mt-24 py-20 px-6 max-w-7xl mx-auto"
      >
        {/* Header Section */}
        <Box
          sx={{
            position: "relative",
            textAlign: "center",
            justifyContent: "center",
            mb: 10,
          }}
        >
          <Typography
            variant="h1"
            fontWeight="bold"
            sx={{
              position: "absolute",
              color: "#003B73",
              fontFamily: "Arial",
              opacity: 0.15,
              zIndex: 1,
              top: "25%",
              left: "50%",
              margin: "3%",
              transform: "translate(-50%, -50%)",
              fontSize: {
                xs: "3rem",
                sm: "5rem",
                md: "7rem",
                lg: "9rem",
                xl: "10rem",
              },
            }}
          >
            CREDENTIALS
          </Typography>

          <Box
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              zIndex: 2,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "#003B73",
                fontFamily: "Arial",
                textAlign: "center",
                pt: "5%",
                textShadow: `
                  0 0 5px #ffffff,
                  0 0 10px #ffffff,
                  0 0 20px #ffffff,
                  0 0 40px #ffffff
                `,
                animation: "glow 2.5s ease-in-out infinite",
              }}
            >
              Our Trust Marks
            </Typography>
          </Box>

          <Typography
            variant="body1"
            align="center"
            sx={{
              color: "#2a2b3b",
              fontSize: 20,
              mt: 3,
              fontFamily: "Helvetica",
              pt: "3%",
              backdropFilter: "blur(8px)",
            }}
          >
            A trusted consultancy with over a decade of excellence, offering
            certified ISO services, professional memberships, and award-winning
            industry expertise.
          </Typography>
        </Box>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CredentialCard
            tall
            icon={<ISOIcon />}
            title="ISO Lead Auditor Certifications"
            items={[
              "ISO 9001:2015 Quality Management Systems",
              "ISO 13485:2016 Medical Devices",
              "ISO 14001:2015 Environmental Management",
              "ISO 15189:2022 Medical Labs",
              "ISO 17025:2017 Testing and Calibration Labs",
              "ISO 22000:2018 Food Safety",
              "ISO 27001:2022 Information Security",
              "ISO 45001:2018 Occupational Health & Safety",
              "ISO 50001:2018 Energy Management",
            ]}
          />

          <CredentialCard
            tall
            icon={<MembershipIcon />}
            title="Professional Memberships"
            items={[
              "ACA (Associate Chartered Accountant)",
              "FCMA (Fellow Cost and Management Accountant)",
              "AIB (Associate Institute of Bankers)",
              "AAAI (Association of Advertising Agencies of India)",
              "FIBM (Fellow, Institute of Business Management)",
              "CIPM (Chartered Institute of Personnel Management – SLIDA)",
            ]}
          />

          <CredentialCard
            tall
            icon={<AwardIcon />}
            title="Industry Recognition"
            items={[
              "Best Consultancy Service Award 2023",
              "Excellence in ISO Implementation",
              "Top 10 Management Consultants Sri Lanka",
              "Client Satisfaction Award 2022",
            ]}
          />

          <CredentialCard
            icon={<ISOIcon />}
            title="Internal Auditor Certifications"
            items={[
              "Certified Internal Auditor for all ISO standards listed above",
            ]}
          />

          <CredentialCard
            icon={<InfoIcon />}
            title="Company Information"
            items={[
              "Registered Business",
              "Incorporated since 2014",
              "10+ Years of Industry Experience",
              "50+ Certified Professionals",
            ]}
          />

          <CredentialCard
            icon={<ServiceIcon />}
            title="Consulting Services"
            items={[
              "ISO Certification Guidance",
              "Quality Management Systems",
              "Process Optimization",
              "Regulatory Compliance",
            ]}
          />
        </div>
      </section>
    </section>
  );
};

// Reusable Credential Card with flip
const CredentialCard = ({ icon, title, items, tall }) => (
  <motion.div
    className="perspective w-full group"
    variants={fadeUpDownVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
  >
    <div
      className={`transform-style-preserve-3d w-full rounded-xl ${
        tall ? "h-[600px]" : "h-[360px]"
      }`}
      style={{ cursor: "pointer" }}
    >
      {/* Front Side */}
      <div className="backface-hidden bg-white bg-opacity-90 p-6 border shadow-xl">
        <div className="flex justify-center mb-4">
          <div className="p-4 rounded-full bg-[#003B78]/10 text-[#003B78]">
            {React.cloneElement(icon, {
              className: "w-12 h-12 md:w-14 md:h-14",
            })}
          </div>
        </div>
        <h3 className="text-center font-semibold mb-4 text-lg sm:text-xl text-[#003B78]">
          {title}
        </h3>
        <ul className="space-y-2 text-sm sm:text-base text-gray-700">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckIcon />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Back Side */}
      <div className="backface-hidden rotate-y-180 bg-[#2d429e] text-white p-6 border shadow-xl">
        <div className="flex justify-center mb-4">
          <div className="p-4 rounded-full bg-white/20 text-yellow-400">
            {React.cloneElement(icon, {
              className: "w-12 h-12 md:w-14 md:h-14",
            })}
          </div>
        </div>
        <h3 className="text-center font-semibold mb-4 text-lg sm:text-xl">
          {title}
        </h3>
        <ul className="space-y-2 text-sm sm:text-base">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckIcon color="text-yellow-400" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

// Check Icon SVG
const CheckIcon = ({ color = "text-green-500" }) => (
  <svg
    className={`w-5 h-5 mt-1 flex-shrink-0 ${color}`}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={3}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

// Icon SVGs
const ISOIcon = ({ className = "" }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 7v10M17 7v10M7 7a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2M7 7h10" />
  </svg>
);

const MembershipIcon = ({ className = "" }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6 0a4 4 0 10-6 0 4 4 0 006 0z" />
  </svg>
);

const AwardIcon = ({ className = "" }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 21h6M12 17v4m-3-8h6a3 3 0 003-3v-2H6v2a3 3 0 003 3z" />
  </svg>
);

const InfoIcon = ({ className = "" }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M13 16h-1v-4h-1m1-4h.01M12 21a9 9 0 110-18 9 9 0 010 18z" />
  </svg>
);

const ServiceIcon = ({ className = "" }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

export default Credential;
