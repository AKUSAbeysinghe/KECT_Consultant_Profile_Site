import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { FcGlobe } from "react-icons/fc";
import { motion } from "framer-motion";

import { FiTruck } from "react-icons/fi";
import { GiChemicalDrop } from "react-icons/gi";
import { RiToolsLine } from "react-icons/ri";
import { MdMedicalServices } from "react-icons/md";
import { HiCube } from "react-icons/hi";
import ISO1385Benefits from "./ISO1385Benifits.jsx"; 




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
        ISO 13485:2016 is globally recognized as the benchmark for quality management in the medical device industry. It helps organizations meet regulatory requirements, build trust with customers and authorities, and gain access to international markets and partnerships.
        <br />
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function ISO1385() {
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
           Who Needs ISO 13485 ?
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
             It doesn’t matter what size your organization is — if you are involved in any <br></br>stage of the medical device life cycle, ISO 13485 certification is essential.
From design and development to production, storage, distribution, installation, and servicing, ISO 13485 ensures that your processes meet regulatory and legal requirements across global markets.<br></br>
 <Box component="div" sx={{ mt: 3 }}>Authorities, customers, and business partners expect certified systems to guarantee the safety, quality, and effectiveness of medical devices. <br></br>The ISO 13485:2016 standard helps build trust, demonstrate compliance, and open doors to international opportunities in the highly regulated <br></br>medical device industry.
               
                 
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
                      <MdMedicalServices
                        style={{
                          marginRight: "8px",
                          color: "rgb(16, 162, 199)"
                        }}
                      />
                      <span>Medical Device Manufacturers</span>
                    </div>

                    <div
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <HiCube
                        style={{
                          marginRight: "8px",
                          color: "rgb(16, 185, 207)"
                        }}
                      />
                      <span>Component Suppliers</span>
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
                    <FiTruck
                      style={{
                        marginRight: "8px",
                        color: "rgb(19, 142, 199)"
                      }}
                    />
                    <span>Distributors and Importers</span>
                  </div>

                    <div
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <GiChemicalDrop
                      style={{
                        marginRight: "8px",
                        color: "rgb(19, 142, 199)"
                      }}
                    />
                    <span>Sterilization and Packaging Providers</span>
                  </div>

                   


                  </div>
                   <div
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <RiToolsLine
                        style={{
                          marginRight: "8px",
                          color: "rgb(16, 185, 207)"
                        }}
                      />
                      <span>Installation and Servicing Providers</span>
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
                  height: "350px",
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
  
      <ISO1385Benefits />
      
    </>
  );
}
