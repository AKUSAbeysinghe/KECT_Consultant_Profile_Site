import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { FcGlobe } from "react-icons/fc";
import { motion } from "framer-motion";
import FSSC22000Benefits from "./FSSC22000Benefits.jsx";

import { 
  FaCertificate, 
  FaCogs, 
  FaStream, 
  FaTasks, 
  FaUserCheck 
} from "react-icons/fa";

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
        FSSC 22000 is globally recognized as a leading Food Safety Management System (FSMS) certification. It combines ISO standards with sector-specific requirements to demonstrate that organizations effectively manage food safety risks — ensuring regulatory compliance, customer trust, and continuous improvement across the food supply chain.
        <br />
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function FSSC22000() {
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
            Key Aspects of FSSC 22000 
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
                <br />
                <div
  style={{
    marginTop: "24px",
    color: "rgb(69, 70, 70)"
  }}
>
  {[
    {
      icon: FaCertificate,
      title: "ISO 22000 Foundation",
      desc:
        "FSSC 22000 is built on the ISO 22000 standard for food safety management, which focuses on identifying and controlling food safety hazards (such as biological, chemical, and physical risks) through the entire food supply chain."
    },
    {
      icon: FaCogs,
      title: "Prerequisite Programs (PRPs)",
      desc:
        "FSSC 22000 incorporates ISO/TS 22002-1 (the prerequisite programs for food safety in the food manufacturing industry), which includes hygiene, facility maintenance, pest control, and other basic conditions needed for food safety."
    },
    {
      icon: FaStream,
      title: "HACCP-Based Approach",
      desc:
        "Like ISO 22000, FSSC 22000 incorporates the principles of Hazard Analysis and Critical Control Points (HACCP) to systematically identify and control food safety risks at critical points in the food production process."
    },
    {
      icon: FaTasks,
      title: "Management System Requirements",
      desc:
        "FSSC 22000 includes requirements for the documentation and management of food safety policies, procedures, and records, as well as leadership commitment and continual improvement."
    },
    {
      icon: FaUserCheck,
      title: "Third-Party Audits and Certification",
      desc:
        "The FSSC 22000 certification process involves third-party audits to verify that an organization is meeting the requirements of the standard."
    }
  ].map((item, idx) => (
    <div
      key={idx}
      style={{
        display: "flex",
        alignItems: "flex-start",
        marginBottom: "16px",
        gap: "16px"
      }}
    >
      <div
        style={{
          width: "32px",
          height: "32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "rgb(16, 162, 199)",
          marginTop: "4px"
        }}
      >
        <item.icon size={24} />
      </div>
      <div>
        <span style={{ fontWeight: "bold", color: "rgb(97, 112, 112)" }}>
          {item.title}
        </span>
        <br />
        <span>{item.desc}</span>
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

      <FSSC22000Benefits />
    </>
  );
}
