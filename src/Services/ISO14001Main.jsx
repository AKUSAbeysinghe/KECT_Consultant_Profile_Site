import React, { useState, useRef } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import ISO14001 from "./ISO14001/ISO14001.jsx";
import { useNavigate } from "react-router-dom";
import { BiFirstPage } from "react-icons/bi";
import { useTheme, useMediaQuery } from "@mui/material";
import bgImage from '../assets/14001bgI.webp';

export default function ISO14001Main() {
  const [arrowColor, setArrowColor] = useState("#fff");
  const isoRef = useRef(null);
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

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
      {/* Background section */}
      <div
        style={{
          position: 'relative',
          height: '92vh',
          width: '98.9vw',
          overflow: "hidden",
          color: '#fff',
        }}
      >
        {/* Animated background */}
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 2.05 }}
          transition={{
            duration: 60,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
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

        {/* Overlay */}
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
        ></div>

        {/* ISO tag */}
        <Typography
          variant="subtitle2"
          component="h1"
          gutterBottom
          sx={{
            position: 'absolute',
            top: isMobile ? "20px" : "30px",
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: { xs: "1rem", sm: "1.15rem", md: "1.25rem" },
            color: "rgb(9, 42, 71)",
            textAlign: "center",
            backgroundColor: "rgb(207, 223, 238)",
            padding: isMobile ? "4px 10px" : "6px 12px",
            borderRadius: "20px",
            zIndex: 10,
          }}
        >
          ISO 14001 : 2015
        </Typography>

        {/* Center heading */}
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
            Environment Management System
            <br />
            <span style={{ color: "#FFFFFF" }}>(EMS)</span>
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
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            Empower your organization to minimize environmental impact and drive sustainable business practices with ISO 14001:2015 certification.
          </Typography>
        </div>

        {/* Down arrow */}
        <IoIosArrowDropdown
          size={60}
          style={{
            position: 'absolute',
            bottom: arrowBottom,
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

      {/* ISO Content Section */}
      <motion.div
        ref={isoRef}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <ISO14001 />
      </motion.div>

      {/* Back to Services Button */}
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
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.color = '#0d7bc4'}
        onMouseLeave={(e) => e.currentTarget.style.color = '#12b5e7'}
        onClick={() => navigate("/all-iso")}
      />
    </div>
  );
}
