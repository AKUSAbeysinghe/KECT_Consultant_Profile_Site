import React, { useState, useRef } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import FSSC22000 from "./FSSC22000/FSSC22000.jsx";
import { useNavigate } from "react-router-dom";
import { BiFirstPage } from "react-icons/bi";
import bgImage from "../assets/22000bgI.webp";
import { useTheme, useMediaQuery } from "@mui/material";

export default function FSSC22000Main() {
  const [arrowColor, setArrowColor] = useState("#fff");
  const isoRef = useRef(null);
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const headingFontSize = isMobile ? "1.6rem" : "2.5rem";
  const subHeadingFontSize = isMobile ? "0.9rem" : "1.1rem";
  const centerTopMargin = isMobile ? "100px" : "150px";
  const subHeadingTopMargin = isMobile ? "25px" : "40px";
  const subHeadingBottomMargin = isMobile ? "30px" : "60px";
  const centerWidth = isMobile ? "90vw" : "700px";

  const handleArrowClick = () => {
    isoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero Section with Animated Background */}
      <div
        style={{
          position: 'relative',
          height: '100vh',
          width: '100vw',
          overflow: "hidden",
          color: '#fff',
        }}
      >
        {/* Animated Background */}
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
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: 1,
          }}
        />

        {/* Dark Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 2,
          }}
        />

        {/* Top Label */}
        <Typography
          variant="subtitle2"
          gutterBottom
          sx={{
            position: 'absolute',
            top: isMobile ? "20px" : "30px",
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize:{ xs: "1rem", sm: "1.15rem", md: "1.25rem" },
            color: "rgb(9, 42, 71)",
            backgroundColor: "rgb(207, 223, 238)",
            padding: isMobile ? "4px 10px" : "6px 12px",
            borderRadius: "20px",
            zIndex: 10,
          }}
        >
          FSSC 22000
        </Typography>

        {/* Center Headings */}
        <div
          style={{
            position: 'absolute',
            top: isMobile ? "40%" : isTablet ? "38%" : "35%",
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            zIndex: 10,
            width: centerWidth,
            padding: isMobile ? "0 10px" : "initial",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "#FFFFFF",
              textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
              marginTop: centerTopMargin,
              fontSize: headingFontSize,
              lineHeight: 1.2,
            }}
          >
            Food Safety System Certification
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "rgba(247, 247, 247, 0.9)",
              marginTop: subHeadingTopMargin,
              marginBottom: subHeadingBottomMargin,
              fontSize: subHeadingFontSize,
              maxWidth: "700px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Drive food safety and quality with FSSC 22000 — the comprehensive
            certification that strengthens risk management and builds consumer
            confidence worldwide.
          </Typography>
        </div>

        {/* Scroll Down Arrow */}
        <IoIosArrowDropdown
          size={60}
          style={{
            position: 'absolute',
            bottom: isMobile ? "15px" : "20px",
            left: '50%',
            transform: 'translateX(-50%)',
            color: arrowColor,
            zIndex: 10,
            cursor: "pointer",
            transition: "color 0.3s ease"
          }}
          onMouseEnter={() => setArrowColor("rgb(18, 181, 231)")}
          onMouseLeave={() => setArrowColor("#fff")}
          onClick={handleArrowClick}
        />
      </div>

      {/* ISO Section */}
      <div ref={isoRef} style={{ marginTop: "80px" }}>
        <FSSC22000 />
      </div>

      {/* Back to Services Icon */}
      <BiFirstPage
        size={45}
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '20px',
          color: '#12b5e7',
          backgroundColor: 'rgba(255,255,255,0.8)',
          borderRadius: '50%',
          padding: '8px',
          boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
          cursor: 'pointer',
          zIndex: 999,
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#0d7bc4')}
        onMouseLeave={(e) => (e.currentTarget.style.color = '#12b5e7')}
        onClick={() => navigate("/services")}
      />
    </div>
  );
}
