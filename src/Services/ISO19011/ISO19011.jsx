import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { FcGlobe } from "react-icons/fc";
import { motion } from "framer-motion";
import ISO19011Benefits from "./ISO19011Benefits.jsx";
import { FaBalanceScale, FaProjectDiagram, FaUserCheck, FaTasks } from "react-icons/fa";

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
        ISO 19011:2018 is globally recognized as the standard for auditing management systems. Certification demonstrates that organizations apply effective, consistent, and risk-based audit practices — enhancing credibility with customers, regulators, and stakeholders while driving continual improvement.
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function ISO19011() {
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
            Key Aspects of ISO 19011
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
    color: "rgb(2, 18, 34)"
  }}
>
  <div
    style={{
      marginTop: "24px",
      color: "rgb(69, 70, 70)"
    }}
  >
    {[
      {
        icon: FaBalanceScale,
        title: "Auditing principles",
        desc: "Provides guidance on the principles of auditing, including objectivity, impartiality, confidentiality, and evidence-based auditing."
      },
      {
        icon: FaProjectDiagram,
        title: "Audit process",
        desc: "Describes how audits should be planned, conducted, and followed up."
      },
      {
        icon: FaUserCheck,
        title: "Competence of auditors",
        desc: "Establishes the necessary qualifications and competencies required for auditors to perform effective audits."
      },
      {
        icon: FaTasks,
        title: "Audit program management",
        desc: "Provides guidance on the management of audit programs, including how to organize, manage, and monitor the audit process."
      }
    ].map((item, index) => (
      <div
        key={index}
        style={{
          display: "flex",
          alignItems: "flex-start",
          marginBottom: "16px",
          gap: "16px"
        }}
      >
        {/* Icon Wrapper for consistent size and alignment */}
        <div
          style={{
            width: "28px",
            height: "28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "4px", // Align with text baseline
            color: "rgb(16, 162, 199)"
          }}
        >
          <item.icon size={20} />
        </div>

        <div>
          <span style={{ fontWeight: "bold", color: "rgb(34, 65, 65)" }}>{item.title}</span>
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

      <ISO19011Benefits />
    </>
  );
}
