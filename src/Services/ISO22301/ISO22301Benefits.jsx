import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import Logo from "../../assets/ISO22301-Logo.webp";
import {
  FaShieldAlt, FaCogs, FaBalanceScale, FaTrophy,
  FaBolt, FaHandshake, FaMoneyBillWave, FaStar
} from "react-icons/fa";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ISO22301Benefits = () => {
  const renderCard = (title, description, IconComponent, number) => (
    <Box
      key={number}
      component={motion.div}
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      sx={{
        flex: { xs: "1 1 100%", sm: "1 1 45%" },
        maxWidth: { xs: "100%", sm: "45%" },
        boxSizing: "border-box",
        mb: 3,
      }}
    >
      <Box
        component={motion.div}
        whileHover="hover"
        initial="rest"
        animate="rest"
        variants={{ rest: {}, hover: {} }}
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "auto", sm: 275 },
        }}
      >
        <Card
          component={motion.div}
          sx={{
            width: "100%",
            height: "100%",
            position: "relative",
            paddingTop: 4,
            overflow: "hidden",
            boxSizing: "border-box",
          }}
        >
          {/* Blue Overlay */}
          <Box
            component={motion.div}
            variants={{
              rest: { width: "60px", height: "60px", top: 0, right: 0 },
              hover: { width: "100%", height: "100%", top: 0, right: 0 },
            }}
            transition={{ duration: 0.5 }}
            sx={{
              position: "absolute",
              backgroundColor: "rgba(25, 118, 210, 0.95)",
              zIndex: 1,
              borderBottomLeftRadius: "80px",
            }}
          />

          <CardContent
            sx={{
              position: "relative",
              zIndex: 2,
              height: "100%",
              color: "inherit",
            }}
          >
            {/* Icon */}
            <Box
              component={motion.div}
              variants={{
                rest: {
                  color: "rgb(25, 118, 210)",
                  backgroundColor: "rgb(185, 228, 248)",
                },
                hover: {
                  color: "#FFD700",
                  backgroundColor: "rgb(4, 19, 145)",
                },
              }}
              transition={{ duration: 0.4 }}
              sx={{
                position: "absolute",
                top: 2,
                left: 20,
                width: 48,
                height: 48,
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.8rem",
                zIndex: 2,
              }}
            >
              <IconComponent />
            </Box>

            {/* Number Badge */}
            <Typography
              component={motion.div}
              variants={{
                rest: {
                  color: "rgb(139, 142, 143)",
                  backgroundColor: "rgb(185, 228, 248)",
                },
                hover: {
                  color: "#FFD700",
                  backgroundColor: "rgb(4, 19, 145)",
                },
              }}
              transition={{ duration: 0.4 }}
              variant="h6"
              sx={{
                position: "absolute",
                top: 5,
                right: 30,
                px: 1,
                py: 0.5,
                borderRadius: "12px",
                fontWeight: "bold",
                fontSize: "0.87rem",
                display: "inline-block",
                minWidth: "28px",
                textAlign: "center",
                zIndex: 2,
              }}
            >
              {number}
            </Typography>

            {/* Title */}
            <Typography
              variant="h6"
              component={motion.div}
              variants={{
                rest: { color: "rgb(34, 65, 65)" },
                hover: { color: "#FFFFFF" },
              }}
              transition={{ duration: 0.4 }}
              sx={{ fontWeight: "bold", mt: 5, mb: 0.5 }}
            >
              {title}
            </Typography>

            {/* Description */}
            <motion.div
              variants={{
                rest: { color: "rgba(80, 80, 80, 1)" },
                hover: { color: "#FFFFFF" },
              }}
              transition={{ duration: 0.4 }}
            >
              <Typography variant="body2" sx={{ zIndex: 2 }}>
                {description}
              </Typography>
            </motion.div>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );

  const cardsData = [
    {
      title: "Minimizes Disruption",
      description:
        "Effectively manage disruptions to ensure critical functions continue.",
      icon: FaCogs,
      number: "01",
    },
    {
      title: "Improved Risk Management",
      description:
        "Identify, assess, and reduce potential operational risks.",
      icon: FaShieldAlt,
      number: "02",
    },
    {
      title: "Enhanced Resilience",
      description:
        "Quick recovery from crises ensures organizational stability.",
      icon: FaBolt,
      number: "03",
    },
    {
      title: "Increased Stakeholder Confidence",
      description:
        "Gain trust by proving preparedness for emergencies.",
      icon: FaHandshake,
      number: "04",
    },
    {
      title: "Improved Reputation",
      description:
        "Showcase your commitment to continuity and reliability.",
      icon: FaStar,
      number: "05",
    },
    {
      title: "Legal & Regulatory Compliance",
      description:
        "Meet industry and legal expectations for continuity planning.",
      icon: FaBalanceScale,
      number: "06",
    },
    {
      title: "Cost Savings",
      description:
        "Avoid downtime-related losses by planning ahead.",
      icon: FaMoneyBillWave,
      number: "07",
    },
    {
      title: "Competitive Advantage",
      description:
        "Stand out in the market with certified continuity planning.",
      icon: FaTrophy,
      number: "08",
    },
  ];

  return (
    <div className="w-full bg-[#F0F3FA] py-16 px-6">
      <div className="py-16 max-w-5xl mx-auto text-left"
        style={{ paddingLeft: "24px", paddingRight: "24px" }}>
        {/* Title */}
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
            Rewards You Will Get After ISO 22301 <br />
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

        {/* Logo and Description */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.img
            src={Logo}
            alt="ISO 22301 Logo"
            className="mx-auto max-w-xs rounded-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8 }}
          />
          <p className="text-center mt-6 text-[1.2rem] text-gray-600 font-[Helvetica]">
            Strengthen resilience and stakeholder confidence with ISO 22301 —
            the global standard that empowers organizations to manage disruptions,
            protect critical operations, and ensure continuity in times of crisis.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: { xs: "20px", sm: "30px", md: "40px" },
            mt: 5,
          }}
        >
          {cardsData.map(({ title, description, icon, number }) =>
            renderCard(title, description, icon, number)
          )}
        </Box>
      </div>
    </div>
  );
};

export default ISO22301Benefits;
