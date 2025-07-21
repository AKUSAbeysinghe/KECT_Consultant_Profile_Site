import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import ISO18404 from "./ISO18404/ISO18404.jsx";
import { useNavigate } from "react-router-dom";
import { BiFirstPage } from "react-icons/bi";
import bgImage from '../assets/18404bgI.webp';

export default function ISO184049Main() {
  const [arrowColor, setArrowColor] = useState("#fff");
  const isoRef = useRef(null);
  const navigate = useNavigate();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 600;
  const isTablet = windowWidth > 600 && windowWidth <= 900;

  const topLabelStyle = {
    position: "absolute",
    top: isMobile ? "15px" : "30px",
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: isMobile ? "0.7rem" : "0.9rem",
    color: "rgb(9, 42, 71)",
    textAlign: "center",
    backgroundColor: "rgb(207, 223, 238)",
    display: "inline-block",
    padding: isMobile ? "4px 8px" : "6px 12px",
    borderRadius: "20px",
    zIndex: 10,
  };

  const centerContentStyle = {
    position: "absolute",
    top: isMobile ? "40%" : isTablet ? "38%" : "35%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    zIndex: 10,
    padding: isMobile ? "0 10px" : "initial",
    width: isMobile ? "90%" : "auto",
  };

  const h3Style = {
    fontWeight: "bold",
    color: "#FFFFFF",
    textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
    marginTop: isMobile ? "80px" : isTablet ? "120px" : "150px",
    fontSize: isMobile ? "1.8rem" : isTablet ? "2.2rem" : "2.3rem",
    lineHeight: 1.2,
  };

  const spanStyle = {
    color: "rgb(76, 185, 228)",
    fontSize: isMobile ? "1.5rem" : isTablet ? "1.8rem" : "2.4rem",
  };

  const h6Style = {
    textAlign: "center",
    color: "rgb(212, 212, 218)",
    marginTop: isMobile ? "30px" : "40px",
    marginBottom: isMobile ? "30px" : "60px",
    fontSize: isMobile ? "0.85rem" : "1.3rem",
  };

  const arrowStyle = {
    position: "absolute",
    bottom: isMobile ? "10px" : "20px",
    left: "50%",
    transform: "translateX(-50%)",
    color: arrowColor,
    zIndex: 10,
    cursor: "pointer",
    transition: "color 0.3s ease",
  };

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
              ...topLabelStyle,
            fontSize: {
            xs: "1rem",     // mobile
            sm: "1.15rem",  // small screens (tablets)
            md: "1.25rem",  // medium and up (laptops/desktops)
          },
        }}
      >
        ISO 18404 : 2015
      </Typography>

        {/* Center content */}
        <div style={centerContentStyle}>
          <Typography variant="h2" component="h2" sx={h3Style}>
            Lean Six Sigma
            <br />
            <span style={spanStyle}></span>
          </Typography>

          <br />

          <Typography variant="h6" component="h2" sx={h6Style}>
            Achieve operational excellence with ISO 18404:2015 — the global standard for Lean Six Sigma competencies and consistent, measurable results.
          </Typography>
        </div>

        {/* Bottom arrow */}
        <IoIosArrowDropdown
          size={60}
          style={arrowStyle}
          onMouseEnter={() => setArrowColor("rgb(18, 181, 231)")}
          onMouseLeave={() => setArrowColor("#fff")}
          onClick={handleArrowClick}
        />
      </div>

      {/* Link to the ISO18404 section */}
      <div ref={isoRef} style={{ marginTop: "80px" }}>
        <ISO18404 />
      </div>

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
