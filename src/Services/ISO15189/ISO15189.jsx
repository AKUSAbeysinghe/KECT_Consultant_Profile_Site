import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { FcGlobe } from "react-icons/fc";
import { motion } from "framer-motion";
import ISO15189Benefits from "./ISO15189Benefits.jsx"; 
import { FaFlask, FaHospital, FaMicroscope } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";

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
       ISO 15189:2022 is internationally recognized as the benchmark for quality and competence in medical laboratories. Certification demonstrates your commitment to delivering precise, reliable results and enhances your reputation in both local and global healthcare markets.
        <br />
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function ISO15189() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 900);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 900);
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
           Who Needs 15189 ?
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
              flexDirection: isSmallScreen ? "column" : "row",
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
                width: isSmallScreen ? "100%" : "48%"
              }}
            >
              <Typography
                variant="body1"
                paragraph
                sx={{
                  textAlign: "left",
                  width: "100%",
                  color: "rgb(108, 120, 133)"
                }}
              >
           No matter the size or specialty, if your medical laboratory examines materials from the human body to support diagnosis, monitoring, prevention, or treatment of disease, ISO 15189 certification is essential. The standard ensures your laboratory’s competence, accuracy, and reliability, helping you meet regulatory requirements and exceed customer and patient expectations.
 <Box component="div" sx={{ mt: 3 }}>ISO 15189:2022 provides a robust framework for managing laboratory quality and competence — building trust with healthcare providers, patients, and regulators, while enabling access to national and international partnerships.
                </Box>
                <br />
                <div
                  style={{
                    marginTop: "24px",
                    color: "rgb(69, 70, 70)"
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "8px",
                      gap: "24px"
                    }}
                  >
                    <div
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <FaFlask
                        style={{
                          marginRight: "8px",
                          color: "rgb(16, 162, 199)"
                        }}
                      />
                      <span>Medical Testing Laboratories</span>
                    </div>

                    <div
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <FaHospital
                        style={{
                          marginRight: "8px",
                          color: "rgb(16, 185, 207)"
                        }}
                      />
                      <span>Hospital and Clinical Laboratories</span>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "8px",
                      gap: "24px"
                    }}
                  >
                    <div
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <FaMicroscope
                        style={{
                          marginRight: "8px",
                          color: "rgb(19, 142, 199)"
                        }}
                      />
                      <span>Independent Diagnostic Labs</span>
                    </div>

                    <div
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <FaBookOpen
                        style={{
                          marginRight: "8px",
                          color: "rgb(19, 142, 199)"
                        }}
                      />
                      <span>Research and Academic Laboratories
                      </span>
                    </div>
                  </div>
                </div>
              </Typography>
            </motion.div>

            <motion.div
              variants={fadeUpDownVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              style={{
                width: isSmallScreen ? "100%" : "35%"
              }}
            >
              <Card
                variant="outlined"
                sx={{
                  width: "100%",
                  height: "300px",
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

      <ISO15189Benefits />
    </>
  );
}
