import React, { useState, useRef } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import CE from "./CE/CE.jsx";
import { useNavigate } from "react-router-dom";
import { BiFirstPage } from "react-icons/bi";
import bgImage from "../assets/CEMARKINGbgI.webp";
import { useTheme, useMediaQuery, Box } from "@mui/material";
import fingurGif from "../assets/finger.gif";

export default function CEMain() {
  const [arrowColor, setArrowColor] = useState("#fff");
  const isoRef = useRef(null);
  const navigate = useNavigate();
  const theme = useTheme();

  // Responsive breakpoints
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  // Responsive style values
  const arrowBottom = isMobile ? 15 : 20;
  const centerWidth = isMobile ? "90vw" : "700px";
  const headingFontSize = isMobile ? "1.6rem" : "2.5rem";
  const subHeadingFontSize = isMobile ? "0.9rem" : "1.1rem";
  const centerTopMargin = isMobile ? 10 : 15; // spacing units (MUI default = 8px)
  const subHeadingTopMargin = isMobile ? 3 : 5;
  const subHeadingBottomMargin = isMobile ? 4 : 8;

  const handleArrowClick = () => {
    isoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box>
      {/* Top Section */}
      <Box
        sx={{
          backgroundColor: "#FFFFFF",
          px: { xs: 2, sm: 4, md: "5%" },
          boxSizing: "border-box",
        }}
      >
        <Box
          className="py-2 max-w-7xl mx-auto text-left"
          sx={{ maxWidth: 1200, mx: "auto" }}
        >
          <Box
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 6,
              height: { xs: 150, sm: 180, md: 200 },
            }}
          >
            <Typography
              variant="h1"
              fontWeight="bold"
              sx={{
                position: "absolute",
                color: "#003B73",
                fontFamily: "Arial",
                opacity: 0.15,
                zIndex: 1,
                fontSize: {
                  xs: "3rem",
                  sm: "5rem",
                  md: "7rem",
                  lg: "9rem",
                  xl: "10rem",
                },
                userSelect: "none",
              }}
            >
              OUR SERVICES
            </Typography>

            <Box
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                zIndex: 2,
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: "#003B73",
                  fontFamily: "Arial",
                  fontSize: { xs: "1.25rem", sm: "1.75rem", md: "2rem" },
                }}
              >
                What we can do for you
              </Typography>

              <Box
                component="img"
                src={fingurGif}
                alt="finger gif"
                sx={{
                  width: { xs: 30, sm: 40, md: 50 },
                  height: { xs: 30, sm: 40, md: 50 },
                }}
              />
            </Box>
          </Box>

          <Typography
            variant="h3"
            fontWeight="bold"
            align="center"
            sx={{
              color: "black",
              fontFamily: "Arial",
              justifyContent: "center",
              fontSize: { xs: "1.5rem", sm: "2.5rem", md: "3.5rem" },
              mt: 3,
            }}
          >
            Our CE Marking Consulting Services
          </Typography>

          <Typography
            variant="body1"
            align="center"
            sx={{
              color: "#5A5A5A",
              mt: 3,
              fontFamily: "Helvetica",
              fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              maxWidth: 900,
              mx: "auto",
            }}
          >
            At <b>KECT CONSULTANTS (PVT) LTD</b>, we specialize in providing
            expert CE Marking certification consulting services to help
            manufacturers ensure their products meet the essential health,
            safety, and environmental protection requirements of the European
            Union. Our team supports businesses in navigating the CE Marking
            process—from identifying applicable directives and standards to
            technical documentation, conformity assessments, and affixing the
            CE mark—ensuring smooth market access across the European Economic
            Area.
          </Typography>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            {/* Placeholder for extra animated content */}
          </motion.div>
        </Box>
      </Box>

      {/* Middle section with animated background */}
      <Box
        sx={{
          position: "relative",
          height: { xs: "80vh", sm: "90vh" },
          width: "100vw",
          overflow: "hidden",
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          mt: 6,
        }}
      >
        {/* Animated background image */}
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 2.05 }}
          transition={{
            duration: 60,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 1,
          }}
        />

        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            zIndex: 2,
          }}
        />

        {/* Top label */}
        <Typography
          variant="subtitle2"
          component="h1"
          gutterBottom
          sx={{
            position: "absolute",
            top: isMobile ? 2 : 3,
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: isMobile ? "0.75rem" : "0.9rem",
            color: "rgb(9, 42, 71)",
            textAlign: "center",
            backgroundColor: "rgb(207, 223, 238)",
            padding: isMobile ? "4px 10px" : "6px 12px",
            borderRadius: "20px",
            zIndex: 10,
            display: "inline-block",
          }}
        >
          European Conformity
        </Typography>

        {/* Center content */}
        <Box
          sx={{
            position: "absolute",
            top: isMobile ? "40%" : isTablet ? "38%" : "35%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            zIndex: 10,
            width: centerWidth,
            px: isMobile ? 2 : 0,
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: "bold",
              color: "#FFFFFF",
              textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
              mt: centerTopMargin,
              fontSize: headingFontSize,
              lineHeight: 1.2,
            }}
          >
            CE Marking
          </Typography>

          <Typography
            variant="h6"
            component="h2"
            sx={{
              textAlign: "center",
              color: "rgba(247, 247, 247, 0.9)",
              fontSize: subHeadingFontSize,
              mt: subHeadingTopMargin,
              mb: subHeadingBottomMargin,
            }}
          >
            Ensure product safety and market access with CE Marking — the
            mandatory conformity mark that demonstrates compliance with
            European health, safety, and environmental protection standards,
            enabling your products to freely circulate within the European
            Economic Area.
          </Typography>
        </Box>

        {/* Bottom arrow */}
        <IoIosArrowDropdown
          size={60}
          style={{
            position: "absolute",
            bottom: arrowBottom,
            left: "50%",
            transform: "translateX(-50%)",
            color: arrowColor,
            zIndex: 10,
            cursor: "pointer",
            transition: "color 0.3s ease",
          }}
          onMouseEnter={() => setArrowColor("rgb(18, 181, 231)")}
          onMouseLeave={() => setArrowColor("#fff")}
          onClick={handleArrowClick}
          aria-label="Scroll down to content"
        />
      </Box>

      {/* CE Content Section */}
      <Box ref={isoRef} sx={{ mt: 10, px: { xs: 2, md: 0 } }}>
        <CE />
      </Box>

      {/* Back to services button */}
      <BiFirstPage
        size={isMobile ? 35 : 45}
        style={{
          position: "fixed",
          bottom: 20,
          left: 20,
          color: "#12b5e7",
          backgroundColor: "rgba(255,255,255,0.8)",
          borderRadius: "50%",
          padding: 8,
          boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
          cursor: "pointer",
          zIndex: 999,
          transition: "all 0.3s ease",
          touchAction: "manipulation",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#0d7bc4")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#12b5e7")}
        onClick={() => navigate("/services")}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === "Enter") navigate("/services");
        }}
        aria-label="Back to Services"
      />
    </Box>
  );
}
