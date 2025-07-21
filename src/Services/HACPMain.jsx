import React, { useState, useRef } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";
import HACP from "./HACP/HACP.jsx";
import { useNavigate } from "react-router-dom";
import { BiFirstPage } from "react-icons/bi";
import bgImage from "../assets/22000bgI.webp";
import fingurGif from '../assets/finger.gif';
import Box from "@mui/material/Box";



export default function HACPMain() {
  const [arrowColor, setArrowColor] = useState("#fff");
  const isoRef = useRef(null);
const navigate = useNavigate();

  const handleArrowClick = () => {
    isoRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>

      <div
              style={{
                backgroundColor: "#FFFFFF",
                padding: "0 5%",
                boxSizing: "border-box",
              }}
            >
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
      xs: "3rem",   // Extra small devices (phones)
      sm: "5rem",   // Small devices (tablets)
      md: "7rem",   // Medium devices (small laptops)
      lg: "9rem",   // Large devices (desktops)
      xl: "10rem",  // Extra large screens
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
                    <Typography
                      variant="h3"
                      sx={{
                        color: "#003B73",
                        fontFamily: "Arial",
                      }}
                    >
                      What we can do for you
                    </Typography>
      
                    <Box
                      component="img"
                      src={fingurGif}
                      alt="finger gif"
                      sx={{
                        width: 50,
                        height: 50,
                      }}
                    />
                  </Box>
                </Box>
      
                 <Typography
                             variant="h3"
                              fontWeight="bold"
                              align = "center"
                             sx={{
                               color: "black",
                               fontFamily: "Arial",
                             justifyContent: "center",
                               fontSize: { xs: "1.5rem", sm: "2.5rem", md: "3.5rem" },
                
                             }}
                           >
                             Our  HACCP Consulting Services 
                           </Typography>
      
                <Typography
                  variant="body1"
                  align="center"
                  sx={{ color: "#5A5A5A", mt: 3, fontFamily: "Helvetica" }}
                >
                  At <b>KECT CONSULTANTS (PVT) LTD</b>  ,  we specialize in providing expert HACCP (Hazard Analysis and Critical Control Points) consulting services to help organizations in the food industry ensure food safety and regulatory compliance. Our team guides businesses through the development and implementation of HACCP-based systems by identifying hazards, establishing critical control points, and creating effective monitoring and verification procedures—ensuring compliance with international food safety standards and enhancing consumer confidence.
      
      
                </Typography>
      
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                >
                  {/* You can add more animated content here if needed */}
                </motion.div>
              </div>
            </div>

      <div
  style={{
    position: 'relative',
    height: '92vh',
    width: '98.9vw',
    overflow: 'hidden',
    color: '#fff',
  }}
>
  {/* Background */}
  <motion.div
    initial={{ scale: 1 }}
    animate={{ scale: 2.05 }}
    transition={{
      duration: 60,
      repeat: Infinity,
      repeatType: 'reverse',
      ease: 'linear',
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
  />

  {/* Top Label */}
  <Typography
    variant="subtitle2"
    component="h1"
    gutterBottom
    sx={{
      position: 'absolute',
      top: '2vh',
      left: '50%',
      transform: 'translateX(-50%)',
      fontSize: { xs: "1rem", sm: "1.15rem", md: "1.25rem"  },
      color: 'rgb(9, 42, 71)',
      textAlign: 'center',
      backgroundColor: 'rgb(207, 223, 238)',
      px: 2,
      py: 1,
      borderRadius: '20px',
      zIndex: 10,
    }}
  >
    HACCP
  </Typography>

  {/* Center Content */}
  <Box
    sx={{
      position: 'absolute',
      top: '45%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
      zIndex: 10,
      px: 2,
      width: '90%',
    }}
  >
    <Typography
      variant="h3"
      sx={{
        fontWeight: 'bold',
        color: '#FFFFFF',
        textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
        fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem', lg: '2.5rem' },
        lineHeight: 1.2,
      }}
    >
      Hazard Analysis and Critical Control Points
    </Typography>

    <Typography
      variant="body1"
      sx={{
        mt: 4,
        color: 'rgba(247, 247, 247, 0.9)',
        fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
        lineHeight: 1.6,
      }}
    >
      Ensure food safety and protect your customers with HACCP — the internationally recognized system that helps identify, evaluate, and control food safety hazards through a systematic, preventive approach.
    </Typography>
  </Box>

  {/* Down Arrow */}
  <IoIosArrowDropdown
    size={50}
    style={{
      position: 'absolute',
      bottom: '2vh',
      left: '50%',
      transform: 'translateX(-50%)',
      color: arrowColor,
      zIndex: 10,
      cursor: 'pointer',
      transition: 'color 0.3s ease',
    }}
    onMouseEnter={() => setArrowColor('rgb(18, 181, 231)')}
    onMouseLeave={() => setArrowColor('#fff')}
    onClick={handleArrowClick}
  />
</div>

 {/* Link to the ISO*/}
      <div ref={isoRef}>
        <HACP />
      </div>
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
  onClick={() => navigate("/services")}
/>


    </div>
  );
}
