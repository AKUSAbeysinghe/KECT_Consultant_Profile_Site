import React, { useState, useRef } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import ISO22301 from "./ISO22301/ISO22301.jsx";
import { useNavigate } from "react-router-dom";
import { BiFirstPage } from "react-icons/bi";
import bgImage from "../assets/22301bgI.webp";
import { useTheme, useMediaQuery } from "@mui/material";

export default function ISO22301Main() {
  const [arrowColor, setArrowColor] = useState("#fff");
  const isoRef = useRef(null);
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  // Responsive styles
  const arrowBottom = isMobile ? "15px" : "20px";
  const centerWidth = isMobile ? "90vw" : "700px";
  const headingFontSize = isMobile ? "1.6rem" : "2.5rem";
  const subHeadingFontSize = isMobile ? "0.9rem" : "1.1rem";
  const centerTopMargin = isMobile ? "100px" : "150px";
  const subHeadingTopMargin = isMobile ? "25px" : "40px";
  const subHeadingBottomMargin = isMobile ? "30px" : "60px";

  const handleArrowClick = () => {
    isoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div
        style={{
          position: "relative",
          height: "92vh",
          width: "98.9vw",
          overflow: "hidden",
          color: "#fff",
        }}
      >
        {/* Background animation */}
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
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            zIndex: 2,
          }}
        ></div>

        {/* Top label */}
        <Typography
          variant="subtitle2"
          component="h1"
          gutterBottom
          sx={{
            position: "absolute",
            top: isMobile ? "20px" : "30px",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: { xs: "1rem", sm: "1.15rem", md: "1.25rem" },
            color: "rgb(9, 42, 71)",
            textAlign: "center",
            backgroundColor: "rgb(207, 223, 238)",
            padding: isMobile ? "4px 10px" : "6px 12px",
            borderRadius: "20px",
            zIndex: 10,
          }}
        >
          ISO/ DIS 22301 : 2019
        </Typography>

        {/* Center content */}
        <div
          style={{
            position: "absolute",
            top: isMobile ? "40%" : isTablet ? "38%" : "35%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            zIndex: 10,
            width: centerWidth,
            padding: isMobile ? "0 10px" : "initial",
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: "bold",
              color: "#FFFFFF",
              textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
              marginTop: centerTopMargin,
              fontSize: headingFontSize,
              lineHeight: 1.2,
            }}
          >
            Business Continuity Management Systems
          </Typography>

          <Typography
            variant="h6"
            component="h2"
            sx={{
              textAlign: "center",
              color: "rgba(247, 247, 247, 0.9)",
              fontSize: subHeadingFontSize,
              marginTop: subHeadingTopMargin,
              marginBottom: subHeadingBottomMargin,
            }}
          >
            Ensure organizational resilience with ISO/DIS 22301:2019 —
            the global standard that helps businesses prepare for, respond to,
            and recover from disruptive incidents, safeguarding operations and stakeholder confidence.
          </Typography>
        </div>

        {/* Arrow icon */}
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
        />
      </div>

      {/* ISO22301 section */}
      <div ref={isoRef} style={{ marginTop: "80px" }}>
        <ISO22301 />
      </div>

      {/* Back to services button */}
      <BiFirstPage
        size={45}
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          color: "#12b5e7",
          backgroundColor: "rgba(255,255,255,0.8)",
          borderRadius: "50%",
          padding: "8px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
          cursor: "pointer",
          zIndex: 999,
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "#0d7bc4")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#12b5e7")}
        onClick={() => navigate("/all-iso")}
      />
    </div>
  );
}
