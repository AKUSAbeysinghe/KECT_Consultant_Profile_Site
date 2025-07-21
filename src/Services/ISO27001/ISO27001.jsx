import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { FcGlobe } from "react-icons/fc";
import { motion } from "framer-motion";
import ISO27001Benefits from "./ISO27001Benefits.jsx";

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
        ISO 27001:2022 is globally recognized as the international standard for
        Information Security Management Systems (ISMS). It helps organizations
        establish, implement, and continually improve security controls —
        ensuring the confidentiality, integrity, and availability of information,
        regulatory compliance, and stakeholder trust.
        <br />
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function ISO27001() {
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
            Who Needs ISMS ?
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
                width: isMobile ? "100%" : "48%",
                color: "rgb(109, 115, 121)"
              }}
            >
              <Typography variant="body1" paragraph sx={{ textAlign: "left" }}>
                ISO 27001:2022 is widely regarded as a fundamental requirement
                for organizations aiming to protect sensitive information and
                manage cybersecurity risks. It provides a comprehensive
                framework for implementing a robust Information Security
                Management System (ISMS), helping organizations safeguard data
                confidentiality, integrity, and availability — across all
                processes, technologies, and people.
                <Box component="div" sx={{ mt: 3 }}>
                  Adopting ISO 27001 not only demonstrates a company’s commitment
                  to information security, but also strengthens stakeholder
                  trust, supports regulatory compliance, and enhances overall
                  business resilience in an increasingly digital world.
                </Box>
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
                  height: { xs: "auto", sm: 300 },
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

      <ISO27001Benefits />
    </>
  );
}
