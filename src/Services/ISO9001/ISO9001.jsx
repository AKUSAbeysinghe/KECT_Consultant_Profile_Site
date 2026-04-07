import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { FcGlobe } from "react-icons/fc";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { FaIndustry } from "react-icons/fa";
import { LuBuilding2 } from "react-icons/lu";
import { motion } from "framer-motion";

import ISO9001Benefits from "./ISO9001Benefits.jsx"; 

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
          marginBottom: "4"
        }}
      >
        Global Recognition
      </Typography>
      
      <Typography variant="body2" sx={{ color: "rgb(138, 170, 197)" }}>
        ISO 9001:2015 is recognized and trusted by businesses worldwide,
        opening doors to international markets and partnerships.
        <br />
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function ISO9001() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
            Who Needs QMS?
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
              flexDirection: isMobile ? "column" : "row",
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
                width: isMobile ? "100%" : "48%"
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
                It is immaterial that your business is in any scale, <br />
                if you want to enter local or international markets then you
                need ISO certificates that are accepted worldwide.
                <Box component="div" sx={{ mt: 3 }}>
                  Vendors and consumers ensure quality before <br />
                  making investments in your product. The ISO 9001:2015
                  certification truly <br />
                  helps to expand your business globally with legal procedures
                  and <br />
                  with a good reputation.
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
                      <LuBuilding2
                        style={{
                          marginRight: "8px",
                          color: "rgb(16, 162, 199)"
                        }}
                      />
                      <span>Small Businesses</span>
                    </div>

                    <div
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <FaIndustry
                        style={{
                          marginRight: "8px",
                          color: "rgb(16, 185, 207)"
                        }}
                      />
                      <span>Manufacturing</span>
                    </div>
                  </div>

                  <div
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <HiOutlineOfficeBuilding
                      style={{
                        marginRight: "8px",
                        color: "rgb(19, 142, 199)"
                      }}
                    />
                    <span>Service Providers</span>
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
                width: isMobile ? "100%" : "35%"
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

      <ISO9001Benefits />
    </>
  );
}
