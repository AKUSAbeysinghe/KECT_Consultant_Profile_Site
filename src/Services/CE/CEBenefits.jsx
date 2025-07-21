import React from "react";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import Logo from '../../assets/CE-Logo.webp';
import { FaGlobeEurope, FaShieldAlt, FaBalanceScale, FaExchangeAlt, FaStar, FaCompressArrowsAlt } from "react-icons/fa";
import processGif from '../../assets/telephone.gif';
import DealGif from '../../assets/deal.gif';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const CEBenefits = () => {
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
          // Card base styles:
          backgroundColor: "#fff",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          transition: "background-color 0.5s ease",
          "&:hover": {
            backgroundColor: "#1976d2",
            color: "#fff",
          },
          // Hover overlay expanding from quarter circle:
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
          // Ensure children content is above overlay:
          "& > *": {
            position: "relative",
            zIndex: 2,
            transition: "color 0.5s ease",
          },
          // Change text color on hover:
          "&:hover .card-title, &:hover .card-description, &:hover .card-number": {
            color: "#fff",
          },
          // Icon container styling:
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
          // Number badge styling:
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
      title: "Access to the European Market",
      description:
        "The CE mark allows manufacturers to market their products throughout the European Economic Area without the need for additional certification or approval in individual countries.",
      icon: FaGlobeEurope,
      number: "01",
    },
    {
      title: "Product Safety and Consumer Confidence",
      description:
        "The CE marking provides reassurance to consumers and regulators that the product meets EU safety, health, and environmental standards, reducing risks associated with the product.",
      icon: FaShieldAlt,
      number: "02",
    },
    {
      title: "Legal Compliance",
      description:
        "For manufacturers, placing the CE mark on a product ensures compliance with EU regulations, preventing legal issues or market access barriers within the EEA.",
      icon: FaBalanceScale,
      number: "03",
    },
    {
      title: "International Trade",
      description:
        "Having a CE mark can enhance global trade opportunities, as many countries outside the EU recognize CE marking as a symbol of regulatory compliance, facilitating easier access to international markets.",
      icon: FaExchangeAlt,
      number: "04",
    },
    {
      title: "Competitive Advantage",
      description:
        "Products with the CE mark may be viewed more favorably by customers, as it signifies that the product meets established safety and regulatory standards.",
      icon: FaStar,
      number: "05",
    },
    {
      title: "Reduced Trade Barriers",
      description:
        "The CE marking simplifies cross-border trade within the European Union and the European Economic Area, reducing barriers and regulatory checks at national borders.",
      icon: FaCompressArrowsAlt,
      number: "06",
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
      <div
        className="py-16 max-w-5xl mx-auto text-left"
        style={{ paddingLeft: "1rem", paddingRight: "1rem" }}
      >
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
            Rewards You Will Get After CE MARKING <br />
            Certification
          </Typography>
          <hr
            style={{
              width: "15%",
              height: "4px",
              backgroundColor: "rgb(19, 30, 182)",
              border: "none",
              margin: "20px auto",
              marginBottom: "50px",
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
            alt="ISO/IEC 17025:2017 Logo"
            style={{
              display: "block",
              margin: "0 auto",
              maxWidth: "300px",
              height: "auto",
              borderRadius: "200px",
            }}
            whileHover={{
              opacity: 1,
              scale: 1.05,
            }}
            initial={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
            }}
          />
          <br />
          <p
            className="mt-4 font-[Helvetica] text-center"
            style={{ fontSize: "1.2rem", color: "#5A5A5A" }}
          >
            Ensure product compliance and seamless market access with CE Marking
            — the essential certification that demonstrates conformity with EU
            safety, health, and environmental requirements, enabling your
            products to be sold across Europe with confidence.
          </p>
          <br />
        </motion.div>

        {/* Cards container */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            mt: 5,
            gap: "30px",
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

      {/* Call To Action Section */}
      <div className="w-full max-w-9xl mx-auto p-6 rounded-lg">
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 justify-center sm:justify-start text-center sm:text-left">
          <img
            src={processGif}
            alt="process icon"
            className="w-16 sm:w-20 h-16 sm:h-20"
          />

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-4 justify-center sm:justify-start text-center sm:text-left">
            <p className="text-lg sm:text-2xl font-bold text-gray-800 leading-tight">
              Simplifying CE Marking: We Guide,
              <span className="text-blue-700 font-bold"> You Get Certified!</span>
            </p>

            <img
              src={DealGif}
              alt="deal icon"
              className="w-16 sm:w-20 h-16 sm:h-20"
            />

            <a
              href="tel:+94769780984"
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-3 bg-green-500 text-white rounded-lg shadow hover:bg-green-400 transition text-base sm:text-xl whitespace-nowrap ml-2 sm:ml-6"
            >
              📞 Call Now +94769780984
            </a>
          </div>
        </div>

        <div className="max-w-xl ml-4 sm:ml-[5.5rem] mt-4 text-left">
          <p className="text-gray-600 text-sm sm:text-lg leading-relaxed font-semibold">
            Getting CE Marking is simple with our expert guidance! We help you meet
            EU regulatory standards for safety, health, and environmental protection
            — ensuring smooth compliance and faster market access.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CEBenefits;
