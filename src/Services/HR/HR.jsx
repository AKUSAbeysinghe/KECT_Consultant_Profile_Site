import React from "react";
import Typography from "@mui/material/Typography";
import { Box, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import {
  MdBarChart,
  MdAttachMoney,
  MdMood,
  MdAssessment,
  MdGavel,
  MdSchool,
} from "react-icons/md";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const benefits = [
  {
    title: "Managing performance",
    description: "Monitor employee output and enhance productivity.",
    icon: MdBarChart,
    number: "01",
  },
  {
    title: "Being cost effective",
    description: "Optimize workforce-related spending and maximize ROI.",
    icon: MdAttachMoney,
    number: "02",
  },
  {
    title: "Ensuring employee satisfaction",
    description: "Promote positive work culture and improve retention.",
    icon: MdMood,
    number: "03",
  },
  {
    title: "Assessing expertise",
    description: "Identify skills gaps and align talent with roles.",
    icon: MdAssessment,
    number: "04",
  },
  {
    title: "Managing risks & meeting compliance obligations",
    description: "Ensure legal compliance and minimize HR-related risks.",
    icon: MdGavel,
    number: "05",
  },
  {
    title: "Developing career training",
    description: "Invest in employee growth through training programs.",
    icon: MdSchool,
    number: "06",
  },
];

export default function HR() {
  return (
    <div className="w-full bg-gray-100 py-16 px-4">
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: "bold",
          color: "#003B73",
          fontFamily: "Arial",
          fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2rem" },
        }}
      >
        Our highly experienced HR Professionals focus on your HR workload while you focus on your business.
      </Typography>

      <Typography
        variant="body1"
        align="center"
        sx={{
          mt: 3,
          color: "#555",
          fontFamily: "Helvetica",
          maxWidth: "900px",
          mx: "auto",
          fontSize: { xs: "0.95rem", sm: "1rem" },
        }}
      >
        We believe that achieving workforce excellence should be the ultimate goal of Human Resource (HR) regardless of size, industry segment, or geography. We assist you to achieve goals and make assessment criteria, schedule interview & reviews, record change in salary, position, skills and training etc.  

      </Typography>

      <Typography
        variant="h5"
        align="center"
        sx={{
          mt: 5,
          mb: 4,
          fontWeight: "bold",
          color: "#003B73",
          fontSize: { xs: "1.5rem", sm: "2rem", md: "3.5rem" },
        }}
      >
        Benefits of Human Resources
      </Typography>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-2">
        {benefits.map(({ title, description, icon: IconComponent, number }, index) => (
          <motion.div
            key={index}
            variants={fadeUpVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <Box
              sx={{
                position: "relative",
                height: "100%",
                borderRadius: "20px",
                backgroundColor: "#fff",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                transition: "background-color 0.5s ease",
                cursor: "pointer",
                padding: "20px",
                "&:hover": {
                  backgroundColor: "#1976d2",
                  color: "#fff",
                },
                "&:before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: 60,
                  height: 60,
                  backgroundColor: "#1976d2",
                  borderBottomLeftRadius: "100%",
                  transition: "all 0.5s ease-in-out",
                  zIndex: 1,
                },
                "&:hover:before": {
                  width: "100%",
                  height: "100%",
                  borderRadius: "20px",
                },
                "& > *": {
                  position: "relative",
                  zIndex: 2,
                  transition: "color 0.5s ease",
                },
                "&:hover .card-title, &:hover .card-number, &:hover .card-description": {
                  color: "#fff",
                },
                "& .icon-container": {
                  position: "absolute",
                  top: 8,
                  left: 20,
                  width: 40,
                  height: 40,
                  borderRadius: "10px",
                  backgroundColor: "rgba(255,255,255,0.6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#1976d2",
                  fontSize: "1.6rem",
                  transition: "all 0.5s ease",
                  zIndex: 3,
                },
                "&:hover .icon-container": {
                  backgroundColor: "transparent",
                  color: "gold",
                },
                "& .card-number": {
                  position: "absolute",
                  top: 8,
                  right: 20,
                  backgroundColor: "rgba(255,255,255,0.6)",
                  color: "#1976d2",
                  padding: "2px 8px",
                  borderRadius: "10px",
                  fontWeight: "bold",
                  fontSize: "0.8rem",
                  zIndex: 3,
                  transition: "all 0.5s ease",
                },
                "&:hover .card-number": {
                  backgroundColor: "transparent",
                  color: "gold",
                },
              }}
            >
              <CardContent sx={{ pt: 6 }}>
                <Box className="icon-container">
                  <IconComponent />
                </Box>
                <Typography className="card-number">{number}</Typography>
                <Typography variant="subtitle1" className="card-title" sx={{ fontWeight: 600, mt: 4, mb: 1 }}>
                  {title}
                </Typography>
                <Typography
                  variant="body2"
                  className="card-description"
                  sx={{ fontSize: "0.85rem", color: "#555" }}
                >
                  {description}
                </Typography>
              </CardContent>
            </Box>
          </motion.div>
        ))}
      </div>
    </div>
  );
}