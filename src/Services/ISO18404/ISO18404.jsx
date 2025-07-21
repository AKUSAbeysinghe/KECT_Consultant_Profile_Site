import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { FcGlobe } from "react-icons/fc";
import { motion } from "framer-motion";
import ISO18404Benefits from "./ISO18404Benefits.jsx";
import { FaUserTie, FaMedal, FaBuilding, FaProjectDiagram } from "react-icons/fa";

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
        ISO 18404:2015 is globally recognized as the standard for Lean and Six Sigma competencies. Certification demonstrates that individuals and organizations meet rigorous competency, performance, and training benchmarks — boosting credibility with customers, partners, and regulators worldwide.
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function ISO18404() {
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
            Who Needs 18404:2015 ?
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
                This standard is essential for individuals and organizations aiming to demonstrate recognized competence in Lean, Six Sigma, or Lean Six Sigma methodologies. ISO 18404:2015 defines clear competency levels, ensuring consistent, measurable, and effective process improvement outcomes.

                <Box component="div" sx={{ mt: 3 }}>
                  Adopting ISO 18404:2015 showcases your commitment to operational excellence, performance consistency, and sustained quality improvement.
                </Box>
                <br />
                <div
  style={{
    marginTop: "24px",
    color: "rgb(69, 70, 70)"
  }}
>
  {[
    { icon: FaUserTie, text: "Lean Practitioners, Leaders, and Experts" },
    { icon: FaMedal, text: "Six Sigma Green, Black, and Master Black Belts" },
    { icon: FaBuilding, text: "Organizations implementing Lean, Six Sigma, or Lean Six Sigma systems" },
    { icon: FaProjectDiagram, text: "Teams focused on process improvement, quality, and performance excellence" }
  ].map((item, idx) => (
    <div key={idx} style={{ display: "flex", alignItems: "center", marginBottom: "8px", gap: "16px" }}>
      <div
        style={{
          width: "24px",
          height: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "rgb(16, 162, 199)"
        }}
      >
        <item.icon size={20} />
      </div>
      <span>{item.text}</span>
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

      <ISO18404Benefits />
    </>
  );
}
