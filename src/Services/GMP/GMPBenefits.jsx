import React from "react";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import Logo from "../../assets/GMP-Logo.webp";
import {
  FaCheckCircle,
  FaBalanceScale,
  FaUserCheck,
  FaShieldAlt,
  FaCog,
  FaGlobe,
  FaArrowCircleUp
} from "react-icons/fa";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const GMPBenefits = () => {
  const renderCard = (title, description, IconComponent, number) => (
    <Box
      key={number}
      sx={{
        flexBasis: { xs: "100%", sm: "50%", md: "35%" },
        maxWidth: { xs: "100%", sm: "50%", md: "35%" },
        paddingX: 1,
        boxSizing: "border-box",
        mb: 3,
        display: "flex",
        justifyContent: "center"
      }}
    >
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        style={{ width: "100%" }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            minHeight: 250,
            overflow: "hidden",
            borderRadius: "20px",
            cursor: "pointer",
            backgroundColor: "#fff",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            transition: "background-color 0.5s ease",
            "&:hover": {
              backgroundColor: "#1976d2",
              color: "#fff"
            },
            "&:before": {
              content: '""',
              position: "absolute",
              top: 0,
              right: 0,
              width: 60,
              height: 60,
              backgroundColor: "#1976d2",
              borderBottomLeftRadius: "100%",
              transition: "all 0.5s ease-in-out",
              zIndex: 1
            },
            "&:hover:before": {
              width: "100%",
              height: "100%",
              borderBottomLeftRadius: 0,
              borderRadius: "20px"
            },
            "& > *": {
              position: "relative",
              zIndex: 2,
              transition: "color 0.5s ease"
            },
            "&:hover .card-title, &:hover .card-description, &:hover .card-number": {
              color: "#fff"
            },
            "& .icon-container": {
              position: "absolute",
              top: 8,
              left: 20,
              width: 48,
              height: 48,
              backgroundColor: "rgba(255,255,255,0.6)",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#1976d2",
              fontSize: "1.8rem",
              transition: "all 0.5s ease",
              zIndex: 3
            },
            "&:hover .icon-container": {
              backgroundColor: "transparent",
              color: "gold"
            },
            "& .card-number": {
              position: "absolute",
              top: 8,
              right: 30,
              backgroundColor: "rgba(255,255,255,0.6)",
              color: "#1976d2",
              padding: "2px 8px",
              borderRadius: "12px",
              fontWeight: "bold",
              fontSize: "0.87rem",
              minWidth: "28px",
              textAlign: "center",
              zIndex: 3,
              transition: "all 0.5s ease"
            },
            "&:hover .card-number": {
              backgroundColor: "transparent",
              color: "gold"
            }
          }}
        >
          <CardContent sx={{ position: "relative" }}>
            <Box className="icon-container">
              <IconComponent />
            </Box>

            <Typography className="card-number">{number}</Typography>

            <Typography
              gutterBottom
              variant="h6"
              className="card-title"
              sx={{
                fontWeight: "bold",
                mt: 6,
                mb: 0.5,
                color: "inherit",
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.3rem" }
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              className="card-description"
              sx={{
                color: "inherit",
                fontSize: { xs: "0.85rem", sm: "0.9rem", md: "1rem" }
              }}
            >
              {description}
            </Typography>
          </CardContent>
        </Box>
      </motion.div>
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
        boxSizing: "border-box"
      }}
    >
      <div
        className="py-16 max-w-7xl mx-auto text-left"
        style={{ paddingLeft: "16px", paddingRight: "16px" }}
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
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.4rem" }
            }}
          >
            Rewards You Will Get After GMP <br />
            Certification
          </Typography>
          <hr
            style={{
              width: "15%",
              height: "4px",
              backgroundColor: "rgb(19, 30, 182)",
              border: "none",
              margin: "20px auto 50px auto"
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
            alt="GMP Logo"
            style={{
              display: "block",
              margin: "0 auto",
              maxWidth: "300px",
              width: "50%",
              height: "auto",
              borderRadius: "400px"
            }}
            whileHover={{
              opacity: 1,
              scale: 1.05
            }}
            initial={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.8
            }}
          />
          <br />
          <p
            className="mt-4 font-[Helvetica] text-center"
            style={{
              fontSize: "1rem",
              color: "#5A5A5A",
              maxWidth: "600px",
              margin: "0 auto"
            }}
          >
            Ensure product quality and safety with GMP — the internationally recognized
            guidelines that help organizations maintain consistent manufacturing
            practices, control processes, and comply with regulatory standards to protect
            consumers and build trust.
          </p>
          <br />
        </motion.div>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 2,
            mt: 5
          }}
        >
          {renderCard(
            "Product Safety and Quality",
            "By adhering to GMP guidelines, companies can ensure their products are consistently safe and of high quality, reducing the risk of contamination and defects.",
            FaCheckCircle,
            "01"
          )}
          {renderCard(
            "Regulatory Compliance",
            "In many industries, GMP is a legal requirement. Compliance ensures that businesses meet the regulatory standards of various authorities, including the FDA or EMA.",
            FaBalanceScale,
            "02"
          )}
          {renderCard(
            "Consumer Confidence",
            "Adherence to GMP improves consumer confidence as it guarantees that the products meet established safety, quality, and consistency standards.",
            FaUserCheck,
            "03"
          )}
          {renderCard(
            "Risk Reduction",
            "GMP helps identify and mitigate risks related to contamination, quality defects, and non-compliance, preventing costly recalls and legal issues.",
            FaShieldAlt,
            "04"
          )}
          {renderCard(
            "Efficiency and Cost Savings",
            "Standardizing manufacturing practices helps improve efficiency, reduce waste, and lower the likelihood of errors, resulting in cost savings for manufacturers.",
            FaCog,
            "05"
          )}
          {renderCard(
            "Market Access",
            "Many markets, particularly international ones, require GMP certification for products to be sold, especially in highly regulated sectors like food, pharmaceuticals, and cosmetics.",
            FaGlobe,
            "06"
          )}
          {renderCard(
            "Continuous Improvement",
            "GMP emphasizes continual monitoring, audits, and improvements in the manufacturing process, leading to higher operational standards over time.",
            FaArrowCircleUp,
            "07"
          )}
        </Box>
      </div>
    </div>
  );
};

export default GMPBenefits;
