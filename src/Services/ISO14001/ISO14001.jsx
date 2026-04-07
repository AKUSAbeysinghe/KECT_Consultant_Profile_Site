import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { FcGlobe } from "react-icons/fc";
import { motion } from "framer-motion";
import { FiTruck } from "react-icons/fi";
import { GiChemicalDrop, GiFactory } from "react-icons/gi";
import { RiToolsLine } from "react-icons/ri";
import { MdMedicalServices, MdMiscellaneousServices } from "react-icons/md";
import { HiCube } from "react-icons/hi";
import { FaBuilding, FaExchangeAlt } from "react-icons/fa";
import ISO14001Benefits from "./ISO14001Benifits.jsx";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const fadeUpDownVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const commonIconStyle = {
  marginRight: "8px",
  fontSize: "1.5rem"
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
        ISO 14001:2015 is internationally recognized as the leading standard for environmental management systems (EMS). Certification helps organizations comply with regulations, improve sustainability, and unlock new business opportunities worldwide.
        <br />
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function ISO14001() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
            Who Needs EMS ?
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
                No matter the size or sector, if your organization is committed to reducing its environmental impact and promoting sustainable practices, ISO 14001 certification is essential. It provides a structured framework to manage environmental responsibilities, comply with legal requirements, and continuously improve environmental performance.
                <Box component="div" sx={{ mt: 3 }}>
                  ISO 14001 is expected by regulators, customers, and business partners who value environmental stewardship and sustainability. The standard helps your organization demonstrate commitment to protecting the environment while enhancing operational efficiency and stakeholder confidence.
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
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <FaBuilding
                        style={{
                          ...commonIconStyle,
                          color: "rgb(16, 162, 199)"
                        }}
                      />
                      <span>Corporate Organizations</span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center" }}>
                      <MdMiscellaneousServices
                        style={{
                          ...commonIconStyle,
                          color: "rgb(16, 185, 207)"
                        }}
                      />
                      <span>Service Providers</span>
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
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <GiFactory
                        style={{
                          ...commonIconStyle,
                          color: "rgb(19, 142, 199)"
                        }}
                      />
                      <span>Manufacturing Industries</span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center" }}>
                      <FaExchangeAlt
                        style={{
                          ...commonIconStyle,
                          color: "rgb(19, 142, 199)"
                        }}
                      />
                      <span>Trading Companies</span>
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

      <ISO14001Benefits />
    </>
  );
}
