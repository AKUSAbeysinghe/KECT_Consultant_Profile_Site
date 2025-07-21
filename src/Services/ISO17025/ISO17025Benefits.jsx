import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaGavel,
  FaCertificate,
  FaGlobe,
  FaUserCog,
  FaHandshake,
  FaExclamationTriangle,
  FaCogs,
  FaClipboardList,
  FaChartLine,
} from "react-icons/fa";

import Logo from "../../assets/ISO17025-Logo.webp";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ISO17025Benefits = () => {
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
        sx={{ position: "relative", width: "100%", height: { xs: "auto", sm: 275 } }}
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
          {/* Blue quarter overlay */}
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

            <br />

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

  return (
    <div
      className="w-full"
      style={{
        backgroundColor: "#F0F3FA",
        margin: 0,
        padding: 0,
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      <div
        className="py-16 max-w-5xl mx-auto text-left"
        style={{ paddingLeft: "24px", paddingRight: "24px" }}
      >
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
            Rewards You Will Get After ISO 17025 <br />
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

        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.img
            src={Logo}
            alt="ISO 15189:2022 Logo"
            style={{
              display: "block",
              margin: "0 auto",
              maxWidth: "300px",
              width: "100%",
              height: "auto",
              borderRadius: "600px",
            }}
            whileHover={{
              opacity: 1,
              scale: 1.05,
            }}
            initial={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
            }}
          />
          <br />
          <p
            className="mt-4 font-[Helvetica] text-center"
            style={{ fontSize: "1.2rem", color: "#5A5A5A" }}
          >
            🔬 Ensure your laboratory’s precision and reliability with{" "}
            <span style={{ display: "block", marginTop: "0.7rem" }}></span>ISO
           ISO/IEC 17025:2017 — the international standard for demonstrating technical competence, impartiality, and
            {" "}
            <span style={{ display: "block", marginTop: "0.7rem" }}></span>
           delivering consistently accurate testing and calibration outcomes.
          </p>
          <br />
        </motion.div>

        {/* Cards rows */}
 <Box
  sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: { xs: "20px", sm: "30px", md: "40px" },
            mt: 5,
          }}
>
  {renderCard(
    "Improved Accuracy and Reliability of Results",
    "ISO 17025 ensures that laboratories produce precise and accurate test results, meeting the required standards of quality.",
    FaCheckCircle,
    "01"
  )}
  {renderCard(
    "Regulatory Compliance",
    "It helps laboratories comply with international, regional, and national regulations and requirements.",
    FaGavel,
    "02"
  )}
  {renderCard(
    "Enhanced Credibility and Reputation",
    "Certification demonstrates the laboratory's commitment to quality and technical competence.",
    FaCertificate,
    "03"
  )}
  {renderCard(
    "Global Recognition",
    "ISO 17025 is recognized internationally, facilitating market access and collaboration.",
    FaGlobe,
    "04"
  )}
  {renderCard(
    "Improved Competence of Personnel",
    "Emphasizes proper training, qualifications, and capabilities of laboratory staff.",
    FaUserCog,
    "05"
  )}
  {renderCard(
    "Increased Customer Confidence",
    "Certification assures reliable and consistent testing and calibration services.",
    FaHandshake,
    "06"
  )}
  {renderCard(
    "Enhanced Risk Management",
    "Identifies and addresses risks in laboratory operations to reduce errors.",
    FaExclamationTriangle,
    "07"
  )}
  {renderCard(
    "Better Process Control and Quality Assurance",
    "Provides a framework for validated and consistent testing and calibration methods.",
    FaCogs,
    "08"
  )}
  {renderCard(
    "Traceability and Documentation",
    "Ensures thorough documentation and traceability of all tests and results.",
    FaClipboardList,
    "09"
  )}
  {renderCard(
    "Improved Operational Efficiency",
    "Streamlines laboratory operations, reducing errors and increasing productivity.",
    FaChartLine,
    "10"
  )}
</Box>
        <br />
        <br />
      </div>
    </div>
  );
};

export default ISO17025Benefits;
