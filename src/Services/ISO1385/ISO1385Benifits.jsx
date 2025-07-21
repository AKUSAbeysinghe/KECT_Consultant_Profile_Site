import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import {
  FaShieldAlt, FaUsersCog, FaBan, FaGlobeAmericas
} from "react-icons/fa";
import {
  MdVerifiedUser, MdThumbUp, MdAutorenew, MdSpeed,
  MdLocalShipping, MdDescription, MdForum
} from "react-icons/md";

import Logo from '../../assets/ISO13485-Logo.webp';

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const ISO1385Benefits = () => {
  const renderCard = (title, description, IconComponent, number) => (
    <Box
      key={number}
      component={motion.div}
      variants={fadeUpVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      sx={{
        flex: { xs: "1 1 100%", sm: "1 1 45%" },
        maxWidth: { xs: "100%", sm: "45%" },
        boxSizing: "border-box",
        mb: 3,
      }}
    >
      <Box
        component={motion.div}
        whileHover="hover"
        initial="rest"
        animate="rest"
        variants={{ rest: {}, hover: {} }}
        sx={{ position: "relative", width: "100%", height: { xs: "auto", sm: 275 } }}
      >
        <Card
          component={motion.div}
          sx={{
            width: "100%",
            height: "100%",
            position: "relative",
            paddingTop: 4,
            overflow: "hidden",
            boxSizing: "border-box",
          }}
        >
          {/* Blue quarter overlay */}
          <Box
            component={motion.div}
            variants={{
              rest: { width: "60px", height: "60px", top: 0, right: 0 },
              hover: { width: "100%", height: "100%", top: 0, right: 0 },
            }}
            transition={{ duration: 0.5 }}
            sx={{
              position: "absolute",
              backgroundColor: "rgba(25, 118, 210, 0.95)",
              zIndex: 1,
              borderBottomLeftRadius: "80px",
            }}
          />

          <CardContent
            sx={{
              position: "relative",
              zIndex: 2,
              height: "100%",
              color: "inherit",
            }}
          >
            {/* Icon */}
            <Box
              component={motion.div}
              variants={{
                rest: {
                  color: "rgb(25, 118, 210)",
                  backgroundColor: "rgb(185, 228, 248)",
                },
                hover: {
                  color: "#FFD700",
                  backgroundColor: "rgb(4, 19, 145)",
                },
              }}
              transition={{ duration: 0.4 }}
              sx={{
                position: "absolute",
                top: 2,
                left: 20,
                width: 48,
                height: 48,
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.8rem",
                zIndex: 2,
              }}
            >
              <IconComponent />
            </Box>

            {/* Number Badge */}
            <Typography
              component={motion.div}
              variants={{
                rest: {
                  color: "rgb(139, 142, 143)",
                  backgroundColor: "rgb(185, 228, 248)",
                },
                hover: {
                  color: "#FFD700",
                  backgroundColor: "rgb(4, 19, 145)",
                },
              }}
              transition={{ duration: 0.4 }}
              variant="h6"
              sx={{
                position: "absolute",
                top: 5,
                right: 30,
                px: 1,
                py: 0.5,
                borderRadius: "12px",
                fontWeight: "bold",
                fontSize: "0.87rem",
                display: "inline-block",
                minWidth: "28px",
                textAlign: "center",
                zIndex: 2,
              }}
            >
              {number}
            </Typography>

            <br />

            {/* Title */}
            <Typography
              variant="h6"
              component={motion.div}
              variants={{
                rest: { color: "rgb(34, 65, 65)" },
                hover: { color: "#FFFFFF" },
              }}
              transition={{ duration: 0.4 }}
              sx={{ fontWeight: "bold", mt: 5, mb: 0.5 }}
            >
              {title}
            </Typography>

            {/* Description */}
            <motion.div
              variants={{
                rest: { color: "rgba(80, 80, 80, 1)" },
                hover: { color: "#FFFFFF" },
              }}
              transition={{ duration: 0.4 }}
            >
              <Typography variant="body2" sx={{ zIndex: 2 }}>
                {description}
              </Typography>
            </motion.div>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );

  const cards = [
    {
      title: " Regulatory Compliance",
      description: " ISO 13485 helps medical device manufacturers comply with regulatory requirements in different regions, such as the FDA or EMA.",
      IconComponent: MdVerifiedUser,
      number: "01"
    },
    {
      title: "Improved Product Safety and Quality",
      description: " By implementing ISO 13485, manufacturers can establish systematic processes to ensure safety and quality.",
      IconComponent: FaShieldAlt,
      number: "02"
    },
    {
      title: " Enhanced Customer Confidence",
      description: "Provides assurance that devices are produced in a consistent, regulated manner.",
      IconComponent: MdThumbUp,
      number: "03"
    },
    {
      title: " Reduced Risk of Recalls",
      description: "Establishes robust processes to reduce likelihood of defects or recalls.",
      IconComponent: FaBan,
      number: "04"
    },
    {
      title: "Better Risk Management",
      description: "Covers risk management throughout product lifecycle to ensure safety.",
      IconComponent: FaShieldAlt,
      number: "05"
    },
    {
      title: " Continuous Improvement",
      description: "Encourages continuous process monitoring and improvements.",
      IconComponent: MdAutorenew,
      number: "06"
    },
    {
      title: "Improved Operational Efficiency",
      description: "Emphasizes defined processes, documentation, and risk management.",
      IconComponent: MdSpeed,
      number: "07"
    },
    {
      title: "Supply Chain Management",
      description: "Requires control over supply chain for consistent quality.",
      IconComponent: MdLocalShipping,
      number: "08"
    },
    {
      title: "Global Market Access",
      description: "Certification enables entry into international medical markets.",
      IconComponent: FaGlobeAmericas,
      number: "09"
    },
    {
      title: "Clear Documentation and Traceability",
      description: "Ensures all design, development, and manufacturing steps are traceable.",
      IconComponent: MdDescription,
      number: "10"
    },
    {
      title: "Employee Involvement and Accountability",
      description: "Promotes engagement and a culture of quality within teams.",
      IconComponent: FaUsersCog,
      number: "11"
    },
    {
      title: "Improved Internal Communication",
      description: "Boosts coordination across design, production, and compliance teams.",
      IconComponent: MdForum,
      number: "12"
    }
  ];

  return (
    <div
      className="w-full"
      style={{
        backgroundColor: "#F0F3FA",
        margin: 0,
        padding: 0,
        minHeight: "100vh",
        boxSizing: "border-box"
      }}
    >
      <div
        className="py-16 max-w-5xl mx-auto text-left"
        style={{ paddingLeft: "20px", paddingRight: "20px" }}
      >
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 3,
              color: "rgb(14, 43, 68)",
              mt: 8,
              textAlign: "center"
            }}
          >
            Rewards You Will Get After ISO 13485:2016 <br />
            Certification
          </Typography>
          <hr
            style={{
              width: "15%",
              height: "4px",
              backgroundColor: "rgb(19, 30, 182)",
              border: "none",
              margin: "20px auto",
              marginBottom: "50px"
            }}
          />
        </motion.div>

        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.img
            src={Logo}
            alt="ISO 13485 Logo"
            style={{
              display: "block",
              margin: "0 auto",
              maxWidth: "300px",
              height: "auto",
              borderRadius: "200px"
            }}
            whileHover={{
              opacity: 1,
              scale: 1.05
            }}
            initial={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              duration: 0.8
            }}
          />
          <br />
          <p
            className="mt-4 font-[Helvetica] text-center"
            style={{ fontSize: "1.2rem", color: "#5A5A5A" }}
          >
            Empower your medical device business with <br />
            ISO 13485:2016 — ensuring safety, quality, and regulatory confidence
            at every stage of the product lifecycle.
          </p>
          <br />
        </motion.div>

        {[0, 1, 2, 3, 4, 5].map((rowIndex) => (
          <Box
            key={rowIndex}
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 5,
              flexWrap: "wrap",
              gap: "50px"
            }}
          >
            {cards
              .slice(rowIndex * 2, rowIndex * 2 + 2)
              .map(({ title, description, IconComponent, number }) =>
                renderCard(title, description, IconComponent, number)
              )}
          </Box>
        ))}
      </div>
    </div>
  );
};

export default ISO1385Benefits;
