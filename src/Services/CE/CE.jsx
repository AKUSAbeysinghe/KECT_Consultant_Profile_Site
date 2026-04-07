import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { FcGlobe } from "react-icons/fc";
import { motion } from "framer-motion";
import CEBenefits from "./CEBenefits.jsx";
import { 
  FaShieldAlt, 
  FaGlobe, 
  FaUserCheck, 
  FaCubes, 
  FaClipboardCheck, 
  FaInfoCircle 
} from "react-icons/fa";

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
      <Typography variant="h5" sx={{ fontWeight: "bold", color: "rgb(14, 43, 68)", mb: 1 }}>
        Global Recognition
      </Typography>
      <Typography variant="body2" sx={{ color: "rgb(138, 170, 197)" }}>
      CE Marking is globally recognized as a key indicator of product compliance with European health, safety, and environmental protection standards. It enables organizations to demonstrate that their products meet essential regulatory requirements — ensuring market access across the European Economic Area (EEA), consumer trust, and legal conformity.
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function CE() {
  return (
    <>
      <Box sx={{ p: { xs: 2, md: 4 } }}>
        <motion.div
          variants={fadeUpDownVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Typography variant="h4" align="center" sx={{ fontWeight: "bold", mb: 3, color: "rgb(14, 43, 68)", mt: 0 }}>
            Key Aspects of CE Marking
          </Typography>
          <hr
            style={{
              width: "15%",
              height: "4px",
              backgroundColor: "rgb(19, 30, 182)",
              border: "none",
              margin: "20px auto 90px"
            }}
          />
        </motion.div>

        <motion.div
          variants={fadeUpDownVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
              alignItems: "flex-start",
              gap: 4
            }}
          >
            <motion.div
              variants={fadeUpDownVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              style={{ flex: 1 }}
            >
              <Typography variant="body1" sx={{ textAlign: "left", color: "rgb(109, 115, 121)" }}>
                <Box mt={3} color="rgb(69, 70, 70)">
                  {[
  { 
    icon: FaShieldAlt, 
    title: "Product Safety", 
    desc: "The CE mark ensures that a product meets the necessary safety standards, ensuring it does not pose a risk to health, safety, or the environment when used as intended." 
  },
  { 
    icon: FaGlobe, 
    title: "Market Access", 
    desc: "Products with the CE mark are allowed to be sold in all countries of the European Union and the European Economic Area." 
  },
  { 
    icon: FaUserCheck, 
    title: "Manufacturer’s Responsibility", 
    desc: "It is the responsibility of the manufacturer to ensure that their product complies with EU regulations and to affix the CE mark to their product." 
  },
  { 
    icon: FaCubes, 
    title: "Scope of CE Marking", 
    desc: "CE marking applies to a wide range of products, including machinery, electrical equipment, medical devices, personal protective equipment, toys, construction products, and more." 
  },
  { 
    icon: FaClipboardCheck, 
    title: "Documentation and Testing", 
    desc: "To obtain CE marking, manufacturers must demonstrate that their product complies with all applicable EU directives and standards." 
  },
  { 
    icon: FaInfoCircle, 
    title: "Not a Quality Mark", 
    desc: "The CE mark does not indicate that the product is of high quality, only that it complies with the required health and safety regulations. It is a legal requirement, not a mark of quality or performance." 
  }
]
.map((item, idx) => (
                    <Box key={idx} display="flex" alignItems="flex-start" mb={2} gap={2}>
                      <Box 
  sx={{ 
    width: "28px", 
    height: "28px", 
    display: "flex", 
    alignItems: "center", 
    justifyContent: "center" 
  }}
>
  <item.icon size={24} className="text-[#10A2C7]" />
</Box>


                      <Box>
                        <Typography sx={{ fontWeight: "bold", color: "rgb(97, 112, 112)" }}>{item.title}</Typography>
                        <Typography>{item.desc}</Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Typography>
            </motion.div>

            <motion.div
              variants={fadeUpDownVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              style={{ flex: 1, maxWidth: { md: "35%" } }}
            >
              <Card variant="outlined" sx={{ width: "80%", display: "flex", flexDirection: "column", mb: 3 }}>
                {card1}
              </Card>
            </motion.div>
          </Box>
        </motion.div>
      </Box>

      <CEBenefits />
    </>
  );
}
