import React, { useState, useRef } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import IMS from "./IMS/IMS.jsx"; // Create this component for IMS content
import { useNavigate } from "react-router-dom";
import { BiFirstPage } from "react-icons/bi";
import bgImage from "../assets/IMS.webp"; // Replace with suitable Inventory background image
import fingurGif from "../assets/finger.gif";
import Box from "@mui/material/Box";

export default function IMSMain() {
  const [arrowColor, setArrowColor] = useState("#fff");
  const imsRef = useRef(null);
  const navigate = useNavigate();

  const handleArrowClick = () => {
    imsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* === 1. OUR SERVICES SECTION === */}
      <div style={{ backgroundColor: "#FFFFFF", padding: "0 5%", boxSizing: "border-box" }}>
        <div className="py-2 max-w-7xl mx-auto text-left">
          <Box
            sx={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mt: 6,
              height: "200px",
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
              <Typography variant="h3" sx={{ color: "#003B73", fontFamily: "Arial" }}>
                What we can do for you
              </Typography>
              <Box component="img" src={fingurGif} alt="finger gif" sx={{ width: 50, height: 50 }} />
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
            }}
          >
            Our Inventory Management Consulting Services
          </Typography>

          <Typography
            variant="body1"
            align="center"
            sx={{ color: "#5A5A5A", mt: 3, fontFamily: "Helvetica" }}
          >
            At <b>KECT CONSULTANTS (PVT) LTD</b>, our Inventory Management Services help organizations 
            monitor, control, and streamline inventory-related processes. We assist businesses in reducing wastage, 
            optimizing storage, improving visibility, and meeting customer demands through a well-structured inventory system.
          </Typography>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          />
        </div>
      </div>

      {/* === 2. ANIMATED IMS HERO SECTION === */}
      <div style={{ position: "relative", height: "98vh", width: "100%", overflow: "hidden", color: "#fff" }}>
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.2 }}
          transition={{ duration: 60, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
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
            transformOrigin: "center center",
          }}
        />

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
        />

        <Typography
          variant="subtitle2"
          component="h1"
          gutterBottom
          sx={{
            position: "absolute",
            top: { xs: "1.5vh", md: "30px" },
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: {
              xs: "1.8rem",
              sm: "2.2rem",
              md: "2.8rem",
              lg: "3.4rem",
              xl: "4rem",
            },
            color: "#FFFFFF",
            textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
            textAlign: "center",
            fontWeight: "bold",
            px: 2,
            py: 1,
            borderRadius: "20px",
            zIndex: 10,
          }}
        >
          IMS
        </Typography>

        <div
          style={{
            position: "absolute",
            top: "45%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            zIndex: 8,
            padding: "0 5vw",
            width: "90%",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
              color: "#FFFFFF",
              textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
              fontSize: {
                xs: "1.8rem",
                sm: "2.2rem",
                md: "2.8rem",
                lg: "3.4rem",
                xl: "4rem",
              },
              lineHeight: 1.3,
            }}
          >
            Inventory Management Services
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mt: { xs: 2, sm: 3, md: 4 },
              color: "#FFFFFF",
              fontSize: {
                xs: "1rem",
                sm: "1.15rem",
                md: "1.3rem",
                lg: "1.5rem",
              },
              lineHeight: 1.6,
            }}
          >
            We support your business with intelligent inventory planning, enabling cost-effective operations, improved order accuracy, and real-time stock insights to avoid overstocking or shortages.
          </Typography>
        </div>

        <IoIosArrowDropdown
          size={50}
          style={{
            position: "absolute",
            bottom: "2vh",
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

      {/* === 3. IMS CONTENT SECTION === */}
      <div ref={imsRef}>
        <IMS />
      </div>

      {/* === Fixed Back Button === */}
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
        onClick={() => navigate("/additional-services")}
      />
    </div>
  );
}
