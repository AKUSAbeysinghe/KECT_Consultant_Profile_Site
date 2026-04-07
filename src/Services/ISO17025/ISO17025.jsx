import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { FcGlobe } from "react-icons/fc";
import { motion } from "framer-motion";
import ISO17025Benefits from "./ISO17025Benefits.jsx";
import { FaVials, FaRulerCombined, FaCertificate, FaMicroscope } from "react-icons/fa";

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
        ISO/IEC 17025:2017 is internationally recognized as the benchmark for laboratory competence and consistent operation. Certification validates your laboratory’s adherence to stringent quality standards, boosting confidence among customers and regulators worldwide.
        <br />
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function ISO17025() {
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
            Who Needs ISO/IEC 17025 ?
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
                  color: "rgb(108, 120, 133)"
                }}
              >
                This standard is vital for testing and calibration laboratories of all sizes and types. ISO/IEC 17025 enhances the credibility of laboratory results, fostering trust among clients, regulatory bodies, and stakeholders.
                <Box component="div" sx={{ mt: 3 }}>
                  Compliance demonstrates a laboratory’s commitment to quality, technical competence, and scientific rigor — ensuring accurate, reliable, and impartial testing and calibration outcomes.
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
                      <FaVials
                        style={{
                          marginRight: "8px",
                          color: "rgb(16, 162, 199)"
                        }}
                      />
                      <span> Testing laboratories across industries</span>
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
                      <FaRulerCombined
                        style={{
                          marginRight: "8px",
                          color: "rgb(19, 142, 199)"
                        }}
                      />
                      <span>Calibration laboratories for equipment and instruments</span>
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
                      <FaCertificate
                        style={{
                          marginRight: "8px",
                          color: "rgb(16, 162, 199)"
                        }}
                      />
                      <span> Laboratories seeking accreditation and international recognition</span>
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
                          color: "rgb(16, 162, 199)"
                        }}
                      />
                      <span>Quality control and R&D laboratories</span>
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
                width: isMobile ? "100%" : "35%"
              }}
            >
              <Card
                variant="outlined"
                sx={{
                  width: "100%",
                 height: { xs: 'auto',    sm: 300       },
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

      <ISO17025Benefits />
    </>
  );
}
