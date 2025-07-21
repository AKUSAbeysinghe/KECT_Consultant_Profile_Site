import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { FcGlobe } from "react-icons/fc";
import { motion } from "framer-motion";
import ISO22301Benefits from "./ISO22301Benefits.jsx";
import { FaUserCheck, FaFileContract, FaChartBar, FaShieldAlt, FaBullseye, FaEye } from "react-icons/fa";

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
      <Typography variant="h5" sx={{ fontWeight: "bold", color: "rgb(14, 43, 68)", mb: 1 }}>
        Global Recognition
      </Typography>
      <Typography variant="body2" sx={{ color: "rgb(138, 170, 197)" }}>
        ISO/DIS 22301:2019 is globally recognized as the international standard for Business Continuity Management Systems (BCMS). It helps organizations identify potential threats and implement effective plans to ensure resilience — enabling continuous operations, regulatory compliance, and stakeholder confidence during disruptions.
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function ISO22301() {
  return (
    <>
      <Box sx={{ p: { xs: 2, md: 4 } }}>
        <motion.div
          variants={fadeUpDownVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Typography variant="h4" align="center" sx={{ fontWeight: "bold", mb: 3, color: "rgb(14, 43, 68)", mt: 0 }}>
            Key Aspects of ISO 22301
          </Typography>
          <hr
            style={{
              width: "15%",
              height: "4px",
              backgroundColor: "rgb(19, 30, 182)",
              border: "none",
              margin: "20px auto 90px"
            }}
          />
        </motion.div>

        <motion.div
          variants={fadeUpDownVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
              alignItems: "flex-start",
              gap: 4
            }}
          >
            <motion.div
              variants={fadeUpDownVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              style={{ flex: 1 }}
            >
              <Typography variant="body1" sx={{ textAlign: "left", color: "rgb(109, 115, 121)" }}>
  <Box mt={3} color="rgb(69, 70, 70)">
    {[
      {
        icon: FaFileContract,
        title: "Business Continuity Policy",
        desc: "The standard emphasizes the creation of a business continuity policy to guide the organization’s approach to managing risks and disruptions"
      },
      {
        icon: FaChartBar,
        title: "Business Impact Analysis (BIA)",
        desc: "A core requirement is conducting a Business Impact Analysis, which identifies critical business functions."
      },
      {
        icon: FaShieldAlt,
        title: "Risk Assessment",
        desc: "ISO 22301 guides organizations in identifying potential risks and threats that could impact business continuity."
      },
      {
        icon: FaBullseye,
        title: "Business Continuity Strategy",
        desc: "The standard outlines the creation of strategies to ensure that critical functions can continue during and after a disruption."
      },
      {
        icon: FaUserCheck,
        title: "Testing and Exercises",
        desc: "The standard requires organizations to regularly test and exercise their business continuity plans to ensure effectiveness during a real crisis."
      },
      {
        icon: FaEye,
        title: "Monitoring and Review",
        desc: "Continuous monitoring and reviewing of the BCMS is essential to ensure it remains effective and up-to-date in the face of changing risks and circumstances."
      }
    ].map((item, idx) => (
      <Box key={idx} display="flex" alignItems="flex-start" mb={2} gap={2}>
        {/* Standardized icon container */}
        <Box
          sx={{
            width: "32px",
            height: "32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "rgb(16, 162, 199)",
            mt: "4px"
          }}
        >
          <item.icon size={24} />
        </Box>

        <Box>
          <Typography sx={{ fontWeight: "bold", color: "rgb(97, 112, 112)" }}>
            {item.title}
          </Typography>
          <Typography>{item.desc}</Typography>
        </Box>
      </Box>
    ))}
  </Box>
</Typography>
            </motion.div>

            <motion.div
              variants={fadeUpDownVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              style={{ flex: 1, maxWidth: { md: "35%" } }}
            >
              <Card variant="outlined" sx={{ width: "80%", display: "flex", flexDirection: "column", mb: 3 }}>
                {card1}
              </Card>
            </motion.div>
          </Box>
        </motion.div>
      </Box>

      <ISO22301Benefits />
    </>
  );
}
