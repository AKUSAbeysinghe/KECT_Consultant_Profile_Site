import React from "react";
import Typography from "@mui/material/Typography";
import { Box, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import {
  MdChecklist,
  MdSettings,
  MdFeedback,
  MdAssessment,
  MdTrendingUp,
} from "react-icons/md";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const reviewMeetingBenefits = [
  {
    title: "Evaluate the systems",
    description: "An opportunity to evaluate the systems in place.",
    icon: MdChecklist,
    number: "01",
  },
  {
    title: "Ensure correct systems",
    description: "Ensuring systems are correctly implemented and maintained.",
    icon: MdSettings,
    number: "02",
  },
  {
    title: "Review operational feedback",
    description: "Gather and review feedback from operations for continuous improvement.",
    icon: MdFeedback,
    number: "03",
  },
  {
    title: "Assess management effectiveness",
    description: "Evaluate how effective management processes are.",
    icon: MdAssessment,
    number: "04",
  },
  {
    title: "Track improvements & actions",
    description: "Make improvements and track corrective actions to ensure progress.",
    icon: MdTrendingUp,
    number: "05",
  },
];

export default function ManagementReviewBenefits() {
  return (
    <div className="w-full bg-gray-100 py-16 px-4">
      {/* What is a Management Review Meeting? */}
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
        What is a Management Review Meeting?
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
        Management Review Meeting is the routine evaluation of whether management systems are performing as expected. It has to produce the desired result as efficiently as possible.
      </Typography>

      {/* Benefits */}
      <Typography
        variant="h4"
        align="center"
        sx={{
          mt: 8,
          fontWeight: "bold",
          color: "#003B73",
          fontFamily: "Arial",
         fontSize: { xs: "1.5rem", sm: "2rem", md: "3.5rem" },
        }}
      >
        Benefits of Conducting Management Review Meetings
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
        Management review meetings are crucial to ensure your organization’s processes are effective, compliant, and continuously improving.
      </Typography>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto px-2 mt-8">
        {reviewMeetingBenefits.map(({ title, description, icon: IconComponent, number }, index) => (
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
                <Typography variant="body2" className="card-description" sx={{ fontSize: "0.85rem", color: "#555" }}>
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
