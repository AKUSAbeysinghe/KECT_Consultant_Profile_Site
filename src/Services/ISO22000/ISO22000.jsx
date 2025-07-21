import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { FcGlobe } from "react-icons/fc";
import { motion } from "framer-motion";
import ISO22000Benefits from "./ISO22000Benefits.jsx";
import { FaIndustry, FaBoxOpen, FaTruck, FaCogs, FaUtensils } from "react-icons/fa";

const fadeUpDownVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
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
          marginBottom: "5"
        }}
      >
        Global Recognition
      </Typography>
   
      <Typography variant="body2" sx={{ color: "rgb(138, 170, 197)" }}>
        ISO 22000:2018 is globally recognized as the standard for Food Safety Management Systems (FSMS). Certification demonstrates that organizations implement robust, consistent, and proactive food safety practices — ensuring consumer trust, regulatory compliance, and continuous improvement in food safety performance.
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function ISO22000() {
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
              mt: 0
            }}
          >
            Who Needs FSMS ?
          </Typography>
          <hr
            style={{
              width: "15%",
              height: "4px",
              backgroundColor: "rgb(19, 30, 182)",
              border: "none",
              margin: "20px auto",
              marginBottom: "90px"
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
              gap: "32px"
            }}
          >
            <motion.div
              variants={fadeUpDownVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              style={{
                width: isMobile ? "100%" : "48%"
              }}
            >
              <Typography
                variant="body1"
                paragraph
                sx={{
                  textAlign: "left",
                  width: "100%",
                  color: "rgb(109, 115, 121)"
                }}
              >
                ISO 22000:2018 is widely regarded as a fundamental requirement for businesses involved in the food chain. It provides a comprehensive framework for implementing a robust Food Safety Management System (FSMS), helping organizations ensure that food is safe at every stage — from production and packaging to transport and consumption.
                <Box component="div" sx={{ mt: 3 }}>
                  Adopting ISO 22000 not only demonstrates a company’s commitment to food safety, but also strengthens customer trust, supports regulatory compliance, and enhances overall operational efficiency.
                </Box>
                <br />
                <div
                  style={{
                    marginTop: "24px",
                    color: "rgb(69, 70, 70)"
                  }}
                >
                  {[
                    {
                      icon: <FaIndustry style={{ marginRight: "8px", color: "rgb(16, 162, 199)", marginTop: "4px", scale: "1.8" }} />,
                      title: "Food manufacturing companies"
                    },
                    {
                      icon: <FaBoxOpen style={{ marginRight: "8px", color: "rgb(16, 162, 199)", marginTop: "4px", scale: "1.8" }} />,
                      title: "Food packaging manufacturers"
                    },
                    {
                      icon: <FaTruck style={{ marginRight: "8px", color: "rgb(16, 162, 199)", marginTop: "4px", scale: "1.8" }} />,
                      title: "Food transport and storage organizations"
                    },
                    {
                      icon: <FaCogs style={{ marginRight: "8px", color: "rgb(16, 162, 199)", marginTop: "4px", scale: "1.8" }} />,
                      title: "Food machinery and equipment producers"
                    },
                    {
                      icon: <FaUtensils style={{ marginRight: "8px", color: "rgb(16, 162, 199)", marginTop: "4px", scale: "1.8" }} />,
                      title: "Catering services and food outlets"
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        marginBottom: "16px",
                        gap: "24px"
                      }}
                    >
                      {item.icon}
                      <div>
                        <span style={{ fontWeight: "bold", color: "rgb(97, 112, 112)" }}>{item.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Typography>
            </motion.div>

            <motion.div
              variants={fadeUpDownVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              style={{
                width: isMobile ? "100%" : "35%"
              }}
            >
              <Card
                variant="outlined"
                sx={{
                  width: "100%",
                  height: { xs: 'auto', sm: 300 },
                  display: "flex",
                  flexDirection: "column",
                  p: 0,
                  mb: 3
                }}
              >
                {card1}
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </Box>

      <ISO22000Benefits />
    </>
  );
}
