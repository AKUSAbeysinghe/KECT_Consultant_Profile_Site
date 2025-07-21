import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { FcGlobe } from "react-icons/fc";
import { motion } from "framer-motion";
import ISO15378Benefits from "./ISO15378Benefits.jsx"; 
import { FaFlask, FaHospital, FaMicroscope } from "react-icons/fa";
import { FaCogs } from "react-icons/fa";
import { MdDesignServices, MdFactory } from "react-icons/md";
import { FaPrescriptionBottle } from "react-icons/fa";





const fadeUpDownVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const card1 = (
  <React.Fragment>
    <CardContent sx={{ px: 3, pt: 2, pb: 1 }}>
         <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
    style={{ display: "inline-block" }}
  >
    <FcGlobe style={{ fontSize: "90px", marginBottom: 5 }} />
  </motion.div>
</Box>
      <Typography
        variant="h5"
        component="div"
        sx={{
          fontWeight: "bold",
          color: "rgb(14, 43, 68)",
          marginBottom: "5"
        }}
      >
        Global Recognition
      </Typography>
      
      <Typography variant="body2" sx={{ color: "rgb(138, 170, 197)" }}>
        ISO 15378:2017 is globally recognized for quality management of primary packaging in pharmaceuticals. Certification proves your commitment to safe, high-quality packaging that meets regulatory standards and boosts your market position.


        <br />
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function ISO15378() {
  return (
    <>
      <Box sx={{ p: { xs: 2, md: 4 } }}>
        <motion.div
          variants={fadeUpDownVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Typography
            variant="h4"
            align="center"
            sx={{
              fontWeight: "bold",
              mb: 3,
              color: "rgb(14, 43, 68)",
              mt: 0
            }}
          >
           Who Needs 15378  ?
          </Typography>
          <hr
            style={{
              width: "15%",
              height: "4px",
              backgroundColor: "rgb(19, 30, 182)",
              border: "none",
              margin: "20px auto",
              marginBottom: "90px"
            }}
          />
        </motion.div>

        <motion.div
          variants={fadeUpDownVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: window.innerWidth < 900 ? "column" : "row",
              justifyContent: "center",
              alignItems: "flex-start",
              gap: "32px"
            }}
          >
            <motion.div
              variants={fadeUpDownVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              style={{
                width: window.innerWidth < 900 ? "100%" : "48%"
              }}
            >
              <Typography
                variant="body1"
                paragraph
                sx={{
                  textAlign: "left",
                  width: "100%",
                  color: "rgb(108, 120, 133)"
                }}
              >
          No matter the size or type, if your organization manufactures primary packaging materials for medicinal products, ISO 15378 certification is essential. The standard provides a structured framework that combines ISO 9001:2015 quality management principles with Good Manufacturing Practice (GMP) requirements — helping you ensure the highest levels of quality, safety, and regulatory compliance.
 <Box component="div" sx={{ mt: 3 }}>ISO 15378:2017 enables packaging manufacturers to meet stringent regulatory requirements, minimize contamination risks, and deliver packaging that protects product integrity — building trust with pharmaceutical companies, healthcare providers, and regulators worldwide.
               
                 
                </Box>
                <br />
                <div
                  style={{
                    marginTop: "24px",
                    color: "rgb(69, 70, 70)"
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "8px",
                      gap: "24px"
                    }}
                  >
                    <div
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <FaPrescriptionBottle 
                        style={{
                          marginRight: "8px",
                          color: "rgb(16, 162, 199)"
                        }}
                      />
                      <span> Manufacturers of glass, plastic, rubber, aluminum, and other primary packaging materials</span>
                    </div>

                    
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "8px",
                      gap: "24px"
                    }}
                  >
                  <div
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <FaCogs
                      style={{
                        marginRight: "8px",
                        color: "rgb(19, 142, 199)"
                      }}
                    />
                    <span>Suppliers of closures, caps, stoppers, and blisters for medicinal products</span>
                  </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "8px",
                      gap: "24px"
                    }}
                  >
                    <div
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <MdDesignServices
                        style={{
                          marginRight: "8px",
                          color: "rgb(16, 162, 199)"
                        }}
                      />
                      <span> Pharmaceutical packaging converters (custom design and printing)</span>
                    </div>       
                  </div>

                   <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "8px",
                      gap: "24px"
                    }}
                  >
                    <div
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <MdFactory
                        style={{
                          marginRight: "8px",
                          color: "rgb(16, 162, 199)"
                        }}
                      />
                      <span> Contract manufacturers of sterile or non-sterile primary packaging components</span>
                    </div>          
                  </div>
                   
                </div>
              </Typography>
            </motion.div>

            <motion.div
              variants={fadeUpDownVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              style={{
                width: window.innerWidth < 900 ? "100%" : "35%"
              }}
            >
              <Card
                variant="outlined"
                sx={{
                  width: "100%",
                  height: "300px",
                  display: "flex",
                  flexDirection: "column",
                  p: 0,
                  mb: 3
                }}
              >
                {card1}
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </Box>
  
      <ISO15378Benefits />
      
    </>
  );
}
