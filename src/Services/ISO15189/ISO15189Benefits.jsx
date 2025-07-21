import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaChartLine,
  FaAward,
  FaHandshake,
  FaVials,
  FaUserShield,
  FaSyncAlt,
  FaFileAlt,
  FaUserGraduate,
  FaBalanceScale,
} from "react-icons/fa";
import Logo from "../../assets/ISO15189-Logo.webp";


const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const ISO15189Benefits = () => {
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
        {/* Title */}
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
            Rewards You Will Get After ISO 15189:2022 <br />
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

        {/* Logo */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.img
            src={Logo}
            alt="ISO 45001 Logo"
            style={{
              display: "block",
              margin: "0 auto",
              maxWidth: "300px",
              width: "100%",
              height: "auto",
              borderRadius: "200px",
            }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            initial={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <br />
          <p
            className="mt-4 font-[Helvetica] text-center"
            style={{ fontSize: "1.2rem", color: "#5A5A5A" }}
          >
            🔬 Empower your medical laboratory with{" "}
            <span style={{ display: "block", marginTop: "0.7rem" }}></span>ISO
            15189:2022 — delivering reliable results, enhancing quality, and
            building trust in{" "}
            <span style={{ display: "block", marginTop: "0.7rem" }}></span>
            every diagnosis.
          </p>
          <br />
        </motion.div>

        {/* Cards */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 5,
            flexWrap: "wrap",
            gap: "30px", // smaller gap to be consistent with first component
          }}
        >
          {renderCard(
            "Improved Quality of Testing and Services",
            "ISO 15189 ensures that laboratory processes are standardized and follow best practices, leading to more accurate, reliable, and consistent test results.",
            FaVials,
            "01"
          )}
          {renderCard(
            "Regulatory Compliance",
            "Certification helps laboratories meet regulatory requirements and accreditation standards, ensuring compliance with both local and international regulations.",
            FaBalanceScale,
            "02"
          )}
          {renderCard(
            "Enhanced Reputation and Trust",
            "ISO 15189 certification demonstrates a laboratory's commitment to quality and competence, building trust with healthcare providers, patients, and stakeholders.",
            FaAward,
            "03"
          )}
          {renderCard(
            "Improved Patient Safety",
            "By ensuring the accuracy and reliability of test results, ISO 15189 contributes to better patient care and safety, reducing the likelihood of misdiagnoses or incorrect treatments.",
            FaUserShield,
            "04"
          )}
          {renderCard(
            "Consistency and Reliability",
            "The standard ensures consistent practices and processes in laboratories, leading to reliable results across various tests and over time.",
            FaSyncAlt,
            "05"
          )}
          {renderCard(
            "Increased Operational Efficiency",
            "ISO 15189 emphasizes process optimization, waste reduction, and resource management, leading to more efficient laboratory operations and reduced costs.",
            FaChartLine,
            "06"
          )}
          {renderCard(
            "Accurate Documentation and Traceability",
            "The standard requires proper documentation and record-keeping, ensuring that all tests, procedures, and results are traceable for quality control, audits, and legal purposes.",
            FaFileAlt,
            "07"
          )}
          {renderCard(
            "Enhanced Risk Management",
            "ISO 15189 helps identify and manage risks related to laboratory operations, reducing the likelihood of errors, accidents, and non-compliance.",
            FaShieldAlt,
            "08"
          )}
          {renderCard(
            "Employee Competence and Training",
            "The standard requires laboratories to maintain a skilled and competent workforce, promoting ongoing staff training, development, and performance evaluation.",
            FaUserGraduate,
            "09"
          )}
          {renderCard(
            "Improved Customer Confidence",
            "ISO 15189 certification assures customers and stakeholders that the laboratory operates to high-quality standards and consistently delivers accurate results.",
            FaHandshake,
            "10"
          )}
        </Box>

        <br />
        <br />
      </div>
    </div>
  );
};

export default ISO15189Benefits;
