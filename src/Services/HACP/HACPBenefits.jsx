import React from "react";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import Logo from '../../assets/HACP-Logo.webp';
import {
  FaShieldAlt,
  FaCogs,
  FaClock,
  FaBullseye,
  FaBalanceScale,
  FaGavel,
  FaTrophy,
  FaGlobe,
} from "react-icons/fa";
import processGif from '../../assets/telephone.gif';
import DealGif from '../../assets/deal.gif';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const HACPBenefits = () => {
  const renderCard = (title, description, IconComponent, number) => (
    <motion.div
      key={number}
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      style={{ width: "100%" }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "auto", sm: 260 },
          overflow: "hidden",
          borderRadius: "20px",
          cursor: "pointer",
          backgroundColor: "#fff",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          transition: "background-color 0.5s ease",
          "&:hover": {
            backgroundColor: "#1976d2",
            color: "#fff",
          },
          "&:before": {
            content: '""',
            position: "absolute",
            top: 0,
            right: 0,
            width: 60,
            height: 60,
            backgroundColor: "#1976d2",
            borderBottomLeftRadius: "100%",
            transition: "all 0.5s ease-in-out",
            zIndex: 1,
          },
          "&:hover:before": {
            width: "100%",
            height: "100%",
            borderBottomLeftRadius: 0,
            borderRadius: "20px",
          },
          "& > *": {
            position: "relative",
            zIndex: 2,
            transition: "color 0.5s ease",
          },
          "&:hover .card-title, &:hover .card-description, &:hover .card-number": {
            color: "#fff",
          },
          "& .icon-container": {
            position: "absolute",
            top: 8,
            left: 20,
            width: 48,
            height: 48,
            borderRadius: "12px",
            backgroundColor: "rgba(255,255,255,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#1976d2",
            fontSize: "1.8rem",
            transition: "all 0.5s ease",
            zIndex: 3,
          },
          "&:hover .icon-container": {
            backgroundColor: "transparent",
            color: "gold",
          },
          "& .card-number": {
            position: "absolute",
            top: 8,
            right: 30,
            backgroundColor: "rgba(255,255,255,0.6)",
            color: "#1976d2",
            padding: "2px 8px",
            borderRadius: "12px",
            fontWeight: "bold",
            fontSize: "0.87rem",
            minWidth: "28px",
            textAlign: "center",
            zIndex: 3,
            transition: "all 0.5s ease",
          },
          "&:hover .card-number": {
            backgroundColor: "transparent",
            color: "gold",
          },
        }}
      >
        <CardContent>
          <Box className="icon-container">
            <IconComponent />
          </Box>

          <Typography className="card-number">{number}</Typography>

          <Typography
            gutterBottom
            variant="h6"
            className="card-title"
            sx={{ fontWeight: "bold", mt: 6, mb: 0.5, color: "inherit" }}
          >
            {title}
          </Typography>
          <Typography className="card-description" variant="body2" sx={{ color: "inherit" }}>
            {description}
          </Typography>
        </CardContent>
      </Box>
    </motion.div>
  );

  const cardsData = [
    {
      title: "Demonstrated Commitment to Food Safety",
      description: "HACCP shows customers and the community that food safety is a top priority, with control systems in place to prevent hazards and protect consumers.",
      icon: FaShieldAlt,
      number: "01",
    },
    {
      title: "More Effective Use of Resources",
      description: "By applying HACCP, businesses can better allocate resources, reduce waste, and save costs through efficient management of food safety risks.",
      icon: FaCogs,
      number: "02",
    },
    {
      title: "Timely Response to Food Safety Issues",
      description: "HACCP helps organizations identify potential problems early and respond quickly to prevent food safety incidents and protect public health.",
      icon: FaClock,
      number: "03",
    },
    {
      title: "Preventive Approach",
      description: "HACCP focuses on identifying and preventing food safety hazards before they occur, rather than reacting to issues after they happen.",
      icon: FaBullseye,
      number: "04",
    },
    {
      title: "Legal and Regulatory Compliance",
      description: "In many regions, a certified HACCP system is required by law. Implementing HACCP helps meet legal obligations and regulatory requirements.",
      icon: FaBalanceScale,
      number: "05",
    },
    {
      title: "Protection of Brand and Reputation",
      description: "HACCP provides a basis of due diligence in legal matters and helps safeguard your brand from damage caused by food safety incidents.",
      icon: FaGavel,
      number: "06",
    },
    {
      title: "Increased Business Opportunities",
      description: "HACCP certification can help attract more customers and open up new markets by demonstrating a commitment to food safety.",
      icon: FaTrophy,
      number: "07",
    },
    {
      title: "Support for International Trade",
      description: "Compliance with Codex Alimentarius standards under HACCP facilitates international trade and access to global markets.",
      icon: FaGlobe,
      number: "08",
    },
  ];

  return (
    <div
      className="w-full"
      style={{
        backgroundColor: "#F0F3FA",
        margin: 0,
        padding: 0,
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      <div className="py-16 max-w-5xl mx-auto text-left px-6">
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 3,
              color: "rgb(14, 43, 68)",
              mt: 8,
              textAlign: "center",
            }}
          >
            Rewards You Will Get After HACCP <br />
            Certification
          </Typography>
          <hr
            style={{
              width: "15%",
              height: "4px",
              backgroundColor: "rgb(19, 30, 182)",
              border: "none",
              margin: "20px auto 50px auto",
            }}
          />
        </motion.div>

        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.img
            src={Logo}
            alt="HACCP Logo"
            style={{
              display: "block",
              margin: "0 auto",
              maxWidth: "300px",
              height: "auto",
              borderRadius: "200px",
            }}
            whileHover={{ scale: 1.05 }}
            initial={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <br />
          <p
            className="mt-4 font-[Helvetica] text-center"
            style={{ fontSize: "1.2rem", color: "#5A5A5A" }}
          >
            Protect consumer health and ensure food safety with HACCP — the internationally recognized system that helps organizations identify, evaluate, and control food safety hazards through proactive risk management and rigorous process controls.
          </p>
          <br />
        </motion.div>

        {/* Cards container */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "30px",
            mt: 5,
          }}
        >
          {cardsData.map(({ title, description, icon, number }) => (
            <Box
              key={number}
              sx={{
                flex: "1 1 100%",
                maxWidth: {
                  xs: "100%",
                  sm: "100%",
                  md: "48%",
                },
              }}
            >
              {renderCard(title, description, icon, number)}
            </Box>
          ))}
        </Box>
      </div>

      {/* Call to Action Section */}
      <div className="w-full max-w-9xl mx-auto p-6 rounded-lg">
        <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap justify-center sm:justify-start text-center sm:text-left">
          <img src={processGif} alt="process icon" className="w-20 sm:w-24 h-20 sm:h-24" />

          <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap justify-center sm:justify-start text-center sm:text-left">
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 leading-tight">
              Simplifying HACCP: We Guide,
              <span className="text-blue-700 font-bold"> You Get Certified!</span>
            </p>
            <img src={DealGif} alt="deal icon" className="w-20 sm:w-24 h-20 sm:h-24" />
            <a
              href="tel:+94769780984"
              className="inline-flex items-center gap-2 px-6 sm:px-9 py-3 sm:py-4 bg-green-500 text-white rounded-lg shadow hover:bg-green-400 transition text-lg sm:text-2xl whitespace-nowrap"
            >
              📞 Call Now +94769780984
            </a>
          </div>
        </div>

        <div className="max-w-xl ml-4 sm:ml-[5.5rem] mt-4 text-left">
          <p className="text-gray-600 text-lg sm:text-xl leading-relaxed font-semibold">
            Getting HACCP certified is easy with us! From consultation to successful certification,
            we ensure food safety compliance, clarity, and confidence every step of the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HACPBenefits;
