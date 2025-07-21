import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { FcGlobe } from "react-icons/fc";
import { motion } from "framer-motion";
import ISO22716Benefits from "./ISO22716Benefits.jsx";
import {
  FaFileContract,
  FaUserTie,
  FaWarehouse,
  FaCubes,
  FaCogs,
  FaMicroscope,
  FaBoxOpen,
  FaFileAlt,
  FaHeartbeat,
  FaChartLine,
} from "react-icons/fa";

const fadeUpDownVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const card1 = (
  <React.Fragment>
    <CardContent sx={{ px: 3, pt: 2, pb: 1 }}>
     <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
    style={{ display: "inline-block" }}
  >
    <FcGlobe style={{ fontSize: "90px", marginBottom: 5 }} />
  </motion.div>
</Box>
      <Typography
        variant="h5"
        component="div"
        sx={{
          fontWeight: "bold",
          color: "rgb(14, 43, 68)",
          marginBottom: "5",
        }}
      >
        Global Recognition
      </Typography>
    
      <Typography variant="body2" sx={{ color: "rgb(138, 170, 197)" }}>
        ISO 22716:2007 is globally recognized as the international standard for
        Good Manufacturing Practices (GMP) in the cosmetics industry. It guides
        organizations in implementing effective production, control, and hygiene
        processes — ensuring product quality, regulatory compliance, and consumer
        safety.
        <br />
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function ISO22716() {
  // Responsive state for mobile layout
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 900);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Box sx={{ p: { xs: 2, md: 4 } }}>
        <motion.div
          variants={fadeUpDownVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontWeight: "bold",
              mb: 3,
              color: "rgb(14, 43, 68)",
              mt: 0,
            }}
          >
            Key Aspects of ISO 22716
          </Typography>
          <hr
            style={{
              width: "15%",
              height: "4px",
              backgroundColor: "rgb(19, 30, 182)",
              border: "none",
              margin: "20px auto",
              marginBottom: "90px",
            }}
          />
        </motion.div>

        <motion.div
          variants={fadeUpDownVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "32px",
            }}
          >
            <motion.div
              variants={fadeUpDownVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              style={{
                width: isMobile ? "100%" : "48%",
                color: "rgb(69, 70, 70)",
              }}
            >
              <br />
              {/* Icon-text list */}
              {[
                {
                  icon: FaFileContract,
                  text: "Quality Management System",
                },
                {
                  icon: FaUserTie,
                  text: "Personnel",
                },
                {
                  icon: FaWarehouse,
                  text: "Premises and Equipment",
                },
                {
                  icon: FaCubes,
                  text: "Raw Materials",
                },
                {
                  icon: FaCogs,
                  text: "Production",
                },
                {
                  icon: FaMicroscope,
                  text: "Testing and Quality Control",
                },
                {
                  icon: FaBoxOpen,
                  text: "Packaging and Storage",
                },
                {
                  icon: FaFileAlt,
                  text: "Documentation and Traceability",
                },
                {
                  icon: FaHeartbeat,
                  text: "Health and Safety",
                },
                // Add more items here if needed
              ].map(({ icon: Icon, text }, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    marginBottom: "8px",
                    gap: "24px",
                  }}
                >
                  <Icon
                    style={{
                      marginRight: "8px",
                      color: "rgb(16, 162, 199)",
                      marginTop: "4px",
                      scale: "1.5",
                    }}
                  />
                  <span
                    style={{
                      fontWeight: "bold",
                      color: "rgb(97, 112, 112)",
                    }}
                  >
                    {text}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUpDownVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              style={{
                width: isMobile ? "100%" : "35%",
              }}
            >
              <Card
                variant="outlined"
                sx={{
                  width: "100%",
                  height: { xs: "auto", sm: 300 },
                  display: "flex",
                  flexDirection: "column",
                  p: 0,
                  mb: 3,
                }}
              >
                {card1}
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </Box>

      <ISO22716Benefits />
    </>
  );
}
